<template>
  <article class="card">
    <NuxtLink
      :to="routes.tool(tool.slug)"
      class="link"
    >
      <div class="logo">
        <img
          :src="tool.logo"
          :alt="`${tool.name} logo`"
          class="logo-image"
        >
      </div>

      <div class="content">
        <h3 class="title">
          {{ tool.name }}
        </h3>

        <p class="tagline">
          {{ tool.tagline }}
        </p>
      </div>

      <div class="rating">
        ★ {{ tool.rating }}
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'

import type { Tool } from '~/types/tool'

defineProps<{
  tool: Tool
}>()
</script>

<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  gap: var(--space-0-75);

  padding: var(--space-0-5) 0;

  color: inherit;
  text-decoration: none;

  transition: var(--transition-fast);
}

.link:hover {
  opacity: 0.75;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: var(--radius-md);
  background: var(--color-background);
}

.logo-image {
  width: 1.5rem;
  height: 1.5rem;

  object-fit: contain;
}

.content {
  flex: 1;
  min-width: 0;
}

.title {
  margin-bottom: var(--space-0-25);

  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
}

.tagline {
  color: var(--color-text-secondary);

  font-size: var(--font-size-sm);
}

.rating {
  color: var(--color-text-secondary);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}
</style>