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

### sora-vs-kling-ai-vs-haiper
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/sora-vs-kling-ai-vs-haiper.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/sora-vs-kling-ai-vs-haiper.ts
- export:    `export const soraVsKlingAiVsHaiper`
- tools:     `const comparisonTools = ['sora', 'klingai', 'haiper'] as const`

### suno-vs-udio-vs-stable-audio
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/suno-vs-udio-vs-stable-audio.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/suno-vs-udio-vs-stable-audio.ts
- export:    `export const sunoVsUdioVsStableAudio`
- tools:     `const comparisonTools = ['suno', 'udio', 'stableaudio'] as const`

### playht-vs-resemble-ai-vs-wellsaid-labs
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/playht-vs-resemble-ai-vs-wellsaid-labs.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/playht-vs-resemble-ai-vs-wellsaid-labs.ts
- export:    `export const playhtVsResembleAiVsWellsaidLabs`
- tools:     `const comparisonTools = ['playht', 'resembleai', 'wellsaidlabs'] as const`

### opusclip-vs-vizard-vs-munch
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/opusclip-vs-vizard-vs-munch.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/opusclip-vs-vizard-vs-munch.ts
- export:    `export const opusclipVsVizardVsMunch`
- tools:     `const comparisonTools = ['opusclip', 'vizard', 'munch'] as const`

### adobe-firefly-vs-leonardo-ai-vs-ideogram
- grounding: /Users/cata/Work/tooldb/.qwen/tmp/grounding/adobe-firefly-vs-leonardo-ai-vs-ideogram.txt
- write:     /Users/cata/Work/tooldb/app/data/comparison/adobe-firefly-vs-leonardo-ai-vs-ideogram.ts
- export:    `export const adobeFireflyVsLeonardoAiVsIdeogram`
- tools:     `const comparisonTools = ['adobefirefly', 'leonardoai', 'ideogram'] as const`

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
