<template>
  <BaseContainer>
    <LayoutSection
      title="Terms of Service"
      description="The rules for accessing and using ToolDB."
    >
      <div class="terms-page">
        <section>
          <h2>Overview</h2>
          <p>
            These Terms of Service govern your access to and use of ToolDB.
            By using the website, you agree to these terms. If you do not
            agree, please do not use ToolDB.
          </p>
        </section>

        <section>
          <h2>Use of ToolDB</h2>
          <p>
            ToolDB provides information about digital tools for discovery,
            comparison and research. You may use the website for lawful,
            personal or business evaluation purposes.
          </p>
        </section>

        <section>
          <h2>Information accuracy</h2>
          <p>
            We aim to keep tool information useful and current, but listings,
            pricing, ratings, descriptions and availability may change. ToolDB
            does not guarantee that all information is complete, accurate or
            suitable for your specific needs.
          </p>
        </section>

        <section>
          <h2>Affiliate links and third-party websites</h2>
          <p>
            ToolDB may link to third-party websites, products or services.
            Some links may be affiliate links. We are not responsible for
            third-party content, policies, pricing, availability or actions.
          </p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>
            ToolDB's design, text, structure and original content are owned by
            ToolDB or its licensors. You may not copy, reproduce, scrape,
            redistribute or commercially reuse substantial parts of the website
            without permission.
          </p>
        </section>

        <section>
          <h2>Acceptable use</h2>
          <p>
            You agree not to misuse ToolDB, interfere with the website,
            attempt unauthorized access, introduce malware, scrape at abusive
            scale, or use the website in a way that violates applicable law or
            harms other users.
          </p>
        </section>

        <section>
          <h2>No professional advice</h2>
          <p>
            ToolDB is provided for general informational purposes only. It does
            not provide legal, financial, technical, security or procurement
            advice. You are responsible for evaluating tools before relying on
            or purchasing them.
          </p>
        </section>

        <section>
          <h2>Disclaimer of warranties</h2>
          <p>
            ToolDB is provided on an "as is" and "as available" basis. To the
            extent allowed by law, we disclaim warranties of merchantability,
            fitness for a particular purpose and non-infringement.
          </p>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>
            To the extent allowed by law, ToolDB will not be liable for
            indirect, incidental, consequential, special or punitive damages,
            or for lost profits, data, goodwill or business opportunities
            arising from your use of the website.
          </p>
        </section>

        <section>
          <h2>Changes to these terms</h2>
          <p>
            We may update these terms as ToolDB evolves. When we make material
            changes, we will update the date below. Continued use of ToolDB
            after changes means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about these Terms of Service, please visit
            our
            <NuxtLink :to="routes.contact()">
              contact page
            </NuxtLink>.
          </p>
        </section>

        <p class="terms-page__updated">
          Last updated: August 5, 2026
        </p>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import { appSeo, termsSeo } from '~/seo'

definePageMeta({
  breadcrumb: 'Terms of Service',
})

useSeo({
  title: termsSeo.title,
  description: termsSeo.description,
  canonical: `${appSeo.siteUrl}${routes.termsOfService()}`,
})
</script>

<style scoped lang="scss">
.container {
  padding-top: var(--space-2);
}

.terms-page {
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

.terms-page__updated {
  font-size: var(--font-size-sm);
}
</style>
