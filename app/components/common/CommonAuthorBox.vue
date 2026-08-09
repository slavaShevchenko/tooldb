<template>
  <div class="author-box">
    <img
      src="/images/author/slava.webp"
      alt="Slava Shevchenko"
      class="author-box__avatar"
      width="100"
      height="100"
    >
    <div class="author-box__info">
      <span class="author-box__label">Reviewed by</span>
      <NuxtLink
        to="/about"
        class="author-box__name"
      >
        Slava Shevchenko
      </NuxtLink>
      <span class="author-box__bio">Frontend developer · Updated {{ formattedDate }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const formattedDate = computed(() => {
  const now = new Date()
  return now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})
</script>

<style scoped lang="scss">
.author-box {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  height: 100%;
  padding: var(--space-1);
  background: var(--color-surface-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
}

.author-box__avatar {
  width: 100px;
  height: 100px;
  border-radius: var(--radius-lg);
  object-fit: cover;
  flex-shrink: 0;
}

.author-box__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-0-5);
}

.author-box__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

.author-box__name {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }
}

.author-box__bio {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  line-height: 1.4;
}
</style>