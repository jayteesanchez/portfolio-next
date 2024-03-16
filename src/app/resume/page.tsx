'use client';
import PdfViewer from '@/components/pdfViewer';
import { MdOutlineEmail } from 'react-icons/md';

export default function Resume() {
  
  return (
    <div>
      <div className='hidden md:block'>
        <PdfViewer SelectedFileData='/Jaytee_Sanchez_Resume_web.pdf'/>
      </div>
      <div className='md:hidden mt-50 text-center'>
        <p className='my-10'>You can view the PDF on desktop or reach me through the button below</p>
        <a href="mailto:jaytee.sanchez@gmail.com?subject=Hello! I came across your site" className=" text-white bg-[#050708] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 hover:motion-safe:animate-bounce" type="button" aria-label="Email me">
          <MdOutlineEmail/>
          <span className="ml-4"> Contact Me </span>
        </a>
      </div>
    </div>
  );
};