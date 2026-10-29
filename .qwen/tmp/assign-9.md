# Your assignment: 5 ToolDB comparison data files

You are contributing content to ToolDB (tooldb.org), an English SEO catalog of digital tools built with Nuxt 4.
We are adding 50 new "X vs Y vs Z" comparison pages. Pages, routes, Vue components, SEO config and sitemap
ALREADY EXIST and are driven purely by static TypeScript data files. Your job: author the 5 data files below.

This is a WRITING task, not research. You create real files in the repository.

## Read first (authoritative)

1. /Users/cata/Work/tooldb/.qwen/tmp/comparison-spec.md  <- exact structure, field rules, word counts, style, boundaries. FOLLOW IT LITERALLY.
2. /Users/cata/Work/tooldb/app/data/comparison/monday-vs-notion-vs-basecamp.ts  <- canonical 3-tool reference; match structure, tone, 2-space indent, quoting, depth.
3. /Users/cata/Work/tooldb/app/types/comparison.ts  <- the interface you must satisfy.
4. /Users/cata/Work/tooldb/.qwen/tmp/icon-whitelist.txt  <- the ONLY icon names allowed (pre-validated; anything else renders as an empty icon).

## Files to write

For each item: read the grounding file FIRST (it holds the REAL catalog record - actual plan names, actual
prices, actual feature titles; use those numbers instead of inventing any), then write the data file.

### testgorilla-vs-codility-vs-hackerrank
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/testgorilla-vs-codility-vs-hackerrank.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/testgorilla-vs-codility-vs-hackerrank.ts
- export:    `export const testgorillaVsCodilityVsHackerrank`
- tools:     `const comparisonTools = ['testgorilla', 'codility', 'hackerrank'] as const`

### ashby-vs-greenhouse-vs-lever
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/ashby-vs-greenhouse-vs-lever.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/ashby-vs-greenhouse-vs-lever.ts
- export:    `export const ashbyVsGreenhouseVsLever`
- tools:     `const comparisonTools = ['ashby', 'greenhouse', 'lever'] as const`

### lattice-vs-15five-vs-culture-amp
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/lattice-vs-15five-vs-culture-amp.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/lattice-vs-15five-vs-culture-amp.ts
- export:    `export const latticeVs15fiveVsCultureAmp`
- tools:     `const comparisonTools = ['lattice', '15five', 'cultureamp'] as const`

### oyster-vs-papaya-global-vs-multiplier
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/oyster-vs-papaya-global-vs-multiplier.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/oyster-vs-papaya-global-vs-multiplier.ts
- export:    `export const oysterVsPapayaGlobalVsMultiplier`
- tools:     `const comparisonTools = ['oyster', 'papayaglobal', 'multiplier'] as const`

### instantly-vs-smartlead-vs-mailshake
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/instantly-vs-smartlead-vs-mailshake.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/instantly-vs-smartlead-vs-mailshake.ts
- export:    `export const instantlyVsSmartleadVsMailshake`
- tools:     `const comparisonTools = ['instantly', 'smartlead', 'mailshake'] as const`

## Critical

- Tool slugs above are already verified to exist in the catalog. Use them VERBATIM and in the given ORDER.
  A wrong slug causes an SSR 500 that `npm run build` does NOT catch.
- These pages must rank in Google AND be cited by AI answer engines (ChatGPT, Perplexity, Gemini). Name tools
  explicitly inside paragraphs rather than using bare pronouns; state concrete plan names, prices and limits;
  phrase conclusions as directly quotable answers ("X is the strongest choice for ..."); be genuinely critical
  in `cons` - softened praise is worthless to a reader and to an LLM.
- Do NOT fabricate checkable facts (prices, limits, release dates, funding). If a figure is not in the grounding
  data and you are not confident, write a qualitative statement instead and flag it in your report.
- All strings English. No semicolons. Escape apostrophes as \' . Em dash (U+2014), never "--".

## Hard boundaries

- Create ONLY the 5 files listed above.
- Do NOT edit app/data/comparison/index.ts - registration happens centrally afterwards; editing it would
  conflict with 9 other agents running in parallel.
- Do NOT edit any page, component, composable, SEO config, constant, type, or app/data/tools.ts.
- Do NOT run npm run build, npm install, any git command, or any validation script. The orchestrator
  validates and builds centrally.
- Do NOT create, download or stub images.

## Report back (short)

One line per file: {slug} - {N} difference rows, {pros}/{cons} per tool, ~{words} words in
textOverview/textOverall, description {N} words, verdict {N} words.
Then list any fact you could not verify from the grounding data. Do NOT paste file contents.
