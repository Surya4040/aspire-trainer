import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Search Engine & SEO Services in Coimbatore, Chennai & Bangalore | Aspire Info",
  description: "Dominant digital marketing and search engine optimization (SEO) company serving Coimbatore, Chennai, and Bangalore. Achieve Page-1 Google search rankings, high-converting Google Ads PPC campaigns, and ROI-focused lead generation.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/digital-marketing",
  },
  keywords: [
    // Coimbatore
    "digital marketing search engine",
    "digital marketing in coimbatore",
    "digital marketing agency in coimbatore",
    "seo company in coimbatore",
    "best seo services in coimbatore",
    "search engine optimization coimbatore",
    "google ads agency in coimbatore",
    "local seo services coimbatore",

    // Chennai
    "digital marketing in chennai",
    "digital marketing agency in chennai",
    "seo company in chennai",
    "best seo services in chennai",
    "search engine optimization chennai",
    "google ads agency chennai",
    "search engine marketing chennai",
    "seo services in omr guindy chennai",

    // Bangalore / Bengaluru
    "digital marketing in bangalore",
    "digital marketing agency in bangalore",
    "digital marketing agency in bengaluru",
    "seo company in bangalore",
    "best seo services in bangalore",
    "search engine optimization bangalore",
    "search engine marketing agency bangalore",
    "google ads agency bangalore",
    "b2b digital marketing agency bangalore",
    "seo agency in koramangala whitefield bangalore",

    // Regional
    "b2b lead generation agency coimbatore chennai bangalore",
    "social media marketing company south india",
    "ppc management services bangalore chennai",
    "technical seo audit coimbatore chennai",
    "organic traffic growth agency tamil nadu karnataka"
  ],
  openGraph: {
    title: "Digital Marketing Search Engine & SEO Services in Coimbatore, Chennai & Bangalore | Aspire Info",
    description: "Results-driven digital marketing and SEO services in Coimbatore, Chennai, and Bangalore. Secure Page-1 Google rankings and scale qualified inbound leads.",
    url: "https://www.aspireinfoedu.in/digital-marketing",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing SEO Agency Coimbatore Chennai Bangalore - Aspire Info",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & SEO Services in Coimbatore, Chennai & Bangalore | Aspire Info",
    description: "Page-1 Google ranking, Google Ads PPC, and comprehensive search engine optimization in Coimbatore, Chennai, and Bangalore.",
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
    "name": "Digital Marketing & Search Engine Optimization (SEO) in Coimbatore, Chennai & Bangalore",
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
    "description": "Full-funnel digital marketing, search engine optimization (SEO), Google Search Ads, and local search visibility services for businesses in Coimbatore, Chennai, Bangalore, Tamil Nadu, Karnataka, and pan-India.",
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "AdministrativeArea", "name": "OMR, Guindy, Velachery, Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Koramangala, Whitefield, Indiranagar, HSR Layout, Bangalore" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "State", "name": "Karnataka" },
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
