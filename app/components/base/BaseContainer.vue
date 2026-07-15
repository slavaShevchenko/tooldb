<template>
  <div
    class="container"
    :class="[`container--${size}`]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'narrow' | 'default' | 'wide'
  }>(),
  {
    size: 'default',
  },
)
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: 0 auto;
  padding-inline: var(--container-padding);
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
</style>