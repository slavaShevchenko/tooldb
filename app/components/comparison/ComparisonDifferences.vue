<template>
  <LayoutSection
    :title="comparison.differences.title"
    :description="comparison.differences.description"
  >
    <div class="table-wrapper">
      <table class="differences-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th
              v-for="tool in comparisonTools"
              :key="tool.slug"
            >
              {{ tool.name }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in comparison.differences.items"
            :key="index"
          >
            <td>
              <div class="feature__cell">
                <BaseIcon
                  :name="item.icon"
                  :size="18"
                  color="var(--color-text-secondary)"
                />
                <span>{{ item.feature }}</span>
              </div>
            </td>

            <td
              v-for="tool in comparisonTools"
              :key="tool.slug"
            >
              {{ item.values[tool.slug] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import type { ComparisonPage } from '~/types/comparison'
import type { Tool } from '~/types/tool'

defineProps<{
  comparison: ComparisonPage
  comparisonTools: Tool[]
}>()
</script>

<style scoped lang="scss">
::v-deep(.description) {
  line-height: 1.4;
}
.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.differences-table {
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
  line-height: 1.3;
}

.differences-table th,
.differences-table td {
  padding: var(--space-0-75) var(--space-1);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.differences-table th {
  width: 20%;
  background: var(--color-primary);
  font-weight: var(--font-weight-bold);
  color: var(--color-surface);
}

.differences-table tbody tr {
  transition: var(--transition-fast);
}

.differences-table tbody tr:nth-child(even) {
  background-color: var(--color-primary-10);
}

.differences-table tbody tr:hover {
  background: var(--color-primary-25);
}

.differences-table tbody tr:last-child td {
  border-bottom: none;
}

.feature__cell {
  display: flex;
  gap: var(--space-0-5);
}
.feature__cell .iconify {
  min-width: 18px;
}

@media (max-width: 991px) {
  .differences-table th,
  .differences-table td {
    padding: var(--space-0-5);
    font-size: var(--font-size-xs);
  }
}
</style>
