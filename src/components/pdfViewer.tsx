"use client";
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PdfViewer = ({SelectedFileData}: {SelectedFileData: string}) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <div className='ml-0 2xl:neg-ml-4 xl:neg-ml-1 lg:neg-ml-4 md:neg-ml-4'>
      <Document
        file={SelectedFileData}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          loading="Loading resume..."
          pageNumber={pageNumber}></Page>
      </Document>
    </div>
  );
};

export default PdfViewer;