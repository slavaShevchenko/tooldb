<template>
  <div class="category-filter">
    <label
      for="tool-category"
      class="category-filter__label"
    >
      Filter by category:
    </label>

    <div class="category-filter__select-wrapper">
      <select
        id="tool-category"
        :value="modelValue"
        class="category-filter__select"
        @change="handleChange"
      >
        <option value="">
          All categories ({{ totalTools }})
        </option>

        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.slug"
        >
          {{ category.name }} ({{ category.toolCount }})
        </option>
      </select>

      <BaseIcon
        name="chevron-down"
        class="category-filter__icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '~/types/category'

interface CategoryWithToolCount extends Category {
  toolCount: number
}

defineProps<{
  modelValue: string
  categories: CategoryWithToolCount[]
  totalTools: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<style lang="scss" scoped>
.category-filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-top: var(--space-2);
}

.category-filter__label {
  font-size: var(--font-size-md);
}

.category-filter__select-wrapper {
  position: relative;
  min-width: 220px;
}

.category-filter__select {
  width: 100%;
  min-height: 42px;
  padding: var(--space-0-5) var(--space-1);
  appearance: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background);
  color: var(--color-text);
  font: inherit;
  cursor: pointer;
  transition: border-color var(--transition-fast);

  &:hover,
  &:focus-visible {
    border-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}

.category-filter__icon {
  position: absolute;
  top: 50%;
  right: var(--space-1);
  pointer-events: none;
  transform: translateY(-50%);
}

@media (max-width: 575px) {
  .category-filter {
    align-items: stretch;
    flex-direction: column;
  }

  .category-filter__select-wrapper {
    width: 100%;
  }
}
</style>