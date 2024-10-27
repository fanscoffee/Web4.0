import dynamic from 'next/dynamic'

const DynamicPdfViewer = dynamic((props: {pdf: string} ) => import('@/components/PdfViewer'), {ssr: false,});
export default function Cakes() {
  return (
    <main className='container'>
      <DynamicPdfViewer pdf='/pdfs/tartas-completas.pdf' />
    </main>
  )
}
