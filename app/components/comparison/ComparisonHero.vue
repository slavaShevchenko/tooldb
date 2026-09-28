<template>
  <section class="hero">
    <div class="hero__date">{{ comparison.date }}</div>

    <div class="hero__left">
      <h1 class="title">
        {{ comparison.title }}
      </h1>

      <div class="categories">
        <BaseButton
          v-for="category in comparison.category"
          :key="category"
          :to="routes.category(category)"
          size="sm"
          variant="orange"
        >
          {{ getCategoryName(category) }}
        </BaseButton>
      </div>

      <p class="description">
        {{ comparison.description }}
      </p>
    </div>
    <div class="hero__right">
      <div class="hero__vs">
        <div
          v-for="tool in comparisonTools"
          :key="tool.slug"
          class="hero__vs-card"
        >
          <img
            :src="tool.logo.replace(/(\.[^.]+)$/, '-size-32$1')"
            :alt="tool.name"
            class="hero__vs-logo"
            loading="lazy"
          >

          <h3 class="hero__vs-name">
            {{ tool.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComparisonPage } from '~/types/comparison'
import type { Tool } from '~/types/tool'
import { routes } from '~/constants/routes'

defineProps<{
  comparison: ComparisonPage
  comparisonTools: Tool[]
}>()

const { getCategoryBySlug } = useCategories()

const getCategoryName = (slug: string) => {
  const category = getCategoryBySlug(slug)
  return category?.name || slug
}
</script>

<style scoped lang="scss">
.hero {
  display: grid;
  gap: 0 var(--space-2);
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'first first'
    'second third';
  margin-bottom: var(--space-4);
}
.hero > :nth-child(1) {
  grid-area: first;
}
.hero > :nth-child(2) {
  grid-area: second;
}
.hero > :nth-child(3) {
  grid-area: third;
}

.hero__date {
  margin-bottom: var(--space-0-5);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.title {
  margin-bottom: var(--space-1);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: 1;
}
.description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  line-height: 1.6;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-75);
  margin-bottom: var(--space-1);
}

.hero__vs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: var(--space-1);
  position: relative;
}
.hero__vs:before {
  content: "VS";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-primary);
  border-radius: 100%;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: 1;
  color: var(--color-surface);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hero__vs-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-0-75);
  padding: var(--space-1);
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  background: linear-gradient(var(--color-surface), var(--color-surface)) padding-box, linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%) border-box;
}
.hero__vs-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
}
.hero__vs-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

@media (max-width: 1023px) {
  .hero {
    display: block;
  }
  .title[data-v-c810d81b] {
    font-size: var(--font-size-2xl);
    line-height: 1;
  }

  .description[data-v-c810d81b] {
    margin-bottom: var(--space-2);
    font-size: var(--font-size-md);
    line-height: 1.4;
  }
}
</style>
