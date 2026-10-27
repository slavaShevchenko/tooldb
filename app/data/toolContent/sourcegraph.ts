import type { ToolContent } from '~/types/toolContent'

export const sourcegraphContent: ToolContent = {
  overview: `Sourcegraph has established itself as essential infrastructure for large engineering organizations by solving fundamental challenges of code search, navigation, and understanding across massive codebases. The platform indexes millions of repositories, providing universal code search, code intelligence, and Cody — an AI coding assistant that understands entire codebases rather than just individual files. This comprehensive approach addresses problems that arise as engineering organizations grow beyond dozens to hundreds or thousands of repositories.

Universal code search transforms how developers find code. Rather than searching individual repositories through Git hosting platforms, Sourcegraph searches across all repositories simultaneously using text matching, regular expressions, structural queries, and natural language. A developer can search for "authentication middleware" and find relevant implementations across hundreds of repositories regardless of naming conventions. This capability saves countless hours previously spent navigating between repositories.

Code navigation provides IDE-like capabilities at repository scale. Developers jump to function definitions, find all references, view call hierarchies, and understand dependencies across repositories. Click a function call and see its implementation even if it lives in a different repository. This cross-repository navigation eliminates the context-switching that fragments understanding in large codebases.

Cody AI represents Sourcegraph's evolution into AI-powered development assistance. Unlike generic AI assistants limited to current files, Cody understands your entire codebase context — repository structure, coding patterns, internal libraries, and architectural decisions. When you ask "How does our authentication system work?" Cody provides answers referencing actual code across repositories. This contextual awareness produces more relevant assistance than AI tools without codebase knowledge.

The code intelligence layer understands programming languages deeply. Sourcegraph parses code into abstract syntax trees, understanding language semantics rather than just text. This understanding enables precise navigation, accurate search results, and intelligent code transformations. The platform supports dozens of languages with varying levels of intelligence depth.

Batch Changes enable large-scale code modifications across repositories. When an API changes, a library deprecates, or a security vulnerability requires fixing, teams apply changes across hundreds of repositories simultaneously. Batch Changes creates pull requests in each affected repository, tracks review status, and manages merges. This capability addresses the operational challenge of maintaining consistency across large codebases.

Code monitoring alerts about changes to specific code patterns. Developers subscribe to searches — "any changes to payment processing code" or "new uses of deprecated API" — and receive notifications when matches change. This monitoring catches issues early, tracks adoption of new patterns, and maintains awareness of codebase evolution.

The extension ecosystem customizes Sourcegraph for specific workflows. Developers build extensions adding custom search commands, integrations with other tools, and specialized code intelligence. This extensibility adapts Sourcegraph to organizational needs rather than forcing workflows into platform constraints.

IDE extensions bring Sourcegraph capabilities into developer environments. VS Code, JetBrains, and other IDE extensions provide code search, navigation, and Cody access without leaving the editor. This integration maintains developer flow while providing powerful codebase understanding.

The pricing structure serves different organizational scales. Free tier provides Cody AI assistant and basic search for individuals and small teams. Pro at $9/user/month adds advanced Cody features and higher usage limits. Enterprise plans provide SSO, audit logs, on-premises deployment, and custom features for large organizations. The pricing reflects the platform's value for organizations where code search time represents significant engineering cost.

Self-hosted deployment serves enterprises with strict requirements. Organizations install Sourcegraph on their own infrastructure, keeping code search queries and indexed code internal. This option addresses compliance, security, and data sovereignty requirements that prevent SaaS adoption.

The codebase indexing handles massive scale efficiently. Sourcegraph indexes billions of lines of code across millions of repositories, providing sub-second search results. The indexing pipeline handles continuous updates as repositories change, maintaining current search results without performance degradation.

Sourcegraph's limitations center on value proposition for small codebases. Organizations with few repositories or small engineering teams may not experience sufficient pain from code search challenges to justify Sourcegraph adoption. The platform's value scales with codebase complexity and team size.

The AI capabilities through Cody, while powerful, depend on codebase context quality. Organizations with poorly documented code, inconsistent patterns, or minimal repository structure may receive less relevant Cody responses. The AI works best with well-organized codebases.

The learning curve for advanced features exists. While basic search works immediately, unlocking Sourcegraph's full power requires learning query syntax, batch changes, and code intelligence features. Teams benefit from training and documentation investment.

For users evaluating Sourcegraph, the platform fits large engineering organizations managing many repositories. It fits teams struggling with code discovery across distributed codebases. It fits organizations needing consistent large-scale code changes. It fits developers wanting AI assistance understanding entire codebases. It fits enterprises requiring self-hosted code search. Small teams, individual developers, or organizations with few repositories should consider GitHub search, IDE features, or general AI assistants alongside Sourcegraph.

Sourcegraph represents the code intelligence approach to developer productivity — recognizing that as codebases grow, finding and understanding code becomes a major productivity bottleneck. The platform's combination of universal search, code navigation, AI assistance, and large-scale changes addresses fundamental challenges of software engineering at scale. For large engineering organizations where developers spend significant time searching and understanding code, Sourcegraph provides measurable productivity improvements that justify investment.`
}