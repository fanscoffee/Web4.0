import type { Metadata } from 'next'
import Link from 'next/link'
import CookieSettingsButton from '@/components/CookieSettingsButton'

export const metadata: Metadata = {
  title: 'Política de Cookies | Fans Coffee Bakery',
  description:
    'Información sobre las cookies y servicios de terceros utilizados por Fans Coffee Bakery.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/cookies'
  },
  robots: {
    index: false,
    follow: true
  }
}

export default function Cookies() {
  return (
    <main className='brand-page brand-prose'>
      <h1>POLÍTICA DE COOKIES</h1>
      <p className='my-4'>
        Última actualización: 9 de noviembre de 2026. Esta política explica qué
        tecnologías utilizamos en <strong>www.fanscoffee.es</strong> y cómo
        puedes rechazarlas o cambiar tu decisión.
      </p>

      <h2>1. Responsable</h2>
      <p>
        El responsable es <strong>FANS COFFEE FRIENDS S.L.L.</strong>, CIF
        B88349394, con domicilio en C/ Doctor Esquerdo 180, 28007 Madrid. Puedes
        contactar en{' '}
        <a href='mailto:fanscoffee22@gmail.com'>fanscoffee22@gmail.com</a>.
      </p>

      <h2>2. Qué utilizamos actualmente</h2>
      <p>
        No utilizamos cookies de analítica, publicidad, perfiles comerciales ni
        redes sociales incrustadas. La web utiliza únicamente:
      </p>
      <ul>
        <li className='my-2 list-disc'>
          <strong>fans_cookie_consent</strong>: cookie propia y necesaria para
          recordar si has aceptado o rechazado las cookies no necesarias. Dura
          12 meses y no se usa para identificarte ni para publicidad.
        </li>
        <li className='my-2 list-disc'>
          <strong>Google Maps</strong>: el mapa de ubicación se bloquea por
          defecto y solo se carga después de aceptar las cookies no necesarias.
          Al activarlo, Google puede realizar solicitudes y utilizar sus propias
          cookies y tecnologías. Consulta la{' '}
          <a
            href='https://policies.google.com/privacy?hl=es'
            target='_blank'
            rel='noopener noreferrer'
          >
            política de privacidad de Google
          </a>{' '}
          antes de aceptarlo.
        </li>
      </ul>

      <h2>3. Cómo gestionar o retirar el consentimiento</h2>
      <p>
        En el banner inicial, «Aceptar no necesarias» y «Rechazar no necesarias»
        tienen la misma facilidad de uso. Si ya elegiste una opción, puedes
        cambiarla en cualquier momento con el enlace{' '}
        <strong>«Configurar cookies»</strong> del pie de página. También puedes
        borrar la cookie desde la configuración de tu navegador; el banner
        volverá a aparecer.
      </p>
      <div className='my-8 text-center'>
        <CookieSettingsButton />
      </div>

      <h2>4. Más información</h2>
      <p>
        Para saber cómo tratamos los datos personales y cómo solicitar su
        supresión, consulta nuestra{' '}
        <Link href='/privacy'>Política de Privacidad</Link>. Esta política se
        actualizará si incorporamos nuevas cookies o servicios.
      </p>
    </main>
  )
}
