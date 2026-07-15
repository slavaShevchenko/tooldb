<template>
  <BaseContainer>
    <HomeHero />

    <div class="demo">
      <BaseInput
        v-model="search"
        placeholder="Search tools..."
      />
    </div>

    <HomeFeaturedTools />
  </BaseContainer>
</template>

<script setup lang="ts">
const search = ref('')
</script>

<style scoped lang="scss">
.demo {
  margin-top: var(--space-8);
}
</style>