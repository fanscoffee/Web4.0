export const COOKIE_CONSENT_COOKIE = 'fans_cookie_consent'
export const COOKIE_CONSENT_EVENT = 'fans:cookie-consent'
export const COOKIE_SETTINGS_EVENT = 'fans:open-cookie-settings'

export type CookieConsentValue = 'accepted' | 'rejected'

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof document === 'undefined') return null

  const value = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith(`${COOKIE_CONSENT_COOKIE}=`))
    ?.split('=')[1]

  return value === 'accepted' || value === 'rejected' ? value : null
}

export function saveCookieConsent(value: CookieConsentValue) {
  if (typeof document === 'undefined') return

  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${COOKIE_CONSENT_COOKIE}=${value}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: { value } })
  )
}

export function openCookieSettings() {
  if (typeof window === 'undefined') return

  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))
}
