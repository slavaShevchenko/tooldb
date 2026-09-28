<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Comparisons"
      description="Compare popular digital tools side by side. Find the best software for your needs with detailed feature comparisons, pros and cons, and expert recommendations."
    >
      <template #action>
        <ComparisonStats />
      </template>

      <ComparisonGrid :comparisons="paginatedComparisons" />

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
import { routes } from '~/constants/routes'
import { comparisonsSeo } from '~/seo'
import { PAGINATION } from '~/constants/pagination'

const { getComparisons } = useComparisons()
const allComparisons = getComparisons()

const {
  items: paginatedComparisons,
  currentPage,
  totalPages,
} = usePagination(allComparisons, PAGINATION.comparisons)

const dynamicMetaDescription = useDynamicSeoDescription(paginatedComparisons, {
  prefix: 'Latest comparisons: ',
  suffix: '. Compare popular digital tools side by side with detailed feature analysis.',
})

useBreadcrumbJsonLd([
  { name: 'Home', url: routes.home() },
  { name: 'Comparisons', url: routes.comparisons() },
])

useSeo({
  title: comparisonsSeo.title,
  description: dynamicMetaDescription,
  canonical: `https://tooldb.org${routes.comparisons()}`,
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