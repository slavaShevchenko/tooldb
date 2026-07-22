# ToolDB AI Instructions

This repository contains project documentation that defines the product, architecture and development conventions.

Before making changes, always read:

1. `docs/project.md`
2. `docs/architecture.md`
3. `docs/conventions.md`
4. `docs/decisions.md`
5. `docs/roadmap.md`

These documents are the single source of truth.

---

## Visual References

Visual mockups are stored in `docs/design/`.

Before implementing or modifying UI, review the relevant visual references.

Treat them as design guidance rather than pixel-perfect specifications.

When visual references conflict with the documented architecture or design system, prioritize maintainability, accessibility and reusable components.

---

## General Rules

- Follow the documented architecture and conventions.
- Prefer consistency over personal preference.
- Reuse existing patterns before introducing new ones.
- Keep changes focused and atomic.
- Do not modify unrelated code.
- Do not introduce new dependencies without a clear reason.
- Discuss significant architectural changes before implementing them.
- Respect the current milestone described in `docs/roadmap.md`.
- If documentation conflicts with the existing code, ask for clarification instead of guessing.

---

## Working with the Codebase

Before implementing a new feature:

- Inspect nearby files.
- Follow existing naming conventions.
- Reuse existing components and composables whenever possible.
- Avoid introducing new abstractions unless they solve a real problem.

---

Never make assumptions about missing domain data.

If implementation requires new business fields,
stop and ask before introducing temporary logic.

---

Do not simplify a visual reference only because an existing component is easier to reuse.

If a reusable component cannot satisfy the design, propose extending it.

---

Prefer extending reusable components over creating one-off implementations.