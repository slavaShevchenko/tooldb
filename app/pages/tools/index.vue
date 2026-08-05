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
</style>