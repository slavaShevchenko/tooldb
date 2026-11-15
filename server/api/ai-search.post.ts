import toolsDataJson from '../../public/ai-search-data.json'

interface ToolInfo {
  name: string
  slug: string
  description: string
  overview?: string
}

interface ExtractedKeywords {
  keywords: string[]
  categories: string[]
  intent: string
}

// Данные зашиваются в бандл функции на этапе сборки:
// на Vercel public/ недоступен в файловой системе, поэтому импорт, а не readFileSync
const toolsData = toolsDataJson as ToolInfo[]

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = 'qwen/qwen3.8-27b'

// Общие слова, которые есть почти в каждом описании и только засоряют scoring
const STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'this', 'user', 'users',
  'looking', 'wants', 'need', 'needs', 'tool', 'tools',
  'software', 'app', 'apps', 'application', 'applications',
  'search', 'find', 'best', 'online', 'free', 'platform', 'service',
  'is', 'are', 'was', 'were', 'be', 'to', 'or', 'in', 'on', 'at',
  'of', 'an', 'as', 'by', 'it', 'its', 'you', 'your', 'their',
  'them', 'they', 'can', 'how', 'what', 'both', 'all', 'any',
])

// Короткие, но осмысленные термины, которые нельзя выкидывать по длине
const SHORT_TERMS = new Set(['ai', 'js', 'ts', 'ui', 'ux', '3d', 'ar', 'vr', 'ml'])

// Кэш ответов: только в проде, в dev не мешает экспериментам с промптами
const CACHE_TTL_MS = 24 * 60 * 60 * 1000
const CACHE_MAX_ENTRIES = 500
const searchCache = new Map<string, { slugs: string[], expiresAt: number }>()

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const buildMatcher = (term: string) =>
  new RegExp(`(?<![a-z0-9])${escapeRegExp(term)}(?![a-z0-9])`)

const isUsefulTerm = (term: string) =>
  (term.length >= 3 || SHORT_TERMS.has(term)) && !STOP_WORDS.has(term)

function getCachedSlugs(key: string): string[] | null {
  if (import.meta.dev) return null
  const cached = searchCache.get(key)
  if (!cached) return null
  if (cached.expiresAt <= Date.now()) {
    searchCache.delete(key)
    return null
  }
  return cached.slugs
}

function rememberResult(key: string, slugs: string[]) {
  if (import.meta.dev) return
  if (searchCache.size >= CACHE_MAX_ENTRIES) {
    const oldestKey = searchCache.keys().next().value
    if (oldestKey !== undefined) {
      searchCache.delete(oldestKey)
    }
  }
  searchCache.set(key, { slugs, expiresAt: Date.now() + CACHE_TTL_MS })
}

async function callGroq(apiKey: string, prompt: string, maxTokens: number) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'user', content: prompt },
        ],
        response_format: { type: 'json_object' },
        // qwen3.8-27b — reasoning-модель: без отключения "думания"
        // оно съедает лимит токенов, и content приходит пустым/обрезанным
        reasoning_effort: 'none',
        temperature: 0.2,
        // Groq ДО генерации сверяет запрошенные токены с лимитом OTPM
        // (1000/мин) — держим запрос ниже него
        max_completion_tokens: maxTokens,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()

      // 429 из-за поминутного лимита — одна повторная попытка.
      // "expected output exceed" = запрошено больше самого лимита, ретрай бесполезен
      const isTransient429 = response.status === 429 && !errorText.includes('expected output')
      if (isTransient429 && attempt === 0) {
        const retryAfter = Number(response.headers.get('retry-after'))
        const delayMs = Math.min(
          Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 2000,
          5000
        )
        await new Promise(resolve => setTimeout(resolve, delayMs))
        continue
      }

      throw new Error(`Groq API returned ${response.status}`)
    }

    const data = await response.json()
    const content: string | undefined = data.choices?.[0]?.message?.content

    return content || null
  }

  throw new Error('Groq API retry exhausted')
}

