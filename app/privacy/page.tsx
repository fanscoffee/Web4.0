import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Fans Coffee Bakery',
  description:
    'Política de privacidad y protección de datos de Fans Coffee Bakery.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/privacy'
  },
  robots: {
    index: false,
    follow: true
  }
}

export default function Privacy() {
  return (
    <main className='brand-page brand-prose'>
      <h1>POLÍTICA DE PRIVACIDAD</h1>
      <p className='my-4'>
        Última actualización: 9 de noviembre de 2026. Esta política explica qué
        datos personales tratamos, para qué los necesitamos, con quién pueden
        compartirse y cómo puedes ejercer tus derechos.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>FANS COFFEE FRIENDS S.L.L.</strong>, CIF B88349394, con
        domicilio en C/ Doctor Esquerdo 180, 28007 Madrid, España. Puedes
        contactar con el responsable en{' '}
        <a href='mailto:fanscoffee22@gmail.com'>fanscoffee22@gmail.com</a> o en
        el teléfono <a href='tel:+34628984413'>+34 628 984 413</a>.
      </p>

      <h2>2. Qué datos pedimos y por qué</h2>
      <p>
        Aplicamos el principio de minimización: cada formulario solicita solo lo
        necesario para su finalidad. No usamos los datos para elaborar perfiles
        ni tomamos decisiones automatizadas.
      </p>
      <ul>
        <li className='my-2 list-disc'>
          <strong>Contacto:</strong> nombre, email, tipo de consulta y mensaje.
          El teléfono es opcional y solo se utiliza si lo facilitas para que
          podamos llamarte. Se usan para responder y gestionar tu solicitud.
        </li>
        <li className='my-2 list-disc'>
          <strong>Reseñas:</strong> nombre, puntuación, comentario y, si
          quieres, número de factura y persona que te atendió. Hemos eliminado
          el campo de email porque no es necesario para enviar una reseña.
        </li>
        <li className='my-2 list-disc'>
          <strong>Ejercicio de derechos:</strong> email de respuesta y la
          información imprescindible para localizar y tramitar tu solicitud.
          Puedes pedir supresión de mensajes o reseñas concretas.
        </li>
        <li className='my-2 list-disc'>
          <strong>Navegación:</strong> la información técnica imprescindible
          para servir la web y protegerla. No instalamos herramientas de
          analítica o publicidad para seguir tu navegación.
        </li>
      </ul>

      <h2>3. Base jurídica</h2>
      <ul>
        <li className='my-2 list-disc'>
          Formularios de contacto: atender tu solicitud y, cuando corresponda,
          adoptar medidas precontractuales; la casilla sin marcar acredita que
          has leído la información y consientes el tratamiento de los datos
          enviados.
        </li>
        <li className='my-2 list-disc'>
          Reseñas: consentimiento expreso al enviar el formulario, mediante una
          casilla que aparece vacía hasta que la marcas.
        </li>
        <li className='my-2 list-disc'>
          Derechos: cumplir las obligaciones del RGPD y gestionar la solicitud.
        </li>
        <li className='my-2 list-disc'>
          Seguridad y funcionamiento básico: interés legítimo y obligaciones
          legales aplicables.
        </li>
        <li className='my-2 list-disc'>
          Mapa de Google: consentimiento mediante el banner de cookies; si lo
          rechazas, el mapa no se carga.
        </li>
      </ul>

      <h2>4. Con quién compartimos los datos</h2>
      <p>
        No vendemos datos personales. Para prestar las funciones de la web,
        pueden acceder a los datos estos terceros:
      </p>
      <ul>
        <li className='my-2 list-disc'>
          <strong>EmailJS:</strong> recibe los datos de los formularios de
          contacto y de derechos para transmitirlos por correo a la dirección de
          FANS. Es el proveedor configurado en la aplicación. Consulta su{' '}
          <a
            href='https://www.emailjs.com/legal/privacy-policy/'
            target='_blank'
            rel='noopener noreferrer'
          >
            política de privacidad
          </a>
          .
        </li>
        <li className='my-2 list-disc'>
          <strong>Servicio externo de reseñas:</strong> los datos de una reseña
          se envían al endpoint configurado en{' '}
          <code>NEXT_PUBLIC_REVIEW_API_URL</code>; si no se configura otro, la
          aplicación usa <code>back-seven-livid.vercel.app/reviews</code>. El
          responsable debe mantener un acuerdo y un procedimiento de supresión
          con el proveedor de ese servicio.
        </li>
        <li className='my-2 list-disc'>
          <strong>Google Maps:</strong> solo recibe solicitudes del navegador si
          aceptas las cookies no necesarias y activas el mapa. Consulta los
          detalles en la <Link href='/cookies'>Política de Cookies</Link>.
        </li>
        <li className='my-2 list-disc'>
          <strong>Instagram y WhatsApp:</strong> son enlaces voluntarios, no
          contenidos incrustados. Si los utilizas, el proveedor correspondiente
          tratará los datos según sus propias políticas.
        </li>
        <li className='my-2 list-disc'>
          Proveedores de alojamiento, correo y seguridad, únicamente cuando sean
          necesarios para operar la web y bajo instrucciones del responsable.
        </li>
      </ul>
      <p>
        Algunos proveedores pueden tratar información fuera del Espacio
        Económico Europeo. Antes de habilitar o cambiar un proveedor, el
        responsable debe verificar sus condiciones, el acuerdo de tratamiento y
        las garantías de transferencia internacional exigibles. No se habilitan
        herramientas de analítica o publicidad sin actualizar esta política y
        obtener el consentimiento correspondiente.
      </p>

      <h2>5. Conservación</h2>
      <ul>
        <li className='my-2 list-disc'>
          <strong>Consultas:</strong> durante el tiempo necesario para responder
          y, como regla general, hasta 12 meses desde el último contacto, salvo
          que exista una relación o una obligación legal.
        </li>
        <li className='my-2 list-disc'>
          <strong>Reseñas:</strong> mientras sean necesarias para gestionar el
          servicio y mientras no solicites su retirada, sin perjuicio de los
          plazos legales para defender reclamaciones.
        </li>
        <li className='my-2 list-disc'>
          <strong>Solicitudes de derechos:</strong> durante el tiempo necesario
          para acreditar su tramitación y atender responsabilidades legales.
        </li>
      </ul>
      <p>
        Cuando una norma obligue a conservar información, se mantendrá bloqueada
        y solo se utilizará para esa obligación. Después se eliminará o
        anonimizará.
      </p>

      <h2>6. Comunicaciones comerciales</h2>
      <p>
        No añadimos las direcciones utilizadas en contacto o reseñas a una lista
        de marketing y no enviamos publicidad por email sin una autorización
        previa, específica y no preseleccionada. En esta versión de la web no
        hay formulario de newsletter.
      </p>

      <h2>7. Derechos y supresión</h2>
      <p>
        Puedes solicitar acceso, rectificación, supresión, oposición,
        limitación, portabilidad o retirar el consentimiento. Para borrar tus
        datos, utiliza el{' '}
        <Link href='/rights'>formulario de ejercicio de derechos</Link> o
        escribe a{' '}
        <a href='mailto:fanscoffee22@gmail.com'>fanscoffee22@gmail.com</a> con
        el asunto «Supresión de datos». Indicaremos qué información necesitamos
        para verificar tu identidad de forma proporcional; no envíes un DNI
        salvo que te lo solicitemos y sea imprescindible.
      </p>
      <p>
        Revisaremos la solicitud y, salvo excepción legal, eliminaremos los
        datos de nuestros sistemas y pediremos la supresión a los proveedores
        que los traten por nuestra cuenta. Responderemos, como regla general, en
        el plazo máximo de un mes. También puedes reclamar ante la{' '}
        <a
          href='https://www.aepd.es/es'
          target='_blank'
          rel='noopener noreferrer'
        >
          Agencia Española de Protección de Datos
        </a>
        .
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger los
        datos frente a accesos no autorizados, pérdida o alteración. Ningún
        medio de transmisión o almacenamiento es completamente seguro; si se
        produce una brecha que lo exija, se actuará conforme a la normativa.
      </p>

      <h2>9. Cookies</h2>
      <p>
        La cookie propia que recuerda tu decisión es necesaria para gestionar el
        consentimiento. El mapa de Google está bloqueado hasta que aceptes las
        cookies no necesarias. Puedes consultar el detalle y cambiar la opción
        en la <Link href='/cookies'>Política de Cookies</Link>.
      </p>

      <div className='my-8 text-center'>
        <Link href='/rights' className='brand-button'>
          EJERCER MIS DERECHOS
        </Link>
      </div>
    </main>
  )
}
