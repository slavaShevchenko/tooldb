<template>
  <LayoutSection
    title="Latest Comparisons"
    description="In-depth side-by-side comparisons to help you pick the right tool."
  >
    <ComparisonGrid :comparisons="latestComparisons" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { getComparisons } = useComparisons()

const latestComparisons = computed(() => getComparisons().slice(0, 6))
</script>
