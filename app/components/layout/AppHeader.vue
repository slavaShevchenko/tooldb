<template>
  <header class="header">
    <BaseContainer class="content" bottom-line>
      <AppLogo />

      <nav class="nav">
        <template
          v-for="item in navigation"
          :key="item.to"
        >
          <NuxtLink
            :to="item.to"
            class="link"
            :class="{ 'link--active': isActive(item.to)}"
          >
            {{ item.label }}
          </NuxtLink>
        </template>
      </nav>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import { navigation } from '~/constants/navigation'

const route = useRoute()

const isActive = (path: string) =>
  route.path === path || route.path.startsWith(`${path}/`)
</script>

<style scoped lang="scss">
.header {
  padding: var(--space-1-5) 0;
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

.link--active {
  color: var(--color-primary);
}

@media (max-width: 470px) {
  .nav {
    gap: var(--space-0-75);
  }

  .link {
    font-size: var(--font-size-xs);
  }
}
</style>
