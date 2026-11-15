import { readFileSync } from 'fs'
import { join } from 'path'

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

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const query = body?.query?.trim()

  if (!query || typeof query !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Query is required'
    })
  }

  const config = useRuntimeConfig()
  const apiKey = config.groqApiKey

  if (!apiKey) {
    console.error('GROQ_API_KEY is not set')
    throw createError({
      statusCode: 500,
      message: 'AI search is not configured'
    })
  }

  const dataPath = join(process.cwd(), 'public', 'ai-search-data.json')
  let toolsData: ToolInfo[] = []

  try {
    toolsData = JSON.parse(readFileSync(dataPath, 'utf-8'))
  } catch (error) {
    console.error('Failed to read tools data:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to load tools data'
    })
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

  let extractedData: ExtractedKeywords

  try {
    const response1 = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        messages: [
          { role: 'user', content: extractKeywordsPrompt },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.3,
        max_tokens: 300,
      }),
    })

    if (!response1.ok) {
      const errorText = await response1.text()
      console.error('Groq API error (extract):', response1.status, errorText)
      throw new Error(`Groq API returned ${response1.status}`)
    }

    const data1 = await response1.json()
    const content1 = data1.choices?.[0]?.message?.content

    if (!content1) {
      // Fallback: используем простые ключевые слова из запроса
      extractedData = {
        keywords: query.split(/\s+/).filter(w => w.length > 2),
        categories: [],
        intent: query,
      }
    } else {
      extractedData = JSON.parse(content1)
    }
  } catch (error) {
    console.error('Keyword extraction error:', error)
    // Fallback: используем простые ключевые слова из запроса
    extractedData = {
      keywords: query.split(/\s+/).filter(w => w.length > 2),
      categories: [],
      intent: query,
    }
  }

  const keywords = Array.isArray(extractedData.keywords) ? extractedData.keywords : []
  const categories = Array.isArray(extractedData.categories) ? extractedData.categories : []
  const intent = extractedData.intent || ''

  console.log('[AI Search] Extracted:', { keywords, categories, intent })

  // ЭТАП 2: Фильтруем инструменты по ключевым словам на сервере с scoring
  // Разбиваем фразы на отдельные слова для лучшего совпадения
  const expandTerms = (terms: string[]): string[] => {
    const expanded = new Set<string>()
    for (const term of terms) {
      const lower = term.toLowerCase()
      expanded.add(lower)
      // Добавляем отдельные слова из фразы
      for (const word of lower.split(/\s+/)) {
        if (word.length > 2) {
          expanded.add(word)
        }
      }
    }
    return [...expanded]
  }

  const allSearchTerms = expandTerms([
    ...keywords,
    ...categories,
    ...intent.split(' '),
  ])

  console.log('[AI Search] Search terms:', allSearchTerms.slice(0, 20))

  // Scoring: считаем количество совпадений для каждого инструмента
  const scoredTools = toolsData.map(tool => {
    const name = tool.name.toLowerCase()
    const description = tool.description.toLowerCase()
    const overview = (tool.overview || '').toLowerCase()

    let score = 0
    let hasNameOrDescriptionMatch = false

    for (const term of allSearchTerms) {
      if (name.includes(term) || description.includes(term)) {
        score += 3 // Совпадение в name/description важнее
        hasNameOrDescriptionMatch = true
      } else if (overview.includes(term)) {
        score += 1
      }
    }

    return {
      tool,
      score,
      hasNameOrDescriptionMatch,
    }
  })

  // Фильтруем: минимум 1 совпадение (score >= 1)
  const filteredTools = scoredTools
    .filter(item => item.score >= 1)
    .sort((a, b) => b.score - a.score) // Сортируем по релевантности
    .map(item => item.tool)

  console.log('[AI Search] Filtered tools count:', filteredTools.length)
  if (filteredTools.length > 0) {
    console.log('[AI Search] Top 5 filtered:', filteredTools.slice(0, 5).map(t => `${t.name} (${t.slug})`))
  }

  // Берем максимум 30 инструментов для ранжирования
  const candidateTools = filteredTools.slice(0, 30)

  if (candidateTools.length === 0) {
    return { slugs: [] }
  }

  // ЭТАП 3: LLM ранжирует отфильтрованный список
  const rankPrompt = `Given the user query and a list of candidate tools, rank them by relevance and return the top 5 most relevant tool slugs.

IMPORTANT: Be STRICT in your evaluation. Only return tools that are genuinely relevant to the user's query. If a tool does not match the user's needs, DO NOT include it.

User query: ${query}
User intent: ${extractedData.intent || 'Unknown'}

Return ONLY valid JSON in this exact format: {"slugs": ["slug1", "slug2", "slug3", "slug4", "slug5"]}
If fewer than 5 tools are relevant, return only the relevant ones.
If NO tools are relevant to the query, return {"slugs": []} — this is acceptable and preferred over returning irrelevant results.

Candidate tools (name, slug, description):
${JSON.stringify(candidateTools, null, 0)}`

  try {
    const response2 = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        messages: [
          { role: 'user', content: rankPrompt },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.3,
        max_tokens: 200,
      }),
    })

    if (!response2.ok) {
      const errorText = await response2.text()
      console.error('Groq API error (rank):', response2.status, errorText)
      throw new Error(`Groq API returned ${response2.status}`)
    }

    const data2 = await response2.json()
    const content2 = data2.choices?.[0]?.message?.content

    if (!content2) {
      return { slugs: [] }
    }

    const parsed = JSON.parse(content2)
    const slugs = Array.isArray(parsed.slugs) ? parsed.slugs : []

    const validSlugs = slugs.filter((slug: unknown) => {
      return typeof slug === 'string'
        && candidateTools.some(tool => tool.slug === slug)
    })

    return { slugs: validSlugs.slice(0, 5) }
  } catch (error) {
    console.error('Ranking error:', error)
    // Fallback: возвращаем пустой массив вместо нерелевантных результатов
    return { slugs: [] }
  }
})