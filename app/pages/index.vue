<template>
  <BaseContainer>
    <HomeHero />
    
    <HomeCategories />

    <HomeRecentlyAddedTools />

    <HomeFeaturedTools />

    <HomeAlternativesTools />

    <HomeComparisons />

    <LayoutSection
      title="Latest from the Blog"
      description="Guides, comparisons and practical tips for choosing the right digital tools."
    >
      <BlogList :posts="posts" />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { homeSeo } from '~/seo'

const { getLatestBlogPosts } = useBlog()
const posts = getLatestBlogPosts(3)

useSeo({
  title: homeSeo.title,
  description: homeSeo.description,
  canonical: 'https://tooldb.org',
})
</script>

<style scoped lang="scss">
::v-deep(.content > .description) {
  line-height: 1.4;
}
</style>