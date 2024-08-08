// components/Footer.jsx
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 px-4 py-8'>
      <div className='container mx-auto flex flex-col justify-between md:flex-row'>
        {/* Logo y Descripción */}
        <div className='mb-8 md:mb-0'>
          <h2 className='text-3xl font-bold'>Fans Coffee Bakery</h2>
          <p className='mt-4 text-sm'>
            En FANS, somos FANS de ti y de cada momento dulce.
          </p>
          <div className='mt-4 flex space-x-4'>
            <a href='#' aria-label='Facebook' className='text-gray-300 hover:'>
              Facebook
            </a>
            <a href='#' aria-label='Instagram' className='text-gray-300 hover:'>
              Instagram
            </a>
          </div>
        </div>

        {/* Feed de Instagram */}
        <div className='mb-8 md:mb-0'>
          <h3 className='mb-4 font-semibold'>Instagram Feed</h3>
          <div className='grid grid-cols-3 gap-2'>
            <img
              src='https://via.placeholder.com/100'
              alt='Post 1'
              className='h-auto w-full'
            />
            <img
              src='https://via.placeholder.com/100'
              alt='Post 2'
              className='h-auto w-full'
            />
            <img
              src='https://via.placeholder.com/100'
              alt='Post 3'
              className='h-auto w-full'
            />
            <img
              src='https://via.placeholder.com/100'
              alt='Post 4'
              className='h-auto w-full'
            />
            <img
              src='https://via.placeholder.com/100'
              alt='Post 5'
              className='h-auto w-full'
            />
            <img
              src='https://via.placeholder.com/100'
              alt='Post 6'
              className='h-auto w-full'
            />
          </div>
        </div>

        <div className='mx-auto text-center md:mx-3 md:mt-10'>
          <iframe
            title='google'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses'
            style={{ border: 0, borderRadius: 10 }}
            loading='lazy'
          />
        </div>
      </div>
      <div className='text-gray-500 mt-8 text-center'>
        &copy; 2023 FANS COFFEE FRIENDS S.L.L. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
