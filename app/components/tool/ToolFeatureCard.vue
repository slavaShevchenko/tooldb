<template>
  <article class="feature-card">
    <div class="feature-card__icon">
      {{ icon }}
    </div>

    <h3 class="feature-card__title">
      {{ title }}
    </h3>

    <p class="feature-card__description">
      {{ description }}
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<style scoped lang="scss">
.feature-card {
  height: 100%;

  padding: var(--space-1-5);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);

  background: var(--color-surface);

  transition:
    border-color var(--transition-base),
    transform var(--transition-base);

  &:hover {
    border-color: var(--color-border-hover);
    transform: translateY(-2px);
  }
}

.feature-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  margin-bottom: var(--space-1);

  border-radius: var(--radius-md);

  background: var(--color-surface-secondary);

  font-size: 1.5rem;
}

.feature-card__title {
  margin-bottom: var(--space-0-75);

  font-size: var(--font-size-lg);
}

.feature-card__description {
  color: var(--color-text-secondary);

  line-height: 1.7;
}
</style>