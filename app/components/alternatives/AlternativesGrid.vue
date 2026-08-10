<template>
  <div class="grid">
    <AlternativesCard
      v-for="item in alternatives"
      :key="item.id"
      :alternative="item"
    />
  </div>
</template>

<script setup lang="ts">
import type { AlternativePage } from '~/types/alternatives'

defineProps<{
  alternatives: AlternativePage[]
}>()
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: var(--space-1-5);
  grid-template-columns: repeat(3, minmax(280px, 1fr));
}

@media (max-width: 1199px) {
  .grid {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }
}

@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(1, minmax(280px, 1fr));
  }
}
</style>