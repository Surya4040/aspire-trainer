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
  metadataBase: new URL("https://aspireinfo.com"),
  title: {
    default: "Aspire Info | Technical Trainer Sourcing, Custom Web Development & Online Courses Across India",
    template: "%s | Aspire Info"
  },
  description: "Aspire Info is India's leading platform for hiring corporate and college technical trainers, bespoke Next.js website creation, performance SEO marketing, and practical online IT certification courses across every single district of Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, Kerala and pan-India.",
  keywords: [
    // South Indian Regional & District SEO Keywords
    // Tamil Nadu Districts
    "Hire Technical Trainers Chennai",
    "Hire Technical Trainers Coimbatore",
    "College Bootcamp Trainers Madurai",
    "IT Corporate Trainers Trichy Tiruchirappalli",
    "Engineering College Faculty Salem Erode",
    "Technical Trainers Tirunelveli Vellore Thanjavur",
    "Technical Trainer Sourcing Kanyakumari Tuticorin Dindigul",
    "Website Development Company Chennai",
    "Website Creation Services Coimbatore Madurai Trichy",
    
    // Karnataka Districts
    "Hire Technical Trainers Bangalore Bengaluru",
    "Corporate Technical Trainers Mysore Mysuru",
    "College Faculty Staffing Mangalore Hubli Belgaum",
    "Website Development Company Bangalore Karnataka",

    // Telangana & Andhra Pradesh Districts
    "Hire Technical Trainers Hyderabad",
    "College Bootcamp Trainers Warangal Karimnagar",
    "Technical Faculty Staffing Visakhapatnam Vizag",
    "Corporate Trainers Vijayawada Guntur Tirupati",
    "Website Development Services Hyderabad Vizag",

    // Kerala Districts
    "Hire Technical Trainers Kochi Ernakulam",
    "College Campus Trainers Trivandrum Thiruvananthapuram",
    "Corporate Faculty Kozhikode Calicut Thrissur",
    "Website Development Company Kochi Kerala",

    // Pan-India & National SEO
    "Technical Trainer Sourcing India",
    "Hire Corporate Technical Trainers India",
    "College Campus Placement Bootcamp Trainers",
    "Fullstack Java Python MERN Technical Instructors India",
    "Online IT Training Courses India",
    "Job Oriented Software Courses India with Placement",
    "Best MERN Stack Course Online India",
    "Java Spring Boot Fullstack Course with Live Projects",
    "Python Django Data Science Online Training India",
    "Custom Website Development Company India",
    "Bespoke Next.js React Web Development Agency India",
    "Technical SEO Agency India",
    "Aspire Info"
  ],
  authors: [{ name: "Aspire Info", url: "https://aspireinfo.com" }],
  creator: "Aspire Info",
  publisher: "Aspire Info",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "https://aspireinfo.com",
  },
  openGraph: {
    title: "Aspire Info | Technical Trainer Sourcing, Web Development & Online Courses Across India",
    description: "Source verified IT trainers for engineering colleges & enterprises across every South Indian district, build modern high-speed websites, and upskill with practical online IT courses.",
    url: "https://aspireinfo.com",
    siteName: "Aspire Info",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aspireinfo.com/icon.svg",
        width: 800,
        height: 600,
        alt: "Aspire Info - South India & Pan India Trainer Staffing & Digital Agency",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Info | Trainer Sourcing, Web Development & IT Courses Across India",
    description: "South India district-wide technical faculty staffing, high-speed bespoke website creation, and online coding courses.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aspireinfo.com/#organization",
        "name": "Aspire Info",
        "url": "https://aspireinfo.com",
        "logo": "https://aspireinfo.com/icon.svg",
        "description": "Technical trainer sourcing agency, web development firm, and online IT training provider serving colleges, universities, and corporate enterprises across every district of Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, Kerala and all Indian states.",
        "email": "aspireinfo.edu@gmail.com",
        "telephone": "+918220924040",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "Tamil Nadu & Pan-India"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Tamil Nadu - Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Erode, Vellore, Thanjavur, Dindigul, Tiruppur, Kanyakumari" },
          { "@type": "AdministrativeArea", "name": "Karnataka - Bengaluru, Mysuru, Mangaluru, Hubballi, Belagavi, Davanagere, Udupi" },
          { "@type": "AdministrativeArea", "name": "Telangana - Hyderabad, Warangal, Karimnagar, Nizamabad, Khammam" },
          { "@type": "AdministrativeArea", "name": "Andhra Pradesh - Visakhapatnam, Vijayawada, Guntur, Tirupati, Kurnool, Nellore" },
          { "@type": "AdministrativeArea", "name": "Kerala - Thiruvananthapuram, Kochi, Kozhikode, Thrissur, Kannur, Kollam" },
          { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Aspire Info Core Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Trainer Sourcing for Colleges & Corporates",
                "description": "Deploying vetted technical faculty for campus bootcamps, corporate upskilling, and workshops across South India and pan-India."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Creation & Web Development",
                "description": "Full-stack Next.js and React business websites, corporate portals, and e-commerce stores."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Online Practical IT Courses",
                "description": "Job-oriented intensive 3-month courses in MERN, Java, Python, SDET, and AI with live mentorship."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO) & Performance Marketing",
                "description": "Technical on-page, local, and district-wide SEO optimization, Google Ads, and Meta advertising."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aspireinfo.com/#website",
        "url": "https://aspireinfo.com",
        "name": "Aspire Info",
        "publisher": { "@id": "https://aspireinfo.com/#organization" },
        "inLanguage": "en-IN"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
