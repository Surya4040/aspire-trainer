import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CoreServices } from "@/components/sections/CoreServices";
import { DomainShowcase } from "@/components/sections/DomainShowcase";
import { Features } from "@/components/sections/Features";
import { CareerOutcomes } from "@/components/sections/CareerOutcomes";
import { CoursesHighlight } from "@/components/sections/CoursesHighlight";

export const metadata: Metadata = {
  title: "Aspire Info | Training Vendors, Web Application Development & Best Online Courses in Coimbatore, Chennai & Bangalore",
  description: "Aspire Info is the premier technical training vendor and application development agency serving Coimbatore, Chennai, and Bangalore. Hire verified faculty for college bootcamps, build high-speed Next.js web applications, run high-ROI digital marketing SEO, and enroll in the best online IT courses.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in",
  },
  keywords: [
    // Coimbatore
    "best online course in coimbatore",
    "training vendors in coimbatore",
    "training ventors in coimbatore",
    "application development in coimbatore",
    "web application development in coimbatore",
    "digital marketing in coimbatore",
    "digital marketing search engine",
    "seo company in coimbatore",
    "hire technical trainers in coimbatore",
    "corporate training vendors in coimbatore",

    // Chennai
    "training vendors in chennai",
    "hire technical trainers in chennai",
    "application development in chennai",
    "web application development in chennai",
    "digital marketing in chennai",
    "best online course in chennai",
    "best online courses in chennai with placement",

    // Bangalore
    "training vendors in bangalore",
    "training vendors in bengaluru",
    "corporate training vendors in bangalore",
    "hire technical trainers in bangalore",
    "application development in bangalore",
    "web application development in bangalore",
    "digital marketing agency in bangalore",
    "best online course in bangalore",
    "best online courses in bangalore with placement",
    "software development company in koramangala whitefield bangalore",
    "it courses in bangalore with placement"
  ],
  openGraph: {
    title: "Aspire Info | Training Vendors, Web Application Development & Best Online Courses in Coimbatore, Chennai & Bangalore",
    description: "Aspire Info provides vetted technical faculty staffing for colleges, modern Next.js web application development, digital marketing search engine solutions, and hands-on online IT courses across Coimbatore, Chennai, and Bangalore.",
    url: "https://www.aspireinfoedu.in",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Aspire Info Coimbatore Chennai Bangalore",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Info | Training Vendors & Application Development Coimbatore, Chennai & Bangalore",
    description: "Vetted technical instructors, bespoke web application development, and the best online IT courses in Coimbatore, Chennai, Bangalore & pan-India.",
    images: ["https://www.aspireinfoedu.in/logo.svg"],
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <DomainShowcase />
      <Features />
      <CareerOutcomes />
      <CoursesHighlight />
    </>
  );
}
