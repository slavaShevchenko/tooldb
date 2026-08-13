<template>
  <p>
    <template
      v-for="(segment, index) in segments"
      :key="index"
    >
      <NuxtLink
        v-if="segment.to"
        :to="segment.to"
        class="blog-link"
      >
        {{ segment.text }}
      </NuxtLink>
      <strong
        v-else-if="segment.strong"
      >
        {{ segment.text }}
      </strong>
      <span
        v-else
      >
        {{ segment.text }}
      </span>
    </template>
  </p>
</template>

<script setup lang="ts">
interface Segment {
  text: string
  to?: string
  strong?: boolean
}

const props = defineProps<{
  content: string
}>()

const segments = computed<Segment[]>(() => {
  const parts: Segment[] = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(props.content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: props.content.slice(lastIndex, match.index) })
    }

    if (match[1] && match[2]) {
      parts.push({ text: match[1], to: match[2] })
    } else if (match[3]) {
      parts.push({ text: match[3], strong: true })
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < props.content.length) {
    parts.push({ text: props.content.slice(lastIndex) })
  }

  return parts
})
</script>

<style scoped lang="scss">
.blog-link {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;

  &:hover {
    color: var(--color-primary-hover);
    text-decoration: underline;
  }
}
</style>