<template>
  <Icon
    :name="iconName"
    :size="size"
    :class="class"
    :style="{ color }"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  size?: number
  color?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 20,
})

const iconName = computed(() => {
  return props.name.includes(':')
    ? props.name
    : `lucide:${props.name}`
})
</script>