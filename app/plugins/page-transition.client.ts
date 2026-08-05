export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const { show, hide } = usePageCurtain()

  const DURATION = 300
  let initialized = false

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

    show()

    await new Promise(resolve =>
      setTimeout(resolve, DURATION),
    )
  })

  router.afterEach((to, from) => {
    if (!initialized) {
      return
    }

    if (to.fullPath === from.fullPath) {
      return
    }

    hide()
  })
})