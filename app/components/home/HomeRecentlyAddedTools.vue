<template>
  <LayoutSection
    title="Recently Added Tools"
    description="Explore the latest tools added to the catalog."
  >
    <ToolGrid :tools="recentlyAddedTools" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { recentlyAddedTools } = useTools()
</script>
