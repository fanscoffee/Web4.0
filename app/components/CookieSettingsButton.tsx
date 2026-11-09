'use client'

import { openCookieSettings } from './cookieConsentUtils'

export default function CookieSettingsButton() {
  return (
    <button type='button' className='brand-button' onClick={openCookieSettings}>
      CONFIGURAR COOKIES
    </button>
  )
}
