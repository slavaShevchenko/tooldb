<template>
  <div class="tools-preview">
    <template v-for="slug in slugs" :key="slug">
      <NuxtLink
        v-if="clickable"
        :to="routes.tool(slug)"
        class="tool-chip tool-chip--clickable"
      >
        <img
          :src="getToolLogo(slug)"
          :alt="getToolName(slug)"
          class="tool-logo"
          loading="lazy"
        >
        <span>{{ getToolName(slug) }}</span>
      </NuxtLink>
      <div
        v-else
        class="tool-chip"
      >
        <img
          :src="getToolLogo(slug)"
          :alt="getToolName(slug)"
          class="tool-logo"
          loading="lazy"
        >
        <span>{{ getToolName(slug) }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { tools } from '~/data/tools'
import { routes } from '~/constants/routes'

withDefaults(defineProps<{
  slugs: readonly string[] | string[]
  clickable?: boolean
}>(), {
  clickable: false,
})

const getToolLogo = (slug: string): string =>
  tools.find(t => t.slug === slug)?.logo || ''

const getToolName = (slug: string): string =>
  tools.find(t => t.slug === slug)?.name || slug
</script>

<style scoped lang="scss">
.tools-preview {
  display: flex;
  gap: var(--space-0-5);
  flex-wrap: wrap;
}

.tool-chip {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  padding: var(--space-0-25) var(--space-0-5);
  border-radius: var(--radius-pill);
  background: var(--color-surface-secondary);
  font-size: var(--font-size-xs);
  text-decoration: none;
  color: inherit;
}

.tool-chip--clickable {
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-border);
  }
}

.tool-logo {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>
