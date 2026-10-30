<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Affiliate Disclosure"
      description="How ToolDB handles affiliate relationships, paid placements and editorial ratings."
    >
      <div class="disclosure-page">
        <section>
          <h2>Affiliate links</h2>
          <p>
            ToolDB may use affiliate links. When a tool page contains an
            affiliate link, it is identified with a disclosure near the link.
            If you purchase through an affiliate link, ToolDB may earn a
            commission at no additional cost to you.
          </p>
        </section>

        <section>
          <h2>Paid listings and sponsored placements</h2>
          <p>
            ToolDB offers paid listing opportunities for SaaS, software and
            AI tools. For a one-time payment of €50, companies can request a lifetime
l           listing in our catalog and featured placement on the ToolDB homepage.
          </p>
          <p>
            All submissions are subject to editorial review and must meet
            our quality standards. Payment does not guarantee acceptance,
            a particular position in organic search results, or specific
            traffic or business results.
          </p>
          <p>
            Paid placements are promotional and are identified accordingly
            where they appear. A paid listing does not imply an independent
            endorsement of the product by ToolDB.
          </p>
          <p>
            Lifetime listing means that no recurring listing fee is required.
            A listing may be updated or removed if a product becomes
            unavailable, materially misrepresents its features, violates
            applicable laws, or no longer meets our editorial standards.
          </p>
        </section>

        <section>
          <h2>Editorial independence and ratings</h2>
          <p>
            Tool ratings are based on publicly available information from
            the internet and the personal opinions of ToolDB authors.
            Ratings are editorial assessments, not guarantees or
            recommendations tailored to your specific needs.
          </p>
          <p>
            Affiliate commissions and paid placements do not determine
            our editorial ratings or guarantee positive coverage. We do
            not claim personal experience with a tool unless we explicitly
            say so.
          </p>
          <p>
            Payment for a listing does not entitle a company to change
            an editorial assessment or influence how its product is
            described.
          </p>
        </section>

        <section>
          <h2>Other material relationships</h2>
          <p>
            ToolDB may receive free or discounted access to products,
            sponsorships, or other benefits in connection with a tool.
            We disclose material relationships on the relevant tool page
            when applicable.
          </p>
        </section>

        <section>
          <h2>Questions</h2>
          <p>
            If you have questions about affiliate relationships, paid
            placements or our editorial standards, please visit our
            <NuxtLink to="/contact">
              contact page
            </NuxtLink>.
          </p>
        </section>

        <p class="disclosure-page__updated">
          Last updated: October 22, 2026
        </p>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
definePageMeta({
  breadcrumb: 'Affiliate Disclosure',
})

useSeo({
  title: 'Affiliate Disclosure - ToolDB',
  description: 'Learn how ToolDB handles affiliate links, paid listings, sponsored placements and editorial ratings.',
  canonical: 'https://tooldb.org/affiliate-disclosure',
})
</script>

<style scoped lang="scss">
.container {
  padding-top: var(--space-2);
}

.disclosure-page {
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

.disclosure-page__updated {
  font-size: var(--font-size-sm);
}
</style>