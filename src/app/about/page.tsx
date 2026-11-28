import { CheckCircle2, Users, Globe, TrendingUp, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "About Us | Aspire Info — Training Vendors & Application Development in Coimbatore",
    description: "Learn about Aspire Info in Coimbatore, Tamil Nadu. Leading corporate training vendors, custom application development firm, and digital marketing search engine agency serving pan-India.",
    alternates: {
        canonical: "https://www.aspireinfoedu.in/about",
    }
};

const principles = [
    {
        title: "Hands-On Practical Delivery",
        desc: "Whether delivering a college campus bootcamp or engineering a business web application, we prioritize working code and tangible outcomes over dry theory."
    },
    {
        title: "Rigorous Technical Vetting",
        desc: "Every trainer on our roster is evaluated on active programming proficiency, architecture knowledge, and structured classroom communication."
    },
    {
        title: "Transparent Turnaround & SLA",
        desc: "Fast 48 to 72 hour trainer shortlisting, clear milestones, and straightforward pricing without confusing technical jargon or recruitment friction."
    }
];

export default function AboutPage() {
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
                        About Aspire Info
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
                        BRIDGING TECH TALENT &amp; <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                            DIGITAL EXECUTION.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                        Headquartered in Coimbatore, Tamil Nadu and serving institutions and enterprises across India, Aspire Info is a leading corporate training vendor, bespoke web application development company, and digital marketing search engine agency.
                    </p>
                </div>

                {/* Core Operations & Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
                    
                    {/* Left: Core Capabilities */}
                    <div className="lg:col-span-7 bg-brand-900/80 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-md shadow-2xl flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                                Core Capabilities
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                Purpose-Built for Colleges &amp; Growing Tech Teams
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                                We partner directly with university deans, placement directors, training heads, and startup founders who require verified subject-matter experts and production-grade digital assets without administrative friction.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-brand-950/60 border border-white/10">
                                    <Users className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white text-sm">Technical Trainer Sourcing</div>
                                        <p className="text-slate-400 text-xs mt-0.5 font-light">Deploying 120+ vetted mentors across Fullstack, AI, Java, Python, QA, and Cloud for campus bootcamps.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-brand-950/60 border border-white/10">
                                    <Globe className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white text-sm">Bespoke Web Development</div>
                                        <p className="text-slate-400 text-xs mt-0.5 font-light">Engineered with Next.js, React, and modern cloud stacks for 95+ PageSpeed scores and lead conversion.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-brand-950/60 border border-white/10">
                                    <TrendingUp className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white text-sm">SEO &amp; Performance Marketing</div>
                                        <p className="text-slate-400 text-xs mt-0.5 font-light">Page-1 Google ranking strategies and high-ROAS targeted ad campaigns delivering qualified inquiries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Operating Principles */}
                    <div className="lg:col-span-5 bg-gradient-to-b from-brand-900 to-brand-950 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-md shadow-2xl flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                                Quality Standards
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
                                Operating Principles
                            </h2>

                            <div className="space-y-6">
                                {principles.map((pr, idx) => (
                                    <div key={idx} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-accent-500" />
                                            <h3 className="font-bold text-white text-sm uppercase tracking-wide">{pr.title}</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed pl-6">{pr.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 mt-6">
                            <div className="text-[11px] font-mono text-accent-400 uppercase tracking-widest">
                                Pan-India Institutional Network
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto backdrop-blur-md shadow-2xl">
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3">
                        Discuss Your Upcoming Requirements
                    </h2>
                    <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
                        Reach out to discuss your college campus bootcamp timeline, website engineering project, or performance marketing targets.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/trainers">
                            <Button variant="secondary" className="px-8 py-3.5 text-xs uppercase tracking-wider">
                                Hire a Trainer &rarr;
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="px-8 py-3.5 text-xs uppercase tracking-wider bg-white/5 border-white/10 hover:bg-white/10">
                                General Inquiries &rarr;
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
