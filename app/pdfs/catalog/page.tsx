import PdfViewer from "@/components/PdfViewer";

export default function Catalog() {
  return (
     <main className="py-24">
      <div className="container">
      <PdfViewer pdf="/pdfs/bitcoin_es.pdf" />
      </div>
      
     </main>
  );
}