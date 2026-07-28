<template>
  <section class="hero">
    <div class="hero__layout">
      <div class="hero__content">
        <span class="hero__eyebrow">
          Discover Digital Tools
        </span>

        <h1 class="hero__title">
          Find the right software
          for your workflow
        </h1>

        <p class="hero__description">
          Compare AI tools, design software, developer platforms,
          marketing services and hundreds of other digital products.
        </p>

        <HomeSearch />

        <HomePopularSearches />
      </div>

      <aside class="hero__sidebar">
        <HomeTrendingTools />
      </aside>
    </div>
  </section>
</template>

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
  max-width: 640px;
  margin-bottom: var(--space-3);
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  gap: var(--space-1);
}

@media (width <= 1024px) {
  .hero__layout {
    grid-template-columns: 1fr;
  }

  .hero__sidebar {
    min-height: auto;
  }
}
</style>
