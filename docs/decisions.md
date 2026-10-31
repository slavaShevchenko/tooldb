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

---

## Rating Storage

### Status

Accepted

### Context

User ratings need a datastore that survives serverless invocations, supports atomic counters and per-voter records, and has a usable free tier.

The original task description suggested Vercel KV, but that product was deprecated in 2024 and existing stores were migrated to Upstash. `@vercel/kv` is end-of-life and should not be adopted for new work.

### Decision

Store ratings in Upstash Redis and talk to it through the Upstash REST API with plain `fetch`.

No Redis client, no ORM and no new npm dependency.

Layout: a `rating:{slug}` hash holding `sum` and `count`, plus one `rating:{slug}:v:{voterId}` string per voter. The average is derived, never stored. There is no set of voters.

Aggregates are cached per slug for 60 seconds with Nitro's `defineCachedFunction` (`swr: false`, invalidated through `shouldInvalidateCache`) to keep latency and the monthly command quota down.

Every Redis call has a 1.5 second timeout and returns `null` on failure, so pages render normally without ratings when the storage is unreachable or unconfigured.

### Consequences

- Zero new dependencies and no SDK surface to maintain.
- Changing a vote is a single `HINCRBY`, so there is no read-modify-write race.
- Voter membership scales with the number of keys instead of one unbounded collection.
- The REST transport adds overhead compared with a persistent connection, which is why the aggregate cache exists.
- Visitors other than the voter can see an average that is up to 60 seconds old.
- The cache lives per serverless instance, so invalidation only affects the instance that served the write.

---

## Published Ratings and AggregateRating Markup

### Status

Accepted

### Context

`app/data/tools.ts` carries editorial `rating` and `reviewCount` fields. They are placeholders invented for sorting `trendingTools`; there is no review source behind them.

Publishing them as Schema.org `AggregateRating` would be fabricated markup, which search engines treat as a spam signal.

### Decision

Only votes stored in Redis are ever published.

`useSoftwareApplicationJsonLd()` accepts an optional rating aggregate and emits `aggregateRating` exclusively when the vote count is greater than zero, starting from the first real vote. The aggregate is resolved during SSR so the markup is present in the initial HTML.

The editorial `rating` and `reviewCount` fields stay in the data model for sorting only and must never be wired into structured data or the UI.

### Consequences

- New and low-traffic tools legitimately render without stars in search results.
- The markup is defensible under review-snippet guidelines.
- Tool pages must not be cached with `routeRules` `swr` or `isr`: the SSR payload contains the requesting visitor's own vote.
- Any future "editor's rating" concept needs a separate vocabulary (for example `Review` with an explicit author) rather than `AggregateRating`.

---

## Voter Identity and Abuse Protection

### Status

Accepted

### Context

Ratings are anonymous and public, which makes them a target for vote stuffing. The project has no authentication and no Cloudflare challenge on the tool pages.

### Decision

Identify voters with an `httpOnly`, `SameSite=Lax` cookie containing a server-generated UUID, issued on the first successful vote and valid for one year.

Layer lightweight abuse controls on top of it: integer score validation, slug validation against the catalog, a minimum time-on-page of 500 ms with a 24 hour maximum, per-IP rate limits (5 votes per two-minute window and 10 per day) and a hidden honeypot field.

Rate-limit keys are derived from an HMAC-SHA256 of `ip|user-agent` with a server-side secret, truncated to 32 hex characters. Raw IP addresses are never stored.

No CAPTCHA is used.

### Consequences

- One vote per browser, not per person: clearing cookies or switching device grants a fresh vote. Real deduplication requires authentication.
- Users behind a shared NAT (offices, universities) share one rate-limit budget.
- The honeypot and the timing check filter naive bots without any user friction.
- Determined attackers are only slowed down, not stopped. Adding Cloudflare Turnstile later is the escalation path and needs no data-model change.
- Hashing IP and User-Agent is personal data processing and should be disclosed in the privacy policy.