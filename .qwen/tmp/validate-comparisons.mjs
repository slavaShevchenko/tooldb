// Central validator for app/data/comparison/*.ts
// Usage: node .qwen/tmp/validate-comparisons.mjs [slug ...]
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const ROOT = '/Users/cata/Work/tooldb'
const DIR = path.join(ROOT, 'app/data/comparison')

const toolSlugs = new Set(
  [...fs.readFileSync(path.join(ROOT, 'app/data/tools.ts'), 'utf8').matchAll(/^    slug: '([a-z0-9-]+)',\n    name:/gm)].map(m => m[1])
)
const icons = new Set(
  [...fs.readFileSync(path.join(ROOT, 'app/types/lucideIcons.ts'), 'utf8').matchAll(/"([a-z0-9-]+)"/g)].map(m => m[1])
)
const validCategories = new Set(
  [...fs.readFileSync(path.join(ROOT, 'app/data/categories.ts'), 'utf8').matchAll(/^    slug: '([a-z0-9-]+)',/gm)].map(m => m[1])
)

const planned = JSON.parse(fs.readFileSync(path.join(ROOT, '.qwen/tmp/manifest.json'), 'utf8')).map(m => m.slug)
const wanted = process.argv.slice(2).length ? process.argv.slice(2) : planned

const words = s => String(s).trim().split(/\s+/).filter(Boolean).length
const camel = s => s.split('-').map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1))).join('')
const expName = slug => {
  const parts = slug.split('-vs-')
  return parts.map((p, i) => (i === 0 ? camel(p) : 'Vs' + camel(p)[0].toUpperCase() + camel(p).slice(1))).join('')
}

let fail = 0
let ok = 0
const problems = []

function load(file, src) {
  const body = src
    .replace(/^import type .*$/gm, '')
    .replace(/^export const (\w+): ComparisonPageData =/m, 'const __data =')
    .replace(/\] as const/g, ']')
  const sandbox = { __out: null }
  vm.createContext(sandbox)
  vm.runInContext(body + '\n;__out = { data: __data, tools: comparisonTools }', sandbox, { filename: file })
  return sandbox.__out
}

