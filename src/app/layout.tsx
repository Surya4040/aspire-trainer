import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aspire Info | AI-Powered IT Training in Tamil Nadu",
  description: "Aspire Info is a premium ed-tech startup in Tamil Nadu offering rigorous 3-month courses with an in-house practice portal and robust AI-assisted learning.",
  keywords: ["Software Training TN", "AI Assisted Coding", "MERN Stack Course", "Practial Coding Platform", "Learn to Code Online", "Aspire Info"],
  openGraph: {
    title: "Aspire Info - Build your tech career.",
    description: "Learn software engineering with our custom practice portal, 24/7 AI assistance, and 3-month intensive courses.",
    url: "https://aspireinfo.com",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-accent-500 selection:text-white">
        <Navbar />
        <main className="flex-1 mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
