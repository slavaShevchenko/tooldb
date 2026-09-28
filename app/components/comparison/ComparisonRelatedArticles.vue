<template>
  <LayoutSection
    title="Related comparisons"
    description="Explore more tool comparisons to find the perfect solution for your needs."
  >
    <div class="related-grid">
      <NuxtLink
        v-for="related in relatedComparisons"
        :key="related.slug"
        :to="routes.comparison(related.slug)"
        class="related-card"
      >
        <div class="card-badge">
          {{ related.category }}
        </div>

        <h3 class="card-title">
          {{ related.title }}
        </h3>

        <p class="card-description">
          {{ related.description }}
        </p>

        <div class="card-meta">
          <BaseIcon
            name="clock"
            :size="14"
            color="var(--color-text-secondary)"
          />
          <span>{{ related.readTime }}</span>
        </div>
      </NuxtLink>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { ComparisonPage } from '~/types/comparison'

defineProps<{
  relatedComparisons: ComparisonPage[]
}>()
</script>

<style scoped lang="scss">
::v-deep(.description) {
  line-height: 1.4;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-1-5);
}

.related-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-1-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  text-decoration: none;
  color: inherit;
  transition: var(--transition-fast);
}

.related-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-badge {
  display: inline-block;
  padding: var(--space-0-25) var(--space-0-5);
  margin-bottom: var(--space-0-75);
  border-radius: var(--radius-pill);
  background: var(--color-primary-25);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  align-self: flex-start;
}

.card-title {
  margin-bottom: var(--space-0-5);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.card-description {
  flex: 1;
  margin-bottom: var(--space-1);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: var(--space-0-25);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
}

@media (max-width: 767px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
