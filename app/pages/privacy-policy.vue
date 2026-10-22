<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Privacy Policy"
      description="How ToolDB collects, uses and protects information."
    >
      <div class="privacy-page">
        <section>
          <h2>Overview</h2>
          <p>
            ToolDB is a catalog of digital tools. This Privacy Policy explains
            what personal information we may collect when you use our website,
            how we use it, and what rights and choices you have.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>
            We may collect technical and usage information, including browser
            type, device type, pages visited, referral sources, approximate
            location and interactions with website content. Depending on the
            technologies used and your consent preferences, some of this
            information may be collected through cookies or similar
            technologies.
          </p>
          <p>
            If you contact us, suggest a tool, or inquire about a paid listing
            or partnership, we may collect your email address, name, company
            name, product website, message and any other information you
            choose to provide.
          </p>
          <p>
            If you purchase a paid listing, we may also retain relevant
            correspondence and basic transaction records, such as the amount
            paid, payment date and payment status, for administration,
            accounting and legal compliance. Payments are arranged manually.
            We do not ask you to send payment card details by email.
          </p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>
            We use information to operate and maintain ToolDB, improve the
            catalog, understand website usage, respond to inquiries, review
            tool submissions, manage paid listings and partnerships, prevent
            abuse, and protect the security and reliability of the website.
          </p>
          <p>
            We may also process relevant records to meet legal obligations,
            including applicable accounting and tax requirements.
          </p>
        </section>

        <section>
          <h2>Cookies and analytics</h2>
          <p>
            ToolDB uses or may use analytics and website measurement services,
            including Google Analytics 4, Google Tag Manager and Vercel
            Analytics, to understand website traffic, measure performance
            and improve the user experience.
          </p>
          <p>
            These services may process technical information, usage events,
            device and browser information, referral sources and identifiers.
            The information collected depends on the service configuration
            and your consent preferences.
          </p>
          <p>
            Where required by applicable law, non-essential analytics cookies
            and similar technologies are used only after you have provided
            consent. You can manage your preferences through the website's
            cookie controls, where available.
          </p>
          <p>
            You can also manage cookies through your browser settings.
            Blocking cookies may affect certain website functionality.
          </p>
        </section>

        <section>
          <h2>Third-party services</h2>
          <p>
            We rely on third-party service providers to operate, maintain
            and measure the performance of ToolDB. These providers may
            process information on our behalf or act as independent
            controllers, depending on the service and circumstances.
          </p>
          <p>
            Our analytics providers include Google Analytics 4, Google Tag
            Manager and Vercel Analytics. Their processing of information
            is also subject to their respective privacy policies and
            applicable terms.
          </p>
          <p>
            Some providers may process information outside the European
            Economic Area. Where applicable, appropriate safeguards are
            required for international transfers of personal data.
          </p>
        </section>

        <section>
          <h2>Sharing information</h2>
          <p>
            We do not sell personal information. We may share information
            with service providers that help us operate ToolDB, where
            required by law, to establish or defend legal claims, or when
            necessary to protect the rights, security and integrity of
            ToolDB and its users.
          </p>
        </section>

        <section>
          <h2>Data retention and security</h2>
          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes described in this policy, including
            responding to inquiries, managing listings and meeting legal
            obligations.
          </p>
          <p>
            Accounting and transaction records may need to be retained for
            periods prescribed by applicable law. Retention periods for
            analytics information may also depend on the settings of the
            relevant analytics services.
          </p>
          <p>
            We use reasonable technical and organizational safeguards to
            protect information. However, no internet service can guarantee
            complete security.
          </p>
        </section>

        <section>
          <h2>Your privacy rights</h2>
          <p>
            Depending on your location and applicable law, you may have the
            right to access, correct, delete or restrict the processing of
            your personal information, object to certain processing, request
            data portability, or withdraw consent where processing is based
            on consent.
          </p>
          <p>
            If you are in the European Economic Area, you may also have the
            right to lodge a complaint with your local data protection
            supervisory authority.
          </p>
          <p>
            To exercise your rights, please contact us through our
            <NuxtLink :to="routes.contact()">
              contact page
            </NuxtLink>.
            We may need to verify your identity before fulfilling a request.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            ToolDB is not intended for children under 13, and we do not
            knowingly collect personal information from children under 13.
            Where applicable law requires a higher age threshold, we follow
            the relevant legal requirements.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in ToolDB,
            our service providers or applicable legal requirements. When
            material changes are made, we will update the date below.
          </p>
          <p>
            Where required by law, we will seek renewed consent for changes
            to our data processing practices.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy or how your
            personal information is handled, please visit our
            <NuxtLink :to="routes.contact()">
              contact page
            </NuxtLink>.
          </p>
        </section>

        <p class="privacy-page__updated">
          Last updated: October 22, 2026
        </p>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import { appSeo, privacySeo } from '~/seo'

definePageMeta({
  breadcrumb: 'Privacy Policy',
})

useSeo({
  title: privacySeo.title,
  description: privacySeo.description,
  canonical: `${appSeo.siteUrl}${routes.privacyPolicy()}`,
})
</script>

<style scoped lang="scss">
.container {
  padding-top: var(--space-2);
}

.privacy-page {
  padding-top: var(--space-2);
}

section {
  margin-bottom: var(--space-3);
}

h2 {
  margin-bottom: var(--space-0-5);

  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

p {
  margin: 0;

  color: var(--color-text-secondary);
  line-height: 1.7;
}

p + p {
  margin-top: var(--space-1);
}

a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.privacy-page__updated {
  font-size: var(--font-size-sm);
}
</style>