<template>
  <LayoutSection
    title="Pros and cons"
  >
    <div class="pros-cons-grid">
      <div
        v-for="item in comparison.prosAndCons"
        :key="item.slug"
        class="pros-cons-card"
      >
        <div class="card-header">
          <img
            :src="getTool(item.slug).logo"
            :alt="getTool(item.slug).name"
            class="tool-logo"
            loading="lazy"
          >

          <h3 class="tool-name">
            {{ getTool(item.slug).name }}
          </h3>
        </div>

        <div class="pros-section">
          <h4 class="section-title pros-title">
            <BaseIcon
              name="circle-check"
              :size="18"
              color="var(--color-success)"
            />
            Pros
          </h4>

          <ul class="pros-list">
            <li
              v-for="(pro, index) in item.pros"
              :key="index"
            >
              <BaseIcon
                name="check"
                :size="18"
                color="var(--color-success)"
              />
              <span>{{ pro }}</span>
            </li>
          </ul>
        </div>

        <div class="cons-section">
          <h4 class="section-title cons-title">
            <BaseIcon
              name="circle-x"
              :size="18"
              color="var(--color-danger)"
            />
            Cons
          </h4>

          <ul class="cons-list">
            <li
              v-for="(con, index) in item.cons"
              :key="index"
            >
              <BaseIcon
                name="x"
                :size="18"
                color="var(--color-danger)"
              />
              <span>{{ con }}</span>
            </li>
          </ul>
        </div>

        <div class="tool-buttons">
          <BaseButton
            :to="routes.tool(item.slug)"
            size="sm"
            variant="orange"
          >
            View Details <span>→</span>
          </BaseButton>
          <BaseButton
            :href="getToolVisitUrl(item.slug)"
            target="_blank"
            variant="primary"
            size="sm"
            class="visit-button"
          >
            Visit Website
            <BaseIcon
              name="external-link"
              :size="14"
            />
          </BaseButton>
        </div>
      </div>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import type { ComparisonPage } from '~/types/comparison'
import { routes } from '~/constants/routes'

const { getToolBySlug } = useTools()

defineProps<{
  comparison: ComparisonPage
}>()

const getTool = (slug: string) => getToolBySlug(slug)

const getToolVisitUrl = (slug: string): string => {
  const tool = getTool(slug)
  return tool?.affiliateUrl ?? tool?.website ?? ''
}
</script>

<style scoped lang="scss">
.pros-cons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-1-5);
}

.pros-cons-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-0-75);
  margin-bottom: var(--space-1);
}

.tool-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.tool-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.pros-section,
.cons-section {
  margin-bottom: var(--space-1);
}

.cons-section {
  flex: 1 1 auto;
}

.pros-section:last-child,
.cons-section:last-child {
  margin-bottom: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  margin-bottom: var(--space-0-75);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
}

.pros-title {
  color: var(--color-success);
}

.cons-title {
  color: var(--color-danger);
}

.pros-list,
.cons-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-0-5);
}

.pros-list li,
.cons-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-0-5);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}
.pros-list li .iconify,
.cons-list li .iconify {
  margin-top: 2px;
}

.tool-buttons {
  display: flex;
  gap: var(--space-1);
}

@media (max-width: 767px) {
  .pros-cons-grid {
    grid-template-columns: 1fr;
  }
  .tool-buttons {
    flex-direction: column;
    gap: var(--space-0-5);
  }
}
</style>