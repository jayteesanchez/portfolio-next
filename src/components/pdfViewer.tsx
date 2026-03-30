"use client";
import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PdfViewer = ({ SelectedFileData }: { SelectedFileData: string }) => {
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-y-auto max-h-[75vh]">
      <Document
        file={SelectedFileData}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from({ length: numPages ?? 0 }, (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={containerWidth}
            loading={i === 0 ? 'Loading resume...' : ''}
            className="mb-2"
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
