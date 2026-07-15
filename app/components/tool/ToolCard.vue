<template>
  <article class="card">
    <div class="header">
      <div class="logo">
        {{ tool.logo }}
      </div>

      <div class="content">
        <h3 class="title">
          {{ tool.name }}
        </h3>

        <p class="tagline">
          {{ tool.tagline }}
        </p>
      </div>
    </div>

    <div class="footer">
      <span class="pricing">
        {{ tool.pricing }}
      </span>

      <span class="rating">
        ★ {{ tool.rating }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

defineProps<{
  tool: Tool
}>()
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  padding: var(--space-5);

  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);

  transition: var(--transition-fast);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.header {
  display: flex;
  gap: var(--space-4);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  font-size: 1.75rem;

  border-radius: var(--radius-md);
  background: var(--color-background);
}

.content {
  flex: 1;
}

.title {
  margin-bottom: var(--space-1);

  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.tagline {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pricing,
.rating {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
</style>