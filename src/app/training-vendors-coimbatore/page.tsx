import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/sections/SeoLandingPage';

export const metadata: Metadata = {
  title: "Training Vendors in Coimbatore | Engineering College & Corporate IT Trainers | Aspire Info",
  description: "Leading technical training vendor in Coimbatore. Hire industry-vetted faculty across 24+ tech stacks for college placement bootcamps, FDPs, workshops, and corporate training in 48-72 hours.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/training-vendors-coimbatore",
  },
  keywords: [
    "training vendors in coimbatore",
    "training ventors in coimbatore",
    "corporate training vendors in coimbatore",
    "college placement training vendors in coimbatore",
    "hire technical trainers in coimbatore",
    "engineering college placement trainers coimbatore"
  ],
  openGraph: {
    title: "Training Vendors in Coimbatore | Aspire Info",
    description: "Hire vetted technical faculty for Coimbatore college placement bootcamps and enterprise upskilling.",
    url: "https://www.aspireinfoedu.in/training-vendors-coimbatore",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.aspireinfoedu.in/logo.svg", width: 1200, height: 630, alt: "Training Vendors in Coimbatore" }]
  }
};

export default function TrainingVendorsCoimbatorePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Technical Training Vendors in Coimbatore",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Aspire Info",
          "url": "https://www.aspireinfoedu.in",
          "telephone": "+918220924040",
          "hasMap": "https://share.google/K2tk7WqErcGum90bn",
          "address": { "@type": "PostalAddress", "addressLocality": "Coimbatore", "addressRegion": "Tamil Nadu", "addressCountry": "IN" }
        },
        "areaServed": ["Coimbatore", "Pollachi", "Tiruppur", "Erode", "Salem", "Tamil Nadu"],
        "description": "Verified technical faculty staffing and placement bootcamp training vendors in Coimbatore."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can Aspire Info deploy technical trainers in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aspire Info shortlists verified subject-matter experts within 48 to 72 hours for Coimbatore colleges, universities, and corporate enterprises."
            }
          },
          {
            "@type": "Question",
            "name": "What technical domains do your Coimbatore training programs cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our 120+ mentor roster delivers training across MERN Stack, Java Fullstack (Spring Boot), Python, DSA, SDET & Playwright Automation, Cloud/DevOps, and AI/ML."
            }
          }
        ]
      }
    ]
  };

  return (
    <SeoLandingPage
      badge="Coimbatore Faculty Staffing"
      h1Top="Technical Training"
      h1Highlight="Vendors in Coimbatore."
      subtitle="Deploy industry-vetted technical faculty across 24+ engineering stacks for Coimbatore college placement bootcamps, Faculty Development Programs (FDP), and enterprise team upskilling."
      overviewTitle="Trusted Training Partner for Coimbatore Engineering Colleges & Enterprises"
      overviewParagraphs={[
        "Coimbatore hosts one of South India's strongest concentrations of engineering colleges and manufacturing-IT enterprises. Placement cells and L&D heads rely on Aspire Info to supply practicing software engineers who teach hands-on coding labs instead of slide-only theory.",
        "Whether you need full-semester placement readiness in Peelamedu, weekend certification workshops in Saravanampatti, or corporate full-stack transitions in Gandhipuram, we shortlist vetted trainers in 48 to 72 hours."
      ]}
      serviceHighlights={[
        {
          title: "Campus Placement Bootcamps",
          desc: "Structured coding and interview cohorts tailored to convert final-year and pre-final students into Day-1 product hires.",
          points: [
            "Data Structures & Algorithms (Java, C++, Python)",
            "Full-Stack capstone building & GitHub portfolios",
            "Company-specific mock tests & technical interview prep"
          ]
        },
        {
          title: "Corporate Workforce Upskilling",
          desc: "Targeted hands-on enterprise tracks to modernize existing engineering and QA teams rapidly.",
          points: [
            "MERN, Next.js, Java Microservices & Spring Boot",
            "Manual-to-SDET Playwright / Selenium transition",
            "AWS, Docker, Kubernetes & CI/CD automation"
          ]
        },
        {
          title: "Faculty Development Programs (FDPs)",
          desc: "Specialized workshops empowering academic professors with real-world cloud, DevOps, and generative AI engineering patterns.",
          points: [
            "NEP-aligned industry lab project setup",
            "Practical live coding sandboxes",
            "Certification & assessment rubrics"
          ]
        },
        {
          title: "Custom Syllabus & SLA Governance",
          desc: "Complete operational accountability from trainer shortlisting to daily attendance and assessment reports.",
          points: [
            "48-72 hour rapid faculty profile shortlisting",
            "Backup mentor guarantee across multi-week cohorts",
            "Flexible onsite Coimbatore or live online delivery"
          ]
        }
      ]}
      serviceAreasTitle="On-Campus & Corporate Training Coverage Across Kongu Region & Tamil Nadu"
      serviceAreas={[
        "Coimbatore", "Peelamedu", "Saravanampatti", "Gandhipuram", "Pollachi",
        "Tiruppur", "Erode", "Salem", "Namakkal", "Karur", "Chennai", "Bangalore"
      ]}
      faqs={[
        {
          question: "How quickly can Aspire Info deploy technical trainers in Coimbatore?",
          answer: "Aspire Info shortlists verified subject-matter experts within 48 to 72 hours for Coimbatore colleges, universities, and corporate enterprises."
        },
        {
          question: "Do you handle both onsite college batches and virtual corporate training?",
          answer: "Yes. Our trainers conduct offline campus bootcamps throughout Coimbatore, Pollachi, Tiruppur, and Erode as well as live interactive remote cohorts across India."
        }
      ]}
      primaryCta={{ label: "Request Trainer Profiles", href: "/trainers" }}
      secondaryCta={{ label: "See Chennai & Bangalore Staffing", href: "/training-vendors-chennai-bangalore" }}
      schema={schema}
    />
  );
}
