<template>
  <article 
    class="card"
    :class="{ 'card--see-more': category.isSeeMore }"
  >
    <NuxtLink
      :to="category.to ?? routes.category(category.slug)"
      class="link"
    >
      <div class="icon">
        <BaseIcon
          :name="category.icon"
          :size="40"
          :color="'var(--color-surface)'"
        />
      </div>

      <h3 class="title">
        {{ category.name }}
      </h3>

      <span
        v-if="!category.isSeeMore"
        class="count"
      >
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
  background:
    linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
    linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%) border-box;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border: 1px solid transparent;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-0-75);
  padding: var(--space-1);
  color: inherit;
  text-align: center;
  text-decoration: none;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--space-3) + var(--space-0-5));
  height: calc(var(--space-3) + var(--space-0-5));
  font-size: 2rem;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-secondary-75) 0%, var(--color-primary-75) 100%) border-box;
}

.title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}

.count {
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
}

.card--see-more {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card--see-more .icon {
  background: var(--color-primary);
}
</style>