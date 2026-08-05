<template>
  <BaseContainer>
    <ToolHero :tool="tool!" />
  </BaseContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'

const route = useRoute()

const { getToolBySlug } = useTools()

const tool = computed(() =>
  getToolBySlug(route.params.slug as string)
)

if (!tool.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tool not found',
  })
}

useSoftwareApplicationJsonLd(tool.value)

useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: tool.value.name, url: `/tools/${tool.value.slug}` },
])

useSeo({
  title: `${tool.value.name} - ${tool.value.tagline}`,
  description: tool.value.description,
  canonical: `https://tooldb.org/tools/${tool.value.slug}`,
})
</script>