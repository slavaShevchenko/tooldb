<template>
  <article class="feature-card">
    <div class="feature-card__icon">
      <BaseIcon
        :name="icon"
        :size="32"
        :color="'var(--color-surface)'"
      />
    </div>

    <div class="feature-card__content">
      <h3 class="feature-card__title">
        {{ title }}
      </h3>

      <p class="feature-card__description">
        {{ description }}
      </p>
    </div>
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
  display: flex;
  gap: var(--space-1);
  padding: var(--space-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.feature-card__icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-secondary-75) 0%, var(--color-primary-75) 100%) border-box;
}

.feature-card__title {
  margin-bottom: var(--space-0-25);
  font-size: var(--font-size-lg);
}

.feature-card__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.25;
}
</style>