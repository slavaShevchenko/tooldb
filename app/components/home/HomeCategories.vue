<template>
  <LayoutSection
    title="Browse Categories"
    description="Explore tools by category."
  >
    <CategoryGrid :categories="categories" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { categories } = useCategories()
</script>