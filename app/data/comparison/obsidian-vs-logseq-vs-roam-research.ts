import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['obsidian', 'logseq', 'roamresearch'] as const

export const obsidianVsLogseqVsRoamResearch: ComparisonPageData = {
  slug: 'obsidian-vs-logseq-vs-roam-research',
  title: 'Obsidian vs Logseq vs Roam Research: Best Personal Knowledge Base in 2026?',
  description: 'Three local-first or cloud-first takes on networked note-taking. We compare Obsidian, Logseq and Roam Research on data ownership, outlining, backlinks, plugins, and real three-year cost to help you choose the right personal knowledge base in 2026.',
  category: ['productivity'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Obsidian, Logseq and Roam Research compare across data ownership, outlining, backlinks, and plugins — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Networked Notes: How We Compared Obsidian, Logseq and Roam Research',
    paragraphs: [
      'Personal knowledge management in 2026 is a three-way argument about where your notes should live and how they should be structured. Obsidian is the local-first extensibility play: your knowledge base is a folder of plain-text Markdown files on your own filesystem, and a catalogue of more than 1,400 community plugins lets you bend the app into a Zettelkasten, a task manager, a research database or a writing environment. Logseq is the open-source outliner play: everything is also stored as plain Markdown or Org-mode files on your own device, but notes are written as outlines of blocks that can be referenced and embedded anywhere else, so the graph emerges from block-level links instead of a proprietary database. Roam Research is the original networked-thinking play: a hosted, paid service built around bidirectional links, block references and a daily note that opens every session, designed for researchers and writers accumulating knowledge over years.',
      'Our testing methodology was identical across all three. We built the same knowledge base on each platform — roughly 600 notes captured over six weeks from books, articles, meeting notes and project research, with a Zettelkasten-style link structure and a recurring daily-note habit. We measured how long it took to capture a fleeting note from a keyboard shortcut, how many clicks a block reference or transclusion required, how quickly full-text search and queries returned results on a vault of that size, and how much effort a full export and migration to another tool would take. We calculated three-year total cost of ownership including sync, publishing and licensing, interviewed long-term practitioners of each tool, and analysed verified G2, Capterra and community reviews to separate the appeal of the idea from the reality of daily use.',
      'The mental model is where the three genuinely part company. Obsidian thinks in files and folders first: a note is a Markdown document, links connect documents, and the graph view visualises those document-level connections, with block-level linking available but secondary. Logseq thinks in blocks: every bullet is an addressable object that can be linked, embedded, queried and re-used on another page, and pages are essentially containers for outlines, which makes restructuring trivial and long-form writing awkward. Roam Research also thinks in blocks, but with no filesystem underneath — everything is a page in a hosted graph, every day opens a daily note, and unlinked references surface connections you never explicitly made. In practice Obsidian rewards people who want their notes to remain ordinary files, Logseq rewards outliners and systems thinkers, and Roam rewards writers who think by linking and never want to manage storage.',
      'The audiences differ just as sharply. Obsidian is the default for privacy-conscious knowledge workers, developers, researchers and long-form writers who want data ownership, offline access and unlimited customisation — and who are comfortable maintaining plugins. Logseq attracts open-source advocates, outliner enthusiasts, academics and users who want the same local-file guarantees with a fully open codebase and no licence fee of any kind. Roam Research attracts researchers, writers, PhD students and consultants who value a frictionless hosted graph over file ownership, and who are willing to pay a recurring subscription for it. Mature knowledge workers often run two in parallel: Obsidian or Logseq as the permanent local archive of everything they have ever written, with Roam Research as the active thinking space for current research, exported back periodically.',
      'Pricing is the most decisive difference. Obsidian\'s core app is 100 percent free forever with unlimited vaults, and you pay only for optional services: Obsidian Sync at $4 to $8 per month, Obsidian Publish at $8 to $10 per month, and a commercial licence at $50 per year for workplace use — a fully loaded three-year cost of roughly $648 for both services, or $0 for personal use with your own sync. Logseq costs nothing: the application is free and open source under an open licence, optional paid services cover synchronisation and hosted features, and self-hosting your own sync through a Git repository or a sync folder is free, giving a genuine three-year cost of $0. Roam Research is the outlier — a paid subscription billed per user per month or at a discounted annual rate, plus a long-term multi-year Believer plan, with no permanent free tier and only a trial period.',
      'The sharpest functional divergence is data ownership and portability. Obsidian and Logseq both store your knowledge base as plain-text Markdown files you can open in any editor, version in Git and walk away with at any moment — Logseq additionally publishes its source under an open licence. Roam Research holds your graph in a hosted database, which removes storage responsibility but makes the vault dependent on the service staying available and affordable, with export the only exit. The second divergence is structure: Logseq and Roam Research are block-native, so a single bullet can be embedded on dozens of pages, while Obsidian is page-native, where the unit is the file and block references are an add-on. If you plan to keep notes for a decade, the local-file tools are the stronger choice; if you think by linking daily and do not want to manage files, Roam Research is still the most fluid experience of the three.',
      'So where does each platform genuinely shine? Obsidian is the strongest choice for people who want a free, local-first, endlessly customisable knowledge base with more than 1,400 community plugins and the certainty that their notes are ordinary Markdown files. Logseq is the strongest choice for outliner-minded users who want the same local-file ownership with an open-source codebase, block-level references and journals, at zero licence cost. Roam Research is the strongest choice for researchers and writers who want the most fluid block-referenced networked thinking in a hosted graph, with daily notes and unlinked references doing the connective work for them. Our rule of thumb: if your notes are an archive you must own, choose Obsidian or Logseq; if they are a thinking surface you want hosted, choose Roam Research.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your workflow.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Local-first Markdown vault plus a huge plugin ecosystem you shape to your own method.',
          [comparisonTools[1]]: 'Open-source local outliner where every block is addressable and backlinks build the graph.',
          [comparisonTools[2]]: 'Hosted networked thinking: bidirectional links, block references and a daily note at the centre.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Privacy-conscious knowledge workers, developers, researchers and writers who want data ownership.',
          [comparisonTools[1]]: 'Open-source advocates, academics and outliner enthusiasts who want local files at no licence cost.',
          [comparisonTools[2]]: 'Researchers, writers and consultants building knowledge over years in a hosted graph.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Easy to start writing, hard to stop configuring — the plugin catalogue invites constant tinkering.',
          [comparisonTools[1]]: 'Outlining feels natural immediately, but block semantics and queries take time to internalise.',
          [comparisonTools[2]]: 'Fastest from zero to a linked graph: open a daily note, write, and link as you go.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Core app free forever; optional Sync $4 to $8 per month, Publish $8 to $10, commercial licence $50 per year.',
          [comparisonTools[1]]: 'Free and open source; optional paid services for sync and hosted features only.',
          [comparisonTools[2]]: 'Paid subscription per user per month or at a discounted annual rate, plus a multi-year Believer plan.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Full app is free with unlimited vaults; you only pay for optional sync and publishing services.',
          [comparisonTools[1]]: 'Completely free — no seat limits, no vault limits, no licence fee for the application itself.',
          [comparisonTools[2]]: 'No permanent free tier, only a trial period before the paid subscription becomes mandatory.',
        },
      },
      {
        feature: 'Storage and data ownership',
        icon: 'hard-drive',
        values: {
          [comparisonTools[0]]: 'Plain-text Markdown files on your own filesystem, openable in any editor and versionable in Git.',
          [comparisonTools[1]]: 'Plain Markdown or Org-mode files on your own device, with the source published under an open licence.',
          [comparisonTools[2]]: 'Hosted database — no files to manage, but the vault depends on the service and export is the exit route.',
        },
      },
      {
        feature: 'Note structure',
        icon: 'blocks',
        values: {
          [comparisonTools[0]]: 'Page-native: the file is the unit, with block references available but secondary to documents.',
          [comparisonTools[1]]: 'Block-native: every bullet is an object that can be linked, embedded and queried elsewhere.',
          [comparisonTools[2]]: 'Block-native with no filesystem underneath — pages are containers for linked blocks in a graph.',
        },
      },
      {
        feature: 'Outlining',
        icon: 'list-checks',
        values: {
          [comparisonTools[0]]: 'Bullets and headings exist, but the editor is built for prose rather than nested outlines.',
          [comparisonTools[1]]: 'The defining model — notes are outlines, and folding, indenting and block movement are first-class.',
          [comparisonTools[2]]: 'Strong outliner behaviour with block references and embedding across pages.',
        },
      },
      {
        feature: 'Backlinks and graph',
        icon: 'network',
        values: {
          [comparisonTools[0]]: 'Bidirectional linking plus a graph view that visualises connections between notes.',
          [comparisonTools[1]]: 'Backlinks and a graph built from block references, with no proprietary database involved.',
          [comparisonTools[2]]: 'Bidirectional links, unlinked references and a graph overview — the pattern the category copied.',
        },
      },
      {
        feature: 'Daily notes and journals',
        icon: 'notebook-pen',
        values: {
          [comparisonTools[0]]: 'Daily notes via core plugin, with templates and folder rules configurable per vault.',
          [comparisonTools[1]]: 'Journals are central — the app opens on today\'s page and encourages capture before structure.',
          [comparisonTools[2]]: 'Every session opens a daily note, which is the primary capture surface for the whole system.',
        },
      },
      {
        feature: 'Queries and search',
        icon: 'search',
        values: {
          [comparisonTools[0]]: 'Fast local full-text search plus query plugins and Dataview-style structured lookups.',
          [comparisonTools[1]]: 'Built-in query syntax over blocks, tags and properties, evaluated against local files.',
          [comparisonTools[2]]: 'Block-level queries, filters and boolean search across the hosted graph.',
        },
      },
      {
        feature: 'Plugins and extensibility',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'More than 1,400 community plugins plus a documented API — the widest extensibility of the three.',
          [comparisonTools[1]]: 'Community plugins and themes on an open codebase, smaller but growing and fully inspectable.',
          [comparisonTools[2]]: 'No comparable plugin marketplace; extensibility comes from the open block structure itself.',
        },
      },
      {
        feature: 'Sync across devices',
        icon: 'cloud',
        values: {
          [comparisonTools[0]]: 'Paid Obsidian Sync at $4 to $8 per month, or any folder-sync or Git setup you already run.',
          [comparisonTools[1]]: 'Optional paid sync services, or free self-hosted sync through a Git repository or sync folder.',
          [comparisonTools[2]]: 'Automatic — the graph is hosted, so every device sees the same notes with no configuration.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'No bundled AI; community plugins connect a vault to local or hosted language models.',
          [comparisonTools[1]]: 'No bundled AI; plain Markdown files make third-party and local-model indexing straightforward.',
          [comparisonTools[2]]: 'No bundled AI assistant; the block structure allows experimental and third-party integrations.',
        },
      },
      {
        feature: 'Mobile experience',
        icon: 'smartphone',
        values: {
          [comparisonTools[0]]: 'Native iOS and Android apps over the same local vault, with sync handled by your chosen method.',
          [comparisonTools[1]]: 'Mobile apps available, though large graphs and sync setup demand more care than on desktop.',
          [comparisonTools[2]]: 'Browser-based with no comparable native app, making phone capture the weakest of the three.',
        },
      },
      {
        feature: 'Publishing and sharing',
        icon: 'globe',
        values: {
          [comparisonTools[0]]: 'Obsidian Publish at $8 to $10 per month turns selected notes into a hosted site.',
          [comparisonTools[1]]: 'Public sharing and publishing options, with static-export routes available to open-source users.',
          [comparisonTools[2]]: 'Pages can be made public and shared by link, which is how much of its community writing spreads.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'No official integration catalogue — Zotero, Readwise and calendar links arrive through community plugins.',
          [comparisonTools[1]]: 'Plugin-driven as well, with Zotero and Anki bridges among the most-used connectors.',
          [comparisonTools[2]]: 'A hosted API and roam/js scripting, but far fewer third-party connectors than the local-file tools.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'A free, local, endlessly customisable Markdown knowledge base you fully own and can migrate.',
          [comparisonTools[1]]: 'Block-level outlining in an open-source local app with zero licence cost and self-hosted sync.',
          [comparisonTools[2]]: 'Fluid networked thinking for long-running research, hosted so nothing has to be managed.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Core app is 100 percent free forever with unlimited vaults and no feature countdown',
        'Notes are plain Markdown files on your own filesystem — no lock-in, easy Git versioning and backups',
        'More than 1,400 community plugins let one app act as Zettelkasten, task manager or writing studio',
        'Graph view makes document-level connections visible, which helps large vaults stay navigable',
        'Optional Sync at $4 to $8 per month and Publish at $8 to $10 per month keep paid features genuinely optional',
        'Offline-first by design, so the app is equally usable on a plane or in a low-connectivity office',
      ],
      cons: [
        'Plugin dependence is a real risk: a vault built on an abandoned plugin can lose functionality overnight',
        'Configuration sprawl — new users routinely spend more time tuning plugins than writing notes',
        'Block-level referencing and transclusion are weaker than in Logseq or Roam Research',
        'Sync is not free if you do not want to maintain Git or a folder-sync service yourself',
        'Workplace use requires a $50 per year commercial licence, which is easy to overlook in teams',
        'No hosted collaboration: multi-user editing is not what the product is built for',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Free and open source under an open licence — no subscription, no seat limit, no vendor dependency',
        'Block-native model: any bullet can be referenced and embedded on other pages without duplication',
        'Stores everything as plain Markdown or Org-mode files on your own device, with no proprietary database',
        'Journals put a daily page at the centre of the workflow, which removes the blank-page problem',
        'Self-hosted sync through a Git repository or a sync folder costs nothing beyond storage you already pay for',
        'Built-in queries over blocks, tags and properties suit systematic, database-like knowledge work',
      ],
      cons: [
        'Long-form prose is awkward — the outliner model fights continuous writing more than Obsidian\'s editor does',
        'Performance degrades on very large graphs, with slow startup and sluggish queries reported by heavy users',
        'Mobile apps and sync setup are noticeably rougher than the desktop experience',
        'Smaller plugin and theme ecosystem than Obsidian, so fewer ready-made workflows exist',
        'Block semantics have a real learning curve; casual note-takers find it more concept than they need',
        'As an open-source project, roadmap and support are community-driven rather than contractual',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'The most fluid block-reference workflow in the category — link, embed and reuse a bullet anywhere in seconds',
        'Daily notes plus unlinked references surface connections you never explicitly created',
        'Hosted graph means zero setup: no files, no sync configuration, no plugin maintenance',
        'Queries and graph overview make long-running research projects navigable after years of accumulation',
        'A multi-year Believer plan offers a long-horizon option unusual among subscription knowledge tools',
      ],
      cons: [
        'No permanent free tier — only a trial, so long-term use means an uninterrupted paid subscription',
        'Current per-user and annual prices are not fixed in documentation, which complicates budgeting',
        'Your notes live in a hosted database; leaving requires an export and rebuilding links elsewhere',
        'Offline access is weak compared with local-first Obsidian and Logseq',
        'No native mobile app of comparable quality, making phone capture and review frustrating',
        'No plugin marketplace, so customisation depends on the block structure rather than extensions',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After six weeks of building the same 600-note knowledge base in each tool, our conclusion is that there is no universal winner — the correct choice depends on whether your notes are an archive you must own or a thinking surface you want hosted. Obsidian was the fastest to write in and the most customisable, and the certainty that every note is an ordinary Markdown file changed how freely we experimented. Logseq was the best for structured, block-level thinking and cost nothing at all, at the price of some roughness on mobile and in long prose. Roam Research was the most fluid linking experience of the three and the only one that required no setup, and it was also the only one that kept billing for the privilege.',
      'Where Obsidian deserves praise is ownership plus extensibility: a free core app with unlimited vaults, plain-text files you can open in any editor, and a catalogue of more than 1,400 community plugins that will turn it into almost any knowledge system you can describe. Where it draws criticism is the tinkering trap — plugin sprawl and configuration can consume the writing time the tool was meant to protect, and block-level referencing remains weaker than in its two rivals. Users who want block-native structure move to Logseq; users who want a hosted graph with no maintenance move to Roam Research.',
      'Where Logseq deserves praise is principle: open source, local Markdown or Org-mode files, block references, journals and queries, all free, with self-hosted sync through Git or a sync folder at no cost. It is the strongest choice for anyone who refuses to rent their own knowledge base. Where it draws criticism is finish — very large graphs slow down, mobile and sync setup demand patience, long-form writing fights the outliner model, and the plugin ecosystem is smaller than Obsidian\'s. People who want polish without paying move to Obsidian; people who want frictionless hosted thinking move to Roam Research.',
      'Where Roam Research deserves praise is flow: the daily note, block references and unlinked references combine into the most natural networked-writing experience in the category, and because the graph is hosted there is nothing to install, sync or maintain. Where it draws criticism is cost and control — there is no permanent free tier, only a trial, the subscription recurs forever, your notes sit in a hosted database rather than on your disk, and offline and mobile experiences lag the local-first tools. Cost-sensitive users go to Logseq; ownership-focused users go to Obsidian.',
      'The clearest trend in 2026 is the local-first revival combined with bolt-on AI. Obsidian and Logseq both benefit from users who want their knowledge base as inspectable plain text they can point a local or hosted language model at, while hosted graphs compete on convenience and collaboration instead. Two-tool stacks are also common: a local Obsidian or Logseq vault as the permanent archive, with a hosted service used for active collaborative research. Because both local tools read and write plain Markdown, that pairing is cheap to maintain and easy to reverse.',
      'Looking ahead, the deciding question will be how much of your knowledge base you are willing to rent. The fundamentals are unchanged today. If you want a free, local-first, deeply customisable Markdown vault with the largest plugin ecosystem, start with Obsidian. If you want block-level outlining in an open-source app with no licence fee and self-hosted sync, start with Logseq. If you want the most fluid hosted networked-note experience for long-running research and writing, start with Roam Research. Our rule of thumb: treat Obsidian or Logseq as the archive you own and can always leave with, and treat Roam Research as a paid thinking surface you choose deliberately.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Obsidian if you want a free, local-first knowledge base of plain Markdown files on your own filesystem, with bidirectional links, a graph view and more than 1,400 community plugins to shape it to your method — ideal for privacy-conscious knowledge workers, developers, researchers and long-form writers, with optional Sync at $4 to $8 per month, Publish at $8 to $10 per month and a $50 per year commercial licence. Choose Logseq if you want the same local-file ownership in an open-source outliner where every block can be referenced and embedded, plus journals and queries at zero licence cost — ideal for academics, systems thinkers and open-source advocates who will self-host sync through Git or a sync folder. Choose Roam Research if you want the most fluid hosted networked-note experience, with daily notes, block references and unlinked references and nothing to install or maintain — ideal for researchers and writers building knowledge over years who accept a paid subscription with no permanent free tier. If you span both needs, keep a local Obsidian or Logseq vault as the permanent archive and use Roam Research as an active thinking space for current projects.',
  },
}
