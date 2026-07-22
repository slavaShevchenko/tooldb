<template>
  <LayoutSection>
    <div class="search">
      <BaseInput
        v-model="search"
        placeholder="Search tools..."
        variant="transparent"
      />

      <BaseButton>
        Search
      </BaseButton>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
const search = ref('')
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  gap: var(--space-0-75);

  padding: .5rem;

  background: var(--color-surface);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}
</style>