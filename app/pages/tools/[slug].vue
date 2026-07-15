<template>
  <BaseContainer>
    <LayoutSection
      :title="tool?.name ?? 'Tool not found'"
      :description="tool?.description ?? ''"
    >
      <ToolCard
        v-if="tool"
        :tool="tool"
      />

      <p v-else>
        Tool not found.
      </p>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'

import { toolsSeo } from '~/seo'

const route = useRoute()

const { getToolBySlug } = useTools()

const tool = computed(() =>
  getToolBySlug(route.params.slug as string)
)

useSeo(toolsSeo)
</script>