<template>
  <section class="tool-hero">
    <div class="tool-hero__grid">
      <ToolHeroInfo :tool="tool" />

      <ToolHeroSidebar :tool="tool" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

interface Props {
  tool: Tool
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.tool-hero {
  padding: var(--space-3) 0;
}

.tool-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: var(--space-2);
  align-items: start;
}

@media (max-width: 900px) {
  .tool-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>