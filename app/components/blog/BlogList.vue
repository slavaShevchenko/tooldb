<template>
  <div class="list">
    <BlogCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

defineProps<{
  posts: BlogPost[]
}>()
</script>

<style scoped lang="scss">
.list {
  display: grid;
  gap: var(--space-1-5);
}
</style>
