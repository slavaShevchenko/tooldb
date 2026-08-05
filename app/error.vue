<template>
  <div class="error-page">
    <BaseContainer>
      <div class="error-content">
        <p class="error-code">{{ error?.statusCode || 404 }}</p>
        <h1 class="error-title">{{ title }}</h1>
        <p class="error-description">{{ description }}</p>
        <NuxtLink to="/" class="error-link">
          <BaseButton>Back to Home</BaseButton>
        </NuxtLink>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const title = computed(() =>
  props.error.statusCode === 404
    ? 'Page Not Found'
    : 'Something Went Wrong'
)

const description = computed(() =>
  props.error.statusCode === 404
    ? 'The page you are looking for does not exist or has been moved.'
    : 'An unexpected error occurred. Please try again later.'
)

useSeo({
  title: `${title} - ToolDB`,
  description: description.value,
  robots: 'noindex',
})
</script>

<style scoped lang="scss">
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.error-content {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.error-code {
  font-size: 8rem;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  color: var(--color-primary);
  margin-bottom: var(--space-1);
}

.error-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
}

.error-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-3);
}

.error-link {
  display: inline-block;
  text-decoration: none;
}
</style>