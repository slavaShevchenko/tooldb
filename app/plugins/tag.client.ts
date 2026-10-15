export default defineNuxtPlugin(() => {
  const { initialize } = useAnalytics()

  initialize()
})