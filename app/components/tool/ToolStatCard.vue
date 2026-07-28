<template>
  <article class="stat-card">
    <div class="stat-card__value">
      {{ value }}
    </div>

    <div class="stat-card__label">
      {{ label }}
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<style scoped lang="scss">
.stat-card {
  padding: var(--space-2);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);

  background: var(--color-surface);

  text-align: center;
}

.stat-card__value {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.stat-card__label {
  margin-top: var(--space-0-5);
  color: var(--color-text-secondary);
}
</style>