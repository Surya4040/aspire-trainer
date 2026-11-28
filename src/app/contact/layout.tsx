import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Aspire Info | Hire Technical Trainers & Software Solutions in Coimbatore, Chennai & Bangalore",
  description: "Get in touch with Aspire Info serving Coimbatore, Chennai, and Bangalore. Call +91 8220924040 or email aspireinfo.edu@gmail.com. Locate our office on Google Maps: https://share.google/K2tk7WqErcGum90bn for trainer deployment, custom application development, and SEO consultation.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/contact",
  },
  keywords: [
    "contact aspire info coimbatore",
    "contact aspire info chennai",
    "contact aspire info bangalore",
    "aspire info phone number",
    "aspire info address coimbatore",
    "aspire info google location",
    "hire technical trainers contact chennai bangalore",
    "training vendors in coimbatore contact",
    "training vendors in chennai contact",
    "training vendors in bangalore contact",
    "application development consultation coimbatore chennai bangalore",
    "digital marketing agency contact coimbatore"
  ],
  openGraph: {
    title: "Contact Aspire Info Coimbatore | Technical Training & Development",
    description: "Connect with our team for technical faculty staffing, web application development, and digital marketing inquiries in Coimbatore.",
    url: "https://www.aspireinfoedu.in/contact",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Contact Aspire Info Coimbatore",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aspire Info Coimbatore",
    description: "Call +91 8220924040 for trainer recruitment, custom software, and online IT courses.",
    images: ["https://www.aspireinfoedu.in/logo.svg"],
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.aspireinfoedu.in/contact#webpage",
    "name": "Contact Aspire Info Coimbatore",
    "url": "https://www.aspireinfoedu.in/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Aspire Info",
      "telephone": "+918220924040",
      "email": "aspireinfo.edu@gmail.com",
      "hasMap": "https://share.google/K2tk7WqErcGum90bn",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.0168",
        "longitude": "76.9558"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
