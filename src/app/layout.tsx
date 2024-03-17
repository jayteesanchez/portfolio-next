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
        <div className="relative mx-auto w-full max-w-container">
          <div className="flex h-dvh md:rounded" style={{
              backgroundImage: 'url(/IMG_0117.jpg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              }}>
            <div className="w-full 2xl:w-1/4 xl:w-2/5 lg:w-1/2 md:w-7/12 h-dvh lg:px10 px-0 mx-auto flex flex-col">
              <Navbar />
              <div className="">
                {children}
              </div>
              <Socials />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
