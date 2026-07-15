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

import { categoriesSeo } from '~/seo'

useSeo(categoriesSeo)

const route = useRoute()

const { getCategoryBySlug } = useCategories()
const { getToolsByCategory } = useTools()

const category = computed(() =>
  getCategoryBySlug(route.params.slug as string)
)

const tools = computed(() =>
  getToolsByCategory(route.params.slug as string)
)
</script>