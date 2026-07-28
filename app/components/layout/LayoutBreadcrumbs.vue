<template>
  <BaseContainer>
    <nav
      v-if="breadcrumbs.length"
      class="breadcrumbs"
      aria-label="Breadcrumb"
    >
      <ol class="breadcrumbs__list">
        <li
          v-for="(item, index) in breadcrumbs"
          :key="item.label"
          class="breadcrumbs__item"
        >
          <NuxtLink
            v-if="item.to && index !== breadcrumbs.length - 1"
            :to="item.to"
          >
            {{ item.label }}
          </NuxtLink>

          <span v-else>
            {{ item.label }}
          </span>
        </li>
      </ol>
    </nav>
  </BaseContainer>
</template>

<script setup lang="ts">
const { breadcrumbs } = useBreadcrumbs()
</script>

<style scoped lang="scss">
.breadcrumbs {
  padding: var(--space-1) 0;
}

.breadcrumbs__list {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;

  margin: 0;
  padding: 0;

  list-style: none;
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
}

.breadcrumbs__item:not(:last-child)::after {
  content: "/";
  margin-left: .5rem;
  color: var(--color-text-secondary);
}

a {
  color: var(--color-text-secondary);
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }
}

span {
  color: var(--color-text);
}
</style>