# SPEC: writing a ToolDB comparison data file

You are writing TypeScript data files for an existing Nuxt 4 SEO catalog (tooldb.org).
Pages, routes, components, SEO config and sitemap ALREADY EXIST and are driven by these
data files. You write ONLY the data file(s) assigned to you.

## Hard boundaries

- CREATE only the assigned files under `app/data/comparison/{slug}.ts`.
- DO NOT edit `app/data/comparison/index.ts` (registration is done centrally afterwards).
- DO NOT edit any page, component, composable, SEO config, constant, type, or `app/data/tools.ts`.
- DO NOT run `npm run build`, `npm install`, git commands, or any validation script. The
  orchestrator validates and builds centrally. Writing the files correctly is your whole job.
- DO NOT create, download or stub images.

## Read before writing

1. `/Users/cata/Work/tooldb/app/data/comparison/monday-vs-notion-vs-basecamp.ts` — the canonical
   3-tool reference. Match its structure, field order, indentation (2 spaces), quoting and tone exactly.
2. `/Users/cata/Work/tooldb/app/types/comparison.ts` — the authoritative interface.
3. Your assigned grounding file(s): `/Users/cata/Work/tooldb/.qwen/tmp/grounding/{slug}.txt`.
   These contain the REAL catalog record for each tool: name, tagline, description, pricing model,
   pricingDescription (real plan names and prices), categories, tags, website, feature titles.
4. `/Users/cata/Work/tooldb/.qwen/tmp/icon-whitelist.txt` — the ONLY icon names you may use.

## File skeleton (exact field order, 2-space indent, single quotes, trailing commas, NO semicolons)

```typescript
import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['<slug1>', '<slug2>', '<slug3>'] as const

export const <exportName>: ComparisonPageData = {
  slug: '<comparison-slug>',
  title: '...',
  description: '...',
  category: ['<cat1>'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: { title: 'At a glance', description: '...' },

  textOverview: { title: '...', paragraphs: [ /* exactly 7 */ ] },

  differences: { title: 'Key differences', description: '...', items: [ /* 13-20 */ ] },

  prosAndCons: [ /* exactly 3 blocks, same order as comparisonTools */ ],

  textOverall: { title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses', paragraphs: [ /* 5-6 */ ] },

  verdict: { title: 'Which one should you choose?', description: '...' },
}
```

Tool slugs in `comparisonTools` MUST be the exact slugs from the grounding file, in the same order.

## Field requirements

