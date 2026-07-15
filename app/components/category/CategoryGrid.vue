<template>
  <div class="grid">
    <CategoryCard
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script setup lang="ts">
import type { Category } from '~/types/category'

defineProps<{
  categories: Category[]
}>()
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
</style>