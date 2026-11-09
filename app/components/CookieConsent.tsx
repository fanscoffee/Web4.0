'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_SETTINGS_EVENT,
  getCookieConsent,
  saveCookieConsent,
  type CookieConsentValue
} from './cookieConsentUtils'

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const currentChoice = getCookieConsent()
    setIsOpen(currentChoice === null)
    setMounted(true)

    const handleSettings = () => setIsOpen(true)
    const handleConsent = (event: Event) => {
      const value = (event as CustomEvent<{ value: CookieConsentValue }>).detail
        ?.value

      if (value) {
        setIsOpen(false)
      }
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, handleSettings)
    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsent)

    return () => {
      window.removeEventListener(COOKIE_SETTINGS_EVENT, handleSettings)
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsent)
    }
  }, [])

  function handleChoice(value: CookieConsentValue) {
    saveCookieConsent(value)
    setIsOpen(false)
  }

  if (!mounted || !isOpen) return null

  return (
    <aside
      className='cookie-consent'
      role='dialog'
      aria-modal='false'
      aria-labelledby='cookie-consent-title'
      aria-describedby='cookie-consent-description'
    >
      <div className='cookie-consent__content'>
        <p className='brand-eyebrow'>Privacidad y cookies</p>
        <h2 id='cookie-consent-title' className='mt-2 text-2xl'>
          Tú eliges
        </h2>
        <p
          id='cookie-consent-description'
          className='mt-2 text-sm leading-6 text-brand-burgundy/80'
        >
          Solo usamos una cookie necesaria para recordar tu decisión. El mapa de
          Google solo se carga si aceptas las cookies no necesarias. Puedes
          cambiar de opinión desde «Configurar cookies».
        </p>
        <div className='cookie-consent__actions'>
          <button
            type='button'
            className='cookie-consent__button cookie-consent__button--secondary'
            onClick={() => handleChoice('rejected')}
          >
            Rechazar no necesarias
          </button>
          <button
            type='button'
            className='cookie-consent__button cookie-consent__button--primary'
            onClick={() => handleChoice('accepted')}
          >
            Aceptar no necesarias
          </button>
        </div>
        <Link href='/cookies' className='cookie-consent__link'>
          Leer la política de cookies
        </Link>
      </div>
    </aside>
  )
}