function parseJsonSafe<T>(content: string): T | null {
  try {
    return JSON.parse(content) as T
  } catch {
    return null
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const query = body?.query?.trim()

  if (!query || typeof query !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Query is required',
    })
  }

  const config = useRuntimeConfig()
  const apiKey = config.groqApiKey

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      message: 'AI search is not configured',
    })
  }

  const cacheKey = query.toLowerCase().replace(/\s+/g, ' ')
  const cachedSlugs = getCachedSlugs(cacheKey)
  if (cachedSlugs) {
    return { slugs: cachedSlugs }
  }

  // ЭТАП 1: Извлекаем ключевые слова из запроса пользователя
  const extractKeywordsPrompt = `You are a search query analyzer for a software tools directory. Your task is to extract keywords from user queries in ANY language and translate them to English.

INPUT QUERY: "${query}"

TASK:
1. Detect the language of the query
2. Translate ALL words to English if the query is not in English
3. Extract 8-12 relevant keywords for software tool search, including:
   - Direct translations of key terms
   - Related software categories (e.g., "accounting", "project management", "video editing")
   - Use cases and features (e.g., "invoice", "collaboration", "rendering")
   - Target audience (e.g., "developer", "designer", "marketer")
   - Synonyms and related terms
4. If the query is about learning a skill (e.g., "learn to draw"), extract keywords for the SOFTWARE used for that skill, not for courses or tutorials

EXAMPLES:
- "веб разработка" → keywords: ["web development", "website builder", "frontend", "coding", "programming", "developer tools", "HTML", "CSS", "JavaScript", "web design"]
- "бухгалтерский учет" → keywords: ["accounting", "bookkeeping", "invoice", "finance", "tax", "payroll", "expense tracking", "financial reporting", "QuickBooks", "Xero"]
- "работа с музыкой" → keywords: ["music production", "audio editing", "DAW", "sound design", "recording", "mixing", "mastering", "music software", "audio workstation", "beat making"]
- "инструменты для работы веб разработчика" → keywords: ["web development", "developer tools", "code editor", "IDE", "frontend", "backend", "programming", "framework", "API", "debugging", "version control", "deployment"]

OUTPUT FORMAT (JSON only):
{
  "keywords": ["english keyword 1", "english keyword 2", ...],
  "categories": ["software category 1", ...],
  "intent": "One sentence description in English of what the user is looking for"
}

IMPORTANT: Return ONLY valid JSON. All keywords and categories MUST be in English.`

  let extractedData: ExtractedKeywords | null = null

  try {
    // 600 < OTPM 1000, реальный JSON занимает ~150-250 токенов
    const content = await callGroq(apiKey, extractKeywordsPrompt, 600)
    if (content) {
      extractedData = parseJsonSafe<ExtractedKeywords>(content)
    }
  } catch {
    // Fallback ниже
  }

  if (!extractedData) {
    // Fallback: простые ключевые слова из запроса
    extractedData = {
      keywords: query.split(/\s+/).filter(w => w.length > 2),
      categories: [],
      intent: query,
    }
  }

  const keywords = Array.isArray(extractedData.keywords) ? extractedData.keywords : []
  const categories = Array.isArray(extractedData.categories) ? extractedData.categories : []
  const intent = typeof extractedData.intent === 'string' ? extractedData.intent : ''

  // ЭТАП 2: Фильтруем инструменты по ключевым словам на сервере с scoring
  // intent НЕ участвует в отборе — его служебные слова ("is", "to", "or")
  // матчили почти каждое описание. intent уходит только в LLM-ранжирование.
  const primaryTerms = new Set<string>()
  for (const term of [...keywords, ...categories]) {
    if (typeof term !== 'string') continue
    const lower = term.toLowerCase().trim()
    if (lower && isUsefulTerm(lower)) {
      primaryTerms.add(lower)
    }
  }

  // Отдельные слова из фраз — слабый сигнал (вес 1),
  // чтобы "web" из "web development" не перебивал полноценные совпадения
  const derivedTerms = new Set<string>()
  for (const term of primaryTerms) {
    for (const word of term.split(/\s+/)) {
      if (isUsefulTerm(word) && !primaryTerms.has(word)) {
        derivedTerms.add(word)
      }
    }
  }

  // Матчим по границам слов, а не по подстроке:
  // иначе 'ide' находится внутри 'video', а 'api' — внутри 'rapid'
  const primaryMatchers = [...primaryTerms].map(buildMatcher)
  const derivedMatchers = [...derivedTerms].map(buildMatcher)

  const scoredTools = toolsData.map(tool => {
    const name = tool.name.toLowerCase()
    const description = tool.description.toLowerCase()
    const overview = (tool.overview || '').toLowerCase()

    let score = 0

    for (const matcher of primaryMatchers) {
      if (matcher.test(name) || matcher.test(description)) {
        score += 3
      } else if (matcher.test(overview)) {
        score += 1
      }
    }

    for (const matcher of derivedMatchers) {
      if (matcher.test(name) || matcher.test(description)) {
        score += 1
      }
    }

    return { tool, score }
  })

  // Порог 3: нужно хотя бы одно совпадение полноценного термина
  // в name/description (или несколько слабых совпадений)
  const filteredTools = scoredTools
    .filter(item => item.score >= 3)
    .sort((a, b) => b.score - a.score)

  const candidateTools = filteredTools.slice(0, 30).map(item => item.tool)

  if (candidateTools.length === 0) {
    rememberResult(cacheKey, [])
    return { slugs: [] }
  }

  // Fallback при сбое LLM: топ-5 по серверному scoring
  // (кандидаты уже отфильтрованы по ключевым словам — лучше, чем пустой ответ)
  const fallbackSlugs = candidateTools.slice(0, 5).map(tool => tool.slug)

  // ЭТАП 3: LLM ранжирует отфильтрованный список
  // Отправляем без overview — меньше токенов, быстрее и дешевле
  const rankPayload = candidateTools.map(tool => ({
    name: tool.name,
    slug: tool.slug,
    description: tool.description,
  }))

  const rankPrompt = `You are ranking software tools from a directory by relevance to the user's query.

User query: ${query}
User intent: ${intent || 'Unknown'}

RULES:
1. Return up to 5 tool slugs, ordered from most to least relevant.
2. A tool is relevant if it belongs to the domain of the query and helps solve the user's task.
3. Queries about learning or starting a skill (e.g. "learn to draw", "how to start video editing") ARE satisfied by the software used for that skill. Do NOT reject tools just because they are not courses or tutorials.
4. For "alternative to X" queries: exclude X itself and return similar tools.
5. Exclude tools from unrelated categories, even if their descriptions share generic words with the query.
6. Return {"slugs": []} ONLY if none of the candidates belong to the query's domain at all. If at least one candidate is a plausible fit, include it. An empty list is the last resort, not the default.

Return ONLY valid JSON in this exact format: {"slugs": ["slug1", "slug2", "slug3", "slug4", "slug5"]}

Candidate tools (name, slug, description):
${JSON.stringify(rankPayload)}`

  let resultSlugs: string[] = []

  try {
    // 300 < OTPM 1000, реальный ответ со слагами занимает ~30-60 токенов
    const content = await callGroq(apiKey, rankPrompt, 300)

    if (!content) {
      resultSlugs = fallbackSlugs
    } else {
      const parsed = parseJsonSafe<{ slugs?: unknown }>(content)

      if (!parsed || !Array.isArray(parsed.slugs)) {
        resultSlugs = fallbackSlugs
      } else {
        const validSlugs = parsed.slugs.filter((slug: unknown): slug is string => {
          return typeof slug === 'string' && candidateTools.some(tool => tool.slug === slug)
        })

        const uniqueSlugs = [...new Set(validSlugs)].slice(0, 5)

        if (parsed.slugs.length > 0 && uniqueSlugs.length === 0) {
          // Модель вернула только несуществующие слаги (галлюцинации)
          resultSlugs = fallbackSlugs
        } else {
          resultSlugs = uniqueSlugs
        }
      }
    }
  } catch {
    resultSlugs = fallbackSlugs
  }

  rememberResult(cacheKey, resultSlugs)
  return { slugs: resultSlugs }
})