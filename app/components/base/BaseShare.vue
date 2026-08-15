<template>
  <div
    ref="root"
    class="share"
  >
    <BaseButton
      variant="secondary"
      width="full"
      size="lg"
      @click="toggle"
    >
      <BaseIcon name="share-2" />
      Share
    </BaseButton>

    <Transition name="share-dropdown">
      <div
        v-if="opened"
        class="share__dropdown"
      >
        <button
          class="share__item"
          @click="copyLink"
        >
          <BaseIcon name="copy" />
          <span>{{ copied ? 'Copied!' : 'Copy link' }}</span>
        </button>

        <a
          v-for="item in shareLinks"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="share__item"
          @click="opened = false"
        >
          <BaseIcon
            :name="item.icon"
            :color="item.color"
          />

          <span>{{ item.label }}</span>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface Props {
  title?: string
  text?: string
  url?: string
}

const props = defineProps<Props>()

const route = useRoute()

const opened = ref(false)
const copied = ref(false)
const root = ref<HTMLElement>()

const shareUrl = computed(() =>
  props.url || `https://tooldb.org${route.fullPath}`,
)

const shareTitle = computed(() =>
  props.title || document.title,
)

const shareText = computed(() =>
  props.text || '',
)

const encodedUrl = computed(() =>
  encodeURIComponent(shareUrl.value),
)

const encodedTitle = computed(() =>
  encodeURIComponent(shareTitle.value),
)

const encodedText = computed(() =>
  encodeURIComponent(shareText.value),
)

const shareLinks = computed(() => [
  {
    label: 'Telegram',
    icon: 'simple-icons:telegram',
    color: '#26A5E4',
    href: `https://t.me/share/url?url=${encodedUrl.value}&text=${encodedTitle.value}`,
  },
  {
    label: 'WhatsApp',
    icon: 'simple-icons:whatsapp',
    color: '#25D366',
    href: `https://wa.me/?text=${encodedTitle.value}%20${encodedUrl.value}`,
  },
  {
    label: 'X',
    icon: 'simple-icons:x',
    color: '#000000',
    href: `https://twitter.com/intent/tweet?text=${encodedTitle.value}&url=${encodedUrl.value}`,
  },
  {
    label: 'LinkedIn',
    icon: 'simple-icons:linkedin',
    color: '#0A66C2',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl.value}`,
  },
  {
    label: 'Facebook',
    icon: 'simple-icons:facebook',
    color: '#1877F2',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl.value}`,
  },
  {
    label: 'Reddit',
    icon: 'simple-icons:reddit',
    color: '#FF4500',
    href: `https://reddit.com/submit?url=${encodedUrl.value}&title=${encodedTitle.value}`,
  },
  {
    label: 'Email',
    icon: 'lucide:mail',
    color: 'var(--color-primary)',
    href: `mailto:?subject=${encodedTitle.value}&body=${encodedText.value}%0A%0A${encodedUrl.value}`,
  },
])

const toggle = async () => {
  if (
    navigator.share
    && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  ) {
    try {
      await navigator.share({
        title: shareTitle.value,
        text: shareText.value,
        url: shareUrl.value,
      })

      return
    }
    catch {
      return
    }
  }

  opened.value = !opened.value
}

const copyLink = async () => {
  await navigator.clipboard.writeText(shareUrl.value)

  copied.value = true
  opened.value = false

  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const onClickOutside = (event: MouseEvent) => {
  if (!root.value?.contains(event.target as Node)) {
    opened.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped lang="scss">
.share {
  position: relative;
}

.share__dropdown {
  min-width: 100%;
  position: absolute;
  top: calc(100% + var(--space-0-5));
  left: 0;
  width: 240px;
  overflow: hidden;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 100;
}

.share__item {
  display: flex;
  align-items: center;
  gap: var(--space-0-75);
  width: 100%;
  padding: var(--space-0-75) var(--space-1);
  border: 0;
  background: transparent;
  color: inherit;
  text-decoration: none;
  font: inherit;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.share__item:hover {
  background: var(--color-surface-secondary);
}

.share__item:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

.share-dropdown-enter-active,
.share-dropdown-leave-active {
  transition:
    opacity .15s,
    transform .15s;
}

.share-dropdown-enter-from,
.share-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>