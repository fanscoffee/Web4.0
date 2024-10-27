'use client'

import React, { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function PdfViewer(props: {pdf: string}) {
const { height, width } = useWindowDimensions();
console.log(height, " " , width)
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
