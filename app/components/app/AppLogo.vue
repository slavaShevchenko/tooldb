<template>
  <NuxtLink
    to="/"
    class="logo"
  >
    <span class="accent">
      Tool
    </span>

    <span>
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

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.accent {
  color: var(--color-primary);
}
</style>