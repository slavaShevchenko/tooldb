<template>
  <header class="header">
    <BaseContainer
      class="content"
      bottom-line
    >
      <AppLogo />

      <nav class="nav">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="link"
          :class="{ 'link--active': isActive(item.to) }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        class="burger"
        aria-label="Open menu"
        :aria-expanded="drawer"
        aria-controls="mobile-menu"
        @click="openDrawer"
      >
        <BaseIcon
          name="menu"
          :size="24"
        />
      </button>
    </BaseContainer>

    <BaseDrawer
      id="mobile-menu"
      v-model="drawer"
    >
      <div class="drawer-header">
        <AppLogo />

        <button
          class="close"
          aria-label="Close menu"
          @click="closeDrawer"
        >
          <BaseIcon
            name="x"
            :size="24"
          />
        </button>
      </div>

      <nav class="drawer-nav">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="drawer-link"
          :class="{ 'drawer-link--active': isActive(item.to) }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </BaseDrawer>
  </header>
</template>

<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  watch,
} from 'vue'

import { navigation } from '~/constants/navigation'

const route = useRoute()

const drawer = ref(false)

const isActive = (path: string) =>
  route.path === path || route.path.startsWith(`${path}/`)

const openDrawer = () => {
  drawer.value = true
}

const closeDrawer = () => {
  drawer.value = false
}

watch(
  () => route.fullPath,
  closeDrawer,
)

let mobileMedia: MediaQueryList

const handleBreakpointChange = (event: MediaQueryListEvent) => {
  if (!event.matches) {
    closeDrawer()
  }
}

onMounted(() => {
  mobileMedia = window.matchMedia('(max-width: 767px)')

  if (mobileMedia.addEventListener) {
    mobileMedia.addEventListener('change', handleBreakpointChange)
  }
  else {
    mobileMedia.addListener(handleBreakpointChange)
  }
})

onBeforeUnmount(() => {
  if (mobileMedia.removeEventListener) {
    mobileMedia.removeEventListener('change', handleBreakpointChange)
  }
  else {
    mobileMedia.removeListener(handleBreakpointChange)
  }
})
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

.link:hover,
.link--active {
  color: var(--color-primary);
}

.burger,
.close {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-0-5);
}

.drawer-link {
  padding: var(--space-0-75) 0;
  color: var(--color-text);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: var(--transition-fast);
}

.drawer-link:hover,
.drawer-link--active {
  color: var(--color-primary);
}

@media (max-width: 767px) {
  .nav {
    display: none;
  }

  .burger,
  .close {
    display: flex;
  }
}
</style>