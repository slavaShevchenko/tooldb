# ToolDB Architecture

## Tech Stack

### Frontend

- Vue 3
- Nuxt 4
- TypeScript
- SCSS
- CSS Variables

### Backend

- Nuxt Server API

### Database

- PostgreSQL (planned)
- Prisma ORM (planned)

### Infrastructure

- Node.js 24 LTS
- npm
- GitHub
- Vercel (planned)

---

## Directory Structure

The project follows the default Nuxt directory structure whenever possible.

Main directories:

- app/
- assets/
- components/
- composables/
- constants/
- docs/
- layouts/
- pages/
- plugins/
- public/
- seo/
- server/
- services/
- types/
- utils/

Only directories that are actively used should exist.

Avoid creating folders "for the future".

---

## Application Layers

### Pages

- Route entry points.
- Compose page layout.
- Should remain thin.
- Should not contain business logic.

### Composables

- Business logic.
- Data transformations.
- Shared application logic.

### Components

- UI only.
- Rendering and user interaction.
- No business logic.
- No data fetching.

### Services

- API communication.

### Constants

- Shared constants.

### Types

- Shared TypeScript types.

### SEO

- Page metadata.
- Structured SEO configuration.

---

## Data Flow

The preferred application flow is:

Page

↓

Composable

↓

Component

Business logic should not bypass composables.

---

## Development Principles

- Every commit must leave the project in a working state.
- Every dependency must have a clear purpose.
- Avoid premature optimization.
- Prefer readability over cleverness.
- Prefer extending existing patterns over introducing new ones.
- Discuss architecture before implementing large features.
- Keep changes atomic.
- Do not modify unrelated code.
- Read nearby code before implementing new functionality.

---

## Component Philosophy

- Every component has a single responsibility.
- Components should be reusable whenever possible.
- Business logic belongs in composables.
- Components should focus on rendering and user interaction.
- Avoid tightly coupled components.

---

## Reuse Priority

Before creating new code, always check for an existing solution.

Priority:

1. Existing Base component
2. Existing domain component
3. Existing composable
4. Create a new implementation

---

## Styling Principles

- Scoped SCSS
- CSS Variables
- Design Tokens
- Component-driven styling
- Minimal global styles
- No Tailwind CSS
- No CSS frameworks

Never hardcode:

- colors
- spacing
- border radius
- shadows

Prefer design tokens and CSS variables.

---

## Domain Model

The domain model should evolve together with the product.

Business entities are introduced only when requirements become clear.

Avoid premature abstractions.

---

## Development Philosophy

The project grows only when necessary.

New folders, dependencies and abstractions are introduced only when they solve a real problem.

Consistency is preferred over cleverness.

Simple solutions are preferred over complex ones.

---

## SEO

SEO is treated as a dedicated application layer.

SEO configuration is organized by business domains rather than by page implementation.

All pages apply metadata exclusively through the `useSeo()` composable.

---

## AI Development

AI assistants should:

- inspect surrounding files before making changes
- follow existing architecture and coding patterns
- reuse existing components before creating new ones
- avoid introducing new abstractions without a clear benefit
- avoid modifying unrelated files
- keep changes focused and atomic
- prefer consistency over personal preference