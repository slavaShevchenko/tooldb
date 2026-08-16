<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      :title="`Best alternatives for ${alternative?.name}`"
      :description="alternative?.description ?? ''"
    > 
      <template #action>
        <ToolHighlights
          :icon-size="16"
          :items="alternative.why"
        />

        <div class="alternative__share-wrapper">
          <BaseShare />
        </div>
      </template>

      <div class="alt-items__wrapper">
        <AlternativesItem
          v-for="alternativeItem in alternative.alternatives"
          :alternative="alternativeItem"
          :key="alternative.id"
        />
      </div>

      <div class="tooldb__grid">
        <div class="tooldb__grid-left">
          <CommonAuthorBox />
        </div>
        <div class="tooldb__grid-right">
          <ToolAffiliateNotice />
        </div>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'

const route = useRoute()

const { getAlternativeBySlug } = useAlternatives()
const { getToolBySlug } = useTools()

const alternative = computed(() =>
  getAlternativeBySlug(route.params.slug as string)
)

useBreadcrumbJsonLd([
  { name: 'Home', url: '/' },
  { name: 'Alternatives', url: '/alternatives' },
  {
    name: `${alternative.value.name} Alternatives`,
    url: `/alternatives/${alternative.value.slug}`,
  },
])

const alternativeTools = computed(() =>
  alternative.value.alternatives
    .map(item => ({
      slug: item.slug,
      name: getToolBySlug(item.slug)?.name || item.slug,
    }))
)

useAlternativesJsonLd(alternative.value.name, alternativeTools.value)
useAuthorJsonLd()

useSeo({
  title: `Best ${alternative.value.name} Alternatives in 2026`,
  description: alternative.value.description,
  canonical: `https://tooldb.org/alternatives/${alternative.value.slug}`,
})
</script>

<style scoped lang="scss">
.section {
  margin-top: var(--space-2);
}
.section:deep() .header {
  margin-bottom: var(--space-2);
}
.section:deep() .content {
  flex: 0 0 var(50% - var(--space-0-5));
}
.section:deep() .action {
  flex: 0 0 var(50% - var(--space-0-5));
}
.section:deep() .title {
  font-size: var(--font-size-3xl);
}
.section:deep() .description {
  line-height: 1.8;
}

.section:deep() .tool-overview__highlights {
  display: block;
  padding-top: 0;
  padding-bottom: 0;
}
.section:deep() .tool-overview__highlights li + li {
  margin-top: var(--space-0-5);
}

.alt-item + .alt-item {
  margin-top: var(--space-2);
}

.tooldb__grid {
  padding-top: var(--space-3);
}

.alternative__share-wrapper {
  display: flex;
  justify-content: flex-end;
  padding-top: var(--space-2);
}

@media (max-width: 1279px) {
  .alt-items__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-1);
  }
  .alt-item + .alt-item {
    margin-top: 0;
  }
}
@media (max-width: 991px) {
  .section:deep() .header {
    display: block;
  }
  .section:deep() .action {
    padding-top: var(--space-2);
  }
  .section:deep() .title {
    font-size: var(--font-size-2xl);
  }
}
@media (max-width: 767px) {
  .alt-items__wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>