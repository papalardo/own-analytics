export const createBaseMetadata = () => ({
  type: 'PAGE_VIEW',
  targetId: '',
  originUserId: '',
  platform: navigator.platform,
  domain:  window.location.hostname.replace("www.", ""),
  path: window.location.pathname,
  referrer: 'referrer',
  userAgent: navigator.userAgent,
  screenWidth: screen.width,
  onlineTime: 0,
})