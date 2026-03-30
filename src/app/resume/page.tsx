'use client';
import { useState } from 'react';
import PdfViewer from '@/components/pdfViewer';
import EmailGateForm from '@/components/emailGateForm';
import { FiDownload } from 'react-icons/fi';

export default function Resume() {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  return (
    <div className="animate-fade-in-up w-full">
      {!signedUrl ? (
        /* Gate: shown on all screen sizes until email submitted */
        <div className="flex flex-col items-start justify-center gap-6 py-8 px-1">
          <EmailGateForm onSuccess={setSignedUrl} />
        </div>
      ) : (
        <>
          {/* Desktop: inline PDF viewer */}
          <div className="hidden md:block">
            <PdfViewer SelectedFileData={signedUrl} />
          </div>

          {/* Mobile: download button */}
          <div className="md:hidden flex flex-col items-center justify-center text-center gap-6 py-8">
            <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
              Thanks! Your download link is ready.
            </p>
            <a
              href={signedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-white/10 border border-white/20 backdrop-blur-sm font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center gap-3 hover:bg-white/20 transition-all duration-200"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
