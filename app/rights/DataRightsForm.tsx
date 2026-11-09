'use client'

import { useState } from 'react'
import Link from 'next/link'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function DataRightsForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function submitRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const emailjs = await import('emailjs-com')
    const service = process.env.NEXT_PUBLIC_EMAIL_SERVICE || ''
    const template =
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_RIGHTS ||
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE ||
      ''
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_USER || ''

    if (!service || !template || !publicKey) {
      setStatus('error')
      return
    }

    try {
      await emailjs.sendForm(service, template, e.currentTarget, publicKey)
      e.currentTarget.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submitRequest} className='brand-panel p-5 sm:p-8'>
      <input type='hidden' name='tipo' value='Solicitud de derechos RGPD' />
      <div>
        <label htmlFor='rightsType' className='block text-sm font-bold'>
          Solicitud
          <select
            id='rightsType'
            name='request_type'
            className='brand-input mt-2'
            defaultValue='supresión'
            required
          >
            <option value='supresión'>Supresión de datos</option>
            <option value='acceso'>Acceso a mis datos</option>
            <option value='rectificación'>Rectificación</option>
            <option value='oposición'>Oposición</option>
            <option value='limitación'>Limitación</option>
            <option value='portabilidad'>Portabilidad</option>
            <option value='retirada'>Retirar consentimiento</option>
          </select>
        </label>
      </div>

      <div className='mt-5'>
        <label htmlFor='rightsName' className='block text-sm font-bold'>
          Nombre (opcional)
          <input
            type='text'
            id='rightsName'
            name='nombre'
            className='brand-input mt-2'
            autoComplete='name'
            placeholder='Nombre'
          />
        </label>
      </div>

      <div className='mt-5'>
        <label htmlFor='rightsEmail' className='block text-sm font-bold'>
          Email para responderte
          <input
            type='email'
            id='rightsEmail'
            name='email'
            className='brand-input mt-2'
            autoComplete='email'
            placeholder='Email'
            required
          />
        </label>
      </div>

      <div className='mt-5'>
        <label htmlFor='rightsMessage' className='block text-sm font-bold'>
          Detalles de la solicitud
          <textarea
            id='rightsMessage'
            name='mensaje'
            className='brand-input mt-2 min-h-32'
            rows={4}
            placeholder='Indica qué datos o tratamiento quieres que revisemos'
            required
          />
        </label>
      </div>

      <div className='mt-6 text-sm leading-6 text-brand-burgundy/75'>
        <input
          type='checkbox'
          id='rightsConsent'
          name='privacy_consent'
          value='1'
          className='mr-2 h-4 w-4 accent-brand-olive'
          required
        />
        <label htmlFor='rightsConsent'>
          He leído la <Link href='/privacy'>Política de privacidad</Link> y
          consiento el tratamiento de estos datos para tramitar mi solicitud.
          Esta casilla no está preseleccionada.
        </label>
      </div>

      <p className='mt-4 text-xs leading-5 text-brand-burgundy/65'>
        No envíes una copia de tu DNI en este formulario. Solo podremos pedir
        una verificación adicional si resulta necesaria y proporcional.
      </p>

      <button
        type='submit'
        className='brand-button mt-6'
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'ENVIANDO…' : 'ENVIAR SOLICITUD'}
      </button>

      {status === 'success' && (
        <p className='mt-4 text-sm font-bold text-brand-olive' role='status'>
          Hemos recibido tu solicitud. Te responderemos, como regla general, en
          el plazo máximo de un mes.
        </p>
      )}
      {status === 'error' && (
        <p className='mt-4 text-sm font-bold text-brand-error' role='alert'>
          No se ha podido enviar. Escribe a{' '}
          <a href='mailto:fanscoffee22@gmail.com'>fanscoffee22@gmail.com</a> con
          el mismo detalle.
        </p>
      )}
    </form>
  )
}