for (const slug of wanted) {
  const errs = []
  const file = path.join(DIR, `${slug}.ts`)
  if (!fs.existsSync(file)) {
    problems.push([slug, ['FILE MISSING']])
    fail++
    continue
  }
  const src = fs.readFileSync(file, 'utf8')

  if (/;\s*$/m.test(src.replace(/'[^']*\\?[^\n]*/g, ''))) {
    const lines = src.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const stripped = lines[i].replace(/'[^']*'/g, '').replace(/"[^"]*"/g, '')
      if (/;\s*$/.test(stripped)) errs.push(`semicolon at line ${i + 1}`)
    }
  }
  if (!src.includes(`export const ${expName(slug)}: ComparisonPageData`)) errs.push(`export name is not ${expName(slug)}`)
  if (src.includes('\t')) errs.push('tab indentation found')
  if (/^      \S/m.test(src) === false && src.includes('    slug:')) { /* noop */ }

  let parsed
  try {
    parsed = load(file, src)
  } catch (e) {
    problems.push([slug, [`PARSE ERROR: ${e.message}`]])
    fail++
    continue
  }
  const { data: d, tools } = parsed

  // tools
  if (!Array.isArray(tools) || tools.length < 2 || tools.length > 4) errs.push(`comparisonTools length ${tools?.length}`)
  else for (const t of tools) if (!toolSlugs.has(t)) errs.push(`tool slug not in catalog: ${t}`)

  if (d.slug !== slug) errs.push(`slug field '${d.slug}' != filename '${slug}'`)
  if (d.title && !/in 2026\?$/.test(d.title)) errs.push(`title does not end with 'in 2026?': ${d.title}`)

  const dw = words(d.description)
  if (dw < 34 || dw > 38) errs.push(`description ${dw} words (need 34-38)`)

  if (!Array.isArray(d.category) || d.category.length < 1 || d.category.length > 2) errs.push(`category not 1-2 items`)
  else for (const c of d.category) if (!validCategories.has(c)) errs.push(`invalid category: ${c}`)

  if (!/^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/.test(d.date)) errs.push(`bad date: ${d.date}`)
  const rt = String(d.readTime).match(/^(\d+) min read$/)
  if (!rt) errs.push(`bad readTime: ${d.readTime}`)
  else if (+rt[1] < 12 || +rt[1] > 15) errs.push(`readTime ${rt[1]} out of 12-15`)

  if (JSON.stringify(d.tools) !== JSON.stringify(tools)) errs.push('tools field does not reference comparisonTools')

  // overview
  if (d.overview?.title !== 'At a glance') errs.push(`overview.title is '${d.overview?.title}'`)
  if (!d.overview?.description) errs.push('overview.description missing')

  // textOverview
  const to = d.textOverview?.paragraphs
  if (!Array.isArray(to)) errs.push('textOverview.paragraphs missing')
  else {
    if (to.length !== 7) errs.push(`textOverview has ${to.length} paragraphs (need exactly 7)`)
    const w = to.reduce((a, p) => a + words(p), 0)
    if (w < 640 || w > 990) errs.push(`textOverview ${w} words (need 640-990)`)
    to.forEach((p, i) => { if (words(p) < 40) errs.push(`textOverview paragraph ${i + 1} too short (${words(p)} words)`) })
  }

  // differences
  const items = d.differences?.items
  if (d.differences?.title !== 'Key differences') errs.push(`differences.title is '${d.differences?.title}'`)
  if (!Array.isArray(items)) errs.push('differences.items missing')
  else {
    if (items.length < 13 || items.length > 20) errs.push(`differences has ${items.length} items (need 13-20)`)
    const last = items[items.length - 1]
    if (last?.feature !== 'Best for' || last?.icon !== 'target') errs.push(`last difference row is '${last?.feature}'/'${last?.icon}' (need 'Best for'/'target')`)
    const first = items[0]
    if (!['Core philosophy', 'Target audience'].includes(first?.feature)) errs.push(`first difference row is '${first?.feature}' (need 'Core philosophy' or 'Target audience')`)
    const need = { 'Ease of use': 'mouse-pointer-click', 'Pricing (entry paid plan)': 'dollar-sign', 'Free tier': 'users', 'AI features': 'sparkles', 'Integrations': 'puzzle' }
    for (const [f, ic] of Object.entries(need)) {
      const row = items.find(i => i.feature === f)
      if (!row) errs.push(`missing required difference row '${f}'`)
      else if (row.icon !== ic) errs.push(`'${f}' icon is '${row.icon}' (need '${ic}')`)
    }
    items.forEach((it, idx) => {
      if (!icons.has(it.icon)) errs.push(`row ${idx + 1} '${it.feature}': icon '${it.icon}' NOT in LUCIDE_ICONS`)
      const keys = Object.keys(it.values || {})
      if (keys.length !== tools.length) errs.push(`row ${idx + 1} '${it.feature}': ${keys.length} values (need ${tools.length})`)
      for (const t of tools) if (!(t in (it.values || {}))) errs.push(`row ${idx + 1} '${it.feature}': missing key '${t}'`)
      for (const [k, v] of Object.entries(it.values || {})) {
        const vw = words(v)
        if (vw < 6 || vw > 24) errs.push(`row ${idx + 1} '${it.feature}' [${k}]: ${vw} words (need ~8-20)`)
      }
    })
    if (!src.includes('[comparisonTools[')) errs.push('difference values are not keyed via [comparisonTools[N]]')
  }

  // prosAndCons
  const pc = d.prosAndCons
  if (!Array.isArray(pc) || pc.length !== tools.length) errs.push(`prosAndCons has ${pc?.length} blocks (need ${tools.length})`)
  else pc.forEach((b, i) => {
    if (b.slug !== tools[i]) errs.push(`prosAndCons[${i}].slug '${b.slug}' != tools[${i}] '${tools[i]}'`)
    if (b.pros.length < 5 || b.pros.length > 6) errs.push(`prosAndCons[${i}] has ${b.pros.length} pros (need 5-6)`)
    if (b.cons.length < 5 || b.cons.length > 6) errs.push(`prosAndCons[${i}] has ${b.cons.length} cons (need 5-6)`)
    ;[...b.pros, ...b.cons].forEach(s => { if (/\.$/.test(s.trim())) errs.push(`prosAndCons[${i}] item ends with a period`) })
  })

  // textOverall
  const tov = d.textOverall?.paragraphs
  if (d.textOverall?.title !== 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses') errs.push(`textOverall.title wrong`)
  if (!Array.isArray(tov)) errs.push('textOverall.paragraphs missing')
  else {
    if (tov.length < 5 || tov.length > 6) errs.push(`textOverall has ${tov.length} paragraphs (need 5-6)`)
    const w = tov.reduce((a, p) => a + words(p), 0)
    if (w < 420 || w > 770) errs.push(`textOverall ${w} words (need 420-770)`)
  }

  // verdict
  if (d.verdict?.title !== 'Which one should you choose?') errs.push(`verdict.title is '${d.verdict?.title}'`)
  const vw = words(d.verdict?.description)
  if (vw < 99 || vw > 208) errs.push(`verdict.description ${vw} words (need 99-208)`)

  // key order sanity
  const keyOrder = ['slug', 'title', 'description', 'category', 'date', 'readTime', 'tools', 'overview', 'textOverview', 'differences', 'prosAndCons', 'textOverall', 'verdict']
  const actual = Object.keys(d)
  if (JSON.stringify(actual) !== JSON.stringify(keyOrder)) errs.push(`field order is [${actual.join(',')}]`)

  // non-english / markdown leakage
  const all = JSON.stringify(d)
  if (/[а-яА-ЯіїєґІЇЄҐ]/.test(all)) errs.push('contains Cyrillic characters')
  if (/\*\*|__|^- |^# |<\/?[a-z]+>/m.test(all.replace(/\\n/g, '\n'))) errs.push('contains markdown/HTML markup')
  if (/--/.test(all)) errs.push('contains "--" instead of em dash')

  if (errs.length) { problems.push([slug, errs]); fail++ } else { ok++ }
}

for (const [slug, errs] of problems) {
  console.log(`\n✗ ${slug}`)
  for (const e of errs) console.log(`    - ${e}`)
}
console.log(`\n=== ${ok} OK, ${fail} with problems, of ${wanted.length} checked ===`)
process.exit(fail ? 1 : 0)
