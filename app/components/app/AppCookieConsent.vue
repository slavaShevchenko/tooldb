<template>
  <Teleport to="body">
    <div
      v-if="showBanner"
      class="cookie-consent"
    >
      <div class="cookie-consent__content">
        <div class="cookie-consent__text">
          <h3 class="cookie-consent__title">
            We value your privacy
          </h3>
          <p class="cookie-consent__description">
            We use cookies to improve your experience, analyze traffic, and personalize content.
          </p>
        </div>

        <div class="cookie-consent__actions">
          <BaseButton
            variant="primary"
            size="sm"
            @click="handleAccept"
          >
            Accept all
          </BaseButton>
          <BaseButton
            variant="secondary"
            size="sm"
            @click="handleReject"
          >
            Reject all
          </BaseButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const {
  isConsentResolved,
  acceptAnalytics,
  rejectAnalytics
} = useAnalytics()

const showBanner = ref(false)

const handleAccept = () => {
  acceptAnalytics()
  showBanner.value = false
}

const handleReject = () => {
  rejectAnalytics()
  showBanner.value = false
}

onMounted(() => {
  if (!isConsentResolved.value) {
    showBanner.value = true
  }
})
</script>

<style scoped lang="scss">
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  padding: var(--space-2);
}

.cookie-consent__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: var(--space-2);
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
}

.cookie-consent__text {
  flex: 1;
}

.cookie-consent__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-0-5);
}

.cookie-consent__description {
  font-size: var(--font-size-sm);
  line-height: 1.5;
  color: var(--color-text-secondary);
}

.cookie-consent__actions {
  display: flex;
  gap: var(--space-1);
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
}
</style>