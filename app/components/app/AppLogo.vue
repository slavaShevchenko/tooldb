<template>
  <NuxtLink
    to="/"
    class="logo"
  >
    <span class="primary">
      Tool
    </span>

    <span class="secondary">
      DB
    </span>
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-0-25);

  color: var(--color-text);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
}

.primary {
  color: var(--color-primary);
}

.secondary {
  color: var(--color-secondary);
}
</style>