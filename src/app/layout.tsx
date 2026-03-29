import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Socials from "@/components/socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jayteesanchez.com",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="relative w-full h-dvh overflow-hidden"
          style={{
            backgroundColor: "#000",
            backgroundImage: "url(/IMG_0117.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Mobile — light tint so the photo stays visible */}
          <div className="absolute inset-0 pointer-events-none md:hidden bg-black/25" />

          {/* Desktop overlay — gradient from solid black to transparent */}
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.96) 28%, rgba(0,0,0,0.78) 48%, rgba(0,0,0,0.2) 72%, transparent 100%)",
            }}
          />

          {/* Content column */}
          <div className="relative z-10 w-full md:w-7/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3 h-dvh px-8 md:px-12 flex flex-col text-white max-md:[text-shadow:0_2px_14px_rgba(0,0,0,0.85)]">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center overflow-y-auto md:overflow-hidden py-4">
              {children}
            </div>
            <Socials />
          </div>
        </div>
      </body>
    </html>
  );
}
