# AGENT.md — ToolDB AI Development Guide

> Этот документ — единственный источник истины для AI-агентов, работающих с кодовой базой ToolDB.
> Перед написанием любого кода ознакомьтесь с этим файлом полностью.

---

## 1. 🧠 Project Context & Stack

**ToolDB** — каталог цифровых инструментов (SaaS), помогающий пользователям находить, сравнивать и выбирать программное обеспечение. Проект ориентирован на SEO, производительность и масштабируемость.

### Стек

| Слой | Технология |
|------|-----------|
| Framework | **Nuxt 4.4.8** (SSR/SSG, auto-imports) |
| UI | **Vue 3.5.39** (Composition API, `<script setup>`) |
| Language | **TypeScript** (strict) |
| Styling | **SCSS** (scoped) + **CSS Variables** (design tokens) |
| Icons | **@nuxt/icon** + **Lucide** (`@iconify-json/lucide`) + **Simple Icons** |
| Utilities | **@vueuse/core** (debounce, и др.) |
| Analytics | **@vercel/analytics**, **@vercel/speed-insights** |
| Hosting | **Vercel** |
| Package Manager | **npm** |
| Fonts | Open Sans (body), Asap Condensed (headings) — self-hosted woff2 |

### Ключевые принципы продукта

- SEO first
- Mobile first
- Accessibility
- Fast loading
- Simple navigation
- Consistent UX

---

## 2. 📂 Directory Structure

```
tooldb/
├── app/
│   ├── app.vue                    # Корневой компонент (NuxtLayout + NuxtPage + AppCurtain)
│   ├── error.vue                  # Глобальная страница ошибок
│   │
│   ├── assets/
│   │   ├── images/                # Изображения (noise.webp и др.)
│   │   └── styles/
│   │       ├── main.scss          # Точка входа стилей
│   │       ├── fonts.scss         # @font-face declarations
│   │       ├── abstracts/
│   │       │   ├── _variables.scss  # НЕ используется (все переменные в :root)
│   │       │   ├── _mixins.scss     # Пустой (зарезервирован)
│   │       │   └── _functions.scss  # Пустой (зарезервирован)
│   │       ├── base/
│   │       │   ├── _reset.scss    # CSS reset (box-sizing, margin, etc.)
│   │       │   ├── _typography.scss # Шрифты, заголовки, ссылки, списки
│   │       │   └── _globals.scss  # Глобальные утилиты (.tooldb__grid), noise overlay
│   │       └── themes/
│   │           ├── _light.scss    # Пустой (светлая тема = :root по умолчанию)
│   │           └── _dark.scss     # [data-theme='dark'] overrides
│   │
│   ├── components/
│   │   ├── base/          # Базовые переиспользуемые UI-компоненты
│   │   ├── layout/        # Header, Footer, Breadcrumbs, LayoutSection
│   │   ├── home/          # Компоненты главной страницы
│   │   ├── tool/          # Компоненты страницы инструмента
│   │   ├── category/      # Компоненты категорий
│   │   ├── blog/          # Компоненты блога
│   │   ├── alternatives/  # Компоненты страницы альтернатив
│   │   ├── comparison/    # Компоненты сравнений
│   │   ├── common/        # Общие компоненты (пагинация, автор, шеринг)
│   │   └── app/           # Глобальные компоненты приложения (Curtain, Logo)
│   │
│   ├── composables/       # Бизнес-логика (useXxx.ts)
│   ├── constants/         # Константы (routes, navigation, pagination, tool-categories, tools)
│   ├── data/              # Статические данные (массивы инструментов, категорий, блога)
│   │   ├── tools.ts
│   │   ├── categories.ts
│   │   ├── alternatives.ts
│   │   ├── blog/          # Файлы постов + index.ts (агрегатор)
│   │   ├── toolContent/   # Контент для страниц инструментов
│   │   ├── comparison/    # Данные сравнений
│   │   ├── footer.ts
│   │   └── popularSearches.ts
│   │
│   ├── pages/             # Маршруты Nuxt (file-based routing)
│   │   ├── index.vue
│   │   ├── about.vue
│   │   ├── contact.vue
│   │   ├── affiliate-disclosure.vue
│   │   ├── privacy-policy.vue
│   │   ├── terms-of-service.vue
│   │   ├── tools/
│   │   │   ├── index.vue        # /tools
│   │   │   └── [slug].vue      # /tools/:slug
│   │   ├── categories/
│   │   │   ├── index.vue        # /categories
│   │   │   └── [slug].vue      # /categories/:slug
│   │   ├── alternatives/
│   │   │   ├── index.vue        # /alternatives
│   │   │   └── [slug].vue      # /alternatives/:slug
│   │   ├── blog/
│   │   │   ├── index.vue        # /blog
│   │   │   └── [slug].vue      # /blog/:slug
│   │   ├── comparison/
│   │   │   ├── index.vue        # /comparisons
│   │   │   └── [slug].vue      # /comparison/:slug
│   │
│   ├── seo/               # SEO-конфигурация по доменам
│   │   ├── index.ts       # Ре-экспорт всех SEO-модулей
│   │   ├── app.ts         # appSeo (siteName, siteUrl, titleSeparator, defaults)
│   │   ├── home.ts
│   │   ├── tools.ts
│   │   ├── categories.ts
│   │   ├── alternatives.ts
│   │   ├── blog.ts
│   │   ├── comparisons.ts # SEO для страницы списка сравнений
│   │   ├── about.ts
│   │   ├── privacy.ts
│   │   └── terms.ts
│   │
│   └── types/             # TypeScript интерфейсы
│       ├── tool.ts
│       ├── toolContent.ts
│       ├── category.ts
│       ├── blog.ts
│       ├── alternatives.ts
│       ├── comparison.ts
│       ├── footer.ts
│       ├── popularSearch.ts
│       └── lucideIcons.ts  # Массив LUCIDE_ICONS для валидации
│
├── public/                # Статические файлы (favicon, fonts, images)
├── server/                # Nuxt Server API
├── docs/                  # Документация проекта
├── nuxt.config.ts
├── package.json
├── tsconfig.json
└── AGENTS.md              # Проектные инструкции (ссылки на docs/)
```