| Field | Requirement |
|---|---|
| `slug` | The comparison slug given in your assignment. Also the file name. |
| `title` | `'{BrandA} vs {BrandB} vs {BrandC}: Best {thing} in 2026?'` — brands in OFFICIAL casing/spelling (e.g. `monday.com`, `Bolt.new`, `Adobe Firefly`, `GitHub Copilot`, `15Five`, `tawk.to`), not the slug form. |
| `description` | **34–38 words.** Shape: what is compared and the key philosophical difference → `We compare A, B and C on {4–5 criteria} to help you {decide} in 2026.` |
| `category` | Array of **1–2** slugs from this closed list only: `ai`, `analytics`, `communication`, `community`, `crm`, `design`, `ecommerce`, `education`, `finance`, `hr`, `marketing`, `media`, `productivity`, `sales`, `security`, `seo`, `web-development`. Prefer the categories already present in the grounding records. |
| `date` | `'October 29, 2026'` for every file. |
| `readTime` | `'{N} min read'`, N = round(total page words / 200), clamped to 12–15. |
| `tools` | The local `comparisonTools` constant — never an inline array. |
| `overview.title` | `'At a glance'` |
| `overview.description` | One sentence: `'A quick side-by-side overview of how {A, B and C} compare across {4 criteria} — before we dive into the details.'` |
| `textOverview.title` | `'{Three} Philosophies of {topic}: How We Compared {A, B and C}'` |
| `textOverview.paragraphs` | **Exactly 7**, 640–990 words total (~90–140 each). Mandatory arc: (1) the three philosophies and market positioning; (2) testing methodology — identical test scenario, measured task times, three-year total cost of ownership, interviews with practitioners, analysis of G2/Capterra reviews; (3) the core mental-model difference; (4) the target-audience difference, incl. that mature teams often run two tools in parallel; (5) pricing with concrete plan names and dollar figures from the grounding data; (6) the sharpest functional divergence; (7) `So where does each platform genuinely shine?` + a rule of thumb. |
| `differences.title` | `'Key differences'` |
| `differences.description` | `'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your {team\|workflow\|business}.'` |
| `differences.items` | **13–20** rows. Each: `feature` (sentence case), `icon` (from whitelist, no prefix), `values` with **exactly one entry per tool, keyed ONLY via `[comparisonTools[N]]:`**, 8–20 words per value. First row: `'Core philosophy'` (icon `lightbulb`) or `'Target audience'` (icon `target`). Last row: **always** `'Best for'` with icon `'target'`. Must include somewhere in the middle: `'Ease of use'` (`mouse-pointer-click`), `'Pricing (entry paid plan)'` (`dollar-sign`), `'Free tier'` (`users`), `'AI features'` (`sparkles`), `'Integrations'` (`puzzle`). |
| `prosAndCons` | Exactly one block per tool, in `comparisonTools` order, `slug: comparisonTools[N]`. `pros`: 5–6 items. `cons`: 5–6 items. No trailing period. Specific with numbers (`'Per-seat pricing scales quickly — 20-person teams on Standard cost $240/mo'`), never generic filler. `cons` must be real criticisms, not softened `pros`. |
| `textOverall.title` | `'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses'` |
| `textOverall.paragraphs` | **5–6**, 420–770 words total. Arc: (1) no universal winner, but a correct choice per team shape; (2..N) one paragraph per tool — `Where X deserves praise is … Where it draws criticism is …` + which competitor poaches its users; (penultimate) the 2026 trend — usually AI convergence or two-tool stacks; (last) `Looking ahead…` + rule of thumb `if you need X, start with Y`. |
| `verdict.title` | `'Which one should you choose?'` |
| `verdict.description` | **99–208 words**, single paragraph. `'Choose {A} if … — ideal for {audience}. Choose {B} if … — ideal for {audience}. Choose {C} if … — ideal for {audience}.'` + a closing sentence about pairing two tools when the team spans different scenarios. |

## Language, style, SEO

- ALL strings in **English**. This catalog is English-SEO-first; no mixed languages.
- Write so both search engines and AI answer engines (ChatGPT, Perplexity, Gemini, Copilot) can
  lift clean, self-contained, quotable facts: name the tools explicitly inside paragraphs rather than
  relying on pronouns, state concrete plan names, prices, limits and seat counts, and make each
  paragraph standalone-useful. Direct-answer phrasing (`X is the strongest choice for …`) is good.
- Concrete over marketing cliché: real tariff names, request/seat/storage limits, integration counts.
- Use the real prices from the grounding `pricingDescription`. Do NOT invent checkable facts
  (prices, limits, release dates, funding). If a number is not in the grounding data and you are not
  confident, write a qualitative statement instead of a fabricated figure.
- Em dash `—` (as in the reference file), never `--`.
- Plain text inside strings only — no markdown, no bold, no lists, no HTML.
- Escape apostrophes in single-quoted strings: `team\'s`, `37signals\'`.
- No semicolons anywhere. No commented-out code. No unused imports.
- Backticks are NOT needed — use single-quoted strings for everything (the reference file does).

## Self-check before you finish (do this in your head / by re-reading your file)

- [ ] `comparisonTools` slugs match the grounding file exactly, same order
- [ ] export name matches the assignment exactly
- [ ] every `icon` appears in `icon-whitelist.txt`
- [ ] every `category` value is in the closed list above
- [ ] `differences.items` 13–20, last is `'Best for'`/`target`, every `values` object has exactly
      3 keys written as `[comparisonTools[0]]`, `[comparisonTools[1]]`, `[comparisonTools[2]]`
- [ ] `prosAndCons` has exactly 3 blocks in tool order, 5–6 pros and 5–6 cons each
- [ ] `textOverview.paragraphs.length === 7`; `textOverall.paragraphs.length` is 5 or 6
- [ ] `description` 34–38 words; `verdict.description` 99–208 words
- [ ] no semicolons, 2-space indent, single quotes, trailing commas
- [ ] all content English

## Report back

Reply with one short line per file: `{slug} — {items} rows, {pros}/{cons} per tool, ~{words} words` plus
any fact you could not verify from the grounding data. Do not paste file contents.
