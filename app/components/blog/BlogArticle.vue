<template>
  <article class="article">
    <time
      :datetime="post.publishedAt"
      class="date"
    >
      {{ publishedDate }}
    </time>

    <h1 class="title">
      {{ post.title }}
    </h1>

    <p class="description">
      {{ post.description }}
    </p>

    <img
      v-if="post.image"
      :src="post.image"
      :alt="post.title"
      class="image"
    >

    <div class="content">
      <BlogParagraph
        v-for="(paragraph, index) in post.content"
        :key="index"
        :content="paragraph"
      />
    </div>

    <nav
      v-if="previousPost || nextPost"
      class="navigation"
      aria-label="Blog post navigation"
    >
      <NuxtLink
        v-if="previousPost"
        :to="routes.blogPost(previousPost.slug)"
        class="navigation-link"
      >
        <span>← Previous</span> {{ previousPost.title }}
      </NuxtLink>

      <NuxtLink
        v-if="nextPost"
        :to="routes.blogPost(nextPost.slug)"
        class="navigation-link navigation-link--next"
      >
        <span>Next →</span> {{ nextPost.title }}
      </NuxtLink>
    </nav>
  </article>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { BlogPost } from '~/types/blog'

const { post, previousPost, nextPost } = defineProps<{
  post: BlogPost
  previousPost?: BlogPost
  nextPost?: BlogPost
}>()

const publishedDate = computed(() =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${post.publishedAt}T00:00:00Z`))
)
</script>

<style scoped lang="scss">
.date {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.title {
  margin-top: var(--space-0-5);
  font-size: var(--font-size-3xl);
}

.description {
  margin-top: var(--space-1);
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  line-height: 1.6;
}

.image {
  display: block;
  width: 100%;
  margin-top: var(--space-1-5);
  border-radius: var(--radius-lg);
}

.content {
  margin-top: var(--space-2);
  line-height: 1.8;
}

.content p + p {
  margin-top: var(--space-1);
}

.navigation {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-3);
  padding-top: var(--space-1-5);
  border-top: 1px solid var(--color-border);
}

.navigation-link {
  flex: 0 0 calc(50% - var(--space-1));
  display: flex;
  flex-direction: column;
  gap: var(--space-0-5);
  color: var(--color-primary);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  line-height: 1.4;
  text-decoration: none;
}
.navigation-link span {
  color: var(--color-secondary);
}
.navigation-link:hover {
  color: var(--color-primary-hover);
}
.navigation-link:hover span {
  color: var(--color-secondary-hover);
}

.navigation-link--next {
  margin-left: auto;
  text-align: right;
}

@media (max-width: 991px) {
  .article {
    margin-bottom: var(--space-2);
  }
  .title {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 639px) {
  .navigation-link {
    font-size: var(--font-size-lg);
  }
}
</style>
