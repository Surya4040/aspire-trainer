import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/sections/SeoLandingPage';

export const metadata: Metadata = {
  title: "Application Development in Coimbatore | Custom Web & Next.js Agency | Aspire Info",
  description: "Trusted application development company in Coimbatore building custom Next.js web applications, SaaS dashboards, corporate websites, and e-commerce portals across Gandhipuram, Peelamedu, Saravanampatti, Chennai & Bangalore.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/application-development-coimbatore",
  },
  keywords: [
    "application development in coimbatore",
    "web application development in coimbatore",
    "website development company in coimbatore",
    "custom software development in coimbatore",
    "next js development company coimbatore",
    "software development company in gandhipuram peelamedu saravanampatti"
  ],
  openGraph: {
    title: "Application Development in Coimbatore | Aspire Info",
    description: "Custom web application development, SaaS platforms, and 95+ PageSpeed corporate portals in Coimbatore.",
    url: "https://www.aspireinfoedu.in/application-development-coimbatore",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.aspireinfoedu.in/logo.svg", width: 1200, height: 630, alt: "Application Development in Coimbatore" }]
  }
};

export default function ApplicationDevelopmentCoimbatorePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Application Development in Coimbatore",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Aspire Info",
          "url": "https://www.aspireinfoedu.in",
          "telephone": "+918220924040",
          "hasMap": "https://share.google/K2tk7WqErcGum90bn",
          "address": { "@type": "PostalAddress", "addressLocality": "Coimbatore", "addressRegion": "Tamil Nadu", "addressCountry": "IN" }
        },
        "areaServed": ["Coimbatore", "Gandhipuram", "Peelamedu", "Saravanampatti", "Chennai", "Bangalore"],
        "description": "Custom Next.js web application development, SaaS dashboards, and enterprise portals in Coimbatore."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who offers reliable custom application development in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aspire Info builds custom Next.js, React, and full-stack web applications, business dashboards, and e-commerce portals for businesses across Coimbatore, Chennai, and Bangalore."
            }
          },
          {
            "@type": "Question",
            "name": "How long does custom web application development take in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Corporate web applications typically ship in 2 to 3 weeks, while custom SaaS portals and e-commerce platforms launch within 4 to 8 weeks."
            }
          }
        ]
      }
    ]
  };

  return (
    <SeoLandingPage
      badge="Coimbatore Engineering Hub"
      h1Top="Application Development"
      h1Highlight="In Coimbatore."
      subtitle="Bespoke Next.js web applications, SaaS portals, e-commerce platforms, and custom business software built for speed, security, and Page-1 search engine performance across Coimbatore."
      overviewTitle="Why Coimbatore Businesses Choose Aspire Info for Application Development"
      overviewParagraphs={[
        "From industrial manufacturers and healthcare institutions in Peelamedu and Gandhipuram to fast-growing SaaS teams in Saravanampatti and RS Puram, organizations need fast, reliable software instead of sluggish website templates.",
        "Aspire Info engineers clean Next.js, React, and Node.js applications with 95+ Google PageSpeed scores, technical on-page SEO architecture, automated inquiry funnels, and full cloud deployment."
      ]}
      serviceHighlights={[
        {
          title: "Custom Web Applications & SaaS Dashboards",
          desc: "Internal operations portals, client dashboards, and multi-role cloud apps tailored around your exact workflows.",
          points: [
            "Role-based access control & secure authentication",
            "REST / GraphQL APIs paired with PostgreSQL or MongoDB",
            "Real-time analytics, reporting exports & audit logs"
          ]
        },
        {
          title: "High-Speed Next.js Corporate Websites",
          desc: "Clean, mobile-first business platforms designed to establish authority and convert local search visitors into inbound leads.",
          points: [
            "95+ Google Core Web Vitals optimization",
            "Structured Schema.org & local SEO architecture",
            "Direct WhatsApp, CRM & inquiry automation"
          ]
        },
        {
          title: "E-Commerce Stores & Payment Automation",
          desc: "Scalable product catalogs and frictionless mobile checkouts engineered for retail and B2B distributors.",
          points: [
            "Razorpay & Stripe payment gateway setup",
            "Automated GST invoicing & order tracking",
            "Inventory management & admin fulfillment panels"
          ]
        },
        {
          title: "Website Modernization & SEO Upgrades",
          desc: "Transform outdated sites into modern, search-friendly applications without losing existing domain equity.",
          points: [
            "Full UI refresh with clean dark/light brand systems",
            "301 redirect mapping & technical SEO cleanup",
            "Dedicated ongoing maintenance & scaling support"
          ]
        }
      ]}
      serviceAreasTitle="Serving Tech & Business Corridors Across Coimbatore & South India"
      serviceAreas={[
        "Gandhipuram", "Peelamedu", "Saravanampatti", "RS Puram", "Thudiyalur",
        "Singanallur", "Pollachi", "Tiruppur", "Erode", "Salem", "Chennai", "Bangalore"
      ]}
      faqs={[
        {
          question: "Who offers reliable custom application development in Coimbatore?",
          answer: "Aspire Info builds custom Next.js, React, and full-stack web applications, business dashboards, and e-commerce portals for businesses across Coimbatore, Chennai, and Bangalore."
        },
        {
          question: "How long does custom web application development take in Coimbatore?",
          answer: "Corporate web applications typically ship in 2 to 3 weeks, while custom SaaS portals and e-commerce platforms launch within 4 to 8 weeks."
        },
        {
          question: "Do you integrate digital marketing and search engine optimization?",
          answer: "Yes. Every application ships with clean URL routing, XML sitemaps, meta tags, and optional Google Ads / SEO campaigns through our digital marketing team."
        }
      ]}
      primaryCta={{ label: "Start Your Project Estimate", href: "/web-services#quote-form" }}
      secondaryCta={{ label: "Explore Digital Marketing SEO", href: "/digital-marketing" }}
      schema={schema}
    />
  );
}
