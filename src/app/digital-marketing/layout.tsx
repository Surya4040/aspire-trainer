import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Search Engine & SEO Services in Coimbatore | Aspire Info",
  description: "Dominant digital marketing and search engine optimization (SEO) company in Coimbatore. Achieve Page-1 Google search rankings, high-converting Google Ads PPC campaigns, and ROI-focused lead generation for businesses in Coimbatore, Tamil Nadu, and India.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/digital-marketing",
  },
  keywords: [
    "digital marketing search engine",
    "digital marketing in coimbatore",
    "digital marketing agency in coimbatore",
    "seo company in coimbatore",
    "best seo services in coimbatore",
    "search engine optimization coimbatore",
    "google ads agency in coimbatore",
    "local seo services coimbatore",
    "search engine marketing coimbatore",
    "best digital marketing company in gandhipuram coimbatore",
    "seo agency in peelamedu saravanampatti coimbatore",
    "b2b lead generation agency coimbatore",
    "social media marketing company coimbatore",
    "ppc management services coimbatore",
    "technical seo audit coimbatore",
    "organic traffic growth agency tamil nadu"
  ],
  openGraph: {
    title: "Digital Marketing Search Engine & SEO Services in Coimbatore | Aspire Info",
    description: "Results-driven digital marketing and SEO services in Coimbatore. Secure Page-1 Google rankings and scale qualified inbound leads.",
    url: "https://www.aspireinfoedu.in/digital-marketing",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing SEO Agency Coimbatore - Aspire Info",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & SEO Services in Coimbatore | Aspire Info",
    description: "Page-1 Google ranking, Google Ads PPC, and comprehensive search engine optimization in Coimbatore.",
    images: ["https://www.aspireinfoedu.in/logo.svg"],
  }
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const marketingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.aspireinfoedu.in/digital-marketing#service",
    "name": "Digital Marketing & Search Engine Optimization (SEO) in Coimbatore",
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
    "serviceType": "Digital Marketing & SEO",
    "description": "Full-funnel digital marketing, search engine optimization (SEO), Google Search Ads, and local search visibility services for businesses in Coimbatore, Tamil Nadu, and pan-India.",
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "State", "name": "Tamil Nadu" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marketingSchema) }}
      />
      {children}
    </>
  );
}
