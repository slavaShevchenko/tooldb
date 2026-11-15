<template>
  <LayoutSection
    title="Featured Tools"
    description="Explore our hand-picked selection of the most popular and highly-rated digital tools trusted by businesses worldwide. This curated collection showcases industry-leading software across multiple categories including project management, customer relationship management, marketing automation, accounting, design, and productivity platforms. Each featured tool has been thoroughly vetted for reliability, feature richness, and user satisfaction, ensuring you discover only the best solutions for your business needs. From established enterprise platforms to innovative startups disrupting traditional workflows, these recommended tools represent the gold standard in their respective categories and are used by millions of professionals globally to streamline operations and drive growth."
  >
    <ToolGrid :tools="featuredTools" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { featuredTools } = useTools()
</script>