# ToolDB Architecture

## Vision

ToolDB is an open catalog of digital products that helps users discover, compare and choose the best software for their needs.

The project is built with long-term scalability in mind. Every architectural decision should prioritize maintainability, SEO, performance and developer experience.

---

## Core Principles

- SEO first
- Server-side rendering
- Mobile first
- Accessibility
- Reusable components
- Clean architecture
- Strong typing
- No duplicated code
- Simplicity over complexity

---

## Tech Stack

Frontend

- Vue 3
- Nuxt 4
- TypeScript
- SCSS
- CSS Variables

Backend

- Nuxt Server API

Database

- PostgreSQL (planned)
- Prisma ORM (planned)

Infrastructure

- Node.js 24 LTS
- npm
- GitHub
- Vercel (planned)

---

## Development Principles

- Every commit must leave the project in a working state.
- Every dependency must have a clear purpose.
- Avoid premature optimization.
- Discuss architecture before implementing large features.
- Prefer readability over cleverness.

---

## Styling Principles

- Scoped SCSS
- CSS Variables
- Design Tokens
- Component-driven styling
- Minimal global styles
- No Tailwind CSS
- No CSS frameworks

---

## Component Philosophy

Every component owns its markup, styles and behavior.

A component should be understandable without opening unrelated files.

---

## Project Structure

The project follows the default Nuxt directory structure whenever possible.

Only directories that are actively used should exist.

Avoid creating folders "for the future".

---

## Domain Model

The domain model should evolve together with the product.

Business entities are designed only when requirements become clear.

Avoid premature abstractions.

---

## Development Philosophy

The project grows only when necessary.

New folders, dependencies and abstractions are introduced only when they solve a real problem.