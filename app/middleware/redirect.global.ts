export default defineNuxtRouteMiddleware((to) => {
  // Не обрабатывай системные маршруты
  if (to.path === '/sitemap.xml' || to.path.startsWith('/api/') || to.path.startsWith('/__')) return

  if (import.meta.server) {
    const event = useRequestEvent()
    const host = event?.node.req.headers.host || ''

    // Редирект с www на без www
    if (host.startsWith('www.')) {
      const newHost = host.replace('www.', '')
      const protocol = event?.node.req.headers['x-forwarded-proto'] || 'https'
      const url = `${protocol}://${newHost}${to.fullPath}`

      return navigateTo(url, { redirectCode: 301 })
    }

    // Редирект с http на https (если не localhost)
    const protocol = event?.node.req.headers['x-forwarded-proto'] || 'http'
    if (protocol === 'http' && !host.includes('localhost')) {
      const url = `https://${host}${to.fullPath}`
      return navigateTo(url, { redirectCode: 301 })
    }
  }
})