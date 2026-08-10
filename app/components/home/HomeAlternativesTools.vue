<template>
  <LayoutSection
    title="Latest Alternatives"
    description="Fresh comparisons to help you switch from popular tools."
  >
    <AlternativesGrid :alternatives="getFeaturedAlternatives(6, 'asc')" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { getFeaturedAlternatives } = useAlternatives()
</script>