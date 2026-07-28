<script setup lang="ts">
interface Props {
  name: string
  size?: number
  color?: string
  class?: string
}

withDefaults(defineProps<Props>(), {
  size: 20,
})
</script>

<template>
  <Icon
    :name="`lucide:${name}`"
    :size="size"
    :class="class"
    :style="{ color }"
  />
</template>