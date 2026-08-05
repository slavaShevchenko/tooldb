<template>
  <div
    class="input"
    :class="{
      'input--disabled': disabled,
      'input--focused': isFocused,
      'input--transparent': variant === 'transparent',
    }"
  >
    <slot name="prefix" />

    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="field"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >

    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const model = defineModel<string>({
  default: '',
})

withDefaults(
  defineProps<{
    type?: string
    placeholder?: string
    disabled?: boolean
    variant?: 'default' | 'transparent'
  }>(),
  {
    type: 'text',
    placeholder: '',
    disabled: false,
    variant: 'default',
  },
)

const isFocused = ref(false)
</script>

<style scoped lang="scss">
.input {
  display: flex;
  align-items: center;
  gap: var(--space-0-75);
  width: 100%;
  padding: var(--space-0-75) var(--space-1);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: var(--transition-fast);
}

.input--focused {
  border-color: var(--color-primary);
}

.input--disabled {
  opacity: .6;
}

.input--transparent {
  padding: 0;
  background: transparent;
  border: none;
}

.field {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-text);
  font: inherit;
}

.field::placeholder {
  color: var(--color-text-secondary);
}
</style>