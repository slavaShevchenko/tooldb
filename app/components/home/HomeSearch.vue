<template>
  <LayoutSection>
    <BaseInput
      v-model="search"
      placeholder="Search tools..."
    />
  </LayoutSection>
</template>

<script setup lang="ts">
const search = ref('')
</script>