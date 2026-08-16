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
        :alternatives="paginatedAlternatives"
      />

      <CommonPagination
        :current-page="currentPage"
        :total-pages="totalPages"
      />

      <div class="tooldb__grid">
        <div class="tooldb__grid-left">
          <CommonAuthorBox />
        </div>
        <div class="tooldb__grid-right">
          <ToolAffiliateNotice />
        </div>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import AlternativeStats from '~/components/alternatives/AlternativeStats.vue';
import { alternatives } from '~/data/alternatives'
import { alternativesSeo } from '~/seo'
import { PAGINATION } from '~/constants/pagination'

const {
  items: paginatedAlternatives,
  currentPage,
  totalPages,
} = usePagination(alternatives, PAGINATION.alternatives)

useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Alternatives', url: '/alternatives' },
])

useItemListJsonLd(
  paginatedAlternatives.value.map((alt, i) => ({
    name: `${alt.name} Alternatives`,
    url: `/alternatives/${alt.slug}`,
    position:
      (currentPage.value - 1) * PAGINATION.alternatives + i + 1,
  })),
  'Software Alternatives',
)

useAuthorJsonLd()

const canonical = useCanonical()

useSeo({
  title: alternativesSeo.title,
  description: alternativesSeo.description,
  canonical,
  appendPageNumber: true,
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

.tooldb__grid {
  padding-top: var(--space-3);
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