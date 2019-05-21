export const openTwitterModal = () => {
  return window.open(
    'https://twitter.com/intent/tweet?url=https://there.team&text=I%27m%20on%20the%20waitlist%20of%20%40ThereHQ!%20%E2%98%BA%EF%B8%8F%20Makes%20remote%20work%20smoother',
    'Twitter',
    'width=600,height=300'
  )
}
