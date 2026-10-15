import { vTrackClick } from '~/directives/vTrackClick'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('track-click', vTrackClick)
})