<template>
  <LayoutSection
    title="Browse by category"
    description="Navigate our comprehensive directory of digital tools organized by category to find the perfect software for your specific needs. Whether you're searching for AI-powered applications, CRM platforms, marketing automation tools, project management solutions, accounting software, or specialized SaaS products, our categorized directory makes discovery simple and efficient. Each category contains carefully curated tools with detailed descriptions, key features, pricing information, and user ratings to help you make informed decisions. Browse through our extensive collection organized by business function, industry, and use case to quickly identify solutions that match your workflow requirements, team size, and budget constraints."
  >
    <CategoryGrid
      :categories="availableToolCategories"
      :limit="7"
    />
  </LayoutSection>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'

const { availableToolCategories } = useTools()
</script>

<style scoped lang="scss">
.link {
  display: inline-flex;
  gap: var(--space-0-5);
  align-items: center;

  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}

.link:hover {
  color: var(--color-primary-hover);
}
</style>
