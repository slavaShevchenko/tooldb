export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const { show, hide } = usePageCurtain()

  const DURATION = 300

  // Last resort: a page that never reports a finished render must not leave the
  // curtain covering the whole app.
  const MAX_COVER = 3000

  let initialized = false
  let covered = false
  let watchdog: ReturnType<typeof setTimeout> | undefined

  const uncover = () => {
    if (!covered) {
      return
    }

    covered = false
    clearTimeout(watchdog)
    hide()
  }

  nuxtApp.hook('app:mounted', () => {
    hide()
    initialized = true
  })

  router.beforeEach(async (to, from) => {
    if (!initialized) {
      return
    }

    if (to.fullPath === from.fullPath) {
      return
    }

    covered = true
    clearTimeout(watchdog)
    watchdog = setTimeout(uncover, MAX_COVER)
    show()

    await new Promise(resolve =>
      setTimeout(resolve, DURATION),
    )
  })

  // router.afterEach fires when the route changes, not when the new page is on screen:
  // a page with a top-level await (tool pages resolve their rating) keeps the previous
  // page mounted while Suspense is pending, so the curtain used to lift over the old page.
  nuxtApp.hook('page:finish', uncover)

  // Query-only changes (?page=2) re-render the same page in place. The Suspense key is
  // the route path, so page:finish never fires for them.
  router.afterEach((to, from, failure) => {
    if (failure || to.path === from.path) {
      uncover()
    }
  })

  nuxtApp.hook('app:error', uncover)
  nuxtApp.hook('vue:error', uncover)
  router.onError(uncover)
})
