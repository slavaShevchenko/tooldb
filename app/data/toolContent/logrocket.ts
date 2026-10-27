import type { ToolContent } from '~/types/toolContent'

export const logrocketContent: ToolContent = {
  overview: `LogRocket has established itself as the developer-focused session replay and frontend monitoring platform, combining pixel-perfect session recordings with console logs, network requests, performance metrics, and error tracking. While traditional session replay tools serve UX researchers and product managers, LogRocket specifically targets developers debugging frontend issues by providing complete reproduction context alongside user behavior recordings.

The developer-focused approach distinguishes LogRocket from general session replay tools. When developers debug frontend issues, they need more than just seeing what users did — they need console logs showing errors, network requests revealing API failures, Redux state showing application data, and performance metrics indicating bottlenecks. LogRocket captures all this context alongside session replay, providing complete debugging information in one place.

Console log capture provides crucial debugging context. Every console.log, console.error, and console.warn appears alongside session replay with timestamps correlating to user actions. When a user encounters an error, developers see the exact console output leading to the problem. This correlation eliminates the "works on my machine" problem by showing production environment behavior.

Network request monitoring reveals API and resource issues. LogRocket captures all HTTP requests — API calls, resource loads, WebSocket connections — with headers, payloads, responses, and timing information. When users experience slow performance or errors, developers see which API calls failed, which resources took too long to load, and exactly what data was sent and received.

Redux state tracking enables understanding application data flow. For React applications using Redux, LogRocket captures state changes alongside user actions. Developers see how application state evolved during sessions, what data was present when errors occurred, and how state changes correlate with user behavior. This state visibility accelerates debugging complex data-related issues.

Error tracking automatically captures JavaScript errors with context. When errors occur, LogRocket records stack traces, user actions leading to errors, browser information, and session context. Developers reproduce issues by watching sessions where errors occurred, seeing exactly what users did before encountering problems. This context transforms error reports from cryptic stack traces into reproducible scenarios.

Performance monitoring tracks frontend metrics across users. Page load times, time to interactive, API response times, and custom performance metrics reveal how applications perform for real users. Teams identify performance regressions, understand which users experience slow performance, and correlate performance with user behavior and conversion.

Framework integrations provide deep context for modern applications. LogRocket integrates with React, Redux, Vue, Angular, and other frameworks, capturing framework-specific data like component render times, state changes, and routing events. This framework awareness provides debugging context specific to each technology stack.

Session search enables finding relevant recordings efficiently. Teams search sessions by user actions, errors encountered, performance thresholds, or user attributes. Rather than browsing recordings randomly, developers find sessions demonstrating specific issues — "sessions with API errors on checkout" or "sessions with page load time over 5 seconds."

The bug reproduction workflow accelerates issue resolution. Support teams receive bug reports and watch sessions showing exact reproduction steps. Developers see the issue occurring with complete technical context. This workflow eliminates back-and-forth communication trying to understand bug reproduction, accelerating fixes.

User identification connects sessions to specific users. Teams identify sessions by user ID, email, or custom attributes, enabling investigation of specific user issues. When users report problems, support teams find their sessions quickly and understand their experience.

The pricing structure scales with usage. Free tier provides 1,000 sessions monthly with 14-day retention for evaluation and small projects. Pro at $99/month offers 10,000 sessions and 30-day retention for growing teams. Team at $299/month provides 50,000 sessions and advanced features. Enterprise plans offer custom pricing and dedicated support.

Mobile app support extends capabilities beyond web applications. LogRocket records iOS and Android app sessions with native interaction capture, crash reporting, and performance monitoring. Mobile teams debug issues and optimize mobile experiences with the same developer-focused capabilities.

Privacy controls address data handling requirements. IP masking, user consent management, and data redaction features help comply with privacy regulations. Teams configure what data gets captured and retained, balancing debugging needs with privacy requirements.

LogRocket's limitations center on focus area compared to comprehensive analytics. While excellent for debugging and frontend monitoring, LogRocket doesn't provide the product analytics depth of tools like Heap, Amplitude, or Mixpanel for cohort analysis, retention metrics, or feature adoption tracking. Teams need additional tools for comprehensive product analytics.

The session volume-based pricing can become expensive for high-traffic applications. Products with millions of users generate substantial LogRocket costs at scale. Teams must evaluate whether debugging value justifies costs compared to error tracking tools like Sentry combined with basic session replay.

The developer-focused features may be excessive for simple use cases. Teams needing basic session replay for UX research without debugging context might find LogRocket's technical features unnecessary compared to simpler tools like Hotjar or FullStory.

For users evaluating LogRocket, the platform fits frontend developers debugging production issues. It fits support teams investigating user-reported problems. It fit engineering teams needing complete error reproduction context. It fits React and Redux developers wanting state visibility. It fits teams combining session replay with error tracking and performance monitoring. Organizations needing product analytics, UX research focus, or simple session replay should consider FullStory, Hotjar, or Sentry alongside LogRocket.

LogRocket represents the developer-focused session replay approach — recognizing that debugging frontend issues requires more than just seeing user behavior. The platform's combination of session replay, console logs, network requests, and performance metrics provides complete debugging context in one tool. For engineering teams spending significant time reproducing and fixing frontend issues, LogRocket accelerates debugging workflows and reduces time-to-resolution for production problems.`
}