<template>
  <footer class="footer">
    <BaseContainer>
      <AppLogo />
    </BaseContainer>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from '~/components/app/AppLogo.vue'
</script>

<style scoped lang="scss">
.footer {
  padding: var(--space-5) 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
  background: var(--color-background);
}
</style>