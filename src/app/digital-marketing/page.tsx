"use client";
import { useState } from 'react';
import { TrendingUp, CheckCircle2, Send, ArrowRight, Search, BarChart3, Target, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
    {
        title: "Search Engine Optimization (SEO)",
        scope: "Organic Google Search Dominance",
        badge: "Technical SEO",
        desc: "Structured on-page technical optimization, keyword research, meta tags, Core Web Vitals audit, and local SEO setup to help your website rank on page 1 of Google search across pan-India.",
        features: [
            "Targeted keyword & competitor gap analysis",
            "Google Search Console & XML sitemap configuration",
            "Local & district-level SEO alignment for regional reach",
            "Core Web Vitals & mobile indexing speed fixes"
        ]
    },
    {
        title: "Google Ads Management (PPC)",
        scope: "High-Intent Commercial Leads",
        badge: "Google Ads",
        desc: "Campaign architecture and budget optimization across Google Search and Performance Max networks targeting clients actively searching for your services.",
        features: [
            "High-intent search ad copy & negative keyword hygiene",
            "Conversion tracking & lead attribution funnels",
            "Automated smart bidding strategy & ROAS optimization",
            "Landing page conversion rate recommendations"
        ]
    },
    {
        title: "Meta (Instagram & Facebook) Ads",
        scope: "Social Lead Generation",
        badge: "Meta Ads",
        desc: "Campaign creation focused on localized awareness and direct lead capture with targeted audience segmentation and creative ad setups.",
        features: [
            "Hyper-local demographic & interest audience targeting",
            "High-converting visual copy and call-to-action testing",
            "Meta Pixel integration & custom conversions",
            "Instant lead form generation and CRM webhooks"
        ]
    },
    {
        title: "Performance Analytics & Monthly Reporting",
        scope: "Data Transparency & Growth Hygiene",
        badge: "Analytics",
        desc: "Clear monthly performance tracking of organic search positions, ad spend, cost-per-lead, and actionable next steps without vague marketing jargon.",
        features: [
            "Detailed monthly ranking & impression report",
            "Ad spend vs verified lead acquisition metrics",
            "Ongoing monthly strategy recommendations",
            "Dedicated campaign manager communication"
        ]
    }
];

const stats = [
    { value: "4.8x", label: "Average Campaign ROAS" },
    { value: "85%+", label: "Target Keywords on Page 1" },
    { value: "50k+", label: "Verified Inquiries Generated" },
    { value: "48h", label: "Campaign Launch Turnaround" }
];

export default function DigitalMarketingPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    service: "Digital Marketing / SEO Inquiry",
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    url: formData.get('url'),
                    objective: formData.get('objective'),
                    _subject: "Digital Marketing / SEO Consultation - Aspire Info"
                })
            });
            setSubmitted(true);
            form.reset();
        } catch {
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

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
                        Search Dominance &amp; Performance Advertising
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
                        DOMINATE SEARCH &amp; <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                            DRIVE CLIENT REVENUE.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                        We build and manage technical SEO strategies and performance ad campaigns on Google and Meta platforms engineered to capture high-intent inquiries.
                    </p>
                </div>

                {/* Benchmark Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((s, idx) => (
                        <div key={idx} className="bg-brand-900/80 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md shadow-xl hover:border-accent-500/40 transition-colors">
                            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">{s.value}</div>
                            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {services.map((svc, i) => (
                        <div 
                            key={i} 
                            className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl hover:border-accent-500/50 hover:bg-brand-900 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold text-accent-400 uppercase tracking-wider block">
                                        {svc.scope}
                                    </span>
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 text-white rounded-md">
                                        {svc.badge}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{svc.title}</h3>
                                <p className="text-slate-300/80 text-sm leading-relaxed mb-6 font-light">{svc.desc}</p>
                            </div>

                            <div className="space-y-2.5 border-t border-white/10 pt-5">
                                {svc.features.map((f, fi) => (
                                    <div key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Growth Consultation Form */}
                <div className="max-w-4xl mx-auto bg-brand-900/90 border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
                    <div className="text-center max-w-xl mx-auto mb-10">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                            Free Assessment
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                            Request a Growth Consultation
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 font-light mt-2">
                            Share your website and growth targets for an actionable audit of your organic search positions and ad opportunities.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="bg-brand-950 border border-accent-500/40 rounded-xl p-8 text-center">
                            <div className="w-12 h-12 bg-accent-500/20 text-accent-400 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Consultation Request Received</h3>
                            <p className="text-sm text-slate-300 font-light">
                                Thank you for submitting. Our marketing strategists will analyze your domain and contact you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Your Name / Brand *
                                    </label>
                                    <input 
                                        required 
                                        name="name" 
                                        type="text" 
                                        placeholder="e.g. Anand / Brand Co"
                                        className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Phone / WhatsApp *
                                    </label>
                                    <input 
                                        required 
                                        name="phone" 
                                        type="tel" 
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors" 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input 
                                        required 
                                        name="email" 
                                        type="email" 
                                        placeholder="you@company.com"
                                        className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Current Website URL
                                    </label>
                                    <input 
                                        name="url" 
                                        type="text" 
                                        placeholder="https://yourwebsite.com"
                                        className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                                    Primary Growth Objective
                                </label>
                                <textarea 
                                    name="objective" 
                                    rows={4} 
                                    placeholder="e.g. Want to rank #1 on Google for our services, run targeted Meta ads, or reduce cost per qualified lead..."
                                    className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors" 
                                />
                            </div>

                            <Button 
                                type="submit" 
                                disabled={submitting} 
                                variant="secondary"
                                className="w-full py-4 text-xs uppercase tracking-wider"
                            >
                                {submitting ? "Submitting Request..." : "Request Growth Consultation &rarr;"}
                            </Button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}
