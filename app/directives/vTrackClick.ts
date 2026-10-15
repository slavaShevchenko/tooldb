import type { Directive } from 'vue'
import { useAnalytics } from '~/composables/useAnalytics'

interface TrackClickElement extends HTMLElement {
  __trackClickHandler?: (event: Event) => void
}

export const vTrackClick: Directive<TrackClickElement> = {
  mounted(el, binding) {
    const { toolName, location } = binding.value
    const { trackOutboundClick } = useAnalytics()

    const handler = () => {
      const href = el.getAttribute('href') || el.closest('a')?.getAttribute('href')

      if (!href) return

      const isExternal = href.startsWith('http') || href.startsWith('//')

      if (!isExternal) return

      trackOutboundClick(toolName, location, href)
    }

    el.__trackClickHandler = handler
    el.addEventListener('click', handler, { capture: true })
  },

  unmounted(el) {
    if (el.__trackClickHandler) {
      el.removeEventListener('click', el.__trackClickHandler, { capture: true })
      delete el.__trackClickHandler
    }
  }
}