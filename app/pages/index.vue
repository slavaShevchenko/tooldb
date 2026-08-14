<template>
  <BaseContainer>
    <HomeHero />
    
    <HomeCategories />

    <HomeRecentlyAddedTools />

    <HomeFeaturedTools />

    <HomeAlternativesTools />

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

const { getBlogPosts } = useBlog()
const posts = getBlogPosts(3)

useSeo({
  title: homeSeo.title,
  description: homeSeo.description,
  canonical: 'https://tooldb.org',
})
</script>