<template>
  <BaseContainer>
    <LayoutSection
      v-for="toolCategory in toolCategoriesWithTools"
      :key="toolCategory.id"
      :title="toolCategory.name"
      :description="toolCategory.description"
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
  .container {
    margin-top: var(--space-2);
  }
  .tooldb__grid {
    margin-bottom: var(--space-2);
  } 
</style>