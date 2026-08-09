<template>
  <ul
    class="tool-overview__highlights"
    :style="{ '--icon-size': `${props.iconSize}px` }"
  >
    <li
      v-for="item in props.items"
      :key="item"
    >
      <BaseIcon
        name="circle-check-big"
        :size="props.iconSize"
        color="var(--color-primary)"
      />

      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  items: string[]
  iconSize?: number
}>(), {
  iconSize: 20,
})
</script>

<style scoped lang="scss">
.tool-overview__highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-1);
  padding-left: 0;
  padding-top: var(--space-2);
  padding-bottom: var(--space-3);
  list-style: none;
}

.tool-overview__highlights li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-0-5);
  font-family: var(--font-family-heading);
  letter-spacing: 1px;
  line-height: 1.6;
}

.tool-overview__highlights li .iconify {
  flex: 0 0 var(--icon-size);
  margin-top: 3px;
}

@media (max-width: 723px) {
  .tool-overview__highlights {
    display: block;
  }

  .tool-overview__highlights li + li {
    margin-top: var(--space-1);
  }
}
</style>