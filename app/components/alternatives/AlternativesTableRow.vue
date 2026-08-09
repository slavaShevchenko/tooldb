<template>
  <article class="alternatives-table__tr">
    <div class="alternatives-table__td">
      <div class="alt-card">
        <div class="alt-card__logo">
          <picture>
            <source
              media="(max-width: 479px)"
              :srcset="alternative.logo.replace(/(\.[^.]+)$/, '-size-32$1')"
            >
            <img
              :src="alternative.logo"
              :alt="`${alternative.name} logo`"
              class="logo-image"
            >
          </picture>
        </div>
        <div class="alt-card__content">
          <h3 class="alt-card__title">
            {{ alternative.name }}
          </h3>
          <p class="alt-card__description">
            {{ alternative.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="alternatives-table__td">
      <div class="alt-grid">
        <BaseButton
          v-for="category in alternative.categories"
          :key="category"
          :to="routes.category(category)"
          size="sm"
          variant="orange"
        >
          {{ getCategoryName(category) }}
        </BaseButton>
      </div>
    </div>

    <div class="alternatives-table__td">
      <BasePillGrid>
        <BasePill
          v-for="item in alternativeTools"
          :key="item.slug"
          :to="routes.tool(item.slug)"
        >
          {{ item.tool.name }}
        </BasePill>
      </BasePillGrid>
    </div>

    <div class="alternatives-table__td">
      <BaseButton
        :to="routes.alternative(alternative.slug)"
        class="alt-link"
      >
        View Alternatives <span>→</span>
      </BaseButton>
    </div>
  </article>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { AlternativePage } from '~/types/alternatives'
import type { ToolDetails } from '~/types/tool';

const { getToolBySlug } = useTools()
const { getCategoryBySlug } = useCategories()

const { alternative } = defineProps<{
  alternative: AlternativePage
}>()

const alternativeTools = computed(() =>
  alternative.alternatives
    .map(item => ({
      ...item,
      tool: getToolBySlug(item.slug),
    }))
    .filter(
      (item): item is typeof item & { tool: ToolDetails } =>
        item.tool !== undefined
    )
)

const getCategoryName = (slug: string) => {
  const category = getCategoryBySlug(slug)
  return category?.name || slug
}
</script>

<style scoped lang="scss">
.alternatives-table__tr {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-1);
  background: linear-gradient(135deg, var(--color-secondary-50) 0%, var(--color-primary-50) 100%);
  border-radius: var(--radius-xl);
}
.alternatives-table__td:last-child {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: var(--space-1);
  
}

.alt-card {
  display: flex;
  gap: var(--space-1);
}
.alt-card__logo {
  flex: 0 0 96px;
}
.alt-card__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-0-5);
}
.alt-card__description {
  font-size: var(--font-size-xs);
  line-height: 1.4;
}
.logo-image {
  border-radius: var(--radius-xl);
}

.alt-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-5);
  padding-top: var(--space-1);
  padding-bottom: var(--space-1);
  border-bottom: 1px solid var(--color-border);
}
.alternatives-table__td .grid {
  padding-top: var(--space-1);
  padding-bottom: var(--space-1);
}

.alt-link span {
  margin-left: var(--space-0-5);
}

@media (max-width: 479px) {
  .alt-card__logo {
    flex: 0 0 32px;
  }
  .logo-image {
    border-radius: var(--radius-sm);
  }
}
</style>