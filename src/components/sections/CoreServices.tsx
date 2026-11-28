"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, 
    Globe, 
    TrendingUp, 
    ArrowRight, 
    CheckCircle2, 
    Sparkles, 
    GraduationCap
} from 'lucide-react';
import { Button } from '../ui/Button';

const servicePillars = [
    {
        id: "trainers",
        tabLabel: "Technical Training Vendors",
        icon: Users,
        badge: "Top Training Vendors in Coimbatore & India",
        title: "Deploy Vetted Technical Faculty On-Demand",
        description: "Coimbatore's trusted corporate training vendors providing experienced subject-matter practitioners for engineering colleges and corporate tech teams across India. Structured courseware, hands-on lab execution, and complete project evaluations.",
        keyPoints: [
            "120+ Vetted trainers across MERN, Java, Python, QA, AI & Cloud",
            "On-campus placement bootcamps in Coimbatore, online live batches, or hybrid delivery",
            "Custom syllabus design aligned with university curriculum & company stacks",
            "Fastest turnaround matching within 48 to 72 hours"
        ],
        ctaText: "Submit Trainer Scope",
        ctaHref: "/trainers",
        metric: { number: "120+", label: "Active Trainers Roster" }
    },
    {
        id: "web",
        tabLabel: "Application Development",
        icon: Globe,
        badge: "Application Development in Coimbatore",
        title: "Bespoke Modern Websites & Web Applications in Coimbatore",
        description: "From corporate brand websites and customer portals to custom SaaS dashboards and e-commerce stores, we engineer clean, blazing-fast web applications designed in Coimbatore to load instantly and convert visitors into clients.",
        keyPoints: [
            "Next.js, React, and Tailwind CSS for peak 95+ PageSpeed scores",
            "Mobile-first responsive UX with custom inquiry & contact funnels",
            "Payment gateway integration (Razorpay & Stripe) for e-commerce",
            "Clean maintainable code architecture with 1-month free deployment support"
        ],
        ctaText: "Request Website Quote",
        ctaHref: "/web-services",
        metric: { number: "95+", label: "Google PageSpeed Score" }
    },
    {
        id: "marketing",
        tabLabel: "Digital Marketing Search Engine",
        icon: TrendingUp,
        badge: "Digital Marketing Search Engine & SEO",
        title: "Drive Organic Search Rankings & High-Converting Leads in Coimbatore",
        description: "We build and execute data-driven digital marketing search engine optimization (SEO) and performance ad campaigns on Google and Meta platforms to bring qualified client inquiries to your business in Coimbatore and nationwide.",
        keyPoints: [
            "Technical on-page, local Coimbatore, and district-level SEO optimization",
            "High-intent Google Search & Performance Max ad management",
            "Meta (Instagram & Facebook) audience targeting and lead funnels",
            "Transparent monthly reporting on keyword positions and inquiry attribution"
        ],
        ctaText: "Request Growth Consultation",
        ctaHref: "/digital-marketing",
        metric: { number: "4.8x", label: "Average Campaign ROAS" }
    }
];

export function CoreServices() {
    const [activeTab, setActiveTab] = useState(0);
    const active = servicePillars[activeTab];
    const Icon = active.icon;

    return (
        <section className="py-24 bg-brand-950 text-white relative overflow-hidden border-b border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 font-bold text-xs uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Our Three Core Pillars
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 uppercase">
                        Enterprise Solutions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">Measurable Execution.</span>
                    </h2>
                    <p className="text-slate-300/80 text-base sm:text-lg font-light">
                        Select a pillar to explore deliverables, staffing workflows, and engineering standards.
                    </p>
                </div>

                {/* Interactive Animated Tabs */}
                <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
                    <div className="bg-brand-900 border border-white/10 p-1.5 rounded-xl inline-flex gap-2">
                        {servicePillars.map((pillar, idx) => {
                            const TabIcon = pillar.icon;
                            const isSelected = activeTab === idx;
                            return (
                                <button
                                    key={pillar.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`relative px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                                        isSelected
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {isSelected && (
                                        <motion.div
                                            layoutId="activeCoreTab"
                                            className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg shadow-lg shadow-accent-500/40"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <TabIcon className="w-4 h-4 relative z-10" />
                                    <span className="relative z-10">{pillar.tabLabel}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Animated Showcase Panel */}
                <div className="max-w-5xl mx-auto mb-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35 }}
                            className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                                <div className="lg:col-span-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-accent-400 text-xs font-bold uppercase tracking-wider mb-4">
                                        {active.badge}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight leading-snug">
                                        {active.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                                        {active.description}
                                    </p>

                                    <div className="space-y-3 mb-10">
                                        {active.keyPoints.map((pt, i) => (
                                            <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                                                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                                <span>{pt}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={active.ctaHref}>
                                        <Button variant="secondary" className="px-8 py-3.5 text-xs uppercase tracking-wider">
                                            {active.ctaText} &rarr;
                                        </Button>
                                    </Link>
                                </div>

                                <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-brand-950/80 rounded-xl border border-white/10 text-center shadow-inner">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-rose-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-accent-500/30">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-4xl font-black text-white tracking-tight">{active.metric.number}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{active.metric.label}</div>
                                    <div className="mt-4 text-[11px] text-accent-400/80 font-mono">Industry Benchmarked</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Secondary Offering Banner */}
                <div className="bg-brand-900 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                            <GraduationCap className="w-7 h-7" />
                        </div>
                        <div>
                            <span className="text-[11px] font-bold text-accent-400 uppercase tracking-widest">Secondary Upskilling Catalog</span>
                            <h4 className="text-lg font-bold text-white mt-0.5">Best Online Practical IT Courses in Coimbatore with Web IDE</h4>
                            <p className="text-slate-400 text-xs sm:text-sm mt-0.5 max-w-xl font-light">
                                Intensive 3-month courses in MERN, Java, Python, and QA Automation with browser-based code practice and mentorship.
                            </p>
                        </div>
                    </div>
                    <Link href="/courses">
                        <Button variant="outline" className="px-6 py-3 text-xs uppercase tracking-wider bg-white/5 border-white/10 hover:bg-white/10">
                            Browse Courses &rarr;
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
