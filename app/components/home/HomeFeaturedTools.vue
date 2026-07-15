<template>
  <section class="section">
    <h2 class="title">
      Featured Tools
    </h2>

    <div class="grid">
      <ToolCard
        v-for="tool in featuredTools"
        :key="tool.id"
        :tool="tool"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { featuredTools } = useTools()
</script>

<style scoped lang="scss">
.section {
  margin-top: var(--space-8);
}

.title {
  margin-bottom: var(--space-5);

  font-size: var(--font-size-2xl);
}

.grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
</style>