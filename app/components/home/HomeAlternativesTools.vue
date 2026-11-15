<template>
  <LayoutSection
    title="Latest Alternatives"
    description="Discover cost-effective and feature-rich alternatives to popular software tools you already know. Whether you're looking to reduce subscription costs, find better features, or escape vendor lock-in, our comprehensive alternatives directory helps you explore substitute solutions across every major software category. Compare pricing structures, evaluate feature parity, and read detailed breakdowns of key strengths and ideal use cases for each alternative. From open-source solutions to premium enterprise platforms, find the perfect replacement that meets your specific requirements without compromising on functionality. Make smarter switching decisions with our curated recommendations based on real-world performance, user feedback, and total cost of ownership analysis."
  >
    <AlternativesGrid :alternatives="getFeaturedAlternatives(6, 'desc')" />
  </LayoutSection>
</template>

<script setup lang="ts">
const { getFeaturedAlternatives } = useAlternatives()
</script>