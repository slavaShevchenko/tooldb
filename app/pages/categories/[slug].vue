<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      :title="category?.name ?? 'Category not found'"
      :description="category?.descriptionFull ?? ''"
    >
      <template v-if="category">
        <ToolGrid :tools="tools" />
      </template>

      <p v-else>
        Category not found.
      </p>

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
  description: category.value.descriptionFull,
  canonical: `https://tooldb.org/categories/${category.value.slug}`,
})
</script>

<style scoped lang="scss">
  .section {
    margin-top: var(--space-2);
  }
  .section:deep() > .header {
    gap: var(--space-3);
    margin-bottom: var(--space-3);
  }
  .section:deep() > .header .content {
    flex: 0 0 50%;
  }
  .section:deep() > .header .content .title {
    font-size: var(--font-size-3xl);
  }
  .section:deep() > .header .content .description {
    line-height: 1.8;
  }

  .tooldb__grid {
    padding-top: var(--space-3);
  } 

  @media (max-width: 991px) {
    .section:deep() > .header {
      display: block;
    }
  }
</style>