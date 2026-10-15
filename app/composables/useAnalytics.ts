export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
  functionality: boolean
}

const STORAGE_KEY = 'cookieConsent'
const GA_ID = 'G-RYYGZ4P0BM'
const GA_ENDPOINT = 'https://www.google-analytics.com/g/collect'

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
  functionality: false
}

const generateClientId = (): string => {
  const stored = localStorage.getItem('ga_client_id')
  if (stored) return stored

  const id = `${Date.now()}.${Math.random().toString(36).slice(2)}`
  localStorage.setItem('ga_client_id', id)
  return id
}

const sendToGA = (eventName: string, params: Record<string, unknown> = {}) => {
  if (import.meta.server) return

  const clientId = generateClientId()
  const url = new URL(GA_ENDPOINT)
  
  url.searchParams.set('v', '2')
  url.searchParams.set('tid', GA_ID)
  url.searchParams.set('cid', clientId)
  url.searchParams.set('en', eventName)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const paramKey = key === 'page_title' ? 'dt' :
                       key === 'page_location' ? 'dl' :
                       key === 'page_path' ? 'dp' :
                       key === 'page_referrer' ? 'dr' :
                       `ep.${key}`
      url.searchParams.set(paramKey, String(value))
    }
  })

  fetch(url.toString(), { mode: 'no-cors' }).catch(() => {})
}

export const useAnalytics = () => {
  const router = useRouter()

  const preferences = useState<CookiePreferences>('analytics:preferences', () => ({
    ...DEFAULT_PREFERENCES
  }))

  const isConsentResolved = useState('analytics:consent-resolved', () => false)

  const loadStoredPreferences = () => {
    if (import.meta.server) return

    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      isConsentResolved.value = false
      return
    }

    try {
      const parsed = JSON.parse(raw) as { preferences?: Partial<CookiePreferences> }

      if (parsed.preferences) {
        preferences.value = {
          necessary: true,
          analytics: Boolean(parsed.preferences.analytics),
          advertising: Boolean(parsed.preferences.advertising),
          functionality: Boolean(parsed.preferences.functionality)
        }
        isConsentResolved.value = true
      } else {
        isConsentResolved.value = false
      }
    } catch {
      isConsentResolved.value = false
    }
  }

  const persistPreferences = (prefs: CookiePreferences) => {
    if (import.meta.server) return

    preferences.value = prefs
    isConsentResolved.value = true

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString()
    }))
  }

  const trackPageView = (path?: string) => {
    if (import.meta.server || !preferences.value.analytics) return

    const currentPath = path || router.currentRoute.value.fullPath

    sendToGA('page_view', {
      page_title: document.title,
      page_location: new URL(currentPath, window.location.origin).href,
      page_path: currentPath
    })
  }

  const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
    if (import.meta.server || !preferences.value.analytics) return

    sendToGA(eventName, params)
  }

  const acceptAnalytics = () => {
    const next: CookiePreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
      functionality: true
    }

    persistPreferences(next)
    trackPageView()
  }

  const rejectAnalytics = () => {
    const next: CookiePreferences = {
      necessary: true,
      analytics: false,
      advertising: false,
      functionality: false
    }

    persistPreferences(next)
  }

  const initialize = () => {
    if (import.meta.server) return

    loadStoredPreferences()

    if (isConsentResolved.value && preferences.value.analytics) {
      trackPageView()
    }

    router.afterEach((to, from) => {
      if (to.fullPath === from.fullPath) return
      trackPageView(to.fullPath)
    })
  }

  const trackOutboundClick = (toolName: string, location: string, url: string) => {
    if (import.meta.server || !preferences.value.analytics) return

    sendToGA('outbound_click', {
      tool_name: toolName,
      click_location: location,
      destination_url: url
    })
  }

  return {
    preferences,
    isConsentResolved,
    acceptAnalytics,
    rejectAnalytics,
    trackPageView,
    trackEvent,
    trackOutboundClick,
    initialize
  }
}