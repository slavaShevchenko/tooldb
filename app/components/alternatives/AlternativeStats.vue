<template>
  <BaseStats :items="stats" />
</template>

<script setup lang="ts">
const {
  getPopularToolsCount,
  getCategoriesCount,
  getAlternativesCount,
} = useAlternatives()

const stats = computed(() => [
  {
    icon: 'lucide:star',
    value: getPopularToolsCount(),
    label: 'Popular Tools',
  },
  {
    icon: 'lucide:layers',
    value: getCategoriesCount(),
    label: 'Categories',
  },
  {
    icon: 'lucide:arrow-left-right',
    value: getAlternativesCount(),
    label: 'Alternatives',
  },
])
</script>
