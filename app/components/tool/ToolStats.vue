<template>
  <LayoutSection title="Statistics">
    <div class="tool-stats__grid">
      <ToolStatCard
        v-for="stat in tool.stats"
        :key="stat.id"
        :value="stat.value"
        :label="stat.label"
      />
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

defineProps<{
  tool: Tool
}>()
</script>

<style scoped lang="scss">
.tool-stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-1-5);
}

@media (max-width: 900px) {
  .tool-stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .tool-stats__grid {
    grid-template-columns: 1fr;
  }
}
</style>