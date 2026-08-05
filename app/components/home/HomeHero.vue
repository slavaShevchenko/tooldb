<template>
  <section class="hero">
    <div class="hero__layout">
      <div class="hero__content">
        <span class="hero__eyebrow">
          Discover Digital Tools
        </span>

        <h1 class="hero__title">
          Find the best software
          for your business
        </h1>

        <p class="hero__description">
          ToolDB is a curated software directory that helps you discover, compare, and choose the best AI tools, SaaS platforms, productivity apps, developer software, marketing solutions, CRM systems, finance tools, and business applications. Explore detailed reviews, key features, pricing, integrations, and expert recommendations to find the right tool for your workflow, team, or business.
        </p>

        <HomeSearch />

        <HomePopularSearches />
      </div>

      <aside class="hero__sidebar">
        <HomeTrendingTools
          title="Trending Tools"
          :link="routes.tools()"
          :tools="trendingTools"
        />
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'

const { trendingTools } = useTools()
</script>

<style scoped lang="scss">
.hero {
  margin-bottom: var(--space-4);
  padding-top: var(--space-2);
}

.hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 22rem;
  gap: var(--space-4);
  align-items: start;
}

.hero__content {
  max-width: 760px;
}

.hero__sidebar {
  min-height: 24rem;
}

.hero__eyebrow {
  display: inline-block;
  margin-bottom: var(--space-1);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.hero__title {
  margin-bottom: var(--space-1-5);
  font-size: var(--font-size-3xl);
  line-height: 1.15;
}

.hero__description {
  margin-bottom: var(--space-3);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

@media (max-width: 1023px) {
  .hero__layout {
    grid-template-columns: 1fr;
  }

  .hero__sidebar {
    min-height: auto;
  }
}

@media (max-width: 723px) {
  .hero__title {
    font-size: var(--font-size-2xl);
  }
}
</style>
