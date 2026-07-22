<template>
  <LayoutSection
    title="Browse by category"
    description="Explore tools by category."
  >
    <template #action>
      <NuxtLink
        :to="routes.categories()"
        class="link"
      >
        View all categories
        <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </template>

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
