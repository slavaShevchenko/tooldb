<template>
  <LayoutSection
    :title="comparison.overview.title"
    :description="comparison.overview.description"
  >
    <div class="overview-grid">
      <div
        v-for="tool in comparisonTools"
        :key="tool.slug"
        class="overview-card"
      >
        <div class="card-header">
          <img
            :src="tool.logo"
            :alt="tool.name"
            class="tool-logo"
            loading="lazy"
          >

          <div class="tool-info">
            <h3 class="tool-name">
              {{ tool.name }}
            </h3>

            <p class="tool-tagline">
              {{ tool.tagline }}
            </p>

            <div class="tool-buttons">
              <BaseButton
                :to="routes.tool(tool.slug)"
                size="sm"
                variant="secondary"
              >
                View Details <span>→</span>
              </BaseButton>
              <BaseButton
                :href="tool.affiliateUrl ?? tool.website"
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
        <div class="features">
          <div
            v-for="feature in tool.features"
            :key="`${feature.id}${feature.title}${feature.description}`"
            class="feature"
          >
            <BaseIcon
              :name="feature.icon"
              :size="16"
              color="var(--color-primary)"
            />
            <span>{{ feature.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import type { ComparisonPage } from '~/types/comparison'
import type { Tool } from '~/types/tool'
import { routes } from '~/constants/routes'

const props = defineProps<{
  comparison: ComparisonPage
  comparisonTools: Tool[]
}>()
</script>

<style scoped lang="scss">
::v-deep(.description) {
  line-height: 1.4;
}
.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-1-5);
}

.overview-card {
  padding: var(--space-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-secondary-25) 0%, var(--color-primary-25) 100%);
}

.card-header {
  display: flex;
  gap: var(--space-1);
  margin-bottom: var(--space-1);
}

.tool-logo {
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: var(--radius-xl);
}

.tool-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-0-5);
  min-width: 0;
}

.tool-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.tool-tagline {
  flex: 1 1 auto;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.tool-buttons {
  display: flex;
  gap: var(--space-1);
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-5);
  align-items: center;
}

.feature {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-0-5);
  padding: var(--space-0-25) var(--space-0-75);
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  white-space: nowrap;
  background: var(--color-primary-10);
  border: 1px solid var(--color-primary-25);
  border-radius: var(--radius-pill);
  transition: var(--transition-fast);
}

@media (max-width: 1023px) {
  ::v-deep(.title) {
    font-size: var(--font-size-xl);
  }
}

@media (max-width: 992px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .tool-buttons {
    flex-direction: column;
    gap: var(--space-0-5);
  }
}
</style>
