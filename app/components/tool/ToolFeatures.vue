<template>
  <LayoutSection title="Key Features">
    <div class="tool-features__grid">
      <ToolFeatureCard
        v-for="feature in tool.features"
        :key="feature.id"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
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
.tool-features__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-1-5);
}

@media (max-width: 1000px) {
  .tool-features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .tool-features__grid {
    grid-template-columns: 1fr;
  }
}
</style>