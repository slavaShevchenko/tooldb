<template>
  <div class="grid">
    <CategoryCard
      v-for="category in visibleCategories"
      :key="category.id"
      :category="category"
    />

    <CategoryCard
      v-if="hasMoreCategories"
      :category="seeMoreCategory"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { routes } from '~/constants/routes'

import type { Category } from '~/types/category'

const props = defineProps<{
  categories: Category[]
  limit?: number
}>()

const visibleCategories = computed(() => {
  if (props.limit === undefined) {
    return props.categories
  }

  return props.categories.slice(0, props.limit)
})

const hasMoreCategories = computed(() => {
  if (props.limit === undefined) {
    return false
  }

  return props.categories.length > props.limit
})

const seeMoreCategory: Category = {
  id: 'see-more',
  slug: '',
  name: 'See all',
  description: '',
  icon: '→',
  isSeeMore: true,
  to: routes.categories(),
}
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: var(--space-1);

  grid-template-columns: repeat(8, minmax(0, 1fr));
}

@media (max-width: 1199px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 479px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>