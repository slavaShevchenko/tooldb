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
.feature-card + .feature-card {
  margin-top: var(--space-1);
}
</style>