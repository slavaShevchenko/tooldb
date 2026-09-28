<template>
  <BaseStats :items="stats" />
</template>

<script setup lang="ts">
const {
  getComparisonsCount,
  getCategoriesCount,
  getToolsCount,
} = useComparisons()

const stats = computed(() => [
  {
    icon: 'lucide:arrow-left-right',
    value: getComparisonsCount(),
    label: 'Comparisons',
  },
  {
    icon: 'lucide:layers',
    value: getCategoriesCount(),
    label: 'Categories',
  },
  {
    icon: 'lucide:wrench',
    value: getToolsCount(),
    label: 'Tools',
  },
])
</script>
