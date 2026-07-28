<template>
  <BaseContainer>
    <LayoutSection
      v-for="toolCategory in toolCategories"
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

const { toolCategories } = useTools()

useSeo(toolsSeo)
</script>