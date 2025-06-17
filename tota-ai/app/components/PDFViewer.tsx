'use client';

import { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string | File | null;
  onDocumentLoadSuccess?: (numPages: number) => void;
  className?: string;
}

export default function PDFViewer({ file, onDocumentLoadSuccess, className = '' }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccessWrapper({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    if (onDocumentLoadSuccess) {
      onDocumentLoadSuccess(numPages);
    }
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => (prevPageNumber || 1) + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.25, 2));
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.25, 0.5));
  }

  function rotate() {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  }

  if (!file) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '500px' }}>
        <p className="text-gray-500">الرجاء اختيار ملف PDF لعرضه</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex justify-between items-center mb-4 p-2 bg-white rounded-lg shadow-sm">
        <div className="flex space-x-2 space-x-reverse">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="الصفحة السابقة"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="flex items-center px-3">
            الصفحة {pageNumber || (numPages ? 1 : '--')} من {numPages || '--'}
          </span>
          <button
            type="button"
            disabled={pageNumber >= (numPages || 0)}
            onClick={nextPage}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="الصفحة التالية"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="flex space-x-2 space-x-reverse">
          <button
            type="button"
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            aria-label="تصغير"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="flex items-center px-1">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            disabled={scale >= 2}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            aria-label="تكبير"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            type="button"
            onClick={rotate}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="تدوير"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div 
        ref={containerRef} 
        className="flex-1 overflow-auto bg-gray-100 rounded-lg shadow-inner"
        style={{ minHeight: '500px' }}
      >
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccessWrapper}
          loading={
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-gray-500">جاري تحميل الملف...</div>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-full text-red-500 p-4 text-center">
              حدث خطأ أثناء تحميل الملف. يرجى التأكد من صحة الملف والمحاولة مرة أخرى.
            </div>
          }
          noData={
            <div className="flex items-center justify-center h-full text-gray-500">
              لم يتم العثور على بيانات PDF.
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber || 1} 
            scale={scale}
            rotate={rotation}
            className="mx-auto shadow-lg"
            loading={
              <div className="flex items-center justify-center h-full">
                <div className="animate-pulse text-gray-500">جاري تحميل الصفحة...</div>
              </div>
            }
          />
        </Document>
      </div>
      
      <div className="mt-2 text-xs text-gray-500 text-center">
        {numPages && (
          <div className="flex justify-center space-x-4 space-x-reverse">
            <button
              type="button"
              onClick={() => setPageNumber(1)}
              disabled={pageNumber <= 1}
              className="disabled:opacity-50 disabled:cursor-not-allowed hover:text-primary"
            >
              الصفحة الأولى
            </button>
            <button
              type="button"
              onClick={() => setPageNumber(numPages)}
              disabled={pageNumber >= numPages}
              className="disabled:opacity-50 disabled:cursor-not-allowed hover:text-primary"
            >
              الصفحة الأخيرة
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
