import Head from 'next/head';
import ParallaxComponent from '@/components/ParallaxComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Web</title>
        <meta name="description" content="En Fans somos fan(s) de ti. ¡Visítanos! Para pedidos llama al: 📞 628984413" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Fans Coffee Bakery",
          "url": "https://www.fanscoffee.es/"
        }) }} />
      </Head>
      <div>
        <ParallaxComponent />
      </div>
    </>
  );
}
