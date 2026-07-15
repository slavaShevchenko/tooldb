<template>
  <section class="section">
    <header
      v-if="title || description"
      class="header"
    >
      <h2
        v-if="title"
        class="title"
      >
        {{ title }}
      </h2>

      <p
        v-if="description"
        class="description"
      >
        {{ description }}
      </p>
    </header>

    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<style scoped lang="scss">
.section {
  margin-top: var(--space-8);
}

.header {
  margin-bottom: var(--space-5);
}

.title {
  margin-bottom: var(--space-2);

  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
}

.description {
  max-width: 42rem;

  color: var(--color-text-secondary);
}
</style>