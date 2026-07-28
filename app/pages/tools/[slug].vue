<template>
  <BaseContainer>
    <template v-if="tool">
      <ToolHero :tool="tool" />

      <ToolOverview :tool="tool" />

      <ToolFeatures :tool="tool" />

      <ToolStats :tool="tool" />
    </template>

    <p v-else>
      Tool not found.
    </p>
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