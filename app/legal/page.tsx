import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal | Fans Coffee Bakery',
  description:
    'Aviso legal, información de la empresa y condiciones de uso de Fans Coffee Bakery.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/legal'
  },
  robots: {
    index: false,
    follow: true
  }
}

export default function Legal() {
  return (
    <main className='brand-page brand-prose'>
      <h1>AVISO LEGAL</h1>
      <p className='my-4'>
        Última actualización: 9 de noviembre de 2026. Este aviso regula el uso
        de <strong>www.fanscoffee.es</strong> y cumple las obligaciones de
        información aplicables a la sociedad titular del sitio.
      </p>

      <h2>1. Datos de la titular</h2>
      <p>
        <strong>FANS COFFEE FRIENDS S.L.L.</strong>
        <br />
        CIF: <strong>B88349394</strong>
        <br />
        Domicilio: C/ Doctor Esquerdo 180, 28007 Madrid, España
        <br />
        Email:{' '}
        <a href='mailto:fanscoffee22@gmail.com'>fanscoffee22@gmail.com</a>
        <br />
        Teléfono: <a href='tel:+34628984413'>+34 628 984 413</a>
      </p>

      <h2>2. Objeto de la web</h2>
      <p>
        La web informa sobre la cafetería, sus productos, servicios, ubicación y
        formas de contacto. Salvo que se indique expresamente lo contrario, el
        catálogo no constituye por sí mismo una oferta de contratación ni
        permite realizar pagos o compras online.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El usuario debe utilizar la web de forma lícita, respetuosa y conforme a
        este aviso. No está permitido introducir contenidos maliciosos, intentar
        acceder sin autorización a sistemas ajenos o utilizar la información de
        la web para enviar comunicaciones comerciales no solicitadas.
      </p>
      <p>
        La titular procura que la información sea correcta y esté actualizada,
        pero puede contener errores, cambios de disponibilidad o modificaciones
        de horarios y precios. La información vigente en el establecimiento será
        la aplicable cuando corresponda.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, marcas, logotipos, fotografías, diseños y demás contenidos
        de esta web pertenecen a FANS COFFEE FRIENDS S.L.L. o se utilizan con la
        autorización correspondiente. No se permite su reproducción,
        distribución o transformación sin autorización, salvo los usos
        permitidos por la ley.
      </p>

      <h2>5. Enlaces y servicios de terceros</h2>
      <p>
        La web puede enlazar a Instagram, WhatsApp, Google Maps, EmailJS u otros
        servicios externos. Instagram y WhatsApp solo se abren cuando pulsas un
        enlace; no se incrustan ni reciben datos de los formularios por defecto.
        Cada proveedor aplica sus propias condiciones y políticas. La
        información sobre qué terceros pueden recibir datos y cuándo se cargan
        servicios externos se encuentra en la{' '}
        <Link href='/privacy'>Política de Privacidad</Link> y la{' '}
        <Link href='/cookies'>Política de Cookies</Link>.
      </p>

      <h2>6. Protección de datos</h2>
      <p>
        El tratamiento de datos personales se describe en nuestra{' '}
        <Link href='/privacy'>Política de Privacidad</Link>. Para solicitar el
        acceso, rectificación o supresión de tus datos puedes utilizar el{' '}
        <Link href='/rights'>formulario de ejercicio de derechos</Link> o
        escribir a la dirección indicada arriba.
      </p>

      <h2>7. Derecho de desistimiento</h2>
      <p>
        Actualmente esta web es principalmente informativa y no ofrece un
        proceso de contratación y pago online. Si en el futuro se formaliza un
        contrato a distancia con consumidores, se informará de sus condiciones
        antes de contratar y, cuando sea aplicable, el consumidor podrá desistir
        en un plazo de <strong>14 días naturales</strong> desde la recepción del
        producto o la celebración del servicio, conforme a la normativa de
        consumidores.
      </p>
      <p>
        El derecho puede tener excepciones legales, entre otras, para productos
        perecederos, productos elaborados conforme a especificaciones del
        cliente o servicios completamente ejecutados con el consentimiento
        previo y expreso del consumidor. Para ejercerlo, cuando resulte
        aplicable, envía una declaración inequívoca a{' '}
        <a href='mailto:fanscoffee22@gmail.com'>fanscoffee22@gmail.com</a> con
        tus datos, la fecha y la referencia de la contratación. No se entenderá
        que existe un derecho de desistimiento sobre una compra que no se haya
        realizado a través de esta web.
      </p>

      <h2>8. Legislación aplicable</h2>
      <p>
        Este aviso se rige por la legislación española. Cuando el usuario tenga
        la condición de consumidor, se respetarán los fueros y derechos que le
        reconozca la normativa imperativa aplicable.
      </p>
      <p>
        Para consultas sobre este aviso, escribe a{' '}
        <a href='mailto:fanscoffee22@gmail.com'>fanscoffee22@gmail.com</a>.
      </p>
    </main>
  )
}
