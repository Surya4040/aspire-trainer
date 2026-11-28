import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aspireinfoedu.in"),
  title: {
    default: "Aspire Info | Training Vendors, Web Application Development & Best Online Courses in Coimbatore & India",
    template: "%s | Aspire Info"
  },
  description: "Aspire Info is the premier technical training vendor in Coimbatore and India. We provide on-demand technical faculty staffing for engineering colleges, custom Next.js web application development in Coimbatore, digital marketing search engine optimization (SEO), and the best online practical IT certification courses across Coimbatore, Tamil Nadu, South India, and pan-India.",
  keywords: [
    // Primary Coimbatore & Local Search Intent Keywords
    "best online course in coimbatore",
    "best online courses in coimbatore",
    "training vendors in coimbatore",
    "training ventors in coimbatore",
    "corporate training vendors in coimbatore",
    "technical training vendors in coimbatore",
    "college placement training vendors in coimbatore",
    "engineering college placement trainers coimbatore",
    "application development in coimbatore",
    "web application development in coimbatore",
    "website development company in coimbatore",
    "custom software development in coimbatore",
    "software development company in gandhipuram coimbatore",
    "web development in peelamedu saravanampatti coimbatore",
    "digital marketing in coimbatore",
    "digital marketing search engine",
    "digital marketing agency in coimbatore",
    "seo company in coimbatore",
    "best seo services in coimbatore",
    "search engine optimization coimbatore",
    "google ads agency in coimbatore",
    "local seo services coimbatore",
    "hire technical trainers in coimbatore",
    "technical faculty recruitment coimbatore",
    "mern stack training in coimbatore",
    "full stack web development course coimbatore",
    "python training in coimbatore",
    "java fullstack training in coimbatore",
    "sdet automation testing course coimbatore",
    "playwright automation training in coimbatore",
    "best it training institute in coimbatore with placement",
    "software courses in gandhipuram coimbatore",
    "it training in peelamedu saravanampatti coimbatore",
    "react js next js development company coimbatore",
    "mobile and web application development coimbatore",
    "it consulting firm coimbatore",

    // Tamil Nadu & Regional District SEO
    "Hire Technical Trainers Chennai",
    "Technical Faculty Staffing Madurai",
    "IT Corporate Trainers Trichy Tiruchirappalli",
    "Engineering College Faculty Salem Erode",
    "Technical Trainers Tirunelveli Vellore Thanjavur",
    "Placement Bootcamp Trainers Tiruppur Dindigul",
    "Placement Training Institutes in Pollachi",
    "Website Development Company Chennai",
    "Web Application Development Agency Tamil Nadu",
    "Digital Marketing Agency Tamil Nadu",
    "SEO Services in Salem Erode Tiruppur",

    // Karnataka, Telangana, Andhra Pradesh & Kerala
    "Hire Technical Trainers Bangalore Bengaluru",
    "Corporate Technical Training Vendors Bangalore",
    "Website Development Company Bangalore Karnataka",
    "Hire Technical Trainers Hyderabad",
    "College Bootcamp Trainers Warangal Karimnagar",
    "Corporate Trainers Visakhapatnam Vizag Vijayawada",
    "Hire Technical Trainers Kochi Kerala",
    "College Campus Trainers Trivandrum Thiruvananthapuram",
    "Website Development Company Kochi Kerala",

    // Pan-India & High-Intent Commercial SEO
    "Technical Trainer Sourcing India",
    "Top Corporate Training Vendors in India",
    "College Campus Placement Bootcamp Instructors",
    "Fullstack Java Python MERN Technical Instructors India",
    "Online IT Training Courses India with Web IDE",
    "Job Oriented Software Courses India with Placement",
    "Bespoke Next.js React Web Development Agency India",
    "Next.js Application Development Company India",
    "Custom Business Portal & SaaS Development India",
    "Technical SEO Agency India",
    "Search Engine Marketing Services India",
    "Aspire Info Coimbatore",
    "Aspire Info",
    "Aspire Info Edu"
  ],
  authors: [{ name: "Aspire Info", url: "https://www.aspireinfoedu.in" }],
  creator: "Aspire Info",
  publisher: "Aspire Info",
  category: "technology",
  classification: "IT Training, Software Services, Web Application Development, Digital Marketing",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "https://www.aspireinfoedu.in",
    languages: {
      "en-IN": "https://www.aspireinfoedu.in",
      "en-US": "https://www.aspireinfoedu.in",
    },
  },
  openGraph: {
    title: "Aspire Info | Training Vendors, Web Application Development & Best Online Courses in Coimbatore",
    description: "Leading technical training vendors in Coimbatore and pan-India. Deploy verified faculty for colleges, build high-performance Next.js web applications, and access the best online practical IT courses.",
    url: "https://www.aspireinfoedu.in",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspireinfoedu.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Aspire Info - Training Vendors, Web Application Development & Online Courses in Coimbatore & India",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Info | Training Vendors & Application Development in Coimbatore",
    description: "Best online courses, corporate training vendors, and bespoke web application development in Coimbatore and pan-India.",
    images: ["https://www.aspireinfoedu.in/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    "ICBM": "11.0168, 76.9558",
    "DC.title": "Aspire Info - Training Vendors, Web Application Development & Online Courses in Coimbatore",
    "DC.creator": "Aspire Info",
    "DC.description": "Premier technical training vendor, custom web application development company, digital marketing SEO agency, and best online practical IT courses in Coimbatore, Tamil Nadu, and India.",
    "DC.subject": "training vendors in coimbatore, best online course in coimbatore, application development in coimbatore, digital marketing search engine, technical trainers, hire it trainers",
    "DC.publisher": "Aspire Info",
    "DC.language": "en-IN",
    "rating": "general",
    "target": "all",
    "revisit-after": "2 days",
    "coverage": "India, Tamil Nadu, Coimbatore, South India, Worldwide",
    "distribution": "Global"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "EducationalOrganization", "ProfessionalService"],
        "@id": "https://www.aspireinfoedu.in/#organization",
        "name": "Aspire Info",
        "alternateName": [
          "Aspire Info Coimbatore", 
          "Aspire Info Education", 
          "Aspire Info Training Vendors & Software"
        ],
        "url": "https://www.aspireinfoedu.in",
        "logo": "https://www.aspireinfoedu.in/logo.svg",
        "image": "https://www.aspireinfoedu.in/logo.svg",
        "description": "Aspire Info is the top technical training vendor, custom application development firm, and digital marketing search engine optimization agency in Coimbatore, Tamil Nadu, serving engineering colleges, universities, and corporate clients nationwide.",
        "email": "aspireinfo.edu@gmail.com",
        "telephone": "+918220924040",
        "hasMap": "https://share.google/K2tk7WqErcGum90bn",
        "maps": "https://share.google/K2tk7WqErcGum90bn",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Coimbatore",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.0168",
          "longitude": "76.9558"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Coimbatore" },
          { "@type": "AdministrativeArea", "name": "Gandhipuram, Peelamedu, Saravanampatti, RS Puram, Thudiyalur, Coimbatore" },
          { "@type": "City", "name": "Pollachi" },
          { "@type": "City", "name": "Tiruppur" },
          { "@type": "City", "name": "Erode" },
          { "@type": "City", "name": "Salem" },
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Madurai" },
          { "@type": "City", "name": "Trichy" },
          { "@type": "City", "name": "Bengaluru" },
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "City", "name": "Kochi" },
          { "@type": "State", "name": "Tamil Nadu" },
          { "@type": "State", "name": "Karnataka" },
          { "@type": "State", "name": "Telangana" },
          { "@type": "State", "name": "Andhra Pradesh" },
          { "@type": "State", "name": "Kerala" },
          { "@type": "Country", "name": "India" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "135",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Aspire Info Services & Course Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Training Vendors in Coimbatore & Pan-India",
                "description": "On-demand subject matter experts and corporate training vendors for college bootcamps, workshops, and enterprise workforce upskilling in Coimbatore and across India."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Application Development & Modern Web Engineering in Coimbatore",
                "description": "Custom Next.js, React, and full-stack web application development, corporate portals, and e-commerce stores in Coimbatore and pan-India."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing & Search Engine Optimization (SEO) in Coimbatore",
                "description": "Page-1 Google organic search engine ranking optimization, targeted Google Search Ads, and Meta lead generation in Coimbatore and pan-India."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "Best Online IT Courses in Coimbatore with Web IDE Practice",
                "description": "3-month practical career upskilling courses in MERN Stack, Java Fullstack, Python Fullstack, SDET Automation, and AI/ML with live mentorship."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.aspireinfoedu.in/#website",
        "url": "https://www.aspireinfoedu.in",
        "name": "Aspire Info",
        "description": "Training Vendors, Web Application Development & Best Online Courses in Coimbatore",
        "publisher": { "@id": "https://www.aspireinfoedu.in/#organization" },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.aspireinfoedu.in/courses?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aspireinfoedu.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who are the top technical training vendors in Coimbatore for engineering colleges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aspire Info is recognized among the premier technical training vendors in Coimbatore and pan-India. We provide on-demand, vetted faculty across 24+ modern domains (Fullstack, Cloud, SDET, AI/ML) for campus placement bootcamps, hackathons, and corporate workshops with 48 to 72 hours rapid shortlisting."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find the best online course in Coimbatore with real-world practice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aspire Info offers the best online courses in Coimbatore featuring hands-on browser cloud practice IDEs, production capstone projects, and 1-on-1 mentor guidance in MERN Stack, Java Fullstack, Python, and SDET Test Automation."
            }
          },
          {
            "@type": "Question",
            "name": "Which company provides custom web application development in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aspire Info provides industry-leading web application development in Coimbatore, specializing in Next.js, React, serverless architectures, corporate web applications, and enterprise platforms with verified 95+ PageSpeed scores."
            }
          },
          {
            "@type": "Question",
            "name": "How does Aspire Info help businesses with digital marketing and search engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aspire Info delivers full-funnel digital marketing and search engine optimization (SEO) services in Coimbatore, helping companies secure Page-1 Google rankings, high-intent Google Ads search conversions, and targeted B2B lead generation."
            }
          }
        ]
      }
    ]
  };

  return (
    <html
      lang="en-IN"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-brand-950 text-white selection:bg-accent-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
