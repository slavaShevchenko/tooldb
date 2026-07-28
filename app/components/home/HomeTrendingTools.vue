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
</style>