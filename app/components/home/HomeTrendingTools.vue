<template>
  <section class="trending">
    <div class="trending__header">
      <h2 class="trending__title">
        Trending Tools
      </h2>

      <NuxtLink
        :to="routes.tools()"
        class="trending__link"
      >
        View all
      </NuxtLink>
    </div>

    <div class="trending__list">
      <HomeTrendingToolCard
        v-for="tool in featuredTools"
        :key="tool.id"
        :tool="tool"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'

const { featuredTools } = useTools()
</script>

<style scoped lang="scss">
.trending {
  padding: var(--space-1-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
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
</style>