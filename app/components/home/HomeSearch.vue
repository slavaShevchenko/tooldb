<template>
  <LayoutSection>
    <div class="search-wrapper">
      <div class="search">
        <BaseIcon
          name="search"
          :size="32"
        />

        <BaseInput
          v-model="search"
          placeholder="Search tools..."
          variant="transparent"
        />

        <!-- <BaseButton>
          Search
        </BaseButton> -->
      </div>

      <div
        v-if="query.length >= 2"
        class="dropdown"
      >
        <template v-if="toolResults.length">
          <div class="section-title">
            Tools
          </div>

          <NuxtLink
            v-for="result in toolResults"
            :key="result.tool.id"
            :to="routes.tool(result.tool.slug)"
            class="item"
          >
            <img
              :src="result.tool.logo"
              :alt="result.tool.name"
              class="logo"
            >

            <div class="content">
              <div class="name">
                {{ result.tool.name }}
              </div>
            </div>

            <BaseIcon
              name="arrow-right"
              class="arrow"
            />
          </NuxtLink>
        </template>

        <template v-if="categoryResults.length">
          <div class="section-title">
            Categories
          </div>

          <NuxtLink
            v-for="result in categoryResults"
            :key="result.category.slug"
            :to="routes.category(result.category.slug)"
            class="item category-item"
          >
            <BaseIcon
              name="folder"
              :size="20"
              class="category-icon"
            />

            <div class="content">
              <div class="name">
                {{ result.category.name }}
              </div>
            </div>

            <BaseIcon
              name="arrow-right"
              class="arrow"
            />
          </NuxtLink>
        </template>

        <div
          v-if="!toolResults.length && !categoryResults.length"
          class="empty"
        >
          <BaseIcon
            name="search"
            :size="32"
            class="empty-icon"
          />

          <div class="empty-title">
            No results found
          </div>

          <div class="empty-description">
            Try searching with a different keyword.
          </div>
        </div>
      </div>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import { routes } from '~/constants/routes'

const search = ref('')

const { query, results } = useToolSearch()

const toolResults = computed(() =>
  results.value.filter(result => result.type === 'tool'),
)

const categoryResults = computed(() =>
  results.value.filter(result => result.type === 'category'),
)

const debouncedSearch = useDebounceFn((value: string) => {
  query.value = value
}, 300)

watch(search, debouncedSearch)
</script>

<style scoped lang="scss">
.section {
  margin-bottom: var(--space-1);
}
.search-wrapper {
  position: relative;
}

.search {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  padding: var(--space-0-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.dropdown {
  position: absolute;
  top: calc(100% + var(--space-0-5));
  left: 0;
  right: 0;
  overflow: hidden;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 100;
}

.section-title {
  padding: var(--space-0-5) var(--space-1);
  background: var(--color-surface-secondary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
}

.item {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1);
  color: inherit;
  text-decoration: none;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
}

.item:hover {
  background: var(--color-surface-secondary);
}

.item:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

.category-item {
  padding-block: var(--space-0-75);
}

.logo,
.category-icon {
  width: var(--space-2-5);
  height: var(--space-2-5);
  flex-shrink: 0;
}

.logo {
  object-fit: contain;
}

.category-icon {
  color: var(--color-primary);
}

.content {
  flex: 1;
  min-width: 0;
}

.name {
  font-weight: var(--font-weight-semibold);
}

.arrow {
  flex-shrink: 0;
  color: var(--color-text-secondary);
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);
}

.item:hover .arrow {
  opacity: 1;
  transform: translateX(0);
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-2);
  text-align: center;
}

.empty-icon {
  margin-bottom: var(--space-0-75);
  color: var(--color-text-tertiary);
}

.empty-title {
  font-weight: var(--font-weight-semibold);
}

.empty-description {
  margin-top: var(--space-0-25);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}
</style>