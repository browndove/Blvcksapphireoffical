"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Ubuntu } from "next/font/google";
import "react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers"; // Ensure this import is at the top and correct

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Blacksapphire Offical Website</title>
        <link rel="icon" href="/images/Blvck Sapphire-12.png" />
        {/* Add other meta tags here */}
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${ubuntu.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
