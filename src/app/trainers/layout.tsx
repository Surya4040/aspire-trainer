import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Vendors in Coimbatore | Hire Technical Trainers & College Faculty | Aspire Info",
  description: "Leading technical training vendors in Coimbatore and pan-India. Deploy industry-vetted faculty across 24+ technical domains for engineering college bootcamps, workshops, placement training, and corporate workforce upskilling in 48-72 hours.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/trainers",
  },
  keywords: [
    "training vendors in coimbatore",
    "training ventors in coimbatore",
    "corporate training vendors in coimbatore",
    "technical training vendors in coimbatore",
    "college placement training vendors in coimbatore",
    "hire technical trainers in coimbatore",
    "engineering college placement trainers coimbatore",
    "technical faculty recruitment coimbatore",
    "it corporate trainers coimbatore gandhipuram peelamedu",
    "technical trainers in coimbatore",
    "full stack trainers coimbatore",
    "mern stack trainer coimbatore",
    "java fullstack trainer coimbatore",
    "python trainer coimbatore",
    "sdet automation trainer coimbatore",
    "cloud devops trainer coimbatore",
    "placement bootcamp trainers tamil nadu",
    "technical faculty staffing india",
    "corporate it training companies in coimbatore",
    "hire trainers bangalore chennai hyderabad"
  ],
  openGraph: {
    title: "Training Vendors in Coimbatore | Hire Technical Faculty | Aspire Info",
    description: "Deploy industry-vetted technical faculty for engineering college placement bootcamps and corporate workforce training across 24+ stacks in 48-72h.",
    url: "https://www.aspireinfoedu.in/trainers",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Hire Technical Trainers - Aspire Info Coimbatore",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Vendors in Coimbatore | Hire Technical Trainers",
    description: "Industry-vetted technical faculty for engineering colleges and corporate enterprises across Coimbatore & India.",
    images: ["https://www.aspireinfoedu.in/logo.svg"],
  }
};

export default function TrainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const trainerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.aspireinfoedu.in/trainers#service",
    "name": "Technical Faculty Staffing & Corporate Training Vendors in Coimbatore",
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
    "serviceType": "Technical Training & Faculty Staffing",
    "description": "On-demand technical faculty and corporate training vendors for engineering college bootcamps, student placement preparation, and workforce enterprise upskilling across Coimbatore, Tamil Nadu, and pan-India.",
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Hyderabad" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainerSchema) }}
      />
      {children}
    </>
  );
}
