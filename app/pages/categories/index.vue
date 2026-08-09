<template>
  <BaseContainer>
    <LayoutSection
      title="Categories"
      description="Browse tools by category."
    >
      <CategoryGrid :categories="toolCategories" />

      <div class="tooldb__grid">
        <div class="tooldb__grid-left">
          <CommonAuthorBox />
        </div>
        <div class="tooldb__grid-right">
          <ToolAffiliateNotice />
        </div>
      </div>
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

useAuthorJsonLd()

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

  .tooldb__grid {
    padding-top: var(--space-3);
  } 
</style>