<template>
  <div
    class="container"
    :class="[
      `container--${size}`,
      {
        'container--top-line': topLine,
        'container--bottom-line': bottomLine,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'narrow' | 'default' | 'wide'
    topLine?: boolean
    bottomLine?: boolean
  }>(),
  {
    size: 'default',
    topLine: false,
    bottomLine: false,
  },
)
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: 0 auto;
  padding-inline: var(--container-padding);
  position: relative;
}

.container--narrow {
  max-width: 960px;
}

.container--default {
  max-width: 1280px;
}

.container--wide {
  max-width: 1440px;
}

.container--top-line::before,
.container--bottom-line::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  opacity: 0.25;
  background: var(--color-border-main);
  pointer-events: none;
}

.container--top-line::before {
  top: calc(var(--space-1-5) * -1);
}

.container--bottom-line::after {
  bottom: calc(var(--space-1-5) * -1);
}
</style>