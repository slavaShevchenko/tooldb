<template>
  <LayoutSection
    title="Browse by category"
    description="Explore tools by category."
  >
    <CategoryGrid
      :categories="categories"
      :limit="7"
    />
  </LayoutSection>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'

const { categories } = useCategories()
</script>

<style scoped lang="scss">
.link {
  display: inline-flex;
  gap: var(--space-0-5);
  align-items: center;

  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}

.link:hover {
  color: var(--color-primary-hover);
}
</style>
