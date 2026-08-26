<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Categories"
      :description="categoriesSeo.onPageDescription"
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
  canonical: categoriesSeo.canonical,
})
</script>

<style scoped lang="scss">
  .section {
    margin-top: var(--space-2);
  }
  .section:deep() .header {
    gap: var(--space-3);
    margin-bottom: var(--space-3);
  }
  .section:deep() .content {
    flex: 0 0 75%;
  }
  .section:deep() .content .title {
    font-size: var(--font-size-3xl);
  }
  .section:deep() .content .description {
    line-height: 1.8;
  }

  .tooldb__grid {
    padding-top: var(--space-3);
  } 
  
  @media (max-width: 991px) {
    .section:deep() .header {
      display: block;
    }
  }
</style>