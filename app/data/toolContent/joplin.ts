import type { ToolContent } from '~/types/toolContent'

export const joplinContent: ToolContent = {
  overview: `Joplin has established itself as the leading open-source alternative to proprietary note-taking applications, providing comprehensive note management with end-to-end encryption and flexible synchronization options. The platform serves privacy-conscious users, open-source advocates, and anyone wanting control over their note data without vendor lock-in or subscription dependencies.

The open-source foundation provides transparency and freedom. Joplin's source code is publicly available under AGPL license, enabling security audits, community contributions, and independent verification of privacy claims. This transparency builds trust while preventing the opaque data practices common in proprietary platforms. Users can audit encryption implementation, contribute features, or fork the project for custom needs.

End-to-end encryption protects notes throughout their lifecycle. Joplin encrypts notes before synchronization, ensuring that even sync service providers cannot access unencrypted content. This encryption approach provides privacy guarantees that cloud-based note apps cannot match, as encryption keys remain with users rather than platform providers.

Flexible synchronization accommodates diverse infrastructure preferences. Users choose sync methods matching their privacy and convenience needs — Nextcloud for self-hosted privacy, Dropbox or OneDrive for convenience, S3 for technical users, WebDAV for custom infrastructure, or Joplin Cloud for managed simplicity. This flexibility prevents vendor lock-in while enabling synchronization across devices.

Markdown support balances power and accessibility. Joplin provides full markdown syntax for formatting while offering WYSIWYG editor for users preferring visual editing. This dual approach serves both markdown enthusiasts wanting keyboard-driven formatting and users preferring traditional editing interfaces.

Notebook and tag organization supports diverse workflows. Joplin organizes notes in hierarchical notebooks while tags provide cross-cutting categorization independent of notebook structure. This multi-dimensional organization accommodates both structured and flexible information management approaches.

Web clipper captures internet content efficiently. Browser extensions save web pages, articles, and screenshots directly to Joplin with formatting preserved. This capability builds research libraries and reference collections without manual copy-pasting.

Cross-platform availability ensures constant access. Native applications for Windows, Mac, Linux, iOS, and Android provide consistent experiences across devices. Notes sync automatically, enabling capture on phones and access on computers or tablets.

Search functionality finds information quickly. Full-text search across note titles and content with filtering by tags, dates, and notebooks ensures information remains findable as note collections grow. Advanced search syntax enables complex queries for power users.

Plugins extend functionality while maintaining privacy. Joplin's plugin system enables community-created extensions adding features like calendar integration, kanban boards, and specialized editors. These plugins maintain encryption and privacy guarantees while expanding capabilities.

The pricing model respects user choice and autonomy. Core application is completely free and open-source with all features included. Optional Joplin Cloud at €4.99/month provides managed sync for users wanting convenience without self-hosting complexity. Self-hosted sync remains free for technically inclined users. This model ensures privacy-focused users access full functionality without payment while providing sustainable funding for continued development.

Joplin's limitations center on polish compared to commercial alternatives and mobile experience refinement. While providing comprehensive features, Joplin's interface lacks the design polish of Bear or Craft. Additionally, mobile applications, while functional, don't match the refined experiences of iOS-native apps.

The technical setup for self-hosted sync requires expertise. While flexible, configuring Nextcloud, S3, or WebDAV sync requires technical knowledge that non-technical users might lack, though Joplin Cloud addresses this for users wanting managed convenience.

For users evaluating Joplin, the platform fits privacy-conscious users avoiding cloud dependency. It fits open-source advocates supporting transparent software. It fits users wanting encryption without subscription costs. It fits technical users preferring self-hosted infrastructure. It fits users migrating from Evernote wanting open-source alternative. Users prioritizing design polish, preferring managed cloud services, or wanting simpler setup should consider Bear, Notion, or Standard Notes alongside Joplin.

Joplin represents the open-source privacy approach to note-taking — recognizing that personal notes deserve privacy guarantees and user control that proprietary platforms cannot provide. The platform's combination of end-to-end encryption, flexible synchronization, and open-source transparency serves users wanting modern note-taking capabilities without sacrificing data ownership. For privacy-conscious users and open-source advocates wanting comprehensive note management with encryption and control, Joplin provides the platform that returns power over personal data to users themselves.`
}