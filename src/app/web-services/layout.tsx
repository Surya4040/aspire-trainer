import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Development in Coimbatore, Chennai & Bangalore | Custom Web & Next.js Development | Aspire Info",
  description: "Premier web application development company serving Coimbatore, Chennai, and Bangalore. We build high-performance Next.js web applications, corporate web portals, SaaS platforms, and enterprise software with 95+ PageSpeed scores.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/web-services",
  },
  keywords: [
    // Coimbatore
    "application development in coimbatore",
    "web application development in coimbatore",
    "website development company in coimbatore",
    "custom software development in coimbatore",
    "software development company in gandhipuram coimbatore",
    "web development in peelamedu saravanampatti coimbatore",
    "next js development company coimbatore",

    // Chennai
    "application development in chennai",
    "web application development in chennai",
    "website development company in chennai",
    "custom software development company chennai",
    "next js development company in chennai",
    "react web app development chennai",
    "software development company in omr guindy velachery chennai",
    "enterprise portal development chennai",

    // Bangalore / Bengaluru
    "application development in bangalore",
    "web application development in bangalore",
    "application development in bengaluru",
    "website development company in bangalore",
    "custom software development company in bangalore",
    "next js development company bangalore",
    "react js development company bangalore",
    "saas application development company bangalore",
    "software development company in koramangala hsr layout whitefield electronic city",

    // Specialized & Regional
    "react js web app development coimbatore",
    "saas application development coimbatore",
    "ecommerce website development chennai bangalore",
    "best website design and development company in tamil nadu karnataka",
    "nextjs react full stack development india",
    "software company in coimbatore"
  ],
  openGraph: {
    title: "Application Development in Coimbatore, Chennai & Bangalore | Custom Web Engineering | Aspire Info",
    description: "High-performance web application development in Coimbatore, Chennai, and Bangalore. Custom Next.js architectures, modern SaaS portals, and enterprise software solutions.",
    url: "https://www.aspireinfoedu.in/web-services",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Application Development in Coimbatore Chennai Bangalore - Aspire Info",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Development in Coimbatore, Chennai & Bangalore | Aspire Info",
    description: "Bespoke web applications, SaaS platforms, and Next.js engineering in Coimbatore, Chennai, and Bangalore.",
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
    "name": "Web Application Development & Custom Software in Coimbatore, Chennai & Bangalore",
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
    "description": "Custom Next.js web application development, responsive corporate portals, cloud SaaS software, and database architectures across Coimbatore, Chennai, Bangalore, Tamil Nadu, Karnataka, and pan-India.",
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "AdministrativeArea", "name": "OMR, Guindy, Velachery, Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Koramangala, HSR Layout, Whitefield, Electronic City, Bangalore" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
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
