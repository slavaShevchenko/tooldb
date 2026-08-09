<template>
  <div class="alternatives-table">
    <AlternativesTableRow
      v-for="alternative in alternatives"
      :key="alternative.id"
      :alternative="alternative"
    />
  </div>
</template>

<script setup lang="ts">
import type { AlternativePage } from '~/types/alternatives'

const { alternatives } = defineProps<{
  alternatives: AlternativePage[]
}>()
</script>

<style scoped lang="scss">
.alternatives-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-1);
  background: transparent;
}

@media (max-width: 1279px) {
  .alternatives-table {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 991px) {
  .alternatives-table {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>