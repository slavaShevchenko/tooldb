<template>
  <div class="stats">
    <div
      v-for="item in stats"
      :key="item.label"
      class="stat"
    >
      <div class="icon">
        <BaseIcon
          :name="item.icon"
          :size="40"
          color="var(--color-surface)"
        />
      </div>

      <div class="stats__content">
        <div class="value">
          {{ item.value }}
        </div>

        <div class="label">
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  getPopularToolsCount,
  getCategoriesCount,
  getAlternativesCount,
} = useAlternatives()

const stats = computed(() => [
  {
    icon: 'lucide:star',
    value: getPopularToolsCount(),
    label: 'Popular Tools',
  },
  {
    icon: 'lucide:layers',
    value: getCategoriesCount(),
    label: 'Categories',
  },
  {
    icon: 'lucide:arrow-left-right',
    value: getAlternativesCount(),
    label: 'Alternatives',
  },
])
</script>

<style scoped lang="scss">
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.stat {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex: 1 0 auto;
  max-width: 160px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--space-3) + var(--space-0-5));
  height: calc(var(--space-3) + var(--space-0-5));
  border-radius: var(--radius-md);
  background: linear-gradient(
    135deg,
    var(--color-secondary-75) 0%,
    var(--color-primary-75) 100%
  );
}

.stats__content {
  display: flex;
  flex-direction: column;
}

.value {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  line-height: 1;
}

.label {
  margin-top: var(--space-0-25);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

@media (max-width: 767px) {
  .stats {
    gap: var(--space-2) var(--space-1);
    margin-bottom: var(--space-2);
  }
}
</style>