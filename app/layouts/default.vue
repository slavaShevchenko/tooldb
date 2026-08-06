<template>
  <div class="layout">
    <AppHeader />

    <LayoutBreadcrumbs />

    <main class="layout__main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.layout::before,
.layout::after {
  content: '';
  opacity: 0.25;
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(90deg, var(--color-secondary) 25%, var(--color-primary) 100%);
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transform: translate(-50%, -50%);
  filter: blur(200px);
  animation: rotateGlowHeader 4s linear infinite;
  pointer-events: none;
}

.layout::after {
  left: auto;
  right: 0;
  top: auto;
  bottom: 0;
  transform: translate(50%, 50%);
  animation: rotateGlowFooter 4s linear infinite;
}

@keyframes rotateGlowHeader {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotateGlowFooter {
  from {
    transform: translate(50%, 50%) rotate(0deg);
  }

  to {
    transform: translate(50%, 50%) rotate(360deg);
  }
}

.layout__main {
  flex: 1;
}

@media (max-width: 767px) {
  .layout::before,
  .layout::after {
    display: none;
  }
}
</style>