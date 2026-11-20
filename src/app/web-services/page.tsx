"use client";
import { useState } from 'react';
import { Globe, CheckCircle2, Send, ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const services = [
    {
        title: "Corporate & Brand Websites",
        desc: "Custom modern websites engineered with Next.js and Tailwind CSS. Clean, mobile-first layouts designed to establish high credibility and capture inbound leads.",
        features: ["Semantic and fast-loading architecture", "Mobile, tablet and desktop responsive", "Optimized inquiry and contact funnels"],
        badge: "Next.js & React"
    },
    {
        title: "E-Commerce Stores",
        desc: "High-converting digital storefronts with secure payment gateway integration (Razorpay, Stripe), product catalogs, shopping carts, and order processing workflows.",
        features: ["Turnkey payment gateway configuration", "Product catalog & inventory layout", "Frictionless mobile checkout"],
        badge: "Razorpay / Stripe"
    },
    {
        title: "Custom Web Portals & Dashboards",
        desc: "Role-based dashboards, internal customer portals, and lightweight SaaS platforms tailored to specific company operational requirements.",
        features: ["User authentication & role-based access", "RESTful API & database connections", "Cloud hosting on Vercel / AWS"],
        badge: "Full Stack"
    },
    {
        title: "Website Redesign & Modernization",
        desc: "Upgrading outdated websites to modern design standards, cleaner typography, 95+ PageSpeed scores, and search-friendly markup.",
        features: ["Modern UI and typography refresh", "Performance audit & Core Web Vitals cleanup", "Technical on-page SEO integration"],
        badge: "Modernization"
    }
];

const packages = [
    {
        name: "Standard Business",
        badge: "Starter",
        scope: "Best for Local Businesses & Consultancies",
        features: [
            "Up to 5 Custom Engineered Pages",
            "Modern Responsive Stack (Next.js & Tailwind)",
            "Contact Form & WhatsApp Direct Link",
            "Google Search Console & Analytics Setup",
            "1 Month Free Deployment Support"
        ],
        highlight: false
    },
    {
        name: "Growth Professional",
        badge: "Most Popular",
        scope: "Best for Growing Companies & Institutes",
        features: [
            "Up to 10 Custom Pages with Dynamic Routing",
            "Custom UI/UX Prototyping",
            "High-Converting Lead Capture Funnels",
            "On-Page Technical SEO & Meta Tags",
            "Google PageSpeed 95+ Guarantee",
            "2 Months Free Deployment Support"
        ],
        highlight: true
    },
    {
        name: "Custom / E-Commerce",
        badge: "Enterprise",
        scope: "Best for Stores & Web Applications",
        features: [
            "Full Store / Web Application Scope",
            "Secure Payment Gateway Integration",
            "Admin Management Dashboard",
            "Database & Third-Party API Integrations",
            "Role-Based Access Control",
            "Dedicated Post-Launch Engineering Support"
        ],
        highlight: false
    }
];

export default function WebServicesPage() {
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
                    service: "Website Development Inquiry",
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    projectType: formData.get('projectType'),
                    details: formData.get('details'),
                    _subject: "Website Development Inquiry - Aspire Info"
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
                        Full-Stack Web Engineering
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
                        WE ENGINEER <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                            MODERN WEBSITES.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                        Bespoke Next.js and React corporate portals, business web applications, and e-commerce stores designed to load in milliseconds and convert visitors into clients.
                    </p>
                </div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-24">
                    {services.map((svc, i) => (
                        <div 
                            key={i} 
                            className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl hover:border-accent-500/50 hover:bg-brand-900 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 flex items-center justify-center">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 text-accent-400 rounded-md">
                                        {svc.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                                <p className="text-slate-300/80 text-sm leading-relaxed mb-6 font-light">{svc.desc}</p>
                            </div>
                            
                            <div className="space-y-2.5 border-t border-white/10 pt-5">
                                {svc.features.map((f, fi) => (
                                    <div key={fi} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Packages Section */}
                <div className="mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                            Deployment Tiers
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                            Transparent Scopes. Guaranteed Speed.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {packages.map((pkg, i) => (
                            <div 
                                key={i} 
                                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                                    pkg.highlight 
                                        ? 'bg-gradient-to-b from-brand-900 to-brand-950 border-2 border-accent-500 shadow-2xl shadow-accent-500/20 lg:-translate-y-2' 
                                        : 'bg-brand-900/80 border border-white/10 shadow-xl'
                                }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute top-0 right-0 bg-accent-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-bl-xl shadow-md">
                                        {pkg.badge}
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-1">{pkg.name}</h3>
                                    <p className="text-xs text-slate-400 mb-6 font-light">{pkg.scope}</p>

                                    <div className="space-y-3 mb-8">
                                        {pkg.features.map((feat, fi) => (
                                            <div key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                                                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <a href="#quote-form" className="w-full">
                                    <Button 
                                        variant={pkg.highlight ? "secondary" : "outline"} 
                                        className={`w-full py-3.5 text-xs uppercase tracking-wider ${
                                            !pkg.highlight ? 'bg-white/5 border-white/10 hover:bg-white/10' : ''
                                        }`}
                                    >
                                        Request Quote &rarr;
                                    </Button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Estimate Inquiry Form */}
                <div id="quote-form" className="max-w-4xl mx-auto bg-brand-900/90 border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
                    <div className="text-center max-w-xl mx-auto mb-10">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                            Direct Proposal
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                            Request a Project Estimate
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 font-light mt-2">
                            Share your requirements and our engineering team will provide a transparent proposal within 24 hours.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="bg-brand-950 border border-accent-500/40 rounded-xl p-8 text-center">
                            <div className="w-12 h-12 bg-accent-500/20 text-accent-400 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Inquiry Submitted Successfully</h3>
                            <p className="text-sm text-slate-300 font-light">
                                Thank you for reaching out. We will review your web project requirements and contact you promptly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Your Name / Company *
                                    </label>
                                    <input 
                                        required 
                                        name="name" 
                                        type="text" 
                                        placeholder="e.g. Ramesh / Tech Corp"
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
                                        Project Type
                                    </label>
                                    <select 
                                        name="projectType"
                                        className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors"
                                    >
                                        <option value="Corporate / Brand Website">Corporate / Brand Website</option>
                                        <option value="E-Commerce Store">E-Commerce Store</option>
                                        <option value="Custom Portal / SaaS">Custom Portal / SaaS Dashboard</option>
                                        <option value="Website Redesign">Website Redesign &amp; Optimization</option>
                                        <option value="Other">Other Custom Requirement</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                                    Project Scope &amp; Features Needed
                                </label>
                                <textarea 
                                    name="details" 
                                    rows={4} 
                                    placeholder="Describe number of pages, desired features, reference websites, or deadlines..."
                                    className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors" 
                                />
                            </div>

                            <Button 
                                type="submit" 
                                disabled={submitting} 
                                variant="secondary"
                                className="w-full py-4 text-xs uppercase tracking-wider"
                            >
                                {submitting ? "Submitting Inquiry..." : "Submit Project Inquiry &rarr;"}
                            </Button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}
