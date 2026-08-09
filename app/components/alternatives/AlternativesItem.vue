<template>
  <div
    v-if="tool"
    class="alt-item"
  >
    <div class="alt-item__description">
      <div class="alt-item__logo">
        <picture>
          <source
            media="(max-width: 479px)"
            :srcset="tool.logo.replace(/(\.[^.]+)$/, '-size-32$1')"
          >
          <img
            :src="tool.logo"
            :alt="`${tool.name} logo`"
            class="logo-image"
          >
        </picture>
      </div>
      <div class="alt-item__info">
        <h2 class="alt-item__info-name">
          {{ tool.name }}
        </h2>
        <div class="alt-item__info-text">
          {{ tool.tagline }}
        </div>
        <h3 class="alt-item__small-header">
          Categories
        </h3>
        <BasePillGrid>
          <BasePill
            v-for="category in tool.categories"
            :key="category"
            :to="`/categories/${category}`"
          >
            {{ getCategoryName(category) }}
          </BasePill>
        </BasePillGrid>
      </div>
    </div>
    <div class="alt-item__best-for">
      <h3 class="alt-item__small-header">
        Best for
      </h3>
      <div class="alt-item__best-for-text">
        {{ alternative.bestFor }}
      </div>
    </div>
    <div class="alt-item__strengths">
      <h3 class="alt-item__small-header">
        Key strengths
      </h3>
      <ToolHighlights
        :icon-size="16"
        :items="alternative.keyStrengths"
      />
    </div>
    <div class="alt-item__actions">
      <BaseButton
        :href="tool.affiliateUrl ?? tool.website"
        target="_blank"
        size="md"
        width="full"
      >
        Visit Website
      </BaseButton>

      <BaseButton
        :to="routes.tool(alternative.slug)"
        size="md"
        variant="secondary"
        width="full"
      >
        View Details <span>→</span>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { routes } from '~/constants/routes'

import type { AlternativeItem } from '~/types/alternatives'
import type { Tool } from '~/types/tool'

const { getToolBySlug } = useTools()
const { getCategoryBySlug } = useCategories()

const { alternative } = defineProps<{
  alternative: AlternativeItem
}>()

const tool = computed(() => getToolBySlug(alternative.slug))

const getCategoryName = (slug: string) => {
  const category = getCategoryBySlug(slug)
  return category?.name || slug
}
</script>

<style scoped lang="scss">
.alt-item {
  display: flex;
  gap: var(--space-2);
  padding: var(--space-1);
  background: linear-gradient(135deg, var(--color-secondary-50) 0%, var(--color-primary-50) 100%);
  border-radius: var(--radius-lg);
}

.alt-item__description {
  flex: 0 0 400px;
  display: flex;
  gap: var(--space-1);
}
.alt-item__logo {
  flex: 0 0 96px;
}
.alt-item__logo img {
  border-radius: var(--radius-xl);
}
.alt-item__info-name {
  margin-bottom: var(--space-0-5);
}
.alt-item__info-text {
  margin-bottom: var(--space-1);
  font-size: var(--font-size-sm);
  line-height: 1.4;
}
.alt-item__small-header {
  margin-bottom: var(--space-0-5);
}
.alt-item__best-for {
  flex: 0 0 200px;
}
.alt-item__best-for-text {
  font-size: var(--font-size-sm);
  line-height: 1.4;
}
.alt-item__strengths {
  flex: 1 1 auto;
}
.alt-item__actions {
  flex: 0 0 160px;
  align-self: center;
}
.alt-item__actions a + a {
  margin-top: var(--space-1);
}

.alt-item__strengths:deep()  .tool-overview__highlights {
  display: block;
  padding-top: 0;
  padding-bottom: 0;
}
.alt-item__strengths:deep()  .tool-overview__highlights li {
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  line-height: 1.4;
  letter-spacing: normal;
}
.alt-item__strengths:deep()  .tool-overview__highlights li + li {
  margin-top: var(--space-0-5);
}

@media (max-width: 1279px) {
  .alt-item {
    display: block;
  }
  .alt-item__description,
  .alt-item__best-for,
  .alt-item__strengths {
    margin-bottom: var(--space-2);
  }
}

@media (max-width: 479px) {
  .alt-item__logo {
    flex: 0 0 32px;
  }
}
</style>