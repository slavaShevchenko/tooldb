<template>
  <BaseContainer>
    <LayoutSection
      title="Categories"
      description="Browse tools by category."
    >
      <CategoryGrid :categories="toolCategories" />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { categoriesSeo } from '~/seo'

const { toolCategories } = useTools()

useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Categories', url: '/categories' },
])

useSeo({
  title: categoriesSeo.title,
  description: categoriesSeo.description,
  canonical: 'https://tooldb.org/categories',
})
</script>

<style scoped lang="scss">
  .section {
    margin-top: var(--space-2);
  }
</style>