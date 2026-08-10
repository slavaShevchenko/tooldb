<template>
  <article class="card">
    <NuxtLink
      :to="routes.alternative(alternative.slug)"
      class="link"
    >
      <div class="header">
        <div class="logo">
          <img
            :src="cardLogo"
            :alt="`${alternative.name} logo`"
            class="logo-image"
          >
        </div>

        <h3 class="title">
          {{ alternative.name }}
        </h3>

        <div class="length">
          {{ `${alternative.alternatives.length} alternatives` }}
        </div>
      </div>

      <div class="content">
        <div class="content__description">
          <p class="tagline">
            {{ alternative.toolDescription }}
          </p>
        </div>
      </div>

      <div class="footer">
        <div class="alt-logos">
          <div 
            v-for="item in visibleAlternatives"
            :key="item.slug"
            class="alt-logo__wrapper"
          >
            <img
              
              :src="getToolLogo(item.slug)"
              :alt="`${getToolName(item.slug)} logo`"
              class="alt-logo"
            >
          </div>
          <div
            v-if="remainingCount > 0"
            class="alt-logo__wrapper"
          >
            <span class="alt-logos__more">
              +{{ remainingCount }}
            </span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import type { AlternativePage } from '~/types/alternatives'

const { getToolBySlug } = useTools()

const { alternative } = defineProps<{
  alternative: AlternativePage
}>()

const maxLogos = 4

const cardLogo = computed(() =>
  alternative.logo.replace(/(\.[^.]+)$/, '-size-32$1')
)

const visibleAlternatives = computed(() =>
  alternative.alternatives.slice(0, maxLogos)
)

const remainingCount = computed(() =>
  Math.max(0, alternative.alternatives.length - maxLogos)
)

const getToolLogo = (slug: string) => {
  const tool = getToolBySlug(slug)
  return tool?.logo?.replace(/(\.[^.]+)$/, '-size-32$1') || ''
}

const getToolName = (slug: string) => {
  const tool = getToolBySlug(slug)
  return tool?.name || slug
}
</script>

<style scoped lang="scss">
.card {
  background:
    linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
    linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%) border-box;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
}

.card .link {
  height: 100%;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border: 1px solid transparent;
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-0-5);
  padding: var(--space-1);
  color: inherit;
  text-decoration: none;
}

.header {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-3);
  height: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-background);
}

.logo-image {
  width: var(--space-2);
  height: var(--space-2);
  object-fit: contain;
}

.content {
  flex: 1;
}

.length {
  padding: var(--space-0-5);
  border-radius: var(--radius-md);
  background: var(--color-secondary);
  font-size: var(--font-size-xs);
  color: var(--color-surface);
}

.title {
  flex: 1 0 auto;
  font-size: var(--font-size-xl);
}

.tagline {
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  line-height: 1.4;
}

.footer {
  padding-top: var(--space-0-5);
}

.alt-logos {
  display: flex;
  gap: var(--space-0-5);
}
.alt-logo__wrapper {
  flex: 0 0 calc(32px + var(--space-1));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-0-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}
.alt-logo {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  object-fit: contain;
  background: var(--color-background);
  padding: 2px;
}

.alt-logos__more {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
}
</style>