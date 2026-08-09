<template>
  <section class="tags">
    <h2 class="tags__title">
      Tags
    </h2>

    <ul class="tags__list">
      <li
        v-for="tag in tags"
        :key="tag"
        class="tags__item"
      >
        {{ tag }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<style scoped lang="scss">
.tags {
  margin-bottom: var(--space-4);
}

.tags__title {
  margin-bottom: var(--space-0-5);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.tags__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-5);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags__item {
  padding: var(--space-0-25) var(--space-0-75);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
}
</style>
