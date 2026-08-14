<template>
  <NuxtLink
    to="/"
    class="logo"
  >
    <span>
      Tool
    </span>

    <span class="primary">
      D
    </span>

    <span>
      B
    </span>
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  display: inline-flex;
  align-items: center;
  color: var(--color-text);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
}
.primary {
  color: var(--color-primary);
}
.secondary {
  color: var(--color-secondary);
}

@media (max-width: 359px) {
  .logo {
    font-size: var(--font-size-lg);
  }
}
</style>