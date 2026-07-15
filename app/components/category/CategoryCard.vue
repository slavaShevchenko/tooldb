<template>
  <article class="card">
    <NuxtLink
      :to="routes.category(category.slug)"
      class="link"
    >
      <div class="icon">
        {{ category.icon }}
      </div>

      <h3 class="title">
        {{ category.name }}
      </h3>

      <p class="description">
        {{ category.description }}
      </p>

      <span class="count">
        {{ toolCount }} tools
      </span>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { routes } from '~/constants/routes'

import type { Category } from '~/types/category'

const props = defineProps<{
  category: Category
}>()

const { getToolsByCategory } = useTools()

const toolCount = computed(() =>
  getToolsByCategory(props.category.slug).length
)
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
  gap: var(--space-3);

  padding: var(--space-5);

  color: inherit;
  text-decoration: none;
}

.icon {
  font-size: 2rem;
}

.title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.description {
  flex: 1;

  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.count {
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}
</style>