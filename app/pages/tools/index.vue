<template>
  <BaseContainer>
    <LayoutSection
      title="All Tools"
      description="Browse all available tools in the catalog."
    >
      <ToolGrid :tools="tools" />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { toolsSeo } from '~/seo'

const { tools } = useTools()

useSeo(toolsSeo)
</script>