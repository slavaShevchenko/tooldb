<template>
  <BaseContainer>
    <LayoutSection
      title="Categories"
      description="Browse tools by category."
    >
      <CategoryGrid :categories="categories" />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { categoriesSeo } from '~/seo'

const { categories } = useCategories()

useSeo(categoriesSeo)
</script>