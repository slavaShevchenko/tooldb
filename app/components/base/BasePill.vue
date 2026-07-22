<template>
  <NuxtLink
    :to="to"
    class="pill"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<style scoped lang="scss">
.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: var(--space-0-25) var(--space-0-75);

  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  white-space: nowrap;

  background: var(--color-surface-secondary);
  border-radius: var(--radius-pill);

  transition: var(--transition-fast);
}

.pill:hover {
  color: var(--color-primary);
}
</style>
