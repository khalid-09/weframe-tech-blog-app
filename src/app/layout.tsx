import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/smooth-scrolling";
import NewsLetter from "@/components/header/newsletter";
import Navbar from "@/components/header/navbar";
import { Inter } from "next/font/google";
import CTA from "@/components/cta/cta";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer/footer";
import ReactQueryProvider from "@/components/react-query-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WeFrame Tech | Blog App",
  description: "A blog app built with Next.js and Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReactQueryProvider>
          <SmoothScrolling>
            <NewsLetter />
            <Navbar />
            <main>{children}</main>
            <Testimonial />
            <CTA />
            <Footer />
          </SmoothScrolling>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
