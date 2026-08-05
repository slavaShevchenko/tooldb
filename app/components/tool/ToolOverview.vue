<template>
  <LayoutSection title="Overview">
    <div class="tool-overview__content">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>

    <div class="tool-overview__button">
      <BaseButton
        :href="tool.affiliateUrl ?? tool.website"
        target="_blank"
        size="lg"
        width="full"
      >
        Visit Website
      </BaseButton>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ToolDetails } from '~/types/tool'

const props = defineProps<{
  tool: ToolDetails
}>()

const paragraphs = computed(() =>
  props.tool.content?.overview
    ?.split('\n\n')
    .map(paragraph => paragraph.trim())
    .filter(Boolean) ?? [],
)
</script>

<style scoped lang="scss">
.tool-overview__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  p {
    margin: 0;
    line-height: 1.7;
  }
}

.tool-overview__button {
  max-width: 300px;
  margin: 0 auto;
  padding-top: var(--space-3);
}

@media (max-width: 919px) {
  .tool-overview__button {
    max-width: 100%;
  }
}
</style>
