'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ReviewForm() {
  const [agreed, setAgreed] = useState(false)

  async function sendReview(e: React.FormEvent<HTMLFormElement>) {
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

    const Swal = (await import('sweetalert2')).default

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const body = {
      score: Number(formData.get('puntos')),
      client_name: formData.get('nombre'),
      invoice: formData.get('factura'),
      waitress: formData.get('camarera'),
      comment: formData.get('mensaje'),
      privacy_consent: true,
      privacy_consent_at: new Date().toISOString()
    }

    const reviewApiUrl =
      process.env.NEXT_PUBLIC_REVIEW_API_URL ||
      'https://back-seven-livid.vercel.app/reviews'

    try {
      const res = await fetch(reviewApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (!res.ok) throw new Error('Error en el servidor')

      Swal.fire({
        title: 'Confirmado',
        text: 'Hemos recibido tu reseña. Gracias por compartirla.',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true
      })

      form.reset()
      setAgreed(false)
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No hemos podido enviar tu reseña, comunícate a nuestro número de soporte.',
        icon: 'error',
        timer: 3000,
        timerProgressBar: true
      })
    }
  }

  return (
    <main className='brand-page min-h-screen pb-16 pt-[4.75rem] md:pt-[5.75rem]'>
      <form
        onSubmit={sendReview}
        className='brand-container brand-panel my-12 max-w-2xl p-5 sm:p-8 md:my-20'
      >
        <div className='mb-3'>
          <p className='brand-eyebrow'>Tu opinión cuenta</p>
          <h1 className='mt-3 text-5xl leading-none text-brand-burgundy'>
            Reseña
          </h1>

          <div className='mb-3'>
            <label htmlFor='puntos' className='mt-5 block text-sm font-bold'>
              Puntuación
              <input
                type='number'
                max={5}
                min={0}
                name='puntos'
                className='brand-input mt-2'
                id='puntos'
                placeholder='0 - 5'
                required
              />
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
        </div>
        <div className='mb-3 mt-5'>
          <label htmlFor='factura' className='block text-sm font-bold'>
            Número de factura (opcional; solo para validar la visita)
            <input
              type='text'
              inputMode='numeric'
              name='factura'
              className='brand-input mt-2'
              id='factura'
              placeholder='Factura'
            />
          </label>
        </div>
        <div className='mb-3 mt-5'>
          <label htmlFor='camarera' className='block text-sm font-bold'>
            Camarera
          </label>
          <select
            name='camarera'
            id='camarera'
            defaultValue=''
            className='brand-input mt-2'
          >
            <option value=''>No lo recuerdo / prefiero no indicarlo</option>
            <option value='Karen'>Karen</option>
            <option value='Daniela'>Daniela</option>
            <option value='Yesenia'>Yesenia</option>
            <option value='Maria'>Maria</option>
            <option value='Yina'>Yina</option>
            <option value='Maru'>Maru</option>
          </select>
        </div>
        <div className='mb-3 mt-5'>
          <label htmlFor='mensaje' className='block text-sm font-bold'>
            Comentario
            <textarea
              className='brand-input mt-2 min-h-32'
              id='mensaje'
              name='mensaje'
              rows={3}
              placeholder='Comentario'
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
            id='reviewFormAgree'
            onChange={e => setAgreed(e.target.checked)}
            required
          />
          <label className='mx-1' htmlFor='reviewFormAgree'>
            He leído la{' '}
            <Link
              href='/privacy'
              className='font-bold text-brand-olive underline decoration-brand-pink decoration-2 underline-offset-4'
            >
              Política de privacidad
            </Link>{' '}
            y consiento el tratamiento de los datos que facilito para gestionar
            y revisar mi opinión. Esta casilla no está preseleccionada.
          </label>
        </div>

        <p className='mt-4 text-xs leading-5 text-brand-burgundy/65'>
          Responsable: FANS COFFEE FRIENDS S.L.L. La reseña se envía al servicio
          externo de reseñas configurado por el responsable. No pedimos ni
          utilizamos tu email para este trámite.
        </p>

        <button type='submit' className='brand-button mt-3'>
          ENVIAR
        </button>
      </form>
    </main>
  )
}
