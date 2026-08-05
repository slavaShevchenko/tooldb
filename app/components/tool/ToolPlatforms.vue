<template>
  <div class="tool-platforms">
    <div
      v-for="platform in platforms"
      :key="platform"
      class="tool-platforms__item"
    >
      <BaseIcon
        :name="iconMap[platform]?.icon || 'lucide:globe'"
        :size="20"
        color="var(--color-primary)"
      />

      <span class="tool-platforms__label">
        {{ iconMap[platform]?.label || platform }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  platforms: string[]
}>()

const iconMap: Record<string, { icon: string, label: string }> = {
  web: {
    icon: 'lucide:globe',
    label: 'Web',
  },
  ios: {
    icon: 'simple-icons:apple',
    label: 'iOS',
  },
  android: {
    icon: 'simple-icons:android',
    label: 'Android',
  },
  windows: {
    icon: 'simple-icons:windows',
    label: 'Windows',
  },
  mac: {
    icon: 'simple-icons:apple',
    label: 'macOS',
  },
  linux: {
    icon: 'simple-icons:linux',
    label: 'Linux',
  },
}
</script>

<style scoped lang="scss">
.tool-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1-5);
  padding-top: var(--space-2);
}

.tool-platforms__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-0-5);
  flex-shrink: 0;
}

.tool-platforms__label {
  font-size: var(--font-size-xs);
  line-height: 1;
  color: var(--color-primary);
  white-space: nowrap;
}

@media (max-width: 479px) {
  .tool-platforms {
    gap: var(--space-1);
  }
}
</style>