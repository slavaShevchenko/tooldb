<template>
  <aside class="tool-sidebar">
    <div class="tool-sidebar__card">
      <BaseButton
        :href="tool.website"
        target="_blank"
        size="lg"
        class="tool-sidebar__button"
      >
        Visit Website
      </BaseButton>

      <dl class="tool-sidebar__list">
        <div class="tool-sidebar__item">
          <dt>Pricing</dt>
          <dd>{{ tool.pricing }}</dd>
        </div>

        <div class="tool-sidebar__item">
          <dt>Website</dt>
          <dd>{{ tool.websiteLabel }}</dd>
        </div>

        <div class="tool-sidebar__item">
          <dt>Company</dt>
          <dd>{{ tool.company }}</dd>
        </div>

        <div class="tool-sidebar__item">
          <dt>Updated</dt>
          <dd>{{ tool.lastUpdated }}</dd>
        </div>
      </dl>

      <div class="tool-sidebar__platforms">
        <span
          v-for="platform in tool.platforms"
          :key="platform"
          class="tool-sidebar__platform"
        >
          {{ platform }}
        </span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

defineProps<{
  tool: Tool
}>()
</script>

<style scoped lang="scss">
.tool-sidebar__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-1-5);
}

.tool-sidebar__button {
  width: 100%;
  margin-bottom: var(--space-1-5);
}

.tool-sidebar__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.tool-sidebar__item {
  display: flex;
  justify-content: space-between;
  gap: var(--space-1);

  dt {
    color: var(--color-text-secondary);
  }

  dd {
    margin: 0;
    text-align: right;
    font-weight: var(--font-weight-semibold);
  }
}

.tool-sidebar__platforms {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-5);

  margin-top: var(--space-2);
}

.tool-sidebar__platform {
  padding: .35rem .7rem;
  border-radius: var(--radius-pill);
  background: var(--color-surface-secondary);
  font-size: var(--font-size-sm);
}
</style>