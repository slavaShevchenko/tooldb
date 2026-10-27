import type { ToolContent } from '~/types/toolContent'

export const grafanaContent: ToolContent = {
  overview: `Grafana has established itself as the definitive open-source observability platform, providing unified visualization and analysis for metrics, logs, and traces from any data source. The platform's flexibility, extensive plugin ecosystem, and open-source foundation have made it the default choice for engineering teams building monitoring and observability solutions. Whether self-hosted for complete control or used through Grafana Cloud for managed convenience, Grafana provides the visualization layer for modern infrastructure and application monitoring.

The open-source foundation creates transparency and community trust. Grafana's source code is publicly available, allowing developers to audit functionality, understand implementation details, contribute improvements, and customize for specific needs. The active community contributes plugins, dashboards, tutorials, and support. This collaborative development produces rapid innovation and ensures Grafana evolves with industry needs.

Unified observability across metrics, logs, and traces eliminates tool fragmentation. Traditional monitoring involved separate tools for each data type — Prometheus for metrics, Elasticsearch for logs, Jaeger for traces. Grafana consolidates visualization and querying across all three, correlating data types to provide complete system understanding. When investigating an issue, teams see metrics, related logs, and traces in unified dashboards without switching tools.

The data source plugin ecosystem spans the technology landscape. Grafana connects to 150+ data sources including Prometheus, InfluxDB, Elasticsearch, CloudWatch, Stackdriver, PostgreSQL, MySQL, MongoDB, and countless others. This breadth means teams visualize data from any system through consistent interfaces. The plugin architecture allows community contributions extending Grafana to new data sources continuously.

Dashboard creation provides flexible visualization options. Teams build custom dashboards with multiple panel types — time series graphs, gauges, heatmaps, tables, logs, traces, and more. Dashboard variables enable dynamic filtering and parameterization. Template variables create reusable dashboards adapting to different contexts. The visualization flexibility accommodates diverse monitoring needs from infrastructure metrics to business KPIs.

Grafana Loki provides log aggregation and analysis. Purpose-built for log management, Loki indexes log streams efficiently and enables fast log querying. The log exploration interface provides live tailing, filtering, and pattern detection. Logs correlate with metrics and traces, enabling investigation from high-level metrics down to specific log entries.

Grafana Tempo handles distributed tracing at scale. Tempo ingests and stores traces from distributed systems, enabling request tracing across microservices. The trace exploration interface shows request flows, latency breakdowns, and error propagation. Tempo integrates naturally with metrics and logs in unified dashboards.

Alerting and notification systems route issues to appropriate teams. Grafana evaluates alert rules based on metric thresholds, log patterns, or trace anomalies. Notifications route to Slack, PagerDuty, email, webhooks, and other channels. Alert grouping and deduplication prevent notification storms during incidents.

The query language flexibility accommodates different data sources. Each data source has native query syntax — PromQL for Prometheus, LogQL for Loki, TraceQL for Tempo, SQL for databases. Grafana provides query editors with syntax highlighting and autocomplete for each query language. This flexibility means teams use familiar query syntax for each data source.

Community dashboard templates accelerate setup. The Grafana community shares thousands of pre-built dashboards for common technologies — Kubernetes, Docker, nginx, PostgreSQL, and more. Teams import these dashboards and customize rather than building from scratch. This community contribution reduces time-to-value for common monitoring scenarios.

Grafana Cloud provides managed hosting without infrastructure management. The cloud service handles updates, scaling, backups, and maintenance while providing the same Grafana experience. Free tier offers limited metrics and logs for evaluation. Pro at $49/month increases limits for growing teams. Enterprise plans provide custom arrangements. This managed option serves teams wanting Grafana without operational overhead.

Self-hosted deployment provides complete control and zero licensing costs. Organizations install Grafana on their own infrastructure, maintaining complete data sovereignty and customization options. The open-source license allows commercial use without restrictions. Self-hosting serves organizations with strict data requirements or preference for infrastructure control.

The plugin marketplace extends functionality beyond core capabilities. Community and official plugins add new panel types, data sources, and features. Plugins enable specialized visualizations, custom authentication methods, and integrations with niche tools. This extensibility adapts Grafana to specific organizational needs.

Grafana's limitations center on setup complexity compared to turnkey solutions. While powerful, Grafana requires configuration — setting up data sources, writing queries, designing dashboards, and configuring alerts. Teams without monitoring expertise face a learning curve. Turnkey monitoring solutions like Datadog provide more out-of-box functionality at higher cost.

The query complexity for advanced use cases requires expertise. Writing efficient PromQL queries, optimizing LogQL filters, or correlating across data types requires understanding query languages and data models. Teams benefit from learning these query languages to maximize Grafana's capabilities.

Performance with very large datasets requires optimization. Dashboards querying massive time series ranges or high-cardinality metrics may experience slow load times. Teams must design dashboards and queries efficiently, using appropriate time ranges and avoiding unbounded queries.

For users evaluating Grafana, the platform fits engineering teams building custom monitoring solutions. It fits organizations wanting open-source observability without vendor lock-in. It fits teams using Prometheus, Loki, or other Grafana-ecosystem tools. It fits organizations needing flexible visualization across diverse data sources. It fits teams with monitoring expertise wanting complete control. Organizations wanting turnkey monitoring, lacking technical resources, or preferring managed solutions should consider Datadog, New Relic, or Grafana Cloud alongside self-hosted Grafana.

Grafana represents the open-source observability approach — providing flexible, extensible visualization for any data source without proprietary lock-in. The platform's combination of unified observability, extensive integrations, and active community creates sustainable value for engineering organizations. As monitoring requirements grow more complex with distributed systems and microservices, Grafana's flexible approach to observability visualization becomes essential infrastructure for teams wanting control over their monitoring stack.`
}