<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-5);
  align-items: center;
}
</style>
