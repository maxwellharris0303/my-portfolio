import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import topGradient from "@/public/topGradient.svg";
import { inter, poppins } from "@/app/fonts";
import ThemeProvider from "@/app/contex/ThemeContex";
import dynamic from "next/dynamic";
import Button from "@/app/components/Button";
import { twitterLink } from "./data";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxwellharris-portfolio.vercel.app/"),
  alternates: {
    canonical: "/",
  },

  title: "SMDV",
  description:
    "As a full stack developer, I assist emerging businesses in achieving their digital aspirations. I specialize in developing modern web applications",
  keywords:
    "SMDV, Full Stack, Blockchain, web developer, Toyoda, Louis",
  authors: [
    { name: "SMDV", url: twitterLink },
  ],
  openGraph: {
    images: "/me.png",
  },
  icons: {
    icon: "/me.png"
  }
};

const Footer = dynamic(() => import("@/app/components/Footer"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} dark:bg-[#0D0D0D]`}>
          <main className="container relative">
            <div className="w-full h-[500px] absolute top-0 right-0 -z-10">
              <Image
                src={topGradient}
                alt="gradient"
                quality={100}
                fill
                sizes="100vw"
                priority
                className="w-full object-cover blur-2xl"
              />
            </div>
            {/* show logo on mobile */}
            <div className="w-full relative text-center block mb-20 sm:hidden">
              <Button
                link="/"
                variant="icon"
                title="Smart Young Dev"
                className={`!text-4xl dark:text-white !p-0 !font-bold ${poppins.className}`}
              >
                {"<SMDV>"}
              </Button>
            </div>
            <Navbar />
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
