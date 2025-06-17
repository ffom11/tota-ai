'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import PDFViewer from './PDFViewer';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title = 'عرض الكتاب' }: PDFModalProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isOpen || !isClient) return null;

  // إغلاق النافذة المنبثقة عند الضغط على زر الهروب
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // منع التمرير خلف النافذة المنبثقة
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // إغلاق النافذة المنبثقة عند النقر خارج المحتوى
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      dir="rtl"
    >
      <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary to-primary-dark text-white rounded-t-xl">
          <h3 className="text-lg font-bold">{title}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <PDFViewer 
            file={pdfUrl} 
            className="h-full"
            onDocumentLoadSuccess={(numPages) => {
              console.log(`تم تحميل ${numPages} صفحات`);
            }}
          />
        </div>
        
        <div className="p-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
          <div>
            استخدم أزرار التكبير والتصغير للتحكم في حجم العرض
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
