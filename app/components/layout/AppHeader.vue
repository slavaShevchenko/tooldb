<template>
  <header class="header">
    <BaseContainer>
      <AppLogo />
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import AppLogo from '~/components/app/AppLogo.vue'
</script>

<style scoped lang="scss">
.header {
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-background);
}

.logo {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}
</style>