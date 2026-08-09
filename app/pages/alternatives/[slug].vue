<template>
  <BaseContainer>
    <LayoutSection
      :title="`Best alternatives for ${alternative?.name}`"
      :description="alternative?.description ?? ''"
    > 
      <div class="alt-items__wrapper">
        <AlternativesItem
          v-for="alternativeItem in alternative.alternatives"
          :alternative="alternativeItem"
          :key="alternative.id"
        />
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
  margin-bottom: var(--space-3);
}
.section:deep() .content {
  max-width: 640px;
}
.section:deep() .title {
  font-size: var(--font-size-3xl);
}
.section:deep() .description {
  line-height: 1.8;
}

.alt-item + .alt-item {
  margin-top: var(--space-2);
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
@media (max-width: 767px) {
  .alt-items__wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>