<template>
  <LayoutSection
    title="Recently Added Tools"
    description="Stay ahead of the curve with the latest additions to our comprehensive software directory. We continuously expand our catalog with emerging tools and innovative platforms that are reshaping how businesses operate in the digital age. Discover cutting-edge solutions in artificial intelligence, automation, collaboration, analytics, and specialized industry applications before they become mainstream. Each newly added tool includes detailed overviews, feature breakdowns, pricing tiers, and integration capabilities to help you evaluate whether it's the right fit for your organization. Be the first in your industry to adopt game-changing software that can provide competitive advantages, improve efficiency, and unlock new possibilities for growth and innovation."
  >
    <ToolGrid :tools="recentlyAddedTools" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { recentlyAddedTools } = useTools()
</script>
