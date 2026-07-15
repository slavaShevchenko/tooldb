<template>
  <button
    class="button"
    :class="[
      `button--${variant}`,
      `button--${size}`,
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
)
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: var(--radius-md);

  cursor: pointer;

  font: inherit;
  font-weight: var(--font-weight-semibold);

  transition: var(--transition-fast);

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
}

/* Sizes */

.button--sm {
  padding: .5rem .875rem;
  font-size: var(--font-size-sm);
}

.button--md {
  padding: .75rem 1.25rem;
  font-size: var(--font-size-md);
}

.button--lg {
  padding: 1rem 1.75rem;
  font-size: var(--font-size-lg);
}

/* Variants */

.button--primary {
  background: var(--color-primary);
  color: white;

  &:hover:not(:disabled) {
    background: var(--color-primary-hover);
  }
}

.button--secondary {
  background: var(--color-surface);
  color: var(--color-text);

  border: 1px solid var(--color-border);

  &:hover:not(:disabled) {
    border-color: var(--color-border-hover);
  }
}

.button--ghost {
  background: transparent;
  color: var(--color-text);

  &:hover:not(:disabled) {
    background: var(--color-surface-secondary);
  }
}
</style>