'use client'

import { useState } from 'react'
import 'react-phone-number-input/style.css'
import Swal from 'sweetalert2'
import Link from 'next/link'

export default function Contact() {
  const [Check, setCheck] = useState(false)

  async function sendReview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const body = {
      score: Number(formData.get('puntos')),
      client_name: formData.get('nombre'),
      client_email: formData.get('email'),
      invoice: formData.get('factura'),
      waitress: formData.get('camarera'),
      comment: formData.get('mensaje')
    }

    try {
      const res = await fetch('https://back-seven-livid.vercel.app/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (!res.ok) throw new Error('Error en el servidor')

      Swal.fire({
        title: 'Confirmado',
        text: 'Hemos recibido tu reseña, revisaremos la información y estaremos en contacto pronto.',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true
      })

      form.reset()
    } catch (error) {
      console.error(error)
      Swal.fire({
        title: 'Error',
        text: 'No hemos podido enviar tu reseña, comunícate a nuestro número de soporte.',
        icon: 'error',
        timer: 3000,
        timerProgressBar: true
      })
    }
  }

  const check = () => {
    const agree = document.querySelector(
      '#contactFormAgree'
    ) as HTMLInputElement | null
    setCheck(agree?.checked || false)
  }

  const showAlert = () => {
    if (!Check) {
      Swal.fire({
        title: 'Espera',
        text: 'Tienes que terminar de rellenar la información.',
        icon: 'info',
        timer: 3000,
        timerProgressBar: true
      })
    }
  }

  return (
    <div className='mx-auto mb-5 mt-[5rem] max-w-[1200px] lg:mt-[6rem]'>
      <form
        onSubmit={sendReview}
        className='mx-6 py-10 text-center md:text-left'
      >
        <div className='mb-3'>
          <h3 className='mt-6 text-xl font-extrabold'>Reseña</h3>

          <div className='mb-3'>
            <label htmlFor='puntos' className='text-md my-2 block font-medium'>
              Puntuación
              <input
                type='number'
                max={5}
                min={0}
                name='puntos'
                className='focus:shadow-outline w-full rounded border p-1 leading-tight shadow focus:outline-none'
                id='puntos'
                autoComplete='off'
                placeholder='0 - 5'
                required
              />
            </label>
          </div>
          <div className='mb-3'>
            <label htmlFor='nombre' className='text-md my-2 block font-medium'>
              Ingresa tu nombre
              <input
                type='text'
                name='nombre'
                className='focus:shadow-outline w-full rounded border p-1 leading-tight shadow focus:outline-none'
                id='nombre'
                autoComplete='off'
                placeholder='Nombre'
                required
              />
            </label>
          </div>

          <label htmlFor='email' className='text-md my-2 block font-medium'>
            Ingresa tu correo electrónico
            <input
              type='email'
              className='focus:shadow-outline w-full rounded border p-1 leading-tight shadow focus:outline-none'
              id='email'
              aria-describedby='emailHelp'
              name='email'
              autoComplete='off'
              placeholder='Email'
              required
            />
          </label>
        </div>
        <div className='mb-3'>
          <label htmlFor='factura' className='text-md my-2 block font-medium'>
            Número de factura
            <input
              type='number'
              name='factura'
              className='focus:shadow-outline w-full rounded border p-1 leading-tight shadow focus:outline-none'
              id='factura'
              autoComplete='off'
              placeholder='Factura'
              required
            />
          </label>
        </div>
        <div className='mb 3'>
          <label htmlFor='camarera' className='text-md my-2 block font-medium'>
            Camarera
          </label>
          <select
            name='camarera'
            id='camarera'
            defaultChecked
            className='focus:shadow-outline w-full rounded border py-1 leading-tight shadow focus:outline-none'
          >
            <option value='elije'>Elije quien te atendió</option>
            <option value='Karen'>Karen</option>
            <option value='Daniela'>Daniela</option>
            <option value='Yesenia'>Yesenia</option>
            <option value='Maria'>Maria</option>
            <option value='Yina'>Yina</option>
            <option value='Maru'>Maru</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='mensaje' className='text-md my-2 block font-medium'>
            Comentario
            <textarea
              className='focus:shadow-outline w-full rounded border p-1 leading-tight shadow focus:outline-none'
              autoComplete='off'
              id='mensaje'
              name='mensaje'
              rows={3}
              placeholder='Comentario'
              required
            />
          </label>
        </div>

        <div className='mb-3'>
          <input
            type='checkbox'
            value='1'
            className='text-md indeterminate:bg-gray-300 mx-1 my-2 font-medium default:ring-2 checked:bg-blue-500'
            id='contactFormAgree'
            onChange={check}
            required
          />
          <label className='mx-1' htmlFor='contactFormAgree'>
            Doy mi consentimiento para el tratamiento de los datos personales
            que facilito. He leído y acepto la{' '}
            <Link
              href='/privacy'
              className='text-green hover:text-dark-green dark:text-green'
            >
              Política de privacidad
            </Link>
            .
          </label>
        </div>

        <button
          type='submit'
          className='font-small hover:text-md rounded-full bg-green px-8 py-4 text-sm text-white transition-all hover:bg-dark-green hover:font-medium'
          onClick={showAlert}
        >
          ENVIAR
        </button>
      </form>
    </div>
  )
}
