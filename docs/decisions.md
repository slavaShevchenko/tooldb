# Architecture Decisions

## 2026-07-14

### Project initialized

Nuxt 4 project created.

---

### Package manager

Decision:

Use npm.

Reason:

The team is already familiar with npm.
The difference in performance compared to pnpm is not critical for this project.

---

### Node.js version

Decision:

Use Node.js 24 LTS.

Reason:

Latest LTS with long-term support.

---

### Repository

Decision:

Single repository.

Reason:

The project is small enough to keep frontend, backend and API in one codebase.

---

### Architecture

Decision:

Monolithic Nuxt application.

Reason:

Avoid unnecessary complexity during the early stages.

---

### Development philosophy

Decision:

The project should be developed as a production product rather than a pet project.

Reason:

Architectural decisions made early will determine the long-term maintainability of the project.

---

### Styling

Decision:

Use SCSS with scoped styles instead of Tailwind CSS.

Reason:

The project aims to be maintainable for many years.
Component styles are easier to read, navigate and refactor than long utility-class chains.
CSS Variables will be used to build a reusable design system with light and dark themes.

---

### Project structure

Decision

Follow the default Nuxt project structure.

Reason

Following framework conventions makes the project easier to maintain and reduces the learning curve for new contributors.

---

### Folder creation

Decision

Do not create directories before they are needed.

Reason

The project structure should reflect the current state of the codebase rather than future ideas.

---

### Components

Decision

Avoid generic folders such as `common`.

Reason

Component grouping should be based on business domains rather than ambiguous names.

---

### Architecture process

Decision

Architecture decisions are documented before implementation whenever possible.

Reason

Documenting decisions early makes the project easier to maintain and helps avoid accidental architectural drift.

---

### Nuxt Auto Imports

Decision

Use Nuxt auto imports for components, composables and Vue APIs.

Reason

Auto imports are part of the Nuxt ecosystem and improve developer experience without sacrificing maintainability.

Avoid overriding framework conventions unless there is a strong technical reason.