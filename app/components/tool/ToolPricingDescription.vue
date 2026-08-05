<template>
  <section class="pricing">
    <h2 class="pricing__title">
      Pricing
    </h2>

    <p class="pricing-description">
      {{ description }}
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<style scoped lang="scss">
.pricing {
  margin-bottom: var(--space-4);
}

.pricing__title {
  margin-bottom: var(--space-0-5);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.pricing-description {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
