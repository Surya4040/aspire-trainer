import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Vendors in Coimbatore, Chennai & Bangalore | Hire Technical Trainers & College Faculty | Aspire Info",
  description: "Leading technical training vendors in Coimbatore, Chennai, and Bangalore. Deploy industry-vetted faculty across 24+ technical domains for engineering college bootcamps, workshops, placement training, and corporate workforce upskilling in 48-72 hours.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/trainers",
  },
  keywords: [
    // Coimbatore
    "training vendors in coimbatore",
    "training ventors in coimbatore",
    "corporate training vendors in coimbatore",
    "technical training vendors in coimbatore",
    "college placement training vendors in coimbatore",
    "hire technical trainers in coimbatore",
    "engineering college placement trainers coimbatore",
    "technical faculty recruitment coimbatore",
    "it corporate trainers coimbatore gandhipuram peelamedu",

    // Chennai
    "training vendors in chennai",
    "corporate training vendors in chennai",
    "technical training vendors in chennai",
    "hire technical trainers in chennai",
    "college placement trainers in chennai",
    "engineering college placement bootcamps chennai",
    "technical faculty staffing chennai",
    "it corporate trainers in omr guindy chennai",
    "corporate training companies in chennai",

    // Bangalore / Bengaluru
    "training vendors in bangalore",
    "training vendors in bengaluru",
    "corporate training vendors in bangalore",
    "technical training vendors in bangalore",
    "hire technical trainers in bangalore",
    "corporate it trainers in bangalore",
    "technical faculty staffing bangalore",
    "engineering college placement trainers bangalore",
    "placement bootcamp trainers whitefield koramangala electronic city",
    "it corporate training companies in bangalore",

    // Pan-India & Specialized
    "full stack trainers coimbatore",
    "mern stack trainer chennai bangalore",
    "java fullstack trainer bangalore",
    "python trainer chennai",
    "sdet automation trainer bangalore",
    "cloud devops trainer bangalore chennai",
    "placement bootcamp trainers tamil nadu",
    "technical faculty staffing india",
    "hire trainers bangalore chennai hyderabad"
  ],
  openGraph: {
    title: "Training Vendors in Coimbatore, Chennai & Bangalore | Hire Technical Faculty | Aspire Info",
    description: "Deploy industry-vetted technical faculty for engineering college placement bootcamps and corporate workforce training across Coimbatore, Chennai, Bangalore, and pan-India.",
    url: "https://www.aspireinfoedu.in/trainers",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Hire Technical Trainers - Aspire Info Coimbatore Chennai Bangalore",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Vendors in Coimbatore, Chennai & Bangalore | Hire Technical Trainers",
    description: "Industry-vetted technical faculty for engineering colleges and corporate enterprises across Coimbatore, Chennai, Bangalore & India.",
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
    "name": "Technical Faculty Staffing & Corporate Training Vendors in Coimbatore, Chennai & Bangalore",
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
    "description": "On-demand technical faculty and corporate training vendors for engineering college bootcamps, student placement preparation, and workforce enterprise upskilling across Coimbatore, Chennai, Bangalore, Tamil Nadu, Karnataka, and pan-India.",
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "AdministrativeArea", "name": "OMR, Guindy, Velachery, Sholinganallur, Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Whitefield, Electronic City, Koramangala, HSR Layout, Manyata Tech Park, Bangalore" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
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
