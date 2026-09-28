<template>
  <BaseContainer>
    <ComparisonHero
      :comparison="comparison"
      :comparison-tools="comparisonTools"
    />

    <ComparisonOverview
      :comparison="comparison"
      :comparison-tools="comparisonTools"
    />

    <section class="text__section">
      <h2 class="text__section-title">
        {{ comparison.textOverview.title }}
      </h2>
      <div class="text__section-content">
        <p
          v-for="(paragraph, index) in comparison.textOverview.paragraphs"
          :key="`overview-${index}`"
          class="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <ComparisonDifferences
      :comparison="comparison"
      :comparison-tools="comparisonTools"
    />

    <ComparisonProsCons
      :comparison="comparison"
    />

    <section class="text__section">
      <h2 class="text__section-title">
        {{ comparison.textOverall.title }}
      </h2>
      <div class="text__section-content">
        <p
          v-for="(paragraph, index) in comparison.textOverall.paragraphs"
          :key="`overall-${index}`"
          class="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <ComparisonVerdict
      :comparison="comparison"
    />

    <ComparisonRelatedArticles
      :related-comparisons="relatedComparisons"
    />
  </BaseContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'

import { routes } from '~/constants/routes'

const route = useRoute()

const { getComparisonBySlug, getComparisonTools, getRelatedComparisons } = useComparisons()

const comparison = computed(() => {
  const found = getComparisonBySlug(route.params.slug as string)

  if (!found) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Comparison not found',
    })
  }

  return found
})

const comparisonTools = computed(() =>
  getComparisonTools(comparison.value.tools as string[])
)

const relatedComparisons = computed(() =>
  getRelatedComparisons(comparison.value.slug)
)

useComparisonJsonLd(comparison.value, comparisonTools.value)

useBreadcrumbJsonLd([
  { name: 'Home', url: routes.home() },
  { name: 'Comparisons', url: routes.comparisons() },
  { name: comparison.value.title, url: routes.comparison(comparison.value.slug) },
])

useSeo({
  title: comparison.value.title,
  description: comparison.value.description,
  canonical: `https://tooldb.org${routes.comparison(comparison.value.slug)}`,
})
</script>

<style scoped lang="scss">
.container {
  margin: var(--space-2) auto var(--space-4);
}

.text__section {
  margin-bottom: var(--space-4);
}

.text__section-title {
  margin-bottom: var(--space-1);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
}

.text__section-content {
  margin-top: var(--space-1);
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
}

.paragraph {
  margin: 0;
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

@media (max-width: 991px) {
  .container {
    margin: var(--space-2) 0 0 0;
  }

  .text__section-title {
    font-size: var(--font-size-xl);
  }

  .paragraph {
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }
}
</style>