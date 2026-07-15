<template>
  <section class="hero">
    <BaseContainer>
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

        <div class="hero__actions">
          <BaseButton>
            Explore tools
          </BaseButton>

          <BaseButton variant="secondary">
            Browse categories
          </BaseButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding: var(--space-8) 0;
}

.hero__content {
  max-width: 760px;
}

.hero__eyebrow {
  display: inline-block;

  margin-bottom: var(--space-4);

  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.hero__title {
  margin-bottom: var(--space-5);

  font-size: var(--font-size-3xl);
  line-height: 1.15;
}

.hero__description {
  max-width: 640px;

  margin-bottom: var(--space-7);

  color: var(--color-text-secondary);

  font-size: var(--font-size-lg);
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
}
</style>