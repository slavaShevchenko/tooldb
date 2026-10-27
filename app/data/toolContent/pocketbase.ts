import type { ToolContent } from '~/types/toolContent'

export const pocketbaseContent: ToolContent = {
  overview: `PocketBase has gained passionate adoption among developers by delivering a complete backend solution in a single executable file. Built with Go and embedded SQLite, PocketBase provides realtime database, authentication, file storage, and admin dashboard — everything needed for small to medium applications without the complexity of traditional backend architectures. This radical simplicity resonates with developers tired of assembling complex backend stacks from dozens of services.

The single executable architecture represents PocketBase's most distinctive feature. Download one file, run it, and you have a complete backend with database, authentication, file storage, API endpoints, and admin interface. No Docker configurations, no dependency management, no service orchestration, no environment variables hell. This simplicity makes PocketBase incredibly approachable for solo developers, rapid prototyping, and projects where backend complexity threatens to overwhelm the actual application value.

Embedded SQLite provides surprising power in a small package. SQLite often faces criticism for not being "real" databases, but modern SQLite handles substantial workloads when properly configured. PocketBase leverages SQLite's strengths — zero-configuration, embedded operation, ACID compliance, and excellent read performance — while adding realtime subscriptions that push changes to connected clients instantly. For applications with thousands of users rather than millions, SQLite proves more than adequate.

Realtime subscriptions enable modern application experiences. Clients subscribe to database queries and receive instant notifications when matching data changes. This capability powers collaborative editing, live dashboards, chat applications, notification systems, and real-time updates without polling or WebSocket complexity. PocketBase manages subscription lifecycle, change detection, and client notification automatically.

The admin dashboard provides visual data management without coding. After starting PocketBase, developers access a beautiful admin interface for creating collections (tables), defining fields with validation rules, managing users, viewing data, and configuring settings. This dashboard accelerates development by allowing rapid data model iteration without writing migrations or schema code. Changes apply immediately without deployment cycles.

Built-in authentication handles common security requirements. PocketBase provides email/password registration and login, OAuth2 integration with Google, GitHub, Facebook, and other providers, password reset flows, email verification, and user management. This comprehensive authentication system eliminates integrating separate auth services or building custom solutions from scratch.

File storage handles uploads with validation and processing. Users upload files through the API, and PocketBase validates file types, sizes, and dimensions before storing them. Automatic thumbnail generation creates multiple image sizes. Files can store locally or in external S3-compatible storage for scalability. The file management integrates naturally with the rest of the backend.

The extensibility through Go hooks enables customization. While PocketBase provides extensive functionality out-of-the-box, developers can write custom Go code that hooks into API events, database operations, and authentication flows. This extensibility handles specialized business logic without sacrificing PocketBase's simplicity for common cases.

Self-hosting provides complete control and zero licensing costs. PocketBase runs on any server, VPS, or cloud platform supporting Go executables. Teams deploy on $5/month VPS providers, their own infrastructure, or containerized environments. No usage fees, no per-user charges, no vendor lock-in. The MIT license allows commercial use without restrictions.

The deployment simplicity extends to production environments. Running PocketBase in production involves executing the binary with appropriate flags, configuring a reverse proxy for SSL, and setting up backups. This simplicity contrasts sharply with traditional backend deployments requiring database clusters, caching layers, load balancers, and orchestration tools.

Cross-platform support means PocketBase runs anywhere. The single executable compiles for Windows, macOS, Linux, and various architectures. Developers run the same backend locally on their development machines and in production servers. This consistency eliminates "works on my machine" problems.

PocketBase's limitations center on scalability ceilings and SQLite constraints. While SQLite handles substantial workloads, it doesn't match distributed databases for massive scale. Applications expecting millions of concurrent users or write-heavy workloads will outgrow PocketBase. SQLite's single-writer limitation means high-concurrency write scenarios require careful design.

The single-node architecture means no built-in high availability. Production deployments need manual backup strategies, failover configurations, or load balancing setups. While possible, these aren't automatic like managed database services. Teams must plan for disaster recovery and uptime requirements.

The ecosystem, while growing, doesn't match larger platforms. Fewer third-party integrations, community packages, and educational resources exist compared to Firebase, Supabase, or traditional backend frameworks. Early adopters must solve some problems independently.

For users evaluating PocketBase, the platform fits solo developers and small teams wanting backend simplicity. It fits rapid prototyping and MVP development where speed matters more than scalability. It fits self-hosted applications avoiding cloud dependencies. It fits applications with modest scale requirements. It fits developers frustrated with backend complexity. Large-scale applications, write-heavy workloads, or teams needing managed infrastructure should consider Supabase, Firebase, or traditional backend stacks alongside PocketBase.

PocketBase represents the minimalist approach to backend development — recognizing that many applications don't need complex distributed architectures. The single executable containing an entire backend challenges assumptions about infrastructure complexity. For the long tail of small to medium applications, PocketBase's radical simplicity provides exactly what's needed without the overhead of enterprise-scale solutions.`
}