<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Comparisons"
      description="Compare popular digital tools side by side. Find the best software for your needs with detailed feature comparisons, pros and cons, and expert recommendations."
    >
      <div class="comparisons-grid">
        <NuxtLink
          v-for="comparison in paginatedComparisons"
          :key="comparison.id"
          :to="routes.comparison(comparison.slug)"
          class="comparison-card"
        >
          <div class="card-header">
            <div class="badge">
              {{ comparison.category }}
            </div>

            <div class="meta">
              <BaseIcon
                name="clock"
                :size="14"
                color="var(--color-text-secondary)"
              />
              <span>{{ comparison.readTime }}</span>
            </div>
          </div>

          <h2 class="card-title">
            {{ comparison.title }}
          </h2>

          <p class="card-description">
            {{ comparison.description }}
          </p>

          <div class="tools-preview">
            <div
              v-for="toolSlug in comparison.tools"
              :key="toolSlug"
              class="tool-chip"
            >
              <img
                :src="getToolLogo(toolSlug)"
                :alt="getToolName(toolSlug)"
                class="tool-logo"
                loading="lazy"
              >
              <span>{{ getToolName(toolSlug) }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <CommonPagination
        :current-page="currentPage"
        :total-pages="totalPages"
      />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { tools } from '~/data/tools'
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

const getToolLogo = (slug: string): string => {
  const tool = tools.find(t => t.slug === slug)
  return tool?.logo || ''
}

const getToolName = (slug: string): string => {
  const tool = tools.find(t => t.slug === slug)
  return tool?.name || slug
}

useBreadcrumbJsonLd([
  { name: 'Home', url: routes.home() },
  { name: 'Comparisons', url: routes.comparisons() },
])

useSeo({
  title: comparisonsSeo.title,
  description: comparisonsSeo.description,
  canonical: `https://tooldb.org${routes.comparisons()}`,
  appendPageNumber: true,
})
</script>

<style scoped lang="scss">
.comparisons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-1-5);
}

.comparison-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-1-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  text-decoration: none;
  color: inherit;
  transition: var(--transition-fast);
}

.comparison-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-0-75);
}

.badge {
  padding: var(--space-0-25) var(--space-0-5);
  border-radius: var(--radius-pill);
  background: var(--color-primary-25);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

.meta {
  display: flex;
  align-items: center;
  gap: var(--space-0-25);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
}

.card-title {
  margin-bottom: var(--space-0-75);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.card-description {
  flex: 1;
  margin-bottom: var(--space-1);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.tools-preview {
  display: flex;
  gap: var(--space-0-5);
  flex-wrap: wrap;
}

.tool-chip {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  padding: var(--space-0-25) var(--space-0-5);
  border-radius: var(--radius-pill);
  background: var(--color-surface-secondary);
  font-size: var(--font-size-xs);
}

.tool-logo {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

@media (max-width: 767px) {
  .comparisons-grid {
    grid-template-columns: 1fr;
  }
}
</style>
