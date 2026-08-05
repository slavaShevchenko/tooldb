export const usePageCurtain = () => {
  const DURATION = 300

  const isClosing = useState('page-curtain-closing', () => true)
  const isOpening = useState('page-curtain-opening', () => false)

  const show = () => {
    isOpening.value = false
    isClosing.value = true
  }

  const hide = () => {
    isClosing.value = false
    isOpening.value = true

    setTimeout(() => {
      isOpening.value = false
    }, DURATION)
  }

  return {
    isClosing,
    isOpening,
    show,
    hide,
  }
}