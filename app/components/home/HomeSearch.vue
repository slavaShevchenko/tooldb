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

        <BaseButton>
          Search
        </BaseButton>
      </div>

      <div
        v-if="results.length"
        class="dropdown"
      >
        <NuxtLink
          v-for="result in results"
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

            <div class="matches">
              <div
                v-for="match in result.matches"
                :key="`${match.type}-${match.value}`"
                class="match"
              >
                <span class="type">
                  {{ match.type }}:
                </span>

                <BaseHighlight
                  :text="match.value"
                  :query="query"
                />
              </div>
            </div>
          </div>

          <BaseIcon
            name="arrow-right"
            class="arrow"
          />
        </NuxtLink>
      </div>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import { routes } from '~/constants/routes'

const search = ref('')

const { query, results } = useToolSearch()

const debouncedSearch = useDebounceFn((value: string) => {
  query.value = value
}, 300)

watch(search, value => {
  debouncedSearch(value)
})
</script>

<style scoped lang="scss">
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

.item {
  display: flex;
  align-items: center;
  gap: var(--space-1);

  padding: var(--space-1);

  color: inherit;
  text-decoration: none;

  transition: var(--transition-fast);
}

.item:hover {
  background: var(--color-surface-secondary);
}

.item:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

.logo {
  width: 2.5rem;
  height: 2.5rem;

  flex-shrink: 0;

  object-fit: contain;
}

.content {
  flex: 1;
  min-width: 0;
}

.name {
  font-weight: var(--font-weight-semibold);
}

.matches {
  display: flex;
  flex-direction: column;
  gap: var(--space-0-25);

  margin-top: var(--space-0-5);
}

.match {
  display: flex;
  gap: var(--space-0-25);

  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.type {
  color: var(--color-text-tertiary);
  text-transform: capitalize;
}

.arrow {
  color: var(--color-text-secondary);

  flex-shrink: 0;
}
</style>