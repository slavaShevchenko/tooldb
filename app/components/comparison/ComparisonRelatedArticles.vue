<template>
  <LayoutSection
    title="Related comparisons"
    description="Explore more tool comparisons to find the perfect solution for your needs."
  >
    <ComparisonGrid :comparisons="relatedComparisons" />
  </LayoutSection>
</template>

<script setup lang="ts">
import type { ComparisonPage } from '~/types/comparison'

defineProps<{
  relatedComparisons: ComparisonPage[]
}>()
</script>

<style scoped lang="scss">
:deep(.layout-section__description) {
  line-height: 1.4;
}
</style>
