export default function PdfViewer(props: {pdf: string}) {
  return (
      <iframe
        src={props.pdf}
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
  );
}
