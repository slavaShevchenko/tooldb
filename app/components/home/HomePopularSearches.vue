<template>
  <div class="popular-searches">
    <span class="label">
      Popular searches:
    </span>

    <BasePillGrid>
      <BasePill
        v-for="search in popularSearches"
        :key="search.id"
        :to="search.to"
      >
        {{ search.label }}
      </BasePill>
    </BasePillGrid>
  </div>
</template>

<script setup lang="ts">
const { popularSearches } = usePopularSearches()
</script>

<style scoped lang="scss">
.popular-searches {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-0-75);
  align-items: center;

  margin-top: var(--space-1);
}

.label {
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}
</style>
