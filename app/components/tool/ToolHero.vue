<template>
  <section class="hero">
    <div class="hero__layout">
      <div class="hero__content">
        <ToolHeroInfo :tool="tool" />

        <div class="hero__details">
          <div class="hero__details-left">
            <ToolPricingDescription
              v-if="tool.pricingDescription"
              :description="tool.pricingDescription"
            />
          </div>

          <div class="hero__details-right">
            <ToolTags
              v-if="tool.tags.length"
              :tags="tool.tags"
            />
          </div>
        </div>

        <div class="hero__sidebar-mobile">
          <HomeTrendingTools
            v-if="related.tools.length"
            title="Related Tools"
            :link="routes.category(related.category.slug)"
            :tools="related.tools"
          />

          <ToolFeatures :tool="tool" />
        </div>

        <ToolOverview :tool="tool" />

        <ToolAffiliateNotice />
      </div>

      <aside class="hero__sidebar hero__sidebar-wide">
        <HomeTrendingTools
          v-if="related.tools.length"
          title="Related Tools"
          :link="routes.category(related.category.slug)"
          :tools="related.tools"
        />

        <ToolFeatures :tool="tool" />
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { routes } from '~/constants/routes'

import type { Tool } from '~/types/tool'

interface Props {
  tool: Tool
}

const props = defineProps<Props>()

const { getRelatedToolsData } = useTools()

const related = computed(() =>
  getRelatedToolsData(props.tool),
)
</script>

<style scoped lang="scss">
.hero__sidebar-wide {
  display: block;
}
.hero__sidebar-mobile {
  display: none;
}
.hero {
  padding-top: var(--space-2);
}

.hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 22rem;
  gap: var(--space-4);
  align-items: start;
}

.tool-info {
  margin-bottom: var(--space-4);
}

.hero__details {
  display: flex;
  gap: var(--space-1);
}

.hero__details-left,
.hero__details-right {
  flex: 1 1 0;
  min-width: 0;
}

.trending + .section {
  margin-top: var(--space-3);
}

@media (max-width: 1199px) {
  .hero__sidebar-wide {
    display: none;
  }
  .hero__sidebar-mobile {
    display: block;
  }
  .hero__layout {
    display: block;
  }
}

@media (max-width: 1023px) {
  .hero__layout {
    grid-template-columns: 1fr;
  }

  .hero__details {
    flex-direction: column;
    gap: 0;
  }

  .hero__sidebar {
    min-height: auto;
  }
}
</style>
