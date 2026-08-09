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

        <h2 class="categories__title">Categories</h2>
        <BasePillGrid>
          <BasePill
            v-for="category in tool.categories"
            :key="category"
            :to="`/categories/${category}`"
          >
            {{ getCategoryName(category) }}
          </BasePill>
        </BasePillGrid>

        <!-- <div class="tool-info__rating">
          <BaseIcon
            name="star"
            :size="20"
            :color="'var(--color-secondary)'"
          />
          {{ tool.rating }}
        </div> -->
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

      <AlternativesFor
        :tool-slug="tool.slug"
        :tool-name="tool.name"
      />
    </div>
  </div>

  <ToolPlatforms :platforms="tool.platforms" />

  <ToolHighlights :items="tool.highlights.map(item => item.text)" />
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool'

const { getCategoryBySlug } = useCategories()

defineProps<{
  tool: Tool
}>()

const getCategoryName = (slug: string) => {
  const category = getCategoryBySlug(slug)
  return category?.name || slug
}
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
.tool-info__right .button {
  margin-bottom: var(--space-2);
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

.categories__title {
  margin-bottom: var(--space-0-5);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
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

@media (max-width: 919px) {
  .tool-info {
    display: block;
  }
  .tool-info__right {
    margin-top: var(--space-2);
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

  .tool-info__header h1 {
    font-size: var(--font-size-xl);
  }
}
</style>
