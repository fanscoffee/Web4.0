import type { Metadata } from 'next'
import DataRightsForm from './DataRightsForm'

export const metadata: Metadata = {
  title: 'Ejercer derechos sobre tus datos | Fans Coffee Bakery',
  description:
    'Solicita acceso, rectificación, supresión u otros derechos sobre tus datos personales en Fans Coffee Bakery.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/rights'
  },
  robots: {
    index: false,
    follow: true
  }
}

export default function Rights() {
  return (
    <main className='brand-page min-h-screen pb-16 pt-[4.75rem] md:pt-[5.75rem]'>
      <div className='brand-container grid gap-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:py-20'>
        <section className='brand-panel-dark p-5 sm:p-8'>
          <p className='brand-eyebrow text-brand-pink'>Tus derechos</p>
          <h1 className='mt-3 text-4xl leading-none text-brand-pink'>
            CONTROL SOBRE TUS DATOS
          </h1>
          <p className='mt-5 leading-7 text-brand-cream/75'>
            Puedes pedir acceso, rectificación, supresión, oposición,
            limitación, portabilidad o retirar tu consentimiento. Las
            solicitudes se revisan de forma manual y se elimina la información
            cuando ya no existe una obligación legal para conservarla.
          </p>
          <p className='mt-5 leading-7 text-brand-cream/75'>
            Si solo quieres borrar una reseña o un mensaje de contacto, indícalo
            claramente para que podamos localizarlo y eliminarlo en los sistemas
            y proveedores correspondientes.
          </p>
        </section>
        <DataRightsForm />
      </div>
    </main>
  )
}
