<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Blog"
      description="Practical guides, comparisons and tips for choosing, evaluating and getting the most out of digital tools. Whether you're switching from an expensive platform, comparing options for your team, or just exploring what's out there — our articles help you make informed decisions faster. Updated regularly by our team."
    >
      <BlogList :posts="posts" />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import { blogSeo } from '~/seo'

const { getBlogPosts } = useBlog()
const posts = getBlogPosts()

useBreadcrumbJsonLd([
  { name: 'Home', url: routes.home() },
  { name: 'Blog', url: routes.blog() },
])

useItemListJsonLd(
  posts.map((post, index) => ({
    name: post.title,
    url: routes.blogPost(post.slug),
    position: index + 1,
  })),
  'ToolDB Blog'
)

useSeo({
  title: blogSeo.title,
  description: blogSeo.description,
  canonical: `https://tooldb.org${routes.blog()}`,
})
</script>

<style scoped lang="scss">
.section {
  margin-top: var(--space-2);
}
.section:deep() .header {
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}
.section:deep() .content {
  flex: 0 0 75%;
}
.section:deep() .content .title {
  font-size: var(--font-size-3xl);
}
.section:deep() .content .description {
  line-height: 1.8;
}

@media (max-width: 991px) {
  .section:deep() .header {
    display: block;
  }
}
</style>