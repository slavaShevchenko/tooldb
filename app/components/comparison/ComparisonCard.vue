<template>
  <NuxtLink
    :to="routes.comparison(comparison.slug)"
    class="comparison-card"
  >
    <div class="card-header">
      <div class="badges">
        <span
          v-for="category in comparison.category"
          :key="category"
          class="badge"
        >
          {{ getCategoryName(category) }}
        </span>
      </div>

      <div class="meta">
        <BaseIcon
          name="clock"
          :size="14"
          color="var(--color-text-secondary)"
        />
        <span>{{ comparison.readTime }}</span>
      </div>
    </div>

    <h2 class="card-title">
      {{ comparison.title }}
    </h2>

    <p class="card-description">
      {{ comparison.description }}
    </p>

    <CommonToolChipList :slugs="comparison.tools" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { ComparisonPage } from '~/types/comparison'

const { comparison } = defineProps<{
  comparison: ComparisonPage
}>()

const { getCategoryBySlug } = useCategories()

const getCategoryName = (slug: string): string =>
  getCategoryBySlug(slug)?.name || slug
</script>

<style scoped lang="scss">
.comparison-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-1);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-secondary-25) 0%, var(--color-primary-25) 100%);
  text-decoration: none;
  color: inherit;
  transition: var(--transition-fast);

  &:hover {
    border-color: var(--color-border-hover);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-0-75);
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-25);
}

.badge {
  padding: var(--space-0-25) var(--space-0-5);
  border-radius: var(--radius-pill);
  background: var(--color-primary-25);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

.meta {
  display: flex;
  align-items: center;
  gap: var(--space-0-25);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
}

.card-title {
  margin-bottom: var(--space-0-75);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.card-description {
  flex: 1;
  margin-bottom: var(--space-1);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  line-height: 1.4;
}
</style>
