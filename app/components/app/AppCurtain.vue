<template>
  <div
    class="app-curtain"
    :class="{
      'app-curtain--close': isClosing,
      'app-curtain--open': isOpening
    }"
  />
</template>

<script setup lang="ts">
const { isClosing, isOpening } = usePageCurtain()
</script>

<style scoped lang="scss">
.app-curtain {
  --duration: 300ms;
  position: fixed;
  inset: 0;
  left: -40px;
  z-index: 9999;
  width: calc(100vw + 80px);
  height: calc(100vh + 80px);
  background: var(--color-surface);
  transform: translateY(calc(-100% - 40px));
  filter: blur(40px);
  will-change: transform;
  pointer-events: none;
}

.app-curtain::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--color-secondary-50) 0%,
    var(--color-primary-50) 100%
  );
}

.app-curtain--close {
  animation: curtain-close var(--duration) ease-in-out forwards;
}

.app-curtain--open {
  animation: curtain-open var(--duration) ease-in-out forwards;
}

@keyframes curtain-close {
  from {
    transform: translateY(calc(-100% - 40px));
  }

  to {
    transform: translateY(-40px);
  }
}

@keyframes curtain-open {
  from {
    transform: translateY(-40px);
  }

  to {
    transform: translateY(calc(100% + 40px));
  }
}
</style>