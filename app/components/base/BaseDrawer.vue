<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="modelValue"
        class="overlay"
        @click="close"
      />
    </Transition>

    <Transition name="drawer">
      <aside
        v-if="modelValue"
        ref="drawer"
        v-bind="$attrs"
        class="drawer"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <slot />
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import {
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
} from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const drawer = ref<HTMLElement | null>(null)

const previousOverflow = ref('')

const close = () => {
  emit('update:modelValue', false)
}

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close()
  }
}

watch(
  () => props.modelValue,
  async (opened) => {
    if (opened) {
      previousOverflow.value = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      window.addEventListener('keydown', onKeyDown)

      await nextTick()
      drawer.value?.focus()
    }
    else {
      document.body.style.overflow = previousOverflow.value

      window.removeEventListener('keydown', onKeyDown)
    }
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = previousOverflow.value
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 45%);
  backdrop-filter: blur(2px);
  z-index: 1000;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(340px, 90vw);
  height: 100dvh;
  padding: var(--space-1-5);

  background: var(--color-surface);
  border-left: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);

  overflow-y: auto;
  outline: none;

  z-index: 1001;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform .22s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity .2s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>