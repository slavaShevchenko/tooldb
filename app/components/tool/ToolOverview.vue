<template>
  <LayoutSection
    title="Overview"
    :description="tool.overview"
  >
    <ul class="tool-overview__highlights">
      <li
        v-for="highlight in tool.highlights"
        :key="highlight.id"
      >
        {{ highlight.text }}
      </li>
    </ul>
  </LayoutSection>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

defineProps<{
  tool: Tool
}>()
</script>

<style scoped lang="scss">
.tool-overview__highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-1);

  margin-top: var(--space-2);

  padding-left: 1.25rem;
}

@media (max-width: 700px) {
  .tool-overview__highlights {
    grid-template-columns: 1fr;
  }
}
</style>