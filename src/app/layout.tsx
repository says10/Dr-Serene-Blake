'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`html { scroll-behavior: smooth; }`}</style>
        <title>Dr. Serena Blake, PsyD | Clinical Psychologist in Los Angeles</title>
        <meta name="description" content="Compassionate, evidence-based therapy for anxiety, relationships, and trauma. In-person & virtual sessions with Dr. Serena Blake, PsyD, Los Angeles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="pt-4 pl-4 md:pl-8 flex items-center">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Dr. Serena Blake logo"
              width={220}
              height={70}
              className="w-40 md:w-[220px] object-contain"
              priority
            />
          </Link>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="bg-background text-primary text-center py-12 px-4 mt-16 font-serif">
      <div className="text-3xl md:text-4xl font-serif font-normal mb-6">Dr. Serena Blake, PsyD, Licensed Clinical Psychologist</div>
      <div className="mb-4">
        <a href="mailto:serena@blakepsychology.com" className="underline hover:text-accent">serena@blakepsychology.com</a>
      </div>
      <div className="mb-4">
        Phone: <a href="tel:3235550192" className="underline hover:text-accent">(323) 555-0192</a>
      </div>
      <div className="mb-4">1287 Maplewood Drive, Los Angeles, CA 90026</div>
      <div className="mb-4 flex flex-wrap justify-center gap-6 text-lg">
        <a href="#" className="underline hover:text-accent">Home</a>
        <a href="#" className="underline hover:text-accent">Privacy Policy</a>
        <a href="#" className="underline hover:text-accent">Good Faith Estimate</a>
      </div>
      <div className="mb-8">
        <a href="#" className="underline text-xl hover:text-accent">Client Portal</a>
      </div>
      <div className="text-base text-primary/80 mt-8">&copy; 2024 Dr. Serena Blake, PsyD. All rights reserved.</div>
    </footer>
  );
}
