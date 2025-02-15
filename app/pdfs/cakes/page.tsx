import dynamic from 'next/dynamic'

const DynamicPdfViewer = dynamic(() => import('@/components/PdfViewer'), {ssr: false,});
export default function Cakes() {
  return (
    <main className='container'>
      <DynamicPdfViewer pdf='/pdfs/tartas-completas.pdf' />
      {/* This is a comment */}
    </main>
  )
}
