'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ConsentAwareMap from '@/components/ConsentAwareMap'

const PhoneInputComponent = dynamic(() => import('react-phone-number-input'), {
  ssr: false,
  loading: () => <div className='phone-input-horizontal' />
})

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [value, setValue] = useState<string | undefined>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!agreed) {
      const Swal = (await import('sweetalert2')).default
      Swal.fire({
        title: 'Espera',
        text: 'Tienes que terminar de rellenar la información.',
        icon: 'info',
        timer: 3000,
        timerProgressBar: true
      })
      return
    }

    const emailjs = await import('emailjs-com')
    const Swal = (await import('sweetalert2')).default

    const emailService = process.env.NEXT_PUBLIC_EMAIL_SERVICE || ''
    const emailTemplate = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || ''
    const emailUser = process.env.NEXT_PUBLIC_EMAIL_USER || ''

    emailjs
      .sendForm(
        emailService,
        emailTemplate,
        e.target as HTMLFormElement,
        emailUser
      )
      .then(
        result => {
          Swal.fire({
            title: 'Confirmado',
            text: 'Hemos recibido tu mensaje, revisaremos la información y estaremos en contacto pronto.',
            icon: 'success',
            timer: 3000,
            timerProgressBar: true
          })
          ;(e.target as HTMLFormElement).reset()
          setAgreed(false)
          setValue(undefined)
        },
        error => {
          Swal.fire({
            title: 'Error',
            text: 'No hemos podido enviar tu mail, comunícate a nuestro número de soporte.',
            icon: 'error',
            timer: 3000,
            timerProgressBar: true
          })
        }
      )
  }

  return (
    <main className='brand-page min-h-screen pb-16 pt-[4.75rem] md:pt-[5.75rem]'>
      <div className='brand-container grid gap-6 py-12 md:grid-cols-2 md:py-20'>
        <form onSubmit={sendEmail} className='brand-panel p-5 sm:p-8'>
          <div className='mb-3'>
            <p className='brand-eyebrow'>Hablemos</p>
            <h1 className='mt-3 text-4xl leading-none text-brand-burgundy'>
              FORMULARIO DE CONTACTO
            </h1>
            <div className='mb-3'>
              <label htmlFor='tipo' className='mt-5 block text-sm font-bold'>
                Tipo
                <select
                  name='tipo'
                  id='tipo'
                  defaultValue='consulta'
                  className='brand-input mt-2'
                >
                  <option value='consulta'>Consulta</option>
                  <option value='reserva'>Reserva</option>
                </select>
              </label>
            </div>
            <div className='mb-3'>
              <label htmlFor='nombre' className='mt-5 block text-sm font-bold'>
                Ingresa tu nombre
                <input
                  type='text'
                  name='nombre'
                  className='brand-input mt-2'
                  id='nombre'
                  autoComplete='name'
                  placeholder='Nombre'
                  required
                />
              </label>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='telefono'
                className='mt-5 block text-sm font-bold'
              >
                Móvil (opcional; solo para contactar contigo por teléfono)
                <div className='mt-1'>
                  {mounted ? (
                    <PhoneInputComponent
                      international
                      id='telefono'
                      defaultCountry='ES'
                      value={value}
                      onChange={setValue}
                      className='phone-input-horizontal'
                    />
                  ) : (
                    <div className='phone-input-horizontal' />
                  )}
                </div>
                <input type='hidden' name='telefono' value={value || ''} />
              </label>
            </div>
            <label htmlFor='email' className='mt-5 block text-sm font-bold'>
              Ingresa tu correo electrónico
              <input
                type='email'
                className='brand-input mt-2'
                id='email'
                aria-describedby='emailHelp'
                name='email'
                autoComplete='email'
                placeholder='Email'
                required
              />
            </label>
          </div>
          <div className='mb-3 mt-5'>
            <label htmlFor='mensaje' className='block text-sm font-bold'>
              ¿Podrías proporcionarnos más información al respecto?
              <textarea
                className='brand-input mt-2 min-h-32'
                id='mensaje'
                name='mensaje'
                rows={3}
                placeholder='Información'
                required
              />
            </label>
          </div>

          <div className='mb-3 mt-6 text-sm leading-6 text-brand-burgundy/75'>
            <input
              type='checkbox'
              name='privacy_consent'
              value='1'
              className='mr-2 h-4 w-4 accent-brand-olive'
              id='contactFormAgree'
              onChange={e => setAgreed(e.target.checked)}
              required
            />
            <label className='mx-1' htmlFor='contactFormAgree'>
              He leído la{' '}
              <Link
                href='/privacy'
                className='font-bold text-brand-olive underline decoration-brand-pink decoration-2 underline-offset-4'
              >
                Política de privacidad
              </Link>{' '}
              y consiento el tratamiento de los datos que facilito para
              gestionar mi consulta. Esta casilla no está preseleccionada.
            </label>
          </div>

          <p className='mt-4 text-xs leading-5 text-brand-burgundy/65'>
            Responsable: FANS COFFEE FRIENDS S.L.L. Finalidad: responder a tu
            consulta. El envío utiliza EmailJS como proveedor tecnológico. No
            incorporamos tu email a una lista comercial.
          </p>

          <button type='submit' className='brand-button mt-3'>
            ENVIAR
          </button>
        </form>

        <div className='brand-panel-dark p-5 sm:p-8'>
          <p className='brand-eyebrow text-brand-pink'>Estamos aquí</p>
          <h2 className='mt-3 text-4xl leading-none text-brand-pink'>
            INFORMACIÓN DE CONTACTO
          </h2>
          <p className='mt-5 leading-7 text-brand-cream/75'>
            Si deseas contactar con nosotros, puedes hacerlo de las formas
            habituales.
          </p>
          <p className='my-4 border-y border-brand-pink/25 py-4'>
            <strong>Teléfono:</strong>
            <a
              className='ml-2 text-brand-pink underline'
              href='tel:+34628984413'
              rel='noopener noreferrer'
            >
              (+34) 628 984 413
            </a>
          </p>
          <ConsentAwareMap height={300} className='my-4' />
        </div>
      </div>
    </main>
  )
}
