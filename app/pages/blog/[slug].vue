<template>
  <BaseContainer>
    <div class="layout">
      <BlogArticle
        :post="post"
        :previous-post="adjacentPosts.previousPost"
        :next-post="adjacentPosts.nextPost"
      />

      <BlogLatestPosts :posts="latestPosts" />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { routes } from '~/constants/routes'

const route = useRoute()
const { getBlogPostBySlug, getAdjacentBlogPosts, getLatestBlogPosts } = useBlog()

const post = computed(() =>
  getBlogPostBySlug(route.params.slug as string)
)

const adjacentPosts = computed(() =>
  getAdjacentBlogPosts(post.value.id)
)

const latestPosts = computed(() =>
  getLatestBlogPosts(5, post.value.slug)
)

useBreadcrumbJsonLd([
  { name: 'Home', url: routes.home() },
  { name: 'Blog', url: routes.blog() },
  { name: post.value.title, url: routes.blogPost(post.value.slug) },
])

useBlogPostingJsonLd(post.value)

useSeo({
  title: `${post.value.title} | ToolDB`,
  description: post.value.description,
  image: post.value.image,
  canonical: `https://tooldb.org${routes.blogPost(post.value.slug)}`,
})
</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(16rem, 20rem);
  gap: var(--space-3);
  align-items: start;
  margin: var(--space-2) auto var(--space-4);
  max-width: var(--container-width);
}

@media (max-width: 991px) {
  .layout {
    display: block;
    margin: var(--space-2) 0 0 0;
    max-width: 100%;
  }
}
</style>
