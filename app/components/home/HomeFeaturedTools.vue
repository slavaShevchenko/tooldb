<template>
  <LayoutSection
    title="Featured Tools"
    description="Discover our hand-picked collection of popular digital tools."
  >
    <ToolGrid :tools="featuredTools" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { featuredTools } = useTools()
</script>