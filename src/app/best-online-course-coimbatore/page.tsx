import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/sections/SeoLandingPage';

export const metadata: Metadata = {
  title: "Best Online Course in Coimbatore | Job-Oriented IT Training with Placement | Aspire Info",
  description: "Looking for the best online course in Coimbatore? Join Aspire Info's live instructor-led MERN Stack, Java Fullstack, Python Fullstack, SDET Automation & AI/ML courses with cloud IDE practice and placement support across Coimbatore, Chennai & Bangalore.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/best-online-course-coimbatore",
  },
  keywords: [
    "best online course in coimbatore",
    "best online courses in coimbatore",
    "best online course in chennai",
    "best online course in bangalore",
    "software courses in coimbatore with placement",
    "mern stack training in coimbatore",
    "java fullstack training in coimbatore",
    "python training in coimbatore",
    "sdet automation testing course coimbatore"
  ],
  openGraph: {
    title: "Best Online Course in Coimbatore | Aspire Info",
    description: "Practical IT courses in Coimbatore with interactive browser Cloud IDE practice and mock technical interviews.",
    url: "https://www.aspireinfoedu.in/best-online-course-coimbatore",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.aspireinfoedu.in/logo.svg", width: 1200, height: 630, alt: "Best Online Course in Coimbatore" }]
  }
};

export default function BestOnlineCourseCoimbatorePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Best Online IT & Software Certification Courses in Coimbatore",
        "description": "3-month project-driven online training in MERN Stack, Java Fullstack, Python Fullstack, SDET & Playwright Automation with Cloud IDE practice.",
        "provider": {
          "@type": "Organization",
          "name": "Aspire Info",
          "url": "https://www.aspireinfoedu.in",
          "telephone": "+918220924040"
        },
        "areaServed": ["Coimbatore", "Chennai", "Bangalore", "Tamil Nadu", "India"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best online course in Coimbatore for software jobs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aspire Info offers practical 3-month online IT courses in MERN Stack, Java Fullstack, Python Fullstack, SDET Automation, Playwright, and AI/ML designed around real GitHub projects and technical interviews."
            }
          },
          {
            "@type": "Question",
            "name": "Do Aspire Info courses include hands-on coding practice without complex setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Students can write, run, and test algorithms directly inside our browser Cloud Practice IDE alongside live mentor-led project engineering sessions."
            }
          }
        ]
      }
    ]
  };

  return (
    <SeoLandingPage
      badge="Career Upskilling Tracks"
      h1Top="Best Online Course"
      h1Highlight="In Coimbatore."
      subtitle="Master production software engineering with mentor-led 3-month cohorts in MERN Stack, Java Fullstack, Python, SDET Automation, and AI/ML—backed by browser cloud IDE labs and placement reviews."
      overviewTitle="Hands-On Practical Training Built for Real Engineering Hiring"
      overviewParagraphs={[
        "Students and working professionals searching for the best online course in Coimbatore, Chennai, or Bangalore need far more than passive recorded lectures. Product engineering teams hire developers who can write clean code, debug APIs, and defend production system architecture.",
        "At Aspire Info, every track teaches end-to-end engineering directly with experienced technical mentors, weekly code reviews, browser coding practice, and structured mock interviews."
      ]}
      serviceHighlights={[
        {
          title: "MERN & Java Fullstack Development (3 Months)",
          desc: "Build full-stack scalable web applications from database modeling to cloud deployment.",
          points: [
            "MongoDB, Express, React, Node.js or Java Spring Boot Microservices",
            "Authentication, REST APIs, state management & responsive Tailwind UI",
            "Production GitHub portfolio capstone defense"
          ]
        },
        {
          title: "SDET & Playwright QA Automation (2–3 Months)",
          desc: "High-demand software testing automation tracks built for fast QA career transitions.",
          points: [
            "Selenium WebDriver, TestNG, Cucumber & API RestAssured",
            "Modern Playwright end-to-end testing in TypeScript",
            "GitHub Actions CI/CD test execution pipelines"
          ]
        },
        {
          title: "Python Fullstack & AI / ML Foundations (3 Months)",
          desc: "Master Python backend architecture along with data analysis and practical machine learning pipelines.",
          points: [
            "Python, Django / FastAPI, PostgreSQL & frontend integration",
            "NumPy, Pandas, Scikit-learn & neural network fundamentals",
            "Applied capstone model deployment"
          ]
        },
        {
          title: "Interactive Cloud Practice IDE & Placement Support",
          desc: "Practice coding challenges seamlessly online with real-time feedback and interview mentorship.",
          points: [
            "Dedicated browser coding portal with JavaScript, Python & Java support",
            "Resume restructuring tailored for ATS and tech recruiters",
            "Mock technical and system-design interviews"
          ]
        }
      ]}
      serviceAreasTitle="Accessible Online Across Coimbatore, Chennai, Bangalore & Pan-India"
      serviceAreas={[
        "Coimbatore (Gandhipuram / Peelamedu / Saravanampatti)",
        "Chennai (OMR / Guindy / Tambaram)",
        "Bangalore (Whitefield / Electronic City / BTM / Koramangala)",
        "Tiruppur", "Erode", "Salem", "Madurai", "Trichy", "Hyderabad", "Kochi"
      ]}
      faqs={[
        {
          question: "Which is the best online course in Coimbatore for software jobs?",
          answer: "Aspire Info offers practical 3-month online IT courses in MERN Stack, Java Fullstack, Python Fullstack, SDET Automation, Playwright, and AI/ML designed around real GitHub projects and technical interviews."
        },
        {
          question: "Can students from Chennai and Bangalore also enroll?",
          answer: "Yes! All cohorts run online with live mentor instruction, making it convenient for students and professionals in Coimbatore, Chennai, Bangalore, and across India."
        }
      ]}
      primaryCta={{ label: "Browse All Courses", href: "/courses" }}
      secondaryCta={{ label: "Try Cloud Practice IDE", href: "/portal" }}
      schema={schema}
    />
  );
}
