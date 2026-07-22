<template>
  <section class="section">
    <header
      v-if="title || description || $slots.action"
      class="header"
    >
      <div class="content">
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
      </div>

      <div
        v-if="$slots.action"
        class="action"
      >
        <slot name="action" />
      </div>
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
  margin-top: var(--space-4);
}

.header {
  display: flex;
  gap: var(--space-1);
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: var(--space-1-5);
}

.content {
  min-width: 0;
}

.title {
  margin-bottom: var(--space-0-5);

  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
}

.description {
  max-width: 42rem;

  color: var(--color-text-secondary);
}

.action {
  flex: 0 0 auto;
}

@media (width <= 640px) {
  .header {
    flex-direction: column;
  }
}
</style>
