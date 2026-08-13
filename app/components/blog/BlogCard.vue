<template>
  <article class="card">
    <NuxtLink
      :to="routes.blogPost(post.slug)"
      class="link"
    >
      <img
        v-if="post.image"
        :src="previewImage"
        :alt="post.title"
        class="image"
        loading="lazy"
      >

      <div class="card__content">
        <time
          :datetime="post.publishedAt"
          class="date"
        >
          {{ publishedDate }}
        </time>

        <h2 class="title">
          {{ post.title }}
        </h2>

        <p class="description">
          {{ post.description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { BlogPost } from '~/types/blog'

const { post } = defineProps<{
  post: BlogPost
}>()

const publishedDate = computed(() =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${post.publishedAt}T00:00:00Z`))
)

const previewImage = computed(() =>
  post.image?.replace(/(\.[^.]+)$/, '-size-300$1')
)
</script>

<style scoped lang="scss">
.card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  transition: var(--transition-fast);
}

.card:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-md);
}

.link {
  display: flex;
  align-items: flex-start;
  gap: var(--space-1);
  padding: var(--space-1-5);
  color: inherit;
  text-decoration: none;
}

.image {
  flex: 0 0 300px;
  border-radius: var(--radius-md);
}
.card__content {
  flex: 1;
  min-width: 0;
}
.date {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.title {
  margin-top: var(--space-0-5);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.description {
  margin-top: var(--space-0-75);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 767px) {
  .link {
    display: block;
    padding: var(--space-1);
  }
  .image {
    margin: 0 auto var(--space-1) auto;
  }
}
</style>
