<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="button"
    :class="[
      `button--${variant}`,
      `button--${size}`,
      width ? `button--width-${width}` : '',
    ]"
    :disabled="tag === 'button' ? disabled : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'orange' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    width?: 'full' | 'auto'
    disabled?: boolean

    to?: string
    href?: string
    target?: '_blank' | '_self'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    width: 'auto',
    disabled: false,
    target: '_self'
  }
)

const tag = computed(() => {
  if (props.to) {
    return NuxtLink
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})
</script>

<style scoped lang="scss">
.button {
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
  padding: var(--space-0-5) var(--space-0-75);
  font-size: var(--font-size-sm);
}

.button--md {
  padding: var(--space-0-75) var(--space-1-25);
  font-size: var(--font-size-md);
}

.button--lg {
  padding: var(--space-1) var(--space-1-75);
  font-size: var(--font-size-lg);
}

/* Widths */

.button--width-full {
  display: flex;
}

.button--width-auto {
  display: inline-flex;
}

/* Variants */

.button--primary {
  background: var(--color-primary);
  color: var(--color-surface);

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

.button--orange {
  background: var(--color-secondary);
  color: var(--color-surface);

  &:hover:not(:disabled) {
    background: var(--color-secondary-hover);
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