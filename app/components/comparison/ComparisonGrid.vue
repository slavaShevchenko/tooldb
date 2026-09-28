<template>
  <div class="comparisons-grid">
    <ComparisonCard
      v-for="comparison in comparisons"
      :key="comparison.id"
      :comparison="comparison"
    />
  </div>
</template>

<script setup lang="ts">
import type { ComparisonPage } from '~/types/comparison'

defineProps<{
  comparisons: ComparisonPage[]
}>()
</script>

<style scoped lang="scss">
.comparisons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-1-5);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
