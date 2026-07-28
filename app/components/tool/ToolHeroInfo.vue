<template>
  <div class="tool-info">
    <img
      :src="tool.logo"
      :alt="tool.name"
      class="tool-info__logo"
    >

    <div class="tool-info__content">
      <div class="tool-info__header">
        <h1>
          {{ tool.name }}
        </h1>
      </div>

      <p class="tool-info__tagline">
        {{ tool.tagline }}
      </p>

      <div class="tool-info__rating">
        <BaseIcon
          name="star"
          :size="20"
          :color="'var(--color-secondary)'"
        />
        {{ tool.rating }}
        <span>
          ({{ tool.reviewCount }} reviews)
        </span>
      </div>

      <BasePillGrid>
        <BasePill
            v-for="category in tool.categories"
            :key="category"
            :to="`/categories/${category}`"
        >
            {{ category }}
        </BasePill>
    </BasePillGrid>

      <div class="tool-info__actions">
        <BaseButton
          :href="tool.website"
          target="_blank"
        >
          Visit Website
        </BaseButton>

        <BaseButton variant="secondary">
          Share
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

defineProps<{
  tool: Tool
}>()
</script>

<style scoped lang="scss">
.tool-info {
  display: flex;
  gap: var(--space-2);
}

.tool-info__logo {
  width: 96px;
  height: 96px;
  border-radius: var(--radius-lg);
  object-fit: cover;
  flex-shrink: 0;
}

.tool-info__content {
  flex: 1;
}

.tool-info__header {
  display: flex;
  align-items: center;
  gap: var(--space-0-75);
  margin-bottom: var(--space-0-5);
}

.tool-info__header h1 {
  margin: 0;
  font-size: var(--font-size-3xl);
}

.tool-info__tagline {
  margin-bottom: var(--space-1);
  color: var(--color-text-secondary);
}

.tool-info__rating {
  margin-bottom: var(--space-1);
  font-weight: var(--font-weight-semibold);
}

.tool-info__rating span {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-regular);
}

.tool-info__actions {
  display: flex;
  gap: var(--space-1);
  margin-top: var(--space-1-5);
}

@media (max-width: 700px) {
  .tool-info {
    flex-direction: column;
  }

  .tool-info__logo {
    width: 72px;
    height: 72px;
  }

  .tool-info__header {
    flex-wrap: wrap;
  }
}
</style>