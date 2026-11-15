<template>
  <LayoutSection
    title="Latest Comparisons"
    description="Make confident software decisions with our in-depth side-by-side comparisons of leading tools in every category. We analyze pricing structures, feature sets, integration capabilities, ease of use, customer support quality, and real-world performance to help you choose the right solution for your business. Each comparison provides detailed breakdowns of strengths and weaknesses, ideal use cases, and specific recommendations based on team size, industry, and workflow requirements. Whether you're evaluating project management platforms, CRM systems, marketing automation tools, or accounting software, our expert analysis cuts through the marketing noise to give you objective, actionable insights that save time and ensure you invest in tools that truly deliver value."
  >
    <ComparisonGrid :comparisons="latestComparisons" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { getComparisons } = useComparisons()

const latestComparisons = computed(() => getComparisons().slice(0, 6))
</script>
