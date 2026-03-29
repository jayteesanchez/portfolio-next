'use client';
import PdfViewer from '@/components/pdfViewer';
import { MdOutlineEmail } from 'react-icons/md';

export default function Resume() {
  return (
    <div className="animate-fade-in-up w-full">
      {/* Desktop: show the PDF inline */}
      <div className="hidden md:block">
        <PdfViewer SelectedFileData="/Jaytee_Sanchez_Resume_web.pdf" />
      </div>

      {/* Mobile: centered message + contact button */}
      <div className="md:hidden flex flex-col items-center justify-center text-center gap-6 py-8">
        <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
          The full resume is best viewed on a desktop. Reach out below and
          I&apos;ll send it your way!
        </p>
        <a
          href="mailto:jaytee.sanchez@gmail.com?subject=Hello! I came across your site"
          className="text-white bg-white/10 border border-white/20 backdrop-blur-sm font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center gap-3 hover:bg-white/20 transition-all duration-200"
          aria-label="Email me"
        >
          <MdOutlineEmail />
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
}
