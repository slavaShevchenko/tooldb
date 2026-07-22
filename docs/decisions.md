# Architecture Decisions

This document records significant architectural decisions made during the development of ToolDB.

Only long-term decisions that affect the project's architecture, maintainability or development process should be documented here.

---

## Monolithic Application

### Status

Accepted

### Context

The project is currently small and developed by a single team.

### Decision

Use a single Nuxt application containing frontend, backend and server API.

### Consequences

- Simple project structure.
- Easy local development.
- No unnecessary complexity.
- Can be split into multiple services in the future if required.

---

## Nuxt Project Structure

### Status

Accepted

### Context

Nuxt provides a well-established project structure that is familiar to most Vue developers.

### Decision

Follow the default Nuxt directory structure whenever possible.

Avoid creating custom folders unless there is a clear architectural reason.

### Consequences

- Easier onboarding.
- Better compatibility with Nuxt ecosystem.
- Less project-specific complexity.

---

## Folder Creation

### Status

Accepted

### Context

Premature abstractions often lead to unused folders and unnecessary complexity.

### Decision

Create directories only when they are required by the current implementation.

Avoid creating folders for future ideas.

### Consequences

The project structure always reflects the current application.

---

## Component Organization

### Status

Accepted

### Context

Components naturally belong to different business domains.

### Decision

Organize components by purpose or business domain.

Examples:

- base
- layout
- home
- tool
- category

Avoid generic folders such as `common`, `shared` or `misc`.

### Consequences

Components remain easy to locate and the structure scales naturally.

---

## Base Components

### Status

Accepted

### Context

Many interface elements are reused across the application.

### Decision

Reusable UI elements belong in `components/base`.

Examples include:

- BaseButton
- BaseInput
- BaseCard

Business-specific components should never be placed inside the base directory.

### Consequences

The design system remains centralized and reusable.

---

## Styling System

### Status

Accepted

### Context

The project requires a maintainable styling solution with support for themes and long-term scalability.

### Decision

Use:

- Scoped SCSS
- CSS Variables
- Design Tokens

Do not use Tailwind CSS or other utility-first CSS frameworks.

### Consequences

- Styles remain colocated with components.
- Themes are implemented through CSS variables.
- Styling remains framework-independent.

---

## Design Tokens

### Status

Accepted

### Context

Consistent spacing, colors and sizing improve maintainability.

### Decision

Use design tokens instead of hardcoded values whenever possible.

Examples include spacing, colors, border radius and shadows.

### Consequences

The design system remains consistent and easy to evolve.

---

## Icons

### Status

Accepted

### Context

The project requires a consistent icon system that supports theming and minimizes maintenance.

### Decision

Use `@nuxt/icon` with the Lucide icon set.

Prefer framework-provided icons over storing local SVG files.

Only create custom SVG icons when customization is not possible.

### Consequences

- No manual SVG management.
- Automatic theming through `currentColor`.
- Consistent icon style across the application.

---

## Nuxt Auto Imports

### Status

Accepted

### Context

Auto imports are part of the Nuxt ecosystem and improve developer experience.

### Decision

Use Nuxt auto imports for:

- Components
- Composables
- Vue APIs

Avoid overriding framework conventions without a strong technical reason.

### Consequences

Cleaner code and better consistency with Nuxt best practices.

---

## SEO Architecture

### Status

Accepted

### Context

SEO is one of the fastest-growing parts of the application.

### Decision

Organize SEO configuration by business domains.

Use a single `useSeo()` composable as the only public API for applying page metadata.

Pages should never construct SEO metadata manually.

Future dynamic pages should use dedicated SEO builders.

Examples:

- `toolSeo()`
- `categorySeo()`
- `comparisonSeo()`

### Consequences

- Consistent SEO implementation.
- Centralized metadata management.
- Easy future expansion without changing page code.

---

## Development Process

### Status

Accepted

### Context

Architectural consistency is more important than short-term development speed.

### Decision

Document significant architectural decisions before implementation whenever possible.

Large architectural changes should be discussed before being introduced.

### Consequences

- Better long-term maintainability.
- Fewer accidental architectural inconsistencies.
- Easier collaboration between developers and AI assistants.