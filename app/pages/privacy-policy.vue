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
            ToolDB is a catalog of digital tools. This policy explains what
            information we may collect when you use the website, why we use it,
            and what choices you have.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>
            We may collect basic technical information such as browser type,
            device type, pages visited, referral source and approximate
            location. If you contact us, we may also collect the information
            you choose to send, such as your email address and message.
          </p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>
            We use information to operate ToolDB, understand which pages are
            useful, improve the catalog, respond to messages, prevent abuse and
            keep the website reliable.
          </p>
        </section>

        <section>
          <h2>Cookies and analytics</h2>
          <p>
            ToolDB may use cookies or similar technologies for essential site
            functionality, analytics and performance measurement. You can
            control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2>Sharing information</h2>
          <p>
            We do not sell personal information. We may share limited
            information with service providers that help us run the website,
            when required by law, or when necessary to protect ToolDB and its
            users.
          </p>
        </section>

        <section>
          <h2>Data retention and security</h2>
          <p>
            We keep information only as long as needed for the purposes
            described in this policy. We use reasonable safeguards to protect
            information, but no internet service can guarantee complete
            security.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>
            You may ask us to access, correct or delete personal information
            you have provided to ToolDB. You may also opt out of non-essential
            cookies through your browser or device settings.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            ToolDB is not intended for children under 13, and we do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy as ToolDB evolves. When we make material
            changes, we will update the date below.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please visit our
            <NuxtLink :to="routes.contact()">
              contact page
            </NuxtLink>.
          </p>
        </section>

        <p class="privacy-page__updated">
          Last updated: August 5, 2026
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

a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.privacy-page__updated {
  font-size: var(--font-size-sm);
}
</style>
