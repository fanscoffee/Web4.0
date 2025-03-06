import Building from '@/components/Building'
import ProductGallery from '@/components/ProductGallery'
import coffees from './coffees.json'

// async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
//   const data = await res.json();

//   return {
//     props: {
//       data
//     }
//   };
// }

export default function Pastry() {
  return (
    <main>
      <ProductGallery products={coffees} />
    </main>
  )
}
