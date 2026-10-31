<template>
  <div
    v-if="enabled"
    class="rating"
    :class="{ 'rating--pending': pending, 'rating--pulse': pulse }"
  >
    <div
      ref="stars"
      class="rating__stars"
      role="radiogroup"
      :aria-label="`Rate ${name} from ${RATING_MIN} to ${RATING_MAX} stars`"
      :aria-describedby="`${slug}-rating-hint`"
      :aria-busy="pending"
      @mouseleave="hovered = null"
      @focusout="onFocusOut"
    >
      <span
        class="rating__layer"
        aria-hidden="true"
      >
        <BaseIcon
          v-for="star in RATING_STARS"
          :key="`base-${star}`"
          name="star"
          :size="24"
        />
      </span>

      <span
        class="rating__layer rating__layer--fill"
        :style="{ '--fill': fillPercent }"
        aria-hidden="true"
      >
        <BaseIcon
          v-for="star in RATING_STARS"
          :key="`fill-${star}`"
          name="star"
          :size="24"
        />
      </span>

      <span class="rating__hits">
        <button
          v-for="star in RATING_STARS"
          :key="star"
          type="button"
          role="radio"
          class="rating__button"
          :data-star="star"
          :aria-checked="yourVote === star"
          :aria-label="`Rate ${star} out of ${RATING_MAX} stars`"
          :tabindex="star === activeIndex ? 0 : -1"
          :disabled="pending"
          @mouseenter="hovered = star"
          @focus="onFocus(star)"
          @click="select(star)"
          @keydown="onKeydown"
        />
      </span>
    </div>

    <p
      :id="`${slug}-rating-hint`"
      class="rating__hint"
    >
      Use arrow keys to preview a rating, then press Enter to submit it.
    </p>

    <p
      class="rating__summary"
      aria-live="polite"
    >
      {{ summary }}
    </p>

    <p
      v-if="yourVote"
      class="rating__own"
    >
      Your rating: {{ yourVote }}/{{ RATING_MAX }}

      <button
        type="button"
        class="rating__remove"
        :disabled="pending"
        @click="withdraw"
      >
        Remove
      </button>
    </p>

    <p
      v-if="error"
      class="rating__error"
      role="alert"
    >
      {{ error }}
    </p>

    <!-- Honeypot: invisible for people, tempting for bots. Any value discards the vote. -->
    <input
      v-model="honeypot"
      class="rating__honeypot"
      type="text"
      name="email"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
    >
  </div>
</template>

<script setup lang="ts">
import { RATING_MAX, RATING_MIN, RATING_STARS } from '~/constants/rating'

const { slug, name } = defineProps<{
  slug: string
  name: string
}>()

const {
  average,
  count,
  yourVote,
  enabled,
  pending,
  error,
  honeypot,
  vote,
  withdraw,
} = await useToolRating(slug)

const stars = ref<HTMLElement | null>(null)
const hovered = ref<number | null>(null)
const keyboard = ref<number | null>(null)
const activeIndex = ref(yourVote.value ?? RATING_MIN)
const pulse = ref(false)

const preview = computed(() => hovered.value ?? keyboard.value)
const fillValue = computed(() => preview.value ?? yourVote.value ?? average.value)

const fillPercent = computed(() => {
  const ratio = Math.min(Math.max(fillValue.value / RATING_MAX, 0), 1)

  return `${ratio * 100}%`
})

const summary = computed(() => {
  if (count.value === 0) return `Be the first to rate ${name}`

  const votes = `${count.value} ${count.value === 1 ? 'vote' : 'votes'}`

  return `${average.value.toFixed(1)} / ${RATING_MAX} (${votes})`
})

watch(yourVote, (value) => {
  if (!value) return

  activeIndex.value = value
  pulse.value = true
  setTimeout(() => { pulse.value = false }, 500)
})

const select = (star: number) => {
  activeIndex.value = star
  vote(star)
}

const onFocus = (star: number) => {
  activeIndex.value = star
  keyboard.value = star
}

const onFocusOut = (event: FocusEvent) => {
  if (!stars.value?.contains(event.relatedTarget as Node)) keyboard.value = null
}

const focusStar = (star: number) => {
  stars.value?.querySelector<HTMLElement>(`[data-star="${star}"]`)?.focus()
}

const ARROW_KEYS: Record<string, number> = {
  ArrowRight: 1,
  ArrowUp: 1,
  ArrowLeft: -1,
  ArrowDown: -1,
}

const onKeydown = (event: KeyboardEvent) => {
  const range = RATING_MAX - RATING_MIN + 1

  if (event.key in ARROW_KEYS) {
    event.preventDefault()
    const next = ((activeIndex.value - RATING_MIN + ARROW_KEYS[event.key] + range) % range) + RATING_MIN

    activeIndex.value = next
    focusStar(next)

    return
  }

  if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault()
    const next = event.key === 'Home' ? RATING_MIN : RATING_MAX

    activeIndex.value = next
    focusStar(next)

    return
  }

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    select(activeIndex.value)
  }
}
</script>

<style scoped lang="scss">
.rating {
  --star-gap: var(--space-0-25);

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-0-25);
  margin-top: var(--space-1);
}

.rating--pending {
  opacity: 0.6;
}

.rating__stars {
  position: relative;
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  min-height: var(--space-2-5);
}

.rating--pulse .rating__stars {
  animation: rating-pop 0.5s ease;
  transform-origin: left center;
}

.rating__layer {
  display: flex;
  align-items: center;
  gap: var(--star-gap);
  color: var(--color-border-main);
}

.rating__layer--fill {
  position: absolute;
  inset: 0;
  color: var(--color-secondary);
  clip-path: inset(0 calc(100% - var(--fill, 0%)) 0 0);
  transition: clip-path var(--transition-fast);
  pointer-events: none;
}

.rating__hits {
  position: absolute;
  inset: 0;
  display: flex;
  gap: var(--star-gap);
}

.rating__button {
  flex: 1 1 0;
  min-width: 0;
  padding: 0;
  border: 0;
  border-radius: var(--radius-sm);
  background: none;
  cursor: pointer;
}

.rating__button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.rating__hint {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.rating__summary {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.rating__own {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

.rating__remove {
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: underline;
  cursor: pointer;
}

.rating__error {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-danger);
}

.rating__honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

@keyframes rating-pop {
  0% {
    transform: scale(1);
  }

  40% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
}
</style>
