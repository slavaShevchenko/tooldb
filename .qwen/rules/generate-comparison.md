# Правило: генератор страниц сравнений (comparisons)

## Роль

Ты создаёшь страницы сравнений инструментов по списку, который присылает пользователь. Страницы, роуты, компоненты, SEO и sitemap для сравнений **уже существуют** — твоя задача только добавить файлы данных и зарегистрировать их. Тексты пиши SEO ориентированные и так, чтобы их полюбили агенты (chatGPT, meta, google и другие).

## Входные данные

Список сравнений через запятую, внутри каждого — бренды через `vs`. Пример:

```
Cursor vs Windsurf vs GitHub Copilot,v0 vs Bolt.new vs Lovable,Replit vs CodeSandbox vs StackBlitz
```

Ограничения: **2–4 инструмента** в одном сравнении (в текущих данных: 1 файл с двумя, 11 с тремя, 19 с четырьмя). Если в запросе больше четырёх — уточнить у пользователя, разбивать ли на несколько сравнений.

## Источники истины

`AGENTS.md` — источник по проекту, но **в части comparisons он устарел** (см. блок «Расхождения с AGENTS.md» ниже). При любом расхождении приоритет у реального кода. Перед генерацией читать файлы из таблицы, а не полагаться на память или шаблоны ниже.

