<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Affiliate Disclosure"
      description="How ToolDB handles affiliate relationships and editorial ratings."
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
          <h2>How we create ratings</h2>
          <p>
            Tool ratings are based on publicly available information from the
            internet and the personal opinions of ToolDB authors. Ratings are
            editorial assessments, not guarantees or recommendations tailored
            to your specific needs.
          </p>
          <p>
            Affiliate relationships do not change our ratings or editorial
            assessments. We do not claim personal experience with a tool unless
            we explicitly say so.
          </p>
        </section>

        <section>
          <h2>Other material relationships</h2>
          <p>
            If ToolDB receives free or discounted access, a paid placement,
            sponsorship, or another material benefit in connection with a tool,
            we will disclose that relationship on the relevant tool page.
          </p>
        </section>

        <section>
          <h2>Questions</h2>
          <p>
            If you have questions about affiliate relationships or our ratings,
            please visit our
            <NuxtLink to="/contact">
              contact page
            </NuxtLink>
          </p>
        </section>

        <p class="disclosure-page__updated">
          Last updated: August 4, 2026
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
  description: 'Learn how ToolDB handles affiliate links and creates tool ratings.',
  canonical: 'https://tooldb.org/affiliate-disclosure',
})
</script>

<style scoped lang="scss">
.container {
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
.disclosure-page {
  padding-top: var(--space-2);
}
.disclosure-page__updated {
  font-size: var(--font-size-sm);
}
</style>
