'use client'

import  useWindowDimensions from './useWindowDimensions'

export default function PdfViewer(props: {pdf: string}) {
const { height, width } = useWindowDimensions();
  return (
      <iframe
        src={props.pdf}
        width="100%"
        height={height}
        style={{ border: 'none',
          overflow: "auto", }}
        title="PDF Viewer"
      />
  );
}
