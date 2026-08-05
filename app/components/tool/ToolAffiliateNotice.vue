<template>
  <div class="affiliate-notice">
    <p>
      <strong>Affiliate disclosure:</strong>
      This page may contain affiliate links. If you purchase through an
      affiliate link, ToolDB may earn a commission at no additional cost to you.
      Affiliate relationships do not change our ratings.
      <NuxtLink to="/affiliate-disclosure">
        Learn more
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped lang="scss">
.affiliate-notice {
  margin-bottom: var(--space-4);
  padding: var(--space-1);
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

strong {
  color: var(--color-text);
}

a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}
</style>
