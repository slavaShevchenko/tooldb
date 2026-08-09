<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Find the Best Alternatives to Popular Software"
      description="Compare top-rated alternatives to the tools you already use. Whether you're looking to save money, find better features, or switch to a simpler solution — we help you discover the right software for your needs."
    >
      <template #action>
        <AlternativeStats />
      </template>

      <AlternativesTable
        :alternatives="alternatives"
      />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import AlternativeStats from '~/components/alternatives/AlternativeStats.vue';
import { alternatives } from '~/data/alternatives'
import { alternativesSeo } from '~/seo'

useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Alternatives', url: '/alternatives' },
])

useItemListJsonLd(
  alternatives.map((alt, i) => ({
    name: `${alt.name} Alternatives`,
    url: `/alternatives/${alt.slug}`,
    position: i + 1,
  })),
  'Software Alternatives'
)

useSeo({
  title: alternativesSeo.title,
  description: alternativesSeo.description,
  canonical: 'https://tooldb.org/alternatives',
})
</script>

<style scoped lang="scss">
.section {
  margin-top: var(--space-2);
}
.section:deep() .header {
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}
.section:deep() .content {
  flex: 1 1 auto;
}
.section:deep() .action {
  flex: 0 0 max-content;
}
.section:deep() .title {
  font-size: var(--font-size-3xl);
}
.section:deep() .description {
  line-height: 1.8;
}

@media (max-width: 1199px) {
  .section:deep() .header {
    display: block;
  }
  .section:deep() .content {
    margin-bottom: var(--space-2);
  }
}
</style>