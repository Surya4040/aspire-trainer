import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Practice Portal & Interactive Code IDE | Aspire Info Coimbatore",
  description: "Experience hands-on programming with Aspire Info's cloud browser IDE. Solve coding challenges in JavaScript, Python, and Java with real-time feedback and test suites.",
  alternates: {
    canonical: "https://www.aspireinfoedu.in/portal",
  },
  keywords: [
    "online coding ide",
    "cloud coding practice portal coimbatore",
    "interactive javascript python practice ide",
    "best online course in coimbatore practice portal",
    "aspire info practice code ide"
  ],
  robots: {
    index: true,
    follow: true,
  }
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
