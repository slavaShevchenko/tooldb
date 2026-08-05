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
          <BaseIcon
            name="star"
            :size="20"
            :color="'var(--color-secondary)'"
          />
          {{ tool.rating }}
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
  background:
    linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
    linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%) border-box;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
}

.card .link {
  height: 100%;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border: 1px solid transparent;
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-1);
  padding: var(--space-1);
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
  width: var(--space-3);
  height: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-background);
}

.logo-image {
  width: var(--space-2);
  height: var(--space-2);
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
  margin-top: var(--space-0-5);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.3;
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
.rating {
  display: flex;
  align-items: center;
  gap: var(--space-0-25);
}
</style>