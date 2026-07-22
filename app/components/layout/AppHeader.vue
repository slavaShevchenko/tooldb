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
  padding: var(--space-1-5) 0;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-1-5);
  min-width: 0;
}

.link {
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  white-space: nowrap;

  transition: var(--transition-fast);
}

.link:hover {
  color: var(--color-primary);
}

@media (width <= 768px) {
  .header {
    padding: var(--space-1) 0;
  }

  .content {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    width: 100%;
    justify-content: flex-start;
    gap: var(--space-1);

    overflow-x: auto;
    padding-bottom: var(--space-0-25);
  }
}

@media (width <= 480px) {
  .nav {
    gap: var(--space-0-75);
  }

  .link {
    font-size: var(--font-size-xs);
  }
}
</style>