---

## 3. 🧩 Component Architecture

### Правила именования

- **PascalCase** для имён файлов: `ToolCard.vue`, `BaseButton.vue`
- Компоненты организуются по **доменной области**, не по типу:
  - ✅ `components/tool/ToolCard.vue`
  - ✅ `components/base/BaseButton.vue`
  - ❌ `components/shared/ToolCard.vue` (избегать `shared`, `misc`)

### Классификация компонентов

| Тип | Директория | Описание | Пример |
|-----|-----------|----------|--------|
| **Base** | `base/` | Переиспользуемые UI-примитивы без бизнес-логики | `BaseButton`, `BaseContainer`, `BaseIcon`, `BaseInput`, `BasePill` |
| **Layout** | `layout/` | Структурные компоненты страницы | `AppHeader`, `AppFooter`, `LayoutSection`, `LayoutBreadcrumbs` |
| **Domain** | `tool/`, `category/`, `blog/`, ... | Компоненты конкретной бизнес-области | `ToolCard`, `CategoryGrid`, `BlogList` |
| **Common** | `common/` | Общие компоненты с бизнес-логикой | `CommonPagination`, `CommonAuthorBox`, `BaseShare` |
| **App** | `app/` | Глобальные компоненты приложения | `AppCurtain`, `AppLogo` |

### Структура .vue файла (эталон)

```vue
<template>
  <article class="card">
    <NuxtLink
      :to="routes.tool(tool.slug)"
      class="link"
    >
      <!-- Содержимое -->
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { Tool } from '~/types/tool'

const { tool } = defineProps<{
  tool: Tool
}>()

// computed, refs, и т.д.
const cardLogo = computed(() =>
  tool.logo.replace(/(\.[^.]+)$/, '-size-32$1')
)
</script>

<style scoped lang="scss">
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
}

.link {
  display: flex;
  gap: var(--space-1);
  color: inherit;
  text-decoration: none;
}
</style>
```

