import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Online Course in Coimbatore, Chennai & Bangalore | Practical IT & Software Training with Placement | Aspire Info",
  description: "Enroll in the best online courses across Coimbatore, Chennai, and Bangalore at Aspire Info. Project-driven IT training in MERN Stack, Java, Python, SDET Automation, and AI/ML featuring live in-browser cloud code IDE, mock interviews, and 100% placement support.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/courses",
  },
  keywords: [
    // Coimbatore
    "best online course in coimbatore",
    "best online courses in coimbatore",
    "software courses in coimbatore with placement",
    "it training institute in coimbatore",
    "full stack developer course in coimbatore",
    "mern stack training in coimbatore",
    "python training in coimbatore",
    "java fullstack training in coimbatore",
    "software testing course in coimbatore",

    // Chennai
    "best online course in chennai",
    "best online courses in chennai with placement",
    "software courses in chennai with placement",
    "it training institute in chennai",
    "full stack developer course in chennai",
    "mern stack training in chennai",
    "python fullstack training in chennai",
    "java fullstack training in chennai",
    "sdet training course in chennai",

    // Bangalore / Bengaluru
    "best online course in bangalore",
    "best online course in bengaluru",
    "best online courses in bangalore with placement",
    "software courses in bangalore with placement",
    "it training institute in bangalore",
    "full stack developer course in bangalore",
    "mern stack training in bangalore",
    "python fullstack course in bangalore",
    "java fullstack training in bangalore",
    "sdet automation course in bangalore",
    "it courses in bangalore with placement",

    // General & Placement
    "job oriented software courses in coimbatore chennai bangalore",
    "online coding classes with placement assistance south india",
    "best software training institute with 100 percent placement"
  ],
  openGraph: {
    title: "Best Online Course in Coimbatore, Chennai & Bangalore | Software Training | Aspire Info",
    description: "Hands-on online IT certification courses in Coimbatore, Chennai, and Bangalore with interactive cloud IDE and placement mentorship in MERN, Java, Python & SDET.",
    url: "https://www.aspireinfoedu.in/courses",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Best Online Course in Coimbatore Chennai Bangalore - Aspire Info",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Course in Coimbatore, Chennai & Bangalore | Aspire Info",
    description: "Project-based IT courses in Coimbatore, Chennai, and Bangalore with cloud IDE practice and guaranteed interview preparation.",
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
    "name": "Best Online IT Certification Courses in Coimbatore, Chennai & Bangalore",
    "description": "Comprehensive job-oriented software training courses across Coimbatore, Chennai, and Bangalore featuring practical browser IDE practice and placement support.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "MERN Full Stack Developer Course in Coimbatore, Chennai & Bangalore",
          "description": "Master MongoDB, Express.js, React, Node.js, and TypeScript with real-world production projects and placement mentorship.",
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
          "name": "Java Fullstack Microservices Course in Coimbatore, Chennai & Bangalore",
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
          "name": "Python Fullstack & Django / FastAPI Course in Coimbatore, Chennai & Bangalore",
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
          "name": "SDET Test Automation Engineering Course in Coimbatore, Chennai & Bangalore",
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
