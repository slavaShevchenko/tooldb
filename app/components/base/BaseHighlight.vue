<template>
  <span>
    <template
      v-for="(part, index) in parts"
      :key="index"
    >
      <mark v-if="part.highlight">
        {{ part.text }}
      </mark>

      <template v-else>
        {{ part.text }}
      </template>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  text: string
  query: string
}

const props = defineProps<Props>()

const parts = computed(() => {
  if (!props.query) {
    return [
      {
        text: props.text,
        highlight: false,
      },
    ]
  }

  const text = props.text
  const query = props.query.trim()

  if (!query) {
    return [
      {
        text,
        highlight: false,
      },
    ]
  }

  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()

  const result: {
    text: string
    highlight: boolean
  }[] = []

  let start = 0

  while (true) {
    const index = lowerText.indexOf(lowerQuery, start)

    if (index === -1) {
      if (start < text.length) {
        result.push({
          text: text.slice(start),
          highlight: false,
        })
      }

      break
    }

    if (index > start) {
      result.push({
        text: text.slice(start, index),
        highlight: false,
      })
    }

    result.push({
      text: text.slice(index, index + query.length),
      highlight: true,
    })

    start = index + query.length
  }

  return result
})
</script>

<style scoped lang="scss">
mark {
  padding: 0;
  background: var(--color-primary);
  color: var(--color-surface);
  font-weight: var(--font-weight-semibold);
}
</style>