### Ключевые правила компонентов

1. **Один `<template>`, один `<script setup lang="ts">`, один `<style scoped lang="scss">`**
2. **Props** — через `defineProps<{...}>()` с деструктуризацией или `withDefaults`
3. **Компонент — это ссылка** (`NuxtLink`): если карточка целиком кликабельна, внутри НЕ добавлять вложенные ссылки (HTML запрещает `<a>` внутри `<a>`)
4. **Слоты** — для гибкости: `LayoutSection` использует `default` слот + именованный `action`
5. **Nuxt auto-imports**: компоненты, Vue API (`ref`, `computed`, `watch`), Nuxt composables (`useRoute`, `useRuntimeConfig`) — импортируются автоматически
6. **Явный импорт** нужен только для: типов, констант, данных, утилит из `~/`

### Базовые компоненты (Design System)

| Компонент | Назначение | Ключевые пропсы |
|-----------|-----------|-----------------|
| `BaseContainer` | Контейнер с max-width | `size: 'narrow' \| 'default' \| 'wide'`, `topLine`, `bottomLine` |
| `BaseButton` | Кнопка | (слот для контента) |
| `BaseInput` | Поле ввода | `modelValue`, `variant`, `placeholder` |
| `BaseIcon` | Обёртка над `<Icon>` | `name`, `size`, `color`, `class` |
| `BasePill` | Ссылка-пилюля (тег) | `to: string` |
| `BasePillGrid` | Сетка пилюль | — |
| `BaseDrawer` | Выдвижная панель | `id`, `modelValue` |
| `BaseShare` | Кнопки шеринга | — |

### Компоненты сравнений (Comparison)

| Компонент | Назначение | Ключевые пропсы |
|-----------|-----------|-----------------|
| `ComparisonHero` | Заголовок, мета-информация, карточки инструментов | `comparison`, `comparisonTools` |
| `ComparisonOverview` | Секция "At a glance" с двумя карточками | `comparison`, `comparisonTools` |
| `ComparisonDifferences` | Таблица ключевых различий | `comparison`, `comparisonTools` |
| `ComparisonProsCons` | Секция плюсов/минусов для каждого инструмента | `comparison` |
| `ComparisonVerdict` | Блок рекомендации с градиентным фоном | `comparison` |
| `ComparisonRelatedArticles` | Связанные сравнения | `relatedComparisons` |

---

## 4. 💾 Data & Typing

### Добавление новых типов

Файлы типов находятся в `app/types/`. Каждый файл — отдельная бизнес-сущность.

```ts
// app/types/tool.ts
export interface Tool {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  overview: string
  logo: string
  website: string
  affiliateUrl: string | null
  categories: ToolCategory[]
  tags: string[]
  pricing: ToolPricing
  pricingDescription: string
  featured: boolean
  rating: number
  reviewCount: number
  lastUpdated: string
  highlights: ToolHighlight[]
  features: ToolFeature[]
  platforms: ToolPlatform[]
}
```

```ts
// app/types/comparison.ts
export interface ComparisonTool {
  slug: string
  name: string
  logo: string
  description: string
  website: string
  tagline: string
}

export interface ComparisonPage {
  id: string
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  tools: readonly string[]
  overview: ComparisonOverview
  differences: ComparisonDifferences
  prosAndCons: ComparisonProsAndCons[]
  verdict: ComparisonVerdict
}
```

**Правила:**
- Использовать `interface` для объектов, `type` для union/literal типов
- Имя типа = PascalCase, имя файла = camelCase
- Импортировать типы через `import type { ... }` (type-only import)
- Категории инструментов типизируются через `ToolCategory` из `~/constants/tool-categories`

### Структура данных

Данные хранятся как **статические массивы** в `app/data/`. Экспорт — именованные константы.

```ts
// app/data/tools.ts
import type { Tool } from '~/types/tool'

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'quickbooks',
    name: 'QuickBooks',
    tagline: 'Accounting software',
    description: 'Cloud accounting software for small businesses.',
    // ... все поля интерфейса Tool
  },
]
```

```ts
// app/data/blog/index.ts — агрегатор
import type { BlogPost, BlogPostData } from '~/types/blog'

const blogPostData: BlogPostData[] = [
  bestEmailMarketingToolsForSmallBusiness,
  // ...
]

export const blogPosts: BlogPost[] = blogPostData.map((post, index) => ({
  ...post,
  id: String(index + 1)
}))
```

**Правила:**
- Каждый пост блога — отдельный файл в `data/blog/` (или `data/blog/new/`)
- Пост экспортируется как `BlogPostData` (без `id`), `id` присваивается в агрегаторе
- Массивы данных **типизированы явно** (`Tool[]`, `Category[]`, `BlogPost[]`)
- Для добавления нового инструмента/поста — создать файл данных и добавить его в агрегатор

### Константы

```ts
// app/constants/routes.ts — типобезопасные маршруты
export const routes = {
  home: () => '/',
  tool: (slug: string) => `/tools/${slug}`,
  category: (slug: string) => `/categories/${slug}`,
  blog: (slug: string) => `/blog/${slug}`,
  // ...
} as const
```

```ts
// app/constants/tool-categories.ts — категории как typed constants
export const TOOL_CATEGORIES = {
  AI: { id: 'ai', title: 'AI' },
  CRM: { id: 'crm', title: 'CRM' },
  // ...
} as const

export type ToolCategory = typeof TOOL_CATEGORIES[keyof typeof TOOL_CATEGORIES]['id']
```

---

## 5. ⚙️ Composables Patterns

### Расположение

`app/composables/useXxx.ts` — автоматически импортируются Nuxt.

### Архитектурная роль

```
Page → Composable → Component
```

Композаблы — **единственный слой бизнес-логики**. Компоненты получают данные только через композаблы.

### Эталонный паттерн

```ts
// app/composables/useTools.ts
import { computed } from 'vue'
import { tools } from '~/data/tools'
import type { Tool } from '~/types/tool'

export const useTools = () => {
  const trendingTools = computed(() =>
    [...tools]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, LIMIT)
  )

  const getToolBySlug = (slug: string): ToolDetails | undefined => {
    const tool = tools.find(tool => tool.slug === slug)
    if (!tool) return undefined
    return { ...tool, content: getToolContent(slug) }
  }

  return {
    tools,
    trendingTools,
    getToolBySlug,
    // ...
  }
}
```

### Правила

1. **Имя**: `use` + домен (`useTools`, `useBlog`, `useSeo`, `usePagination`)
2. **Возврат**: объект с reactive values (`computed`, `ref`) и функциями
3. **Данные** импортируются из `~/data/`
4. **Типы** импортируются из `~/types/`
5. **Не использовать** Options API, только Composition API
6. **Nuxt auto-imports**: `useRoute()`, `useRuntimeConfig()`, `useState()`, `createError()` доступны без импорта
7. **Vue API** (`computed`, `ref`, `watch`) — auto-imported, но можно импортировать явно

### Список композаблов

| Composable | Назначение |
|-----------|-----------|
| `useTools` | Работа с инструментами: фильтрация, поиск, связанные инструменты |
| `useCategories` | Работа с категориями |
| `useBlog` | Посты блога: получение, смежные посты, последние |
| `useAlternatives` | Страницы альтернатив |
| `useComparisons` | Работа со сравнениями: получение, связанные сравнения |
| `useComparisonJsonLd` | JSON-LD разметка для страниц сравнений (Schema.org WebPage + ItemList) |
| `usePagination` | Пагинация массива по `?page=` из query |
| `useSeo` | Установка мета-тегов страницы |
| `useCanonical` | Генерация canonical URL |
| `useBreadcrumbs` | Хлебные крошки (computed из route) |
| `useToolSearch` | Поиск инструментов и категорий |
| `usePopularSearches` | Популярные поисковые запросы |
| `usePageCurtain` | Анимация перехода между страницами |
| `useJsonLd` | JSON-LD структурированные данные (несколько функций) |

---

## 6. 🔍 SEO & Metadata Rules

### Архитектура SEO

```
app/seo/
├── app.ts          # appSeo — глобальные настройки (siteName, titleSeparator, defaultImage)
├── index.ts        # Ре-экспорт всех модулей
├── home.ts         # homeSeo
├── tools.ts        # toolsSeo
├── categories.ts   # categoriesSeo
├── blog.ts         # blogSeo
├── alternatives.ts # alternativesSeo
└── ...
```

### useSeo — единственный способ установки мета-тегов

```ts
useSeo({
  title: toolsSeo.title,                          // string или computed
  description: toolsSeo.description,              // string или computed
  canonical: 'https://tooldb.org/tools',          // optional
  image: '/images/og/custom.png',                 // optional, default: appSeo.defaultImage
  robots: 'noindex',                              // optional, default: 'index, follow'
  appendPageNumber: true,                         // optional, добавляет "(Page N)" к title
})
```

**КРИТИЧЕСКИ ВАЖНО:**
- `title` и `description` принимают `MaybeRef<string>` (string | Ref | ComputedRef)
- Внутри `useSeoMeta` используются **getter-функции**: `() => unref(description)`
- **НЕ вызывать `.value`** при передаче `computed` в `useSeo` — передавайте сам `computed`
- Динамические описания через `computed`:

```ts
const dynamicMetaDescription = computed(() => {
  const postTitles = paginatedPosts.value
    .slice(0, 3)
    .map(post => post.title)
    .join(', ')
  return `Latest articles: ${postTitles}. Practical guides...`
})

useSeo({
  title: blogSeo.title,
  description: dynamicMetaDescription,  // ← computed, НЕ dynamicMetaDescription.value
  appendPageNumber: true,
})
```

### JSON-LD композаблы

Все находятся в `app/composables/useJsonLd.ts` (экспортируются из `useSeo.ts` файла — нет, отдельный файл):

| Функция | Назначение |
|---------|-----------|
| `useBreadcrumbJsonLd(items)` | BreadcrumbList — хлебные крошки |
| `useItemListJsonLd(items, listName)` | ItemList — списки инструментов/постов |
| `useSoftwareApplicationJsonLd(tool)` | SoftwareApplication — страница инструмента |
| `useAlternativesJsonLd(toolName, alternatives)` | ItemList — альтернативы |
| `useAuthorJsonLd()` | Person — автор (Slava Shevchenko) |
| `useBlogPostingJsonLd(post)` | BlogPosting — страница поста блога |

**Пример использования:**

```ts
useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: tool.value.name, url: `/tools/${tool.value.slug}` },
])

useItemListJsonLd(
  paginatedPosts.value.map((post, index) => ({
    name: post.title,
    url: routes.blogPost(post.slug),
    position: (currentPage.value - 1) * PAGINATION.blog + index + 1,
  })),
  'ToolDB Blog'
)
```

### Паттерн SEO на странице

```ts
// app/pages/tools/[slug].vue
<script setup lang="ts">
const route = useRoute()
const { getToolBySlug } = useTools()

const tool = computed(() =>
  getToolBySlug(route.params.slug as string)
)

if (!tool.value) {
  throw createError({ statusCode: 404, statusMessage: 'Tool not found' })
}

useSoftwareApplicationJsonLd(tool.value)

useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: tool.value.name, url: `/tools/${tool.value.slug}` },
])

useSeo({
  title: `${tool.value.name} - ${tool.value.tagline}`,
  description: tool.value.description,
  canonical: `https://tooldb.org/tools/${tool.value.slug}`,
})
</script>
```

---

## 7. 🎨 Styling & UI Guidelines

### Design Tokens (CSS Variables)

Все значения — через CSS-переменные из `:root` (файл `assets/styles/main.scss`).

#### Цвета

```scss
// Семантические цвета — ВСЕГДА через переменные
color: var(--color-primary);           // #4f46e5 (indigo)
color: var(--color-primary-hover);     // #4338ca
color: var(--color-secondary);         // #e19b71 (warm orange)
color: var(--color-background);        // #fafafa
color: var(--color-surface);           // #ffffff
color: var(--color-surface-secondary); // #f3f4f6
color: var(--color-text);              // #111827
color: var(--color-text-secondary);    // #6b7280
color: var(--color-border);            // #e5e7eb
color: var(--color-border-hover);      // #d1d5db
color: var(--color-border-main);       // #999999
color: var(--color-success);           // #16a34a
color: var(--color-warning);           // #f59e0b
color: var(--color-danger);            // #dc2626

// Прозрачности
color: var(--color-primary-75);        // rgba(79, 70, 229, 0.75)
color: var(--color-primary-25);        // rgba(79, 70, 229, 0.25)
```

#### Отступы

```scss
margin: var(--space-0-25);   // 0.25rem
padding: var(--space-0-5);   // 0.5rem
gap: var(--space-1);         // 1rem
gap: var(--space-1-5);       // 1.5rem
margin-bottom: var(--space-2);  // 2rem
padding: var(--space-3);     // 3rem
gap: var(--space-4);         // 4rem
```

Полная шкала: `0.1`, `0.25`, `0.5`, `0.75`, `1`, `1.25`, `1.5`, `1.75`, `2`, `2.5`, `3`, `4`, `5`, `6` rem.

#### Типографика

```scss
font-size: var(--font-size-xs);    // 0.75rem
font-size: var(--font-size-sm);    // 0.875rem
font-size: var(--font-size-md);    // 1rem
font-size: var(--font-size-lg);    // 1.125rem
font-size: var(--font-size-xl);    // 1.5rem
font-size: var(--font-size-2xl);   // 2rem
font-size: var(--font-size-3xl);   // 3rem

font-weight: var(--font-weight-regular);   // 400
font-weight: var(--font-weight-medium);    // 500
font-weight: var(--font-weight-semibold);  // 600
font-weight: var(--font-weight-bold);      // 700

font-family: var(--font-family);          // Open Sans (body)
font-family: var(--font-family-heading);  // Asap Condensed (headings)
```

#### Радиусы, тени, анимации

```scss
border-radius: var(--radius-sm);    // 0.375rem
border-radius: var(--radius-md);    // 0.625rem
border-radius: var(--radius-lg);    // 1rem
border-radius: var(--radius-xl);    // 1.5rem
border-radius: var(--radius-pill);  // 9999px

box-shadow: var(--shadow-sm);   // 0 1px 2px rgb(0 0 0 / 0.05)
box-shadow: var(--shadow-md);   // 0 4px 10px rgb(0 0 0 / 0.08)
box-shadow: var(--shadow-lg);   // 0 12px 32px rgb(0 0 0 / 0.12)

transition: var(--transition-fast);  // 150ms ease
transition: var(--transition-base);  // 250ms ease
```

#### Layout

```scss
max-width: var(--container-width);        // 80rem (1280px)
padding: var(--container-padding);        // 1.5rem
max-width: var(--container-width-wide);   // 90rem (1440px)
```

### Правила стилизации

1. **ВСЕГДА** `scoped` — `<style scoped lang="scss">`
2. **НИКОГДА** не хардкодить цвета, отступы, радиусы, тени — только через `var(--...)`
3. **Нет Tailwind**, нет CSS-фреймворков
4. **Адаптивность** через `@media (max-width: ...)`:
   - `639px` — мобильные
   - `767px` — планшеты/маленькие экраны
   - `991px` — средние экраны
   - `1023px` — планшеты
   - `1199px` — маленькие десктопы
5. **`:deep()`** — для стилизации дочерних компонентов:
   ```scss
   .section:deep() > .header {
     gap: var(--space-3);
   }
   ```
6. **Глобальный класс** `.tooldb__grid` — двухколоночная сетка для AuthorBox + AffiliateNotice
7. **Единицы**: `rem` для всего, кроме `1px` borders

### Иконки

```vue
<!-- Через BaseIcon (предпочтительно) -->
<BaseIcon name="search" :size="24" />
<BaseIcon name="lucide:sparkles" :size="40" color="var(--color-surface)" />

<!-- BaseIcon автоматически добавляет префикс "lucide:" если его нет -->
```

**Правила:**
- Использовать **только** иконки из набора Lucide (`@iconify-json/lucide`)
- `BaseIcon` автоматически добавляет `lucide:` если имя не содержит `:`
- Проверить существование иконки: посмотреть массив `LUCIDE_ICONS` в `app/types/lucideIcons.ts`
- **НИКОГДА** не придумывать несуществующие иконки Lucide
- Для логотипов брендов использовать `simple-icons` (`@iconify-json/simple-icons`)

### Карточки (gradient border паттерн)

```scss
.card {
  background:
    linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
    linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%) border-box;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border: 1px solid transparent;  // gradient border становится видимым
}
```

---

## 8. ⚠️ Strict Rules for AI (ЖЁСТКИЕ ПРАВИЛА)

### Код

1. **НИКОГДА** не использовать точки с запятой (`;`) в JS/TS коде
2. **НИКОГДА** не использовать Options API — только `<script setup lang="ts">`
3. **ВСЕГДА** использовать `const` вместо `let` (кроме случаев, когда значение действительно меняется)
4. **Предпочитать** arrow functions: `const fn = () => {}`
5. **Предпочитать** early returns вместо глубокой вложенности
6. **Предпочитать** `computed` вместо дублированного state
7. **НЕ оставлять** закомментированный код и unused imports

### Импорты

8. **ВСЕГДА** использовать absolute imports через `~/`:
   ```ts
   import type { Tool } from '~/types/tool'
   import { routes } from '~/constants/routes'
   ```
9. **НЕ импортировать** Vue API и Nuxt composables, которые auto-imported (`ref`, `computed`, `watch`, `useRoute`, `useRuntimeConfig`)
10. **Импортировать явно**: типы, данные, константы, утилиты

### Иконки и ресурсы

11. **НИКОГДА** не придумывать несуществующие иконки Lucide — проверять по `LUCIDE_ICONS` в `app/types/lucideIcons.ts`
12. **НИКОГДА** не придумывать несуществующие файлы или пути
13. **НЕ создавать** локальные SVG — использовать `@nuxt/icon` с Lucide

### Типы и данные

14. **ВСЕГДА** проверять существующие типы перед добавлением новых данных
15. **ВСЕГДА** типизировать массивы данных явно: `const tools: Tool[] = [...]`
16. **НЕ добавлять** данные без всех обязательных полей интерфейса
17. **Новый тип** → новый файл в `app/types/` (camelCase)

### Компоненты

18. **НИКОГДА** не вкладывать `<a>` / `NuxtLink` внутрь другого `NuxtLink` (HTML forbidden)
19. **ПРИ ИЗМЕНЕНИИ** существующего компонента возвращать **ВЕСЬ компонент целиком**, а не фрагмент
20. **НЕ добавлять** бизнес-логику в компоненты — только UI и rendering
21. **ПЕРЕД созданием** нового компонента проверить существующие (Reuse Priority)

### SEO

22. **ВСЕ** страницы обязаны вызывать `useSeo()`, `useBreadcrumbJsonLd()`
23. **НЕ вызывать** `useSeoMeta()` напрямую — только через `useSeo()`
24. **НЕ передавать** `.value` от computed в `useSeo` — передавать сам computed

### Архитектура

25. **НЕ создавать** папки "на будущее" — только когда они нужны
26. **НЕ добавлять** зависимости без явной необходимости
27. **НЕ модифицировать** unrelated код
28. **СОБЛЮДАТЬ** слой данных: Page → Composable → Component
29. **ПЕРЕД изменениями** прочитать соседние файлы и следовать существующим паттернам

### Контекст

30. **Если не хватает контекста** (структура папки, содержимое файла, тип) — **СРАЗУ запросить** у пользователя, не гадать
31. **ПРОВЕРИТЬ** `docs/decisions.md` перед архитектурными изменениями

---

## 9. 📋 Quick Reference: Adding New Content

### Новый инструмент

1. Добавить объект в `app/data/tools.ts` (все поля `Tool` обязательны)
2. Создать файл контента в `app/data/toolContent/{slug}.ts` (опционально)
3. Зарегистрировать контент в `app/data/toolContent/index.ts`
4. Добавить логотип в `public/images/tool-logo/{slug}.webp`

### Новый пост блога

1. Создать файл `app/data/blog/{slug}.ts` (или `blog/new/`)
2. Экспортировать `BlogPostData` (без `id`)
3. Добавить импорт и запись в массив `blogPostData` в `app/data/blog/index.ts`
4. Добавить изображение в `public/images/blog-image/{slug}.webp`

### Новая категория

1. Добавить запись в `TOOL_CATEGORIES` (`app/constants/tool-categories.ts`)
2. Добавить объект в `app/data/categories.ts`
3. Убедиться, что хотя бы один инструмент ссылается на эту категорию

### Новая страница

1. Создать файл в `app/pages/` (Nuxt file-based routing)
2. Создать SEO-конфиг в `app/seo/` (если нужна статическая конфигурация)
3. Вызвать `useSeo()`, `useBreadcrumbJsonLd()` в `<script setup>`
4. Обернуть контент в `<BaseContainer>`
5. Использовать `LayoutSection` для секций

### Новая страница альтернатив

1. Добавить объект `AlternativePage` в `app/data/alternatives.ts`
2. Добавить логотип в `public/images/alternatives-logo/{slug}.webp`

---

## 10. 🔗 Key File Map

| Задача | Файл(ы) |
|--------|---------|
| Добавить инструмент | `data/tools.ts`, `data/toolContent/index.ts` |
| Добавить пост блога | `data/blog/{slug}.ts`, `data/blog/index.ts` |
| Добавить сравнение | `data/comparison/index.ts` |
| Изменить навигацию | `constants/navigation.ts` |
| Изменить маршруты | `constants/routes.ts` |
| Добавить категорию | `constants/tool-categories.ts`, `data/categories.ts` |
| Изменить SEO | `seo/{domain}.ts` |
| Изменить дизайн-токены | `assets/styles/main.scss` (`:root`) |
| Изменить тёмную тему | `assets/styles/themes/_dark.scss` |
| Добавить JSON-LD | `composables/useJsonLd.ts` |
| Добавить JSON-LD для сравнений | `composables/useComparisonJsonLd.ts` |
| Пагинация | `composables/usePagination.ts`, `constants/pagination.ts` |
| Глобальные стили | `assets/styles/base/_globals.scss`, `_reset.scss`, `_typography.scss` |

---

## 11. 🏗 Current Project Status

**Текущий milestone**: Comparisons system (completed)

**Завершено**:
- Foundation (Nuxt 4, TS, SCSS, design tokens)
- Design System (Base components, Layout)
- Homepage (Hero, Categories, Featured tools)
- Catalog (Tools listing, Tool details, Categories)
- SEO (architecture, composable, configuration)
- Blog
- Alternatives
- **Comparisons** (полная система: типы, данные, компоненты, страницы, SEO, JSON-LD, навигация, sitemap)

**Следующие шаги**:
- Tool page polish
- Related tools
- Collections

---

*Документ сгенерирован на основе полного аудита кодовой базы. Последнее обновление: 2026-09-24.*
