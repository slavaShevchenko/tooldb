# Development Conventions

## General

- Keep the project simple.
- Prefer readability over cleverness.
- Every new dependency must have a clear purpose.
- Do not create files or folders before they are needed.
- Follow existing project patterns before introducing new ones.
- Prefer consistency over personal preference.
- Keep changes focused and atomic.
- Never modify unrelated code.

---

## Git

- Use Conventional Commits.
- Keep commits focused.
- Main branch must always be deployable.

---

## Naming

### Components

- PascalCase

Examples:

- BaseButton.vue
- ToolCard.vue
- SearchInput.vue

### Composables

- useXxx.ts

Examples:

- useTheme.ts
- useSearch.ts

### Services

- domain.service.ts

Examples:

- search.service.ts
- tools.service.ts

### Types

- camelCase

Examples:

- search.ts
- category.ts

### Constants

- camelCase

Examples:

- routes.ts
- pagination.ts

---

## Vue

- Use `<script setup>`.
- Use Composition API only.
- Never use the Options API.
- Prefer `const` over `let`.
- Prefer arrow functions.
- Avoid unnecessary watchers.
- Prefer computed properties over duplicated state.

---

## Components

- A component should have a single responsibility.
- Keep components focused and easy to understand.
- Reuse existing Base components whenever possible.
- Split components before they become difficult to maintain.
- Do not duplicate UI patterns.

---

## Styling

- Scoped SCSS.
- CSS Variables.
- Design Tokens.
- Use `rem` whenever possible.
- Avoid magic numbers.
- Never hardcode colors.
- Never hardcode spacing.
- Never hardcode border radius.
- Never hardcode shadows.

---

## Imports

Use absolute imports whenever possible.

Example:

```ts
import BaseButton from '~/components/base/BaseButton.vue'
```

Prefer imports from project aliases instead of relative paths.

---

## Nuxt Conventions

Follow Nuxt conventions whenever possible.

Use Nuxt auto-imports for:

- Components
- Composables
- Vue APIs

Avoid disabling built-in framework features without a clear architectural reason.

---

## Code Style

- Keep functions short.
- Prefer early returns.
- Avoid deeply nested conditions.
- Remove unused code.
- Avoid commented-out code.
- Write self-explanatory code before adding comments.
