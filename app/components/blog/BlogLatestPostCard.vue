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

      <div class="content">
        <h3 class="title">
          {{ post.title }}
        </h3>

        <time
          :datetime="post.publishedAt"
          class="date"
        >
          {{ publishedDate }}
        </time>
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

const previewImage = computed(() =>
  post.image?.replace(/(\.[^.]+)$/, '-size-300$1')
)

const publishedDate = computed(() =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${post.publishedAt}T00:00:00Z`))
)
</script>

<style scoped lang="scss">
.link {
  padding: var(--space-0-5) 0;
  color: inherit;
  text-decoration: none;
}

.link:hover {
  opacity: 0.75;
}

.image {
  margin-bottom: var(--space-0-5);
  border-radius: var(--radius-md);
}

.content {
  min-width: 0;
}

.title {
  font-size: var(--font-size-md);
  line-height: 1.3;
}

.date {
  display: block;
  margin-top: var(--space-0-25);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

@media (max-width: 639px) {
  .image {
    margin-bottom: var(--space-0-5);
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
