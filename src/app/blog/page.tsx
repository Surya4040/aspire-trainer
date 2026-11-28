import Link from 'next/link';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { blogArticles } from '@/lib/seo-content';

export const metadata: Metadata = {
    title: "Blog & Technical Insights | Training Vendors, Web Engineering & SEO | Aspire Info",
    description: "Explore technical articles on hiring training vendors in Coimbatore, Chennai & Bangalore, full stack web application development, cracking tech interviews, and modern digital marketing strategies.",
    alternates: {
        canonical: "https://www.aspireinfoedu.in/blog",
    },
    keywords: [
        "aspire info blog",
        "training vendors in coimbatore insights",
        "training vendors in chennai bangalore",
        "application development in coimbatore guides",
        "digital marketing search engine tips",
        "best online course in bangalore reviews",
        "best online course in coimbatore reviews",
        "cracking software interviews 2026",
        "mern stack vs nextjs",
        "sdet automation frameworks"
    ],
    openGraph: {
        title: "Blog & Technical Insights | Aspire Info Coimbatore, Chennai & Bangalore",
        description: "Technical articles on modern software engineering, faculty staffing, and digital growth.",
        url: "https://www.aspireinfoedu.in/blog",
        siteName: "Aspire Info",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.aspireinfoedu.in/logo.svg",
                width: 1200,
                height: 630,
                alt: "Aspire Info Technical Blog",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog & Technical Insights | Aspire Info",
        description: "Technical articles on software engineering, faculty staffing, and digital growth.",
        images: ["https://www.aspireinfoedu.in/logo.svg"],
    }
};

const regionalGuides = [
    {
        title: "Application Development in Coimbatore",
        desc: "Custom Next.js web portals, SaaS dashboards & high-speed sites engineered for Coimbatore enterprises.",
        href: "/application-development-coimbatore"
    },
    {
        title: "Training Vendors in Coimbatore",
        desc: "On-demand technical faculty staffing for engineering college bootcamps and corporate cohorts across Coimbatore.",
        href: "/training-vendors-coimbatore"
    },
    {
        title: "Training Vendors in Chennai & Bangalore",
        desc: "Rapid 48-72h deployment of vetted IT corporate & campus trainers in OMR, Guindy, Whitefield & Koramangala.",
        href: "/training-vendors-chennai-bangalore"
    },
    {
        title: "Best Online Course in Coimbatore",
        desc: "Job-oriented IT certification courses in MERN, Java, Python & SDET with interactive cloud IDE practice.",
        href: "/best-online-course-coimbatore"
    }
];

export default function BlogPage() {
    return (
        <div className="bg-brand-950 text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-accent-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium text-xs tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                        Engineering Articles &amp; Guides
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
                        INSIGHTS &amp; <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                            TECH PERSPECTIVES.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                        Articles, architecture breakdowns, and career perspectives written by our mentors and software engineers.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {blogArticles.map((article) => (
                        <div 
                            key={article.slug} 
                            className="bg-brand-900/80 rounded-2xl border border-white/10 p-8 hover:border-accent-500/50 hover:bg-brand-900 hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-md shadow-2xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 text-accent-400 rounded-md">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-accent-400" />
                                        {article.date}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-3 hover:text-accent-300 transition-colors">
                                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                                </h2>
                                <p className="text-slate-300/80 text-sm leading-relaxed mb-6 font-light">
                                    {article.excerpt}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <Link 
                                    href={`/blog/${article.slug}`} 
                                    className="text-xs font-mono font-bold uppercase tracking-wider text-accent-400 hover:text-accent-300 inline-flex items-center gap-1 transition-colors"
                                >
                                    <span>Read Article</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regional & Service Guides Directory */}
                <div className="border-t border-white/10 pt-16">
                    <div className="mb-10">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                            Regional Directories
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                            Coimbatore, Chennai &amp; Bangalore Guides
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {regionalGuides.map((guide) => (
                            <Link
                                key={guide.href}
                                href={guide.href}
                                className="group bg-brand-900/60 border border-white/10 hover:border-accent-500/40 rounded-2xl p-6 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider mb-2">
                                        <MapPin className="w-3.5 h-3.5" />
                                        <span>Service Overview</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors mb-2">
                                        {guide.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                                        {guide.desc}
                                    </p>
                                </div>
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-400 inline-flex items-center gap-1">
                                    <span>View Guide</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
