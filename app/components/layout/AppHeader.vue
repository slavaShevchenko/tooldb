<template>
  <header class="header">
    <BaseContainer class="content">
      <AppLogo />

      <nav class="nav">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="link"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import { navigation } from '~/constants/navigation'
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