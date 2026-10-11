<template>
  <div class="tool-relationships">
    <div
      v-if="alternativeSlugs.length"
      class="tool-alternatives"
    >
      <h2 class="tool-alternatives__title">
        {{ toolName }} is listed as an alternative to:
      </h2>

      <div class="tool-alternatives__buttons">
        <BaseButton
          v-for="slug in alternativeSlugs"
          :key="slug"
          :to="routes.alternative(slug)"
          size="sm"
          variant="orange"
        >
          {{ getAlternativeBySlug(slug).name }}
        </BaseButton>
      </div>
    </div>

    <div
      v-if="comparisonSlugs.length"
      class="tool-comparisons"
    >
      <h2 class="tool-comparisons__title">
        {{ toolName }} is compared in:
      </h2>

      <div class="tool-comparisons__buttons">
        <BaseButton
          v-for="slug in comparisonSlugs"
          :key="slug"
          :to="routes.comparison(slug)"
          size="sm"
          variant="primary"
          oneline
        >
          {{ formatComparisonTitle(slug) }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { routes } from '~/constants/routes'

const props = defineProps<{
  toolSlug: string
  toolName: string
}>()

const {
  getAlternativeSlugsByToolSlug,
  getAlternativeBySlug,
} = useAlternatives()

const {
  getComparisonSlugsByToolSlug,
  getComparisonBySlug,
} = useComparisons()

const alternativeSlugs = computed(() =>
  getAlternativeSlugsByToolSlug(props.toolSlug)
)

const comparisonSlugs = computed(() =>
  getComparisonSlugsByToolSlug(props.toolSlug)
)

const formatComparisonTitle = (slug: string): string => {
  const comparison = getComparisonBySlug(slug)
  if (!comparison) return slug

  const colonIndex = comparison.title.indexOf(':')
  return colonIndex > 0 ? comparison.title.slice(0, colonIndex) : comparison.title
}
</script>

<style scoped lang="scss">
.tool-relationships {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.tool-alternatives__title,
.tool-comparisons__title {
  margin-bottom: var(--space-0-5);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.tool-alternatives__buttons,
.tool-comparisons__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-75);
}
</style>