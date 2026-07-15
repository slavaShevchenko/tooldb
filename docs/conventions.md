# Development Conventions

## General

- Keep the project simple.
- Prefer readability over cleverness.
- Every new dependency must have a clear purpose.
- Do not create files or folders before they are needed.

---

## Git

- Use Conventional Commits.
- Keep commits focused.
- Main branch must always be deployable.

---

## Naming

Components

- PascalCase

Example

BaseButton.vue

ToolCard.vue

SearchInput.vue

Composables

- useXxx.ts

Example

useTheme.ts

useSearch.ts

Services

- domain.service.ts

Example

search.service.ts

Types

- camelCase

Example

search.ts

category.ts

Constants

- camelCase

Example

routes.ts

pagination.ts

---

## Styling

- Scoped SCSS
- CSS Variables
- Design Tokens
- Use rem whenever possible
- Avoid magic numbers

---

## Components

A component should have one responsibility.

Avoid large components.

Split components before they become difficult to understand.

---

## Imports

Use absolute imports whenever possible.

Example

~/components/base/BaseButton.vue

---

## Project Philosophy

Write code for the next developer.

Assume that future developer is yourself six months later.

---

## Nuxt Conventions

Follow Nuxt conventions whenever possible.

Use Nuxt auto imports for:

- Components
- Composables
- Vue APIs

Avoid disabling built-in framework features without a clear architectural reason.