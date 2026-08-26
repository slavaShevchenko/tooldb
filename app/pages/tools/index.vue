<template>
  <BaseContainer>
    <h1 class="tools__header">The Complete Directory of Digital Tools & SaaS (2026)</h1>
    <LayoutSection
      v-for="toolCategory in toolCategoriesWithTools"
      :key="toolCategory.id"
      :title="toolCategory.name"
      :description="toolCategory.descriptionFull"
      :icon="toolCategory.icon"
    >
      <ToolGrid :tools="toolCategory.tools" />
    </LayoutSection>

    <div class="tooldb__grid">
      <div class="tooldb__grid-left">
        <CommonAuthorBox />
      </div>
      <div class="tooldb__grid-right">
        <ToolAffiliateNotice />
      </div>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import { toolsSeo } from '~/seo'

const { toolCategoriesWithTools } = useTools()

useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
])

useItemListJsonLd(
  toolCategoriesWithTools.value.map((t, i) => ({
    name: t.name,
    url: `/categories/${t.slug}`,
    position: i + 1,
  })),
  'Digital Tools Catalog'
)

useAuthorJsonLd()

useSeo({
  title: toolsSeo.title,
  description: toolsSeo.description,
  canonical: 'https://tooldb.org/tools',
})
</script>

<style lang="scss" scoped>
  .tools__header {
    margin-top: var(--space-2);
    font-size: var(--font-size-3xl);
  }
  .section {
    margin-top: var(--space-2);
  }
  .section:deep() > .header {
    gap: var(--space-3);
    margin-bottom: var(--space-3);
  }
  .section:deep() > .header .content .description {
    line-height: 1.8;
  }

  .tooldb__grid {
    margin-bottom: var(--space-2);
  } 

  @media (max-width: 991px) {
    .tools__header {
      margin-top: var(--space-2);
      font-size: var(--font-size-2xl);
    }
    .section:deep() > .header {
      display: block;
    }
  }
</style>