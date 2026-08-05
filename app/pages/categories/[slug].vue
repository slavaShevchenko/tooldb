<template>
  <BaseContainer>
    <LayoutSection
      :title="category?.name ?? 'Category not found'"
      :description="category?.description ?? ''"
    >
      <template v-if="category">
        <ToolGrid :tools="tools" />
      </template>

      <p v-else>
        Category not found.
      </p>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'

const route = useRoute()

const { getCategoryBySlug } = useCategories()
const { getToolsByCategory } = useTools()

const category = computed(() =>
  getCategoryBySlug(route.params.slug as string)
)

const tools = computed(() =>
  getToolsByCategory(route.params.slug as string)
)

if (category.value) {
  useBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Categories', url: '/categories' },
    { name: category.value.name, url: `/categories/${category.value.slug}` },
  ])
}

if (!category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Category not found',
  })
}

useSeo({
  title: `${category.value.name} Tools`,
  description: category.value.description,
  canonical: `https://tooldb.org/categories/${category.value.slug}`,
})
</script>

<style scoped lang="scss">
  .section {
    margin-top: var(--space-2);
  }
</style>