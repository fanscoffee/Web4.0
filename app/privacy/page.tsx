import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Fans Coffee Bakery',
  description:
    'Política de privacidad de Fans Coffee Bakery. Protección de datos personales y cookies. FANS COFFEE FRIENDS, S.L.L. Madrid.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/privacy'
  },
  openGraph: {
    title: 'Política de Privacidad | Fans Coffee Bakery',
    description:
      'Política de privacidad y protección de datos de Fans Coffee Bakery.',
    url: 'https://www.fanscoffee.es/privacy',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  },
  robots: {
    index: false,
    follow: true
  }
}

function Privacy() {
  return (
    <main className='brand-page brand-prose'>
      <h1>POLITICAS DE PRIVACIDAD</h1>
      <p className='my-4'>
        Fans Coffee reconoce la necesidad de proteger toda la información
        considerada personal y privada, y requiere como una cuestión de política
        que cualquier y toda la información enviada en línea, tales como nombre,
        empresa, correo electrónico, teléfono, etc. sea utilizada únicamente con
        el propósito expreso de responder a su consulta. Toda la información
        personal es confidencial y sólo se comparte con su consentimiento
        expreso. No es nuestra política enviar no solicitados, y todos los
        usuarios pueden darse de baja de nuestra lista de correo electrónico en
        cualquier momento.
      </p>
      <p className='my-4'>
        Adicionalmente, es política de Fans Coffee prohibir la venta y/o
        cualquier otra distribución de información personal a terceras empresas,
        y Fans Coffee hará cumplir todos los acuerdos de privacidad para
        proteger la información de nuestros clientes.
      </p>
      <p className='my-4'>
        Fans Coffee se compromete a proteger su privacidad y todas las personas
        con cualquier preocupación o pregunta sobre la privacidad se les pide
        que se pongan en contacto con Fans Coffee para una mayor aclaración.
      </p>
      <div className='my-8 text-center'>
        <Link href='/contact' className='brand-button'>
          CONTACTO
        </Link>
      </div>
    </main>
  )
}

export default Privacy
