'use client';

export default function PdfViewer(props: {pdf: string}) {
console.log('props --> ', props);
  const height = window.innerHeight;
  return (
      <iframe
        src={props.pdf}
        width="100%"
        height={height}
        style={{ 
          border: 'none',
        }}
        title="PDF Viewer"
      />
  );
}