| Что | Где |
|-----|-----|
| Интерфейсы `ComparisonPage`, `ComparisonPageData`, `ComparisonTool`, `ComparisonDifferenceItem`, `ComparisonDifferences`, `ComparisonProsAndCons`, `ComparisonTextBlock`, `ComparisonBigTextBlock` | `app/types/comparison.ts` |
| Файл одного сравнения | `app/data/comparison/{slug}.ts` |
| Реестр сравнений | `app/data/comparison/index.ts` — массив `comparisionPostData` + экспорт `comporisonPosts` |
| Инструменты (источник slug'ов, логотипов, фич) | `app/data/tools.ts` |
| Допустимые категории | `app/data/categories.ts` — поле `slug` |
| Допустимые иконки | `LUCIDE_ICONS` в `app/types/lucideIcons.ts` |
| Страница сравнения | `app/pages/comparisons/[slug].vue` — **существует, не трогать** |
| Список сравнений | `app/pages/comparisons/index.vue` — **существует, не трогать** |
| Компоненты | `app/components/comparison/*.vue` — **существуют, не трогать** |
| Роуты | `app/constants/routes.ts` — `routes.comparison(slug)`, `routes.comparisons()` |
| Бизнес-логика | `app/composables/useComparisons.ts` |
| JSON-LD | `app/composables/useComparisonJsonLd.ts` |

`id` в данных сравнений **не задаётся вручную** — он присваивается автоматически как `index + 1` в `app/data/comparison/index.ts`. Это ключевое отличие от `generate-tool.md`.

### Расхождения с AGENTS.md (не исправлять, просто знать)

| AGENTS.md пишет | Реально в коде |
|---|---|
| `app/pages/comparison/` | `app/pages/comparisons/` |
| `/comparison/:slug` | `/comparisons/:slug` |
| `category: string` | `category: readonly string[]` (1–2 значения) |
| `overview`, `differences`, `prosAndCons`, `verdict` | плюс обязательные `textOverview` и `textOverall` |
| Данные в `app/data/comparison/` | верно, единственное число |

Имена `comporisonPosts` и `comparisionPostData` содержат опечатки — **так в коде, не исправлять** (AGENTS.md правило 27).

## Шаг 1. Исследование проекта

Использовать только выделенные инструменты: `glob`, `grep_search`, `read_file`. Команды `find`, `tree`, `ls`, `grep` через shell запрещены.

Обязательно прочитать до генерации:

- `app/types/comparison.ts` — актуальный набор полей и их порядок
- `app/data/comparison/monday-vs-notion-vs-basecamp.ts` — эталон для 3 инструментов
- `app/data/comparison/clickup-vs-asana-vs-trello-vs-jira.ts` — эталон для 4 инструментов
- конец `app/data/comparison/index.ts` — как устроен реестр
- `app/data/categories.ts` — актуальные slug'и категорий

Полезные запросы:

- `grep_search` → `^const comparisonTools = \[` в `app/data/comparison` — какие наборы инструментов уже заняты
- `grep_search` → `slug: '<новый-slug>'` в `app/data/comparison` — не занят ли slug
- `grep_search` → `slug: '(cursor|windsurf|githubcopilot)'` в `app/data/tools.ts` — резолв брендов в slug'и
- `grep_search` → `^    slug: '` в `app/data/categories.ts` — валидные категории

Структуру папок, формат файлов, список категорий и состав полей не спрашивать у пользователя — всё читается из репозитория. Вопрос уместен, только когда неоднозначна сама задача (непонятно, какой бренд имелся в виду, или в сравнении больше 4 инструментов).

## Шаг 2. Резолв брендов в slug'и инструментов — самый критичный шаг

Бренд из списка пользователя **почти никогда не равен** slug'у инструмента. Каждый бренд обязательно проверить grep'ом по `app/data/tools.ts`.

**Почему это критично:** `ComparisonProsCons.vue` вызывает `getTool(item.slug).logo` **без** optional chaining, а `useComparisons().getComparisonTools()` просто фильтрует массив `tools`. Если slug'а нет в каталоге — страница падает на рендере (SSR 500), а `npm run build` это **не поймает**, потому что сборка не проверяет типы и не рендерит страницы.

Известные расхождения бренд → slug (список не полный, всегда проверять grep'ом):

| Бренд | slug | Бренд | slug |
|---|---|---|---|
| monday.com | `mondaycom` | GitHub Copilot | `githubcopilot` |
| Otter.ai | `otterai` | Bolt.new | `boltnew` |
| Murf / Murf AI | `murfai` | LinkedIn Sales Navigator | `linkedinsalesnavigator` |
| Lovo AI | `lovoai` | Salesforce Service Cloud | `salesforceservicecloud` |
| Premiere Pro | `premierepro` | Constant Contact | `constantcontact` |
| Beautiful.ai | `beautifulai` | Google Forms | `googleforms` |
| Apollo.io | `apollo` | SE Ranking | `seranking` |
| BambooHR | `bamboohr` | SEO PowerSuite | `seopowersuite` |
| Sprout Social | `sproutsocial` | Dash Social | `dashsocial` |
| Raven Tools | `raventools` | Help Scout | `helpscout` |
| Fireflies / Fireflies.ai | `fireflies` | Lovable | `lovable` |

Если инструмента **нет** в `app/data/tools.ts`:

1. Не выдумывать slug и не создавать сравнение с несуществующим инструментом.
2. Остановиться и сообщить пользователю, каких именно инструментов не хватает.
3. Предложить сначала добавить их по правилу `.qwen/rules/generate-tool.md`, затем вернуться к сравнению.

## Шаг 3. slug, имя файла, имя экспорта

- **slug** — читаемые короткие имена брендов в kebab-case, соединённые `-vs-`:
  `cursor-vs-windsurf-vs-github-copilot`, `v0-vs-boltnew-vs-lovable`
- Часть slug'а — **не обязательно** точный tool slug. В существующих данных: `monday` (slug `mondaycom`), `otter` (`otterai`), `murf` (`murfai`), `premiere-pro` (`premierepro`), `linkedin-sales-navigator` (`linkedinsalesnavigator`), `beautiful-ai` (`beautifulai`), `constant-contact` (`constantcontact`). Допустимы дефисы внутри части бренда.
- Только строчные латиница, цифры и дефис. Без пробелов, без точек (`boltnew`, а не `bolt.new`).
- **Имя файла** = `{slug}.ts`
- **Имя экспорта** = camelCase частей slug'а, соединённых `Vs`: `cursorVsWindsurfVsGithubCopilot`, `v0VsBoltnewVsLovable`
- Перед записью проверить grep'ом, что slug не занят и что такого набора инструментов ещё нет.

## Шаг 4. Файл данных `app/data/comparison/{slug}.ts`

Порядок полей — ровно как в интерфейсе `ComparisonPageData`. Отступы **2 пробела** (файл `webflow-vs-wordpress.ts` использует 4 — это legacy-выброс, не брать за эталон). Одинарные кавычки, trailing commas, **без точек с запятой**. Апострофы внутри строк экранировать: `team\'s`.

```typescript
import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['cursor', 'windsurf', 'githubcopilot'] as const

export const cursorVsWindsurfVsGithubCopilot: ComparisonPageData = {
  slug: 'cursor-vs-windsurf-vs-github-copilot',
  title: 'Cursor vs Windsurf vs GitHub Copilot: Best AI Code Editor in 2026?',
  description: 'Three different takes on AI-assisted coding. We compare Cursor, Windsurf and GitHub Copilot on pricing, model access, agent depth, IDE fit, and real three-year cost to help you pick the right AI coding tool in 2026.',
  category: ['ai', 'web-development'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Cursor, Windsurf and GitHub Copilot compare across pricing, model access, agent depth, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of AI Coding: How We Compared Cursor, Windsurf and GitHub Copilot',
    paragraphs: [
      // РОВНО 7 абзацев, 640–990 слов суммарно (~90–140 слов на абзац)
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your workflow.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: '…',
          [comparisonTools[1]]: '…',
          [comparisonTools[2]]: '…',
        },
      },
      // 13–20 строк, последняя всегда 'Best for' с иконкой 'target'
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        // 5–6 пунктов
      ],
      cons: [
        // 5–6 пунктов
      ],
    },
    // по одному блоку на каждый инструмент, в том же порядке, что и comparisonTools
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      // 5–6 абзацев, 420–770 слов суммарно
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Cursor if … Choose Windsurf if … Choose GitHub Copilot if …',
  },
}
```

## Шаг 5. Требования к каждому полю

Замерено по 31 существующему файлу — держаться этих диапазонов, иначе страница будет визуально выбиваться.

| Поле | Требование |
|---|---|
| `slug` | См. Шаг 3. Совпадает с именем файла без `.ts` |
| `title` | `'{Бренд} vs {Бренд} vs {Бренд}: Best {категория товара} in 2026?'` — бренды в официальном написании (`monday.com`, `Apollo.io`, `Beautiful.ai`, `Fireflies.ai`). 30/31 файлов заканчиваются на `in 2026?` |
| `description` | **34–38 слов**. Схема: «что сравниваем и в чём ключевое различие» → «We compare A, B and C on {4–5 критериев} to help you {выбрать} in 2026.» |
| `category` | Массив из **1–2** slug'ов из `app/data/categories.ts`. Рендерится как кликабельные кнопки на `/categories/{slug}` — невалидный slug даст битую ссылку и голый текст вместо названия |
| `date` | Текущая дата в формате `'October 29, 2026'` (человекочитаемый, **не** ISO — в отличие от `lastUpdated` у инструментов) |
| `readTime` | `'{N} min read'`, N = 12–15. Считать как `округлить(суммарное число слов страницы / 200)`, зажать в диапазон 12–15 |
| `tools` | Ссылка на локальную константу `comparisonTools` (`as const`), НЕ инлайн-массив |
| `overview.title` | `'At a glance'` (30/31) |
| `overview.description` | Одно предложение: `'A quick side-by-side overview of how {A, B and C} compare across {4 критерия} — before we dive into the details.'` |
| `textOverview.title` | `'{Two\|Three\|Four} Philosophies of {тема}: How We Compared {A, B and C}'` |
| `textOverview.paragraphs` | **Ровно 7 абзацев**, 640–990 слов. Обязательный сюжет: (1) три философии и позиционирование → (2) методология тестирования (одинаковый сценарий, замеры времени, трёхлетняя TCO, интервью с практиками, анализ отзывов G2/Capterra) → (3) главное различие в ментальной модели → (4) различие в целевой аудитории → (5) цены и конкретные тарифы с цифрами → (6) самая острая точка расхождения по ключевой функции → (7) «So where does each platform genuinely shine?» + правило большого пальца |
| `differences.title` | `'Key differences'` (30/31) |
| `differences.description` | Одно предложение: `'Side-by-side comparison of the main features across all {three\|four} platforms, so you can quickly see which one fits your {team\|workflow\|business}.'` |
| `differences.items` | **13–20 строк** (в среднем 16). Каждая: `feature` (sentence case), `icon` (Lucide без префикса), `values` (по одной записи на инструмент, **ключи — только через `[comparisonTools[N]]`**, 8–20 слов на значение). Первая строка — `'Core philosophy'` (18 файлов) или `'Target audience'` (10). Последняя — **всегда** `'Best for'` с иконкой `'target'`. Обязательные строки в середине: `'Ease of use'` (`mouse-pointer-click`), `'Pricing (entry paid plan)'` (`dollar-sign`), `'Free tier'` (`users`), `'AI features'` (`sparkles`), `'Integrations'` (`puzzle`) |
| `prosAndCons` | **Ровно один блок на инструмент**, в том же порядке, что и `comparisonTools`. `slug: comparisonTools[N]`. `pros` — 5–6 пунктов, `cons` — 5–6 пунктов. Без точки в конце, конкретика с цифрами (`'Per-seat pricing scales quickly — 20-person teams on Standard cost $240/mo'`), а не общие слова |
| `textOverall.title` | `'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses'` (30/31 — буквально эта строка) |
| `textOverall.paragraphs` | **5–6 абзацев**, 420–770 слов. Сюжет: (1) итог — универсального победителя нет, но для каждой формы команды есть правильный выбор → (2..N) по абзацу на инструмент: «Where X deserves praise is … Where it draws criticism is …» + кого конкуренты переманивают → (предпоследний) тренд 2026 (обычно AI-конвергенция или двухинструментные связки) → (последний) «Looking ahead…» + правило большого пальца «if you need X, start with Y» |
| `verdict.title` | `'Which one should you choose?'` (30/31) |
| `verdict.description` | **99–208 слов** (в среднем 168), один абзац. Схема: `'Choose {A} if … — ideal for {аудитория}. Choose {B} if … — ideal for {аудитория}. Choose {C} if … — ideal for {аудитория}.'` + финальное предложение про связку двух инструментов, если команда покрывает разные сценарии |

### Язык и стиль

Все строковые поля — **английский**. Каталог ориентирован на англоязычный SEO; смешение языков недопустимо.

- Конкретика вместо маркетинговых клише: цифры тарифов, лимиты мест/запросов, названия планов, количество интеграций.
- Честно писать про ограничения каждого инструмента — `cons` и «Where it draws criticism» обязательны и не должны быть смягчёнными `pros`.
- Не выдумывать проверяемые факты (цены, лимиты, даты релизов). Не уверен — написать общую формулировку и отметить в отчёте как требующее проверки.
- Тире — `—` (em dash), как в существующих файлах.
- Без markdown-разметки внутри строк: только plain text.

## Шаг 6. Регистрация в `app/data/comparison/index.ts`

Две правки, обе — **в конец**:

```typescript
import { cursorVsWindsurfVsGithubCopilot } from './cursor-vs-windsurf-vs-github-copilot'
```

```typescript
const comparisionPostData: ComparisonPageData[] = [
  // ...существующие записи
  cursorVsWindsurfVsGithubCopilot,
]
```

**Почему именно в конец:** `id` присваивается как `index + 1`, а `getComparisons()` сортирует по `Number(b.id) - Number(a.id)`. То есть последняя запись массива получает наибольший `id` и показывается **первой** на `/comparisons` и в блоке «Latest Comparisons» на главной (`HomeComparisons.vue` берёт `getComparisons().slice(0, 6)`). Вставка в середину пересчитает `id` у всех последующих сравнений и перемешает выдачу.

Экспорт `comporisonPosts` и функцию-маппер в конце файла **не изменять**.

### Что менять НЕ нужно

Всё остальное выводится из `comporisonPosts` автоматически:

- `server/routes/sitemap.xml.ts` — URL сравнений и страницы пагинации считаются от длины массива
- `ComparisonStats.vue` — счётчики Comparisons / Categories / Tools
- `ComparisonRelatedArticles` — `getRelatedComparisons()` подбирает по пересечению `category`
- `useBreadcrumbs.ts` — ветка `/comparisons/` уже есть
- `AlternativesFor.vue` — подтягивает сравнения по slug'у инструмента через `getComparisonSlugsByToolSlug()`
- `app/pages/comparisons/*`, `app/components/comparison/*`, `app/seo/comparisons.ts`, `app/constants/navigation.ts`

Создавать новые компоненты, страницы или SEO-конфиги не нужно (AGENTS.md правила 21, 25, 27).

## Шаг 7. Валидация и проверка

Чек-лист перед сборкой:

- [ ] каждый slug инструмента из `comparisonTools` реально существует в `app/data/tools.ts`
- [ ] slug сравнения уникален, имя файла = slug, имя экспорта = camelCase slug'а
- [ ] все значения `category` есть в `app/data/categories.ts`
- [ ] все `icon` есть в `LUCIDE_ICONS`
- [ ] `differences.items[*].values` содержит ровно по одной записи на каждый инструмент, ключи — `[comparisonTools[N]]`
- [ ] `prosAndCons` — по одному блоку на инструмент, в порядке `comparisonTools`
- [ ] `textOverview.paragraphs` — ровно 7; `textOverall.paragraphs` — 5–6
- [ ] `differences.items` — 13–20; последняя строка `'Best for'` / `target`
- [ ] `pros` и `cons` — по 5–6 пунктов
- [ ] `description` 34–38 слов, `verdict.description` 99–208 слов
- [ ] `date` — `'Month D, YYYY'`, `readTime` — `'{12..15} min read'`
- [ ] всё на английском, нет точек с запятой, отступ 2 пробела
- [ ] импорт и запись добавлены **в конец** `index.ts`

### Валидация иконок

`LUCIDE_ICONS` лежит в файле **одной строкой**, поэтому `grep_search` по нему бесполезен: он вернёт «1 match» на всю строку независимо от того, есть конкретная иконка или нет. Проверять через node:

```bash
node -e "
const fs=require('fs');
const s=new Set([...fs.readFileSync('app/types/lucideIcons.ts','utf8').matchAll(/\x22([a-z0-9-]+)\x22/g)].map(m=>m[1]));
const d='app/data/comparison';
const bad=new Set();
for(const f of fs.readdirSync(d)){
  if(f==='index.ts')continue;
  for(const m of fs.readFileSync(d+'/'+f,'utf8').matchAll(/icon: '([a-z0-9-]+)'/g))
    if(!s.has(m[1])) bad.add(m[1]+' <- '+f);
}
console.log(bad.size?[...bad].join('\n'):'icons OK');
"
```

### Валидация slug'ов инструментов

```bash
node -e "
const fs=require('fs');
const t=new Set([...fs.readFileSync('app/data/tools.ts','utf8').matchAll(/^    slug: '([a-z0-9-]+)',\$/gm)].map(m=>m[1]));
const d='app/data/comparison';
const bad=new Set();
for(const f of fs.readdirSync(d)){
  if(f==='index.ts')continue;
  const m=fs.readFileSync(d+'/'+f,'utf8').match(/^const comparisonTools = \[(.*?)\] as const\$/m);
  if(!m)continue;
  for(const s of m[1].matchAll(/'([a-z0-9-]+)'/g)) if(!t.has(s[1])) bad.add(s[1]+' <- '+f);
}
console.log(bad.size?[...bad].join('\n'):'tool slugs OK');
"
```

### Сборка

```bash
npm run build
```

Что нужно знать о проверках:

- `npm run build` — единственная рабочая проверка в проекте. Ловит синтаксические ошибки, неразрешённые импорты, дубли ключей в реестре.
- Сборка **не проверяет типы и не рендерит страницы**. Поэтому несуществующий slug инструмента, выдуманная иконка или невалидная категория пройдут молча и сломают рендер в рантайме. Единственная защита — чек-лист и два node-скрипта выше.
- `npx nuxi typecheck` нерабочий: `vue-tsc 3.3.11` падает с `ERR_PACKAGE_PATH_NOT_EXPORTED` на `typescript 7.0.2`. Не полагаться на него и не чинить установкой зависимостей без явного запроса пользователя.
- Скриптов `lint` и `test` в `package.json` нет — не запускать `npm run lint` / `npm test`.

Если сборка падает — исправить причину и прогнать снова. Сообщать об успехе только после фактически зелёного вывода; при непройденной проверке сказать об этом прямо.

## Шаг 8. Отчёт

Действия выполнять инструментами (`write_file`, `edit`), а не печатью кода в чат. Объекты данных и импорты в ответ не дублировать — они уже в репозитории.

В ответе коротко:

1. Сколько сравнений добавлено, их slug'ы и наборы инструментов (slug'и, а не бренды)
2. Сколько файлов создано в `app/data/comparison/` и что изменён `app/data/comparison/index.ts`
3. Результат `npm run build` и обоих node-скриптов валидации — зелёный или с ошибками
4. Предупреждения: непроверенные цены и лимиты, спорный выбор `category`, slug'и инструментов, для которых нет файла логотипа, и инструменты, которых не хватило в каталоге

Разбивать ответ по числу сравнений не нужно — достаточно сводки.

## Известные дефекты в существующих данных (не копировать их в новые файлы)

Найдены аудитом 2026-10-29. Пользователю сообщить один раз, самостоятельно не чинить (AGENTS.md правило 27):

- **Иконки, которых нет в `LUCIDE_ICONS`** (рендерятся пустыми): `bar-chart-2` в `similarweb-vs-spyfu-vs-seranking-vs-ahrefs.ts` и `brand24-vs-sproutsocial-vs-hootsuite-vs-mention.ts`; `edit` в `gamma-vs-canva-vs-powerpoint-vs-beautiful-ai.ts`; `history` в `woorank-vs-seobility-vs-sistrix.ts` и `sistrix-vs-searchmetrics-vs-xovi.ts`. Ближайшие валидные замены: `chart-column`, `pen-line`, `clock-arrow-down`.
- **Нет логотипа** `public/images/tool-logo/apollo.webp` и его `-size-32` варианта — hero-блок `apollo-vs-zoominfo-vs-linkedin-sales-navigator` показывает битую картинку.
- **`webflow-vs-wordpress.ts`** — отступ 4 пробела вместо 2 (legacy), не брать за эталон форматирования.
- **`sleekplan-vs-upvoty-vs-frill.ts`** — Title Case в `overview.title`, `differences.title`, `verdict.title` и в feature-лейблах; выбивается из конвенции остальных 30 файлов.

## Логотипы

`public/images/tool-logo/{slug}.webp` и вариант `{slug}-size-32.webp` добавляет пользователь вручную. Агент изображения не создаёт, не скачивает и не заменяет заглушками. `ComparisonHero.vue` использует именно `-size-32` вариант (`tool.logo.replace(/(\.[^.]+)$/, '-size-32$1')`), `ComparisonOverview.vue` и `ComparisonProsCons.vue` — базовый. Если для инструмента нет нужного варианта — указать slug в отчёте.

## Обработка ошибок

- Не хватает контекста о структуре, формате, категориях или порядке регистрации → прочитать репозиторий, а не спрашивать пользователя.
- Бренд не резолвится однозначно в slug инструмента (например, «Copilot» — GitHub Copilot или Microsoft Copilot?) → задать вопрос.
- Инструмента нет в `app/data/tools.ts` → остановиться, не создавать сравнение, предложить добавить инструмент по `generate-tool.md`.
- Не выдумывать несуществующие иконки, категории, slug'и, пути к файлам и поля интерфейса (AGENTS.md правила 11–17).
- Не изменять код, не относящийся к добавлению сравнений: страницы, компоненты, композаблы, SEO-конфиги, навигацию, sitemap (AGENTS.md правило 27).
