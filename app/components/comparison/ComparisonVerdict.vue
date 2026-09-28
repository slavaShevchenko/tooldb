<template>
  <section class="verdict">
    <div class="verdict-icon">
      <BaseIcon
        name="scale"
        :size="32"
        color="var(--color-surface)"
      />
    </div>

    <h2 class="verdict-title">
      {{ comparison.verdict.title }}
    </h2>

    <p class="verdict-description">
      {{ comparison.verdict.description }}
    </p>

    <BaseButton
      :to="routes.comparisons()"
      variant="primary"
      size="lg"
    >
      Read more comparisons
      <BaseIcon
        name="arrow-right"
        :size="18"
      />
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { ComparisonPage } from '~/types/comparison'

defineProps<{
  comparison: ComparisonPage
}>()
</script>

<style scoped lang="scss">
.verdict {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-2);
  margin: var(--space-3) 0;
  border-radius: var(--radius-xl);
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  color: var(--color-surface);
}

.verdict-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: var(--space-1);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.verdict-title {
  margin-bottom: var(--space-1);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-surface);
}

.verdict-description {
  max-width: 700px;
  margin-bottom: var(--space-1-5);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  opacity: 0.95;
}

@media (max-width: 767px) {
  .verdict {
    padding: var(--space-1);
  }

  .verdict-title {
    font-size: var(--font-size-xl);
  }

  .verdict-description {
    font-size: var(--font-size-md);
  }
}
</style>
