# Правило: генератор инструментов для каталога

## Роль

Ты создаёшь данные и описания для каталога цифровых инструментов по списку названий, который присылает пользователь.

## Входные данные

Список названий инструментов (от 1 до 100 за раз). Пример:

```
Notion, Figma, Slack, Linear
```

## Источники истины

`AGENTS.md` — единственный источник истины по проекту. При любом расхождении между этим правилом, `AGENTS.md` и реальным кодом приоритет у реального кода. Перед генерацией читать файлы из таблицы, а не полагаться на память или на шаблоны ниже.

| Что | Где |
|-----|-----|
| Интерфейс `Tool`, `ToolFeature`, `ToolHighlight`, `ToolPricing`, `ToolPlatform` | `app/types/tool.ts` |
| Интерфейс `ToolContent` | `app/types/toolContent.ts` |
| Допустимые категории | `TOOL_CATEGORIES` в `app/constants/tool-categories.ts` |
| Допустимые иконки | `LUCIDE_ICONS` в `app/types/lucideIcons.ts` |
| Данные инструментов | `app/data/tools.ts` — массив `export const tools: Tool[]` |
| Подробное описание инструмента | `app/data/toolContent/{slug}.ts` |
| Реестр описаний | `app/data/toolContent/index.ts` — плоский объект `toolContent` + `getToolContent(slug)` в конце файла |

Логотипы (`public/images/tool-logo/{slug}.webp`) добавляет пользователь вручную. Агент изображения не создаёт, не скачивает и не заменяет заглушками.

## Шаг 1. Исследование проекта

Использовать только выделенные инструменты: `glob`, `grep_search`, `read_file`. Команды `find`, `tree`, `ls`, `grep` через shell запрещены (см. «Prefer Dedicated Tools»).

Обязательно прочитать до генерации:

- `app/types/tool.ts` — актуальный набор полей
- `app/constants/tool-categories.ts` — актуальные id категорий
- одну-две существующие записи в `app/data/tools.ts` — эталон формата
- один существующий файл в `app/data/toolContent/` — эталон описания
- конец `app/data/toolContent/index.ts` — как устроен реестр

Полезные запросы:

- `glob` → `app/data/toolContent/*.ts`: какие описания уже существуют
- `grep_search` → `^    slug: '` в `app/data/tools.ts`: занятые slug
- `grep_search` → `^    id: '` в `app/data/tools.ts`: последний использованный id
- `grep_search` → имя иконки в `app/types/lucideIcons.ts`: существует ли иконка

Структуру папок, формат файлов, список категорий и последний id не спрашивать у пользователя — всё это читается из репозитория. Вопрос уместен, только когда неоднозначна сама задача (например, противоречивые данные о ценах инструмента).

## Шаг 2. id и slug

- `id` — строка, следующий порядковый номер: максимальный существующий + 1, + 2 и т.д.
- `slug` — только строчные латиница и цифры, без пробелов и дефисов (`ahrefswebmastertools`, не `ahrefs-webmaster-tools`).
- Перед записью проверить grep'ом, что slug и id не заняты.

## Шаг 3. Объект инструмента в `app/data/tools.ts`

Шаблон ниже — иллюстра порядка полей. Авторитетен интерфейс `Tool` в `app/types/tool.ts`: если он изменился, следовать ему.

```typescript
{
  id: '431',
  slug: 'notion',
  name: 'Notion',
  tagline: 'All-in-one workspace for notes and projects',
  description: 'Connected workspace combining notes, docs, wikis, tasks and databases.',
  overview: '',
  pricingDescription: 'Free personal plan; paid Plus and Business tiers per user per month.',
  logo: '/images/tool-logo/notion.webp',
  website: 'https://notion.so',
  affiliateUrl: null,
  categories: ['productivity'],
  tags: [
    'notes',
    'wiki',
    'project-management',
    'databases',
    'documentation',
    'collaboration'
  ],
  pricing: 'Freemium',
  featured: false,
  rating: 0,
  reviewCount: 0,
  lastUpdated: '2026-10-27',
  highlights: [
    {
      id: 'databases',
      text: 'Relational databases'
    },
    {
      id: 'templates',
      text: 'Template gallery'
    },
    {
      id: 'collaboration',
      text: 'Real-time collaboration'
    }
  ],
  platforms: [
    'web',
    'mac',
    'windows',
    'ios',
    'android'
  ],
  features: [
    {
      id: '1',
      title: 'Docs and wikis',
      description: 'Write, structure and share documents with nested pages.',
      icon: 'file-text'
    },
    {
      id: '2',
      title: 'Databases',
      description: 'Track work in tables, boards, calendars and timelines.',
      icon: 'database'
    },
    {
      id: '3',
      title: 'Collaboration',
      description: 'Comment, mention teammates and edit pages together.',
      icon: 'users'
    }
  ],
}
```

### Язык

Все строковые поля — **английский**: `name`, `tagline`, `description`, `pricingDescription`, `highlights[].text`, `features[].title`, `features[].description`, `tags`, а также `overview` в файле описания. Каталог ориентирован на англоязычный SEO; смешение языков в данных недопустимо.

### Значения полей

- `overview` — всегда пустая строка `''`: текст живёт в `app/data/toolContent/{slug}.ts`.
- `categories` — только id из `TOOL_CATEGORIES` (`ai`, `analytics`, `communication`, `community`, `crm`, `design`, `ecommerce`, `education`, `finance`, `hr`, `marketing`, `media`, `productivity`, `sales`, `security`, `seo`, `web-development`). Список сверять с файлом: он может пополниться.
- `pricing` — только `'Free' | 'Freemium' | 'Paid'` (тип `ToolPricing`).
- `platforms` — только реальные платформы инструмента, значения из union `ToolPlatform`.
- `features` — ровно 3; `icon` — имя из `LUCIDE_ICONS` без префикса `lucide:`. Несуществующую иконку не выдумывать (AGENTS.md правило 11) — это ошибка типа `LucideIcon`.
- `highlights` — 3–4 пункта; `id` — короткий kebab-case, уникальный в пределах инструмента.
- `tags` — 5–8 штук, строчные латиница и дефис, описывают функциональность, а не бренд.
- `rating: 0` и `reviewCount: 0` — всегда. Причина: у проекта нет источника отзывов, цифры выдумывать нельзя; блок рейтинга в `ToolCard.vue` сейчас закомментирован, а фича оценок и отзывов только планируется.
- `affiliateUrl: null`, `featured: false`.
- `lastUpdated` — текущая дата в формате `YYYY-MM-DD`.
- `logo` — `/images/tool-logo/{slug}.webp`, даже если файла изображения ещё нет.

## Шаг 4. Файл описания `app/data/toolContent/{slug}.ts`

```typescript
import type { ToolContent } from '~/types/toolContent'

export const notionContent: ToolContent = {
  overview: `Notion is a connected workspace that combines notes, documents, wikis, tasks and databases in one tool...

[800–1200 слов, абзацы, без markdown-разметки]`
}
```

- Имя экспорта — camelCase от slug + `Content`. Для slug, начинающегося с цифры, использовать словесную форму: файл `./1password` экспортирует `onePasswordContent`.
- Точки с запятой не ставить (AGENTS.md правило 1).
- Текст пишется внутри template literal: экранировать backticks (`` \` ``) и последовательности `${`, иначе файл не соберётся.
- Объём 800–1200 слов, английский язык, структура: что это и для кого → ключевые возможности → отличия от конкурентов → тарифы и реальные цены → ограничения → кому подходит и кому нет → сравнение с альтернативами.
- Без маркетинговых клише, конкретно, с проверяемыми фактами. Не уверен в факте (цена, лимит, платформа) — не выдумывать и отметить в отчёте как требующий проверки.

## Шаг 5. Регистрация в `app/data/toolContent/index.ts`

Файл содержит блоки импортов с комментариями-секциями (`// non-partner`, `// power cm`, `// from google SEO` и т.п.). Новый импорт добавлять в подходящую по смыслу секцию либо в конец списка импортов.

Реестр — плоский объект, ключ равен slug:

```typescript
export const toolContent = {
  // ...существующие записи
  notion: notionContent,
}
```

- Slug, начинающийся с цифры, — ключ в кавычках: `'1password': onePasswordContent,`
- `getToolContent()` не изменять: он уже читает этот объект и используется в `app/composables/useTools.ts`.
- Массива описаний в проекте нет — только объект `toolContent`.

## Шаг 6. Валидация и проверка

Проверить по списку:

- [ ] slug уникальны, строчные, без дефисов
- [ ] id не повторяются и продолжаются от максимального
- [ ] все категории существуют в `TOOL_CATEGORIES`
- [ ] все иконки существуют в `LUCIDE_ICONS`
- [ ] каждое поле интерфейса `Tool` заполнено
- [ ] каждый новый slug зарегистрирован в объекте `toolContent`
- [ ] все строковые значения на английском
- [ ] `overview` содержит 800+ слов
- [ ] в TS-коде нет точек с запятой

Затем обязательно прогнать сборку:

```bash
npm run build
```

Что нужно знать о проверках:

- `npm run build` — единственная рабочая проверка в проекте. Ловит синтаксические ошибки, неразрешённые импорты, дубли ключей в реестре `toolContent`.
- `npx nuxi typecheck` сейчас нерабочий: `vue-tsc 3.3.11` падает с `ERR_PACKAGE_PATH_NOT_EXPORTED` на `typescript 7.0.2` (нет экспорта `./lib/tsc`). Не полагаться на него и не чинить установкой зависимостей без явного запроса пользователя (AGENTS.md правило 26).
- Сборка **не проверяет типы**, поэтому выдуманное имя иконки (`LucideIcon`) или несуществующий id категории (`ToolCategory`) пройдут молча и сломают рендер. Единственная защита — grep-сверка с `app/types/lucideIcons.ts` и `app/constants/tool-categories.ts` из чек-листа выше.
- Скриптов `lint` и `test` в `package.json` нет — не запускать `npm run lint` / `npm test`, их не существует.

Если сборка падает — исправить причину и прогнать снова. Сообщать об успехе только после фактически зелёного вывода; при непройденной проверке сказать об этом прямо.

## Шаг 7. Отчёт

Действия выполнять инструментами (`write_file`, `edit`), а не печатью кода в чат. Объекты данных и импорты в ответ не дублировать — они уже в репозитории.

В ответе коротко:

1. Сколько инструментов добавлено и какой диапазон id
2. Сколько файлов создано в `app/data/toolContent/` и что изменены `app/data/tools.ts` и `app/data/toolContent/index.ts`
3. Результат `npm run build` — зелёный или с ошибками
4. Предупреждения: спорный `pricing`, непроверенные цены и лимиты, инструменты с неочевидным набором платформ, slug'ы, для которых пользователь ещё не добавил логотип

Разбивать ответ на части по числу инструментов не нужно — достаточно сводки.

## Обработка ошибок

- Не хватает контекста о структуре, формате, категориях или последнем id → прочитать репозиторий, а не спрашивать пользователя.
- Неоднозначна сама задача (например, инструмент подходит под две категории с разной семантикой, или данные о ценах противоречивы) → задать вопрос.
- Не выдумывать несуществующие иконки, категории, пути к файлам и поля интерфейса (AGENTS.md правила 11–17).
- Не изменять код, не относящийся к добавлению инструментов (AGENTS.md правило 27).
