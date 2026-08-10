<template>
  <BaseContainer>
    <HomeHero />
    
    <HomeCategories />

    <HomeRecentlyAddedTools />

    <HomeFeaturedTools />

    <HomeAlternativesTools />
  </BaseContainer>
</template>

<script setup lang="ts">
import { homeSeo } from '~/seo'

useSeo({
  title: homeSeo.title,
  description: homeSeo.description,
  canonical: 'https://tooldb.org',
})
</script>