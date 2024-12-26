import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/smooth-scrolling";
import NewsLetter from "@/components/newsletter";
import Navbar from "@/components/header/navbar";
import { Inter } from "next/font/google";
import CTA from "@/components/cta/cta";
import Testimonial from "@/components/testimonial";

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
        <SmoothScrolling>
          <NewsLetter />
          <Navbar />
          <main>{children}</main>
          <Testimonial />
          <CTA />
        </SmoothScrolling>
      </body>
    </html>
  );
}
