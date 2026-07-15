<template>
  <BaseContainer>
    <LayoutSection
      :title="category?.name ?? 'Category not found'"
      :description="category?.description ?? ''"
    >
      <CategoryCard
        v-if="category"
        :category="category"
      />

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

const category = computed(() =>
  getCategoryBySlug(route.params.slug as string)
)
</script>