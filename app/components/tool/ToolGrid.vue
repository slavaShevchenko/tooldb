<template>
  <div class="grid">
    <ToolCard
      v-for="tool in tools"
      :key="tool.id"
      :tool="tool"
    />
  </div>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

defineProps<{
  tools: Tool[]
}>()
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: var(--space-1-5);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
</style>