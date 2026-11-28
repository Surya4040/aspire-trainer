import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/sections/SeoLandingPage';

export const metadata: Metadata = {
  title: "Training Vendors in Chennai & Bangalore | Corporate & College Technical Trainers | Aspire Info",
  description: "Trusted technical training vendor serving Chennai (OMR, Guindy, Velachery) and Bangalore (Whitefield, Electronic City, Koramangala, HSR Layout). Hire vetted IT trainers for bootcamps & corporate upskilling in 48-72h.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/training-vendors-chennai-bangalore",
  },
  keywords: [
    "training vendors in chennai",
    "training vendors in bangalore",
    "training vendors in bengaluru",
    "corporate training vendors in bangalore",
    "corporate training vendors in chennai",
    "hire technical trainers in chennai",
    "hire technical trainers in bangalore",
    "it corporate trainers in omr guindy whitefield electronic city"
  ],
  openGraph: {
    title: "Training Vendors in Chennai & Bangalore | Aspire Info",
    description: "Deploy vetted technical faculty across Chennai OMR/Guindy and Bangalore Whitefield/Electronic City/Koramangala.",
    url: "https://www.aspireinfoedu.in/training-vendors-chennai-bangalore",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.aspireinfoedu.in/logo.svg", width: 1200, height: 630, alt: "Training Vendors in Chennai and Bangalore" }]
  }
};

export default function TrainingVendorsChennaiBangalorePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Technical Training Vendors in Chennai & Bangalore",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Aspire Info",
          "url": "https://www.aspireinfoedu.in",
          "telephone": "+918220924040",
          "hasMap": "https://share.google/K2tk7WqErcGum90bn"
        },
        "areaServed": [
          "Chennai", "OMR", "Guindy", "Velachery", "Sholinganallur",
          "Bangalore", "Bengaluru", "Whitefield", "Electronic City", "Koramangala", "HSR Layout", "Manyata Tech Park"
        ],
        "description": "On-demand technical faculty and corporate IT trainers in Chennai and Bangalore."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Aspire Info provide corporate IT training vendors in Bangalore and Chennai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Aspire Info supplies practicing engineering instructors for corporate teams and engineering colleges across Bangalore (Whitefield, Electronic City, Koramangala) and Chennai (OMR, Guindy, Sriperumbudur)."
            }
          },
          {
            "@type": "Question",
            "name": "Which tech stacks are available for Chennai and Bangalore training batches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Java Microservices, MERN/Next.js, Python Fullstack, Playwright & Selenium SDET Automation, AWS/Kubernetes DevOps, DSA, and Enterprise AI/ML."
            }
          }
        ]
      }
    ]
  };

  return (
    <SeoLandingPage
      badge="Chennai & Bangalore Staffing"
      h1Top="Training Vendors In"
      h1Highlight="Chennai & Bangalore."
      subtitle="Enterprise L&D teams and engineering institutions across OMR Chennai and Bangalore tech corridors rely on Aspire Info for rapid 48-72h deployment of practicing full-stack, QA, Cloud, and AI trainers."
      overviewTitle="Scaling Technical Faculty Across South India's Premier Tech Hubs"
      overviewParagraphs={[
        "Technology parks in Chennai (OMR, Siruseri, Guindy, Velachery) and Bangalore (Whitefield, Electronic City, Koramangala, HSR Layout, Manyata Tech Park) demand instructors who ship real production software—not obsolete textbook material.",
        "Aspire Info rigorously evaluates every faculty member across code architecture, debugging depth, and live workshop communication before deploying them for lateral onboarding, campus placement bootcamps, or corporate upskilling sprints."
      ]}
      serviceHighlights={[
        {
          title: "Enterprise Lateral & Campus-to-Corporate Onboarding",
          desc: "Turn fresh engineering hires in Bangalore and Chennai IT parks into billable production engineers within weeks.",
          points: [
            "Java Spring Boot Microservices & React/Next.js",
            "Python FastAPI/Django & Cloud-native APIs",
            "Automated grading rubrics & code quality reviews"
          ]
        },
        {
          title: "SDET & QA Automation Transformation",
          desc: "Upskill manual QA analysts into full-stack test automation engineers writing resilient CI/CD frameworks.",
          points: [
            "Playwright with TypeScript & parallel reporting",
            "Selenium WebDriver, Java, RestAssured & CI/CD",
            "Real enterprise web app automation labs"
          ]
        },
        {
          title: "Chennai & Bangalore Engineering College Bootcamps",
          desc: "Partner with placement officers for intensive 1-week to full-semester product-company preparation.",
          points: [
            "DSA mastery tailored for Tier-1 SaaS & IT interviews",
            "System design primers & mock technical panels",
            "Offline on-campus or synchronized hybrid batches"
          ]
        },
        {
          title: "Cloud, DevOps & Applied AI Sprints",
          desc: "Modernize architecture teams with hands-on infrastructure-as-code and production LLM integration.",
          points: [
            "AWS, Docker, Kubernetes & GitHub Actions pipelines",
            "Applied Python, Scikit-learn & enterprise RAG",
            "Customized lab workbooks matched to internal tooling"
          ]
        }
      ]}
      serviceAreasTitle="Active Deployment Zones in Chennai & Bangalore"
      serviceAreas={[
        "OMR Chennai", "Guindy", "Velachery", "Sholinganallur", "Siruseri IT Park", "Tambaram",
        "Whitefield", "Electronic City", "Koramangala", "HSR Layout", "Indiranagar", "Manyata Tech Park", "Bellandur"
      ]}
      faqs={[
        {
          question: "Does Aspire Info provide corporate IT training vendors in Bangalore and Chennai?",
          answer: "Yes. Aspire Info supplies practicing engineering instructors for corporate teams and engineering colleges across Bangalore (Whitefield, Electronic City, Koramangala) and Chennai (OMR, Guindy, Sriperumbudur)."
        },
        {
          question: "Can we request a custom trainer shortlist within 48-72 hours?",
          answer: "Yes. Share your required tech stack, participant level, schedule, and delivery mode on our Hire Trainers page and receive vetted trainer profiles within 48 to 72 hours."
        }
      ]}
      primaryCta={{ label: "Hire Trainers Now", href: "/trainers" }}
      secondaryCta={{ label: "Request Custom Enterprise Scope", href: "/contact" }}
      schema={schema}
    />
  );
}
