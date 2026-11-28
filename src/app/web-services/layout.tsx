import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Development in Coimbatore | Custom Web & Next.js Development | Aspire Info",
  description: "Premier web application development company in Coimbatore. We build high-performance Next.js web applications, corporate web portals, SaaS platforms, and enterprise software with 95+ PageSpeed scores in Coimbatore and pan-India.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/web-services",
  },
  keywords: [
    "application development in coimbatore",
    "web application development in coimbatore",
    "website development company in coimbatore",
    "custom software development in coimbatore",
    "software development company in gandhipuram coimbatore",
    "web development in peelamedu saravanampatti coimbatore",
    "next js development company coimbatore",
    "react js web app development coimbatore",
    "saas application development coimbatore",
    "enterprise portal development coimbatore",
    "custom web app development services coimbatore",
    "ecommerce website development coimbatore",
    "best website design and development company in coimbatore",
    "top web development agency tamil nadu",
    "nextjs react full stack development india",
    "software company in coimbatore"
  ],
  openGraph: {
    title: "Application Development in Coimbatore | Custom Web Engineering | Aspire Info",
    description: "High-performance web application development in Coimbatore. Custom Next.js architectures, modern SaaS portals, and enterprise software solutions.",
    url: "https://www.aspireinfoedu.in/web-services",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Application Development in Coimbatore - Aspire Info",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Development in Coimbatore | Aspire Info",
    description: "Bespoke web applications, SaaS platforms, and Next.js engineering in Coimbatore.",
    images: ["https://www.aspireinfoedu.in/logo.svg"],
  }
};

export default function WebServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.aspireinfoedu.in/web-services#service",
    "name": "Web Application Development & Custom Software in Coimbatore",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aspire Info",
      "url": "https://www.aspireinfoedu.in",
      "hasMap": "https://share.google/K2tk7WqErcGum90bn",
      "telephone": "+918220924040",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "serviceType": "Application Development & Web Engineering",
    "description": "Custom Next.js web application development, responsive corporate portals, cloud SaaS software, and database architectures in Coimbatore, Tamil Nadu, and pan-India.",
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "Country", "name": "India" }
    ],
    "offers": {
      "@type": "Offer",
      "price": "Contact for quote",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webServiceSchema) }}
      />
      {children}
    </>
  );
}
