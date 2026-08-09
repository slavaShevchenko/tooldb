<template>
  <div
    v-if="alternativeSlugs.length"
    class="tool-alternatives"
  >
    <h2 class="tool-alternatives__title">
      Alternatives for:
    </h2>

    <div class="tool-alternatives__buttons">
      <BaseButton
        v-for="slug in alternativeSlugs"
        :key="slug"
        :to="routes.alternative(slug)"
        size="sm"
        variant="orange"
      >
        {{ getAlternativeBySlug(slug).name }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { routes } from '~/constants/routes'

const props = defineProps<{
  toolSlug: string
}>()

const {
  getAlternativeSlugsByToolSlug,
  getAlternativeBySlug,
} = useAlternatives()

const alternativeSlugs = computed(() =>
  getAlternativeSlugsByToolSlug(props.toolSlug)
)
</script>

<style scoped lang="scss">
.tool-alternatives__title {
  margin-bottom: var(--space-0-5);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.tool-alternatives__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-75);
}
</style>