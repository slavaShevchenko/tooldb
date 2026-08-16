<template>
  <nav
    v-if="totalPages > 1"
    class="pagination"
  >
    <NuxtLink
      v-if="hasPrev"
      :to="pageLink(currentPage - 1)"
      class="button"
      @click="scrollToTop"
    >
      ← 
    </NuxtLink>

    <template
      v-for="(page, index) in pages"
      :key="`${page}-${index}`"
    >
      <span
        v-if="page === '...'"
        class="ellipsis"
      >
        …
      </span>

      <NuxtLink
        v-else
        :to="pageLink(page)"
        class="button"
        :class="{ active: page === currentPage }"
        @click="scrollToTop"
      >
        {{ page }}
      </NuxtLink>
    </template>

    <NuxtLink
      v-if="hasNext"
      :to="pageLink(currentPage + 1)"
      class="button"
      @click="scrollToTop"
    >
       →
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const route = useRoute()

const hasPrev = computed(() =>
  props.currentPage > 1,
)

const hasNext = computed(() =>
  props.currentPage < props.totalPages,
)

const pageLink = (page: number) => {
  const query = { ...route.query }

  delete query.page

  return {
    path: route.path,
    query: page === 1
      ? query
      : {
          ...query,
          page,
        },
  }
}

type PageItem = number | '...'

const pages = computed<PageItem[]>(() => {
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 7) {
    return Array.from(
      { length: total },
      (_, i) => i + 1,
    )
  }

  const items: PageItem[] = []

  items.push(1)

  if (current <= 4) {
    items.push(2, 3, 4, 5)
    items.push('...')
  }
  else if (current >= total - 3) {
    items.push('...')

    for (let i = total - 4; i < total; i++) {
      items.push(i)
    }
  }
  else {
    items.push('...')
    items.push(current - 1)
    items.push(current)
    items.push(current + 1)
    items.push('...')
  }

  items.push(total)

  return items
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-0-5);
  flex-wrap: wrap;
  padding-top: var(--space-2);
  font-size: var(--font-size-sm);
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  height: 40px;

  border: 1px solid var(--color-border-main);
  border-radius: var(--radius-md);

  color: var(--color-text);
  text-decoration: none;

  transition: var(--transition-fast);
}

.button:hover {
  border-color: var(--color-primary);
}

.button.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  color: var(--color-text-secondary);
}

@media (max-width: 767px) {
  .button {
    min-width: 24px;
    height: 32px;
    border-radius: var(--radius-sm);
  }
  .ellipsis {
    width: 16px;
    height: 32px;
  }
}
</style>