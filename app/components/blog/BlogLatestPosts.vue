<template>
  <aside class="latest-posts">
    <div class="header">
      <h2 class="title">
        Latest articles
      </h2>

      <NuxtLink
        :to="routes.blog()"
        class="all-link"
      >
        View all
      </NuxtLink>
    </div>

    <div class="list">
      <BlogLatestPostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { BlogPost } from '~/types/blog'

defineProps<{
  posts: BlogPost[]
}>()
</script>

<style scoped lang="scss">
.latest-posts {
  padding: var(--space-1-5);
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  background:
    linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
    linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%) border-box;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-1-5);
}

.title {
  font-size: var(--font-size-lg);
}

.all-link {
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  text-decoration: none;
}

.list {
  display: flex;
  flex-direction: column;
}

.card + .card {
  margin-top: var(--space-1-5);
}

@media (max-width: 991px) {
  .latest-posts {
    padding: var(--space-1);
  }
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-1);
  }
  .card {
    max-width: 300px;
  }
  .card + .card {
    margin-top: 0;
  }
}
@media (max-width: 639px) {
  .list {
    grid-template-columns: repeat(1, 1fr);
  }
  .card {
    max-width: 100%;
  }
}
</style>
