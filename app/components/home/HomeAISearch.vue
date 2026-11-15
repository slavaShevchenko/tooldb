<template>
  <LayoutSection
    title="AI-Powered Search"
    description="Discover the perfect software for your business with our intelligent AI-powered search. Simply describe your needs in natural language, and our advanced algorithm will instantly match you with the most relevant digital tools from our comprehensive catalog. Whether you're looking for project management platforms, CRM systems, marketing automation, accounting software, or specialized SaaS solutions, our AI understands your requirements and recommends tools that fit your workflow, team size, and budget. Stop browsing through endless lists — let artificial intelligence do the research for you and find the best tools to boost your productivity and streamline your operations."
  >
    <div class="ai-search-wrapper">
      <div class="ai-search">
        <BaseIcon
          name="sparkles"
          :size="24"
          color="var(--color-primary)"
        />

        <BaseInput
          v-model="aiQuery"
          placeholder="What do you need a tool for?"
          variant="transparent"
          :disabled="isLoading"
          @keyup.enter="handleSearch"
        />

        <BaseButton
          :disabled="isLoading || aiQuery.trim().length < 3"
          @click="handleSearch"
        >
          <BaseIcon
            v-if="isLoading"
            name="loader"
            :size="18"
            class="spinner"
          />
          {{ isLoading ? 'Searching...' : 'Search' }}
        </BaseButton>
      </div>

      <div
        v-if="error"
        class="ai-search-error"
      >
        <BaseIcon
          name="circle-alert"
          :size="18"
        />
        {{ error }}
      </div>

      <div
        v-if="!isLoading && aiQuery.length >= 3 && matchedSlugs.length === 0 && !error && hasSearched"
        class="ai-search-empty"
      >
        <BaseIcon
          name="search-x"
          :size="32"
          class="ai-search-empty-icon"
        />

        <div class="ai-search-empty-title">
          No tools found
        </div>

        <div class="ai-search-empty-description">
          Try searching with a different description or keywords.
        </div>
      </div>

      <div
        v-if="matchedSlugs.length > 0 && !isLoading"
        class="ai-search-results"
      >
        <AlternativesItem
          v-for="(slug, index) in matchedSlugs"
          :key="slug"
          :alternative="{ slug }"
          class="ai-search-result-item"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </LayoutSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAiSearch } from '~/composables/useAiSearch'

const { search, isLoading, error } = useAiSearch()

const aiQuery = ref('')
const matchedSlugs = ref<string[]>([])
const hasSearched = ref(false)

const handleSearch = async () => {
  if (aiQuery.value.trim().length < 3) {
    return
  }

  hasSearched.value = true
  matchedSlugs.value = await search(aiQuery.value)
}
</script>

<style scoped lang="scss">
.ai-search-wrapper {
  position: relative;
}

.ai-search {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  padding: var(--space-0-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-fast);

  &:focus-within {
    border-color: var(--color-primary);
  }
}

.ai-search-error {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  margin-top: var(--space-0-75);
  padding: var(--space-0-75) var(--space-1);
  color: var(--color-danger);
  background: var(--color-surface-secondary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.ai-search-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-2);
  margin-top: var(--space-1);
  text-align: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.ai-search-empty-icon {
  margin-bottom: var(--space-0-75);
  color: var(--color-text-tertiary);
}

.ai-search-empty-title {
  font-weight: var(--font-weight-semibold);
}

.ai-search-empty-description {
  margin-top: var(--space-0-25);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.ai-search-results {
  display: flex;
  flex-direction: column;
  margin-top: var(--space-1-5);
}

.ai-search-result-item {
  animation: fadeInUp 0.4s ease-out both;
}

.ai-search-results :deep(.alt-item + .alt-item) {
  margin-top: var(--space-1-5);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
