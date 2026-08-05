<template>
  <div class="tool-info">
    <div class="tool-info__left">
      <div class="tool-info__logo-wrapper">
        <img
          :src="tool.logo"
          :alt="tool.name"
          class="tool-info__logo"
        >
      </div>

      <div class="tool-info__content">
        <div class="tool-info__header">
          <h1>
            {{ tool.name }}
          </h1>
        </div>

        <p class="tool-info__tagline">
          {{ tool.tagline }}
        </p>

        <BasePillGrid>
          <BasePill
            v-for="category in tool.categories"
            :key="category"
            :to="`/categories/${category}`"
          >
            {{ category }}
          </BasePill>
        </BasePillGrid>

        <div class="tool-info__rating">
          <BaseIcon
            name="star"
            :size="20"
            :color="'var(--color-secondary)'"
          />
          {{ tool.rating }}
        </div>
      </div>
    </div>
    <div class="tool-info__right">
      <BaseButton
        :href="tool.affiliateUrl ?? tool.website"
        target="_blank"
        size="lg"
        width="full"
      >
        Visit Website
      </BaseButton>
    </div>
  </div>
  <ul class="tool-overview__highlights">
    <li
      v-for="highlight in tool.highlights"
      :key="highlight.id"
    >
      <BaseIcon
        name="circle-check-big"
        :size="20"
        color="var(--color-primary)"
      />

      <span>{{ highlight.text }}</span>
    </li>
  </ul>
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
.tool-info__left {
  flex: 1 1 auto;
  display: flex;
  gap: var(--space-2);
}
.tool-info__right {
  flex: 0 0 300px;
}

.tool-info__logo {
  width: 96px;
  min-width: 96px;
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
  line-height: 1.6;
}

.tool-info__rating {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  margin-bottom: var(--space-1);
  padding-top: var(--space-1);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}

.tool-overview__highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-1);
  padding-left: 0;
  padding-top: var(--space-2);
  padding-bottom: var(--space-3);
  list-style: none;
}

.tool-overview__highlights li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-0-5);
  font-family: var(--font-family-heading);
  letter-spacing: 1px;
  line-height: 1.6;
}

.tool-overview__highlights li .iconify {
  margin-top: 3px;
}

@media (max-width: 919px) {
  .tool-info {
    display: block;
  }
}

@media (max-width: 723px) {
  .tool-info {
    flex-direction: column;
  }

  .tool-info__left {
    gap: var(--space-1);
  }

  .tool-info__logo {
    width: 72px;
    min-width: 72px;
    height: 72px;
  }

  .tool-info__header {
    flex-wrap: wrap;
  }

  .tool-overview__highlights {
    display: block;
  }

  .tool-overview__highlights li + li {
    margin-top: var(--space-1);
  }

  .tool-info__header h1 {
    font-size: var(--font-size-xl);
  }
}
</style>
