<template>
  <section class="trending">
    <div class="trending__header">
      <h2 class="trending__title">
        {{ title }}
      </h2>

      <NuxtLink
        :to="link"
        class="trending__link"
      >
        View all
      </NuxtLink>
    </div>

    <div class="trending__list">
      <HomeTrendingToolCard
        v-for="tool in tools"
        :key="tool.id"
        :tool="tool"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

import type { Tool } from '~/types/tool'

defineProps<{
  title: string
  link: RouteLocationRaw
  tools: Tool[]
}>()
</script>

<style scoped lang="scss">
.trending {
  padding: var(--space-1-5);
  border: 1px solid transparent;
  border-radius: var(--radius-lg);

  background:
    linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
    linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%) border-box;
}

.trending__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-1);
}

.trending__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.trending__link {
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  text-decoration: none;
}

.trending__list {
  display: flex;
  flex-direction: column;
}

@media (max-width: 479px) {
  .trending {
    padding: var(--space-1);
  }
}
</style>