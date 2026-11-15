<template>
  <BaseContainer>
    <HomeHero />

    <HomeAISearch />
    
    <HomeCategories />

    <HomeFeaturedTools />

    <HomeRecentlyAddedTools />

    <HomeAlternativesTools />

    <HomeComparisons />

    <LayoutSection
      title="Latest from the Blog"
      description="Gain valuable insights from our expert-written guides, tutorials, and industry analysis designed to help you navigate the complex software landscape. Our blog covers everything from beginner-friendly tool selection advice to advanced implementation strategies, best practices, and productivity tips for maximizing ROI on your software investments. Read detailed reviews, comparison articles, workflow optimization guides, and trend analysis written by experienced professionals who understand the challenges businesses face when choosing and implementing digital tools. Stay informed about emerging technologies, platform updates, and industry shifts that could impact your software stack. Whether you're researching solutions or looking to improve existing workflows, our regularly updated content provides actionable knowledge to support your decision-making process."
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
  line-height: 1.8;
}
</style>