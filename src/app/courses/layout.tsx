import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Online Course in Coimbatore | Practical IT & Software Training with Placement | Aspire Info",
  description: "Enroll in the best online courses in Coimbatore at Aspire Info. Project-driven IT training in MERN Stack, Java, Python, SDET Automation, and AI/ML featuring live in-browser cloud code IDE, mock interviews, and 100% placement support.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/courses",
  },
  keywords: [
    "best online course in coimbatore",
    "best online courses in coimbatore",
    "software courses in coimbatore with placement",
    "it training institute in coimbatore",
    "full stack developer course in coimbatore",
    "mern stack training in coimbatore",
    "python training in coimbatore",
    "java fullstack training in coimbatore",
    "software testing course in coimbatore",
    "sdet training in coimbatore",
    "playwright automation course coimbatore",
    "it courses in gandhipuram coimbatore",
    "it training in peelamedu saravanampatti coimbatore",
    "best it training institute in coimbatore with placement",
    "job oriented software courses in coimbatore",
    "online coding classes with placement assistance india"
  ],
  openGraph: {
    title: "Best Online Course in Coimbatore | Software Training | Aspire Info",
    description: "Hands-on online IT certification courses in Coimbatore with interactive cloud IDE and placement mentorship in MERN, Java, Python & SDET.",
    url: "https://www.aspireinfoedu.in/courses",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Best Online Course in Coimbatore - Aspire Info",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Course in Coimbatore | Aspire Info",
    description: "Project-based IT courses in Coimbatore with cloud IDE practice and guaranteed interview preparation.",
    images: ["https://www.aspireinfoedu.in/logo.svg"],
  }
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const coursesCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.aspireinfoedu.in/courses#catalog",
    "name": "Best Online IT Certification Courses in Coimbatore",
    "description": "Comprehensive job-oriented software training courses in Coimbatore featuring practical browser IDE practice and placement support.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "MERN Full Stack Developer Course in Coimbatore",
          "description": "Master MongoDB, Express.js, React, Node.js, and TypeScript with real-world production projects.",
          "provider": {
            "@type": "Organization",
            "name": "Aspire Info",
            "url": "https://www.aspireinfoedu.in"
          },
          "url": "https://www.aspireinfoedu.in/courses/mern-stack"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Java Fullstack Microservices Course in Coimbatore",
          "description": "Core Java, Spring Boot, Microservices, Hibernate, REST APIs, and modern frontend integration.",
          "provider": {
            "@type": "Organization",
            "name": "Aspire Info",
            "url": "https://www.aspireinfoedu.in"
          },
          "url": "https://www.aspireinfoedu.in/courses/java-fullstack"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Course",
          "name": "Python Fullstack & Django / FastAPI Course in Coimbatore",
          "description": "Python fundamentals, backend architecture with Django/FastAPI, database engineering, and React frontend.",
          "provider": {
            "@type": "Organization",
            "name": "Aspire Info",
            "url": "https://www.aspireinfoedu.in"
          },
          "url": "https://www.aspireinfoedu.in/courses/python-fullstack"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Course",
          "name": "SDET Test Automation Engineering Course in Coimbatore",
          "description": "Selenium WebDriver, TestNG, Playwright, API Automation, and CI/CD pipelines for modern QA engineers.",
          "provider": {
            "@type": "Organization",
            "name": "Aspire Info",
            "url": "https://www.aspireinfoedu.in"
          },
          "url": "https://www.aspireinfoedu.in/courses/sdet"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesCatalogSchema) }}
      />
      {children}
    </>
  );
}
