import PdfViewer from '@/components/PdfViewer'

export default function Cakes() {
  return (
    <main className='container'>
      <PdfViewer pdf='/pdfs/tartas-completas.pdf' />
    </main>
  )
}
