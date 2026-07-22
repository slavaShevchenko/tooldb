<template>
  <article class="card">
    <NuxtLink
      :to="routes.tool(tool.slug)"
      class="link"
    >
      <div class="header">
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
      </div>

      <div class="footer">
        <span class="pricing">
          {{ tool.pricing }}
        </span>

        <span class="rating">
          ★ {{ tool.rating }}
        </span>
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
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);

  transition: var(--transition-fast);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.link {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);

  padding: var(--space-1-5);

  color: inherit;
  text-decoration: none;
}

.header {
  display: flex;
  gap: var(--space-1);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 3rem;
  height: 3rem;

  border-radius: var(--radius-md);
  background: var(--color-background);
}

.logo-image {
  width: 2rem;
  height: 2rem;

  object-fit: contain;
}

.content {
  flex: 1;
}

.title {
  margin-bottom: var(--space-0-25);

  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.tagline {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pricing,
.rating {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
</style>