"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { CheckCircle2, ChevronLeft, ChevronRight, Users, Globe, TrendingUp } from 'lucide-react';

const heroSlides = [
    {
        badge: "India's Premier Technical Staffing",
        titlePrefix: "SOURCE QUALIFIED",
        titleHighlight: "TECH TRAINERS.",
        description: "Deploy industry-vetted faculty across 24+ technical domains for engineering college bootcamps, workshops, and corporate workforce upskilling.",
        primaryCTA: { label: "Hire a Trainer", href: "/trainers" },
        secondaryCTA: { label: "Explore Stacks", href: "#domains" },
        terminalHeader: "trainer-pool.ts",
        terminalLines: [
            { text: "$ npx @aspire/match-faculty --domain=all", color: "text-white" },
            { text: "Searching 120+ vetted mentors...", color: "text-slate-400" },
            { text: "✓ Faculty shortlisted in 48-72h", color: "text-green-400" },
            { text: "✓ Hands-on curriculum & labs ready", color: "text-green-400" },
            { text: "✓ College & Enterprise verified", color: "text-blue-300 font-bold" }
        ]
    },
    {
        badge: "Full-Stack Web Engineering",
        titlePrefix: "WE ENGINEER",
        titleHighlight: "MODERN WEBSITES.",
        description: "Bespoke Next.js and React business web applications, custom corporate portals, and e-commerce stores designed to load in milliseconds and convert leads.",
        primaryCTA: { label: "Build Your Website", href: "/web-services" },
        secondaryCTA: { label: "View Packages", href: "/web-services#quote-form" },
        terminalHeader: "next.config.ts",
        terminalLines: [
            { text: "$ npm run build && npm run deploy", color: "text-white" },
            { text: "Compiling high-performance routes...", color: "text-slate-400" },
            { text: "✓ Google PageSpeed Score: 95+", color: "text-green-400" },
            { text: "✓ Turnkey Payment Gateway Integrated", color: "text-green-400" },
            { text: "✓ Conversion Funnels Active", color: "text-accent-400 font-bold" }
        ]
    },
    {
        badge: "Data-Driven Performance Growth",
        titlePrefix: "DOMINATE SEARCH &",
        titleHighlight: "DRIVE REVENUE.",
        description: "Comprehensive technical SEO for page-1 Google rankings combined with high-ROAS Google Search and Meta ad campaigns across pan-India.",
        primaryCTA: { label: "Get Free SEO Audit", href: "/digital-marketing" },
        secondaryCTA: { label: "Contact Us", href: "/contact" },
        terminalHeader: "analytics-audit.sh",
        terminalLines: [
            { text: "$ curl -X POST /api/audit-rankings", color: "text-white" },
            { text: "Analyzing keyword search intent...", color: "text-slate-400" },
            { text: "✓ Page 1 Organic Google Positions", color: "text-green-400" },
            { text: "✓ 4.8x Average Return on Ad Spend", color: "text-green-400" },
            { text: "✓ 50k+ Qualified Inquiries Generated", color: "text-blue-300 font-bold" }
        ]
    }
];

export function Hero() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const active = heroSlides[current];

    return (
        <section 
            className="relative overflow-hidden bg-brand-950 min-h-[92vh] flex items-center pt-24 pb-20 border-b border-white/10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="absolute inset-0 grid-bg opacity-30"></div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-accent-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[460px]"
                    >
                        {/* Left Side: Animated Copy */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium text-xs tracking-widest uppercase mb-8">
                                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                                {active.badge}
                            </div>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                {active.titlePrefix}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                                    {active.titleHighlight}
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-300/80 mb-10 leading-relaxed max-w-xl font-light">
                                {active.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-14">
                                <Link href={active.primaryCTA.href}>
                                    <Button variant="secondary" className="text-base sm:text-lg px-8 sm:px-10 py-4 uppercase tracking-widest">
                                        {active.primaryCTA.label}
                                    </Button>
                                </Link>
                                <Link href={active.secondaryCTA.href}>
                                    <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 uppercase tracking-widest bg-white/5 border-white/10 hover:bg-white/10">
                                        {active.secondaryCTA.label}
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex sm:items-center gap-6 flex-col sm:flex-row border-t border-white/10 pt-8 mt-auto">
                                <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold tracking-wide">
                                    <CheckCircle2 className="w-4 h-4 text-accent-500" /> 120+ Vetted Trainers
                                </div>
                                <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold tracking-wide">
                                    <CheckCircle2 className="w-4 h-4 text-accent-500" /> 95+ PageSpeed Web
                                </div>
                                <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold tracking-wide">
                                    <CheckCircle2 className="w-4 h-4 text-accent-500" /> Pan-India Delivery
                                </div>
                            </div>
                        </div>

                        {/* Right Side: 3D Interactive Terminal Window */}
                        <div className="relative lg:h-[540px] flex justify-center items-center perspective-[2000px]">
                            <div className="relative w-full max-w-2xl bg-brand-900 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10 transform rotate-[-1.5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                                <div className="w-full flex items-center justify-between px-4 py-3 bg-brand-950 border-b border-white/10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono">{active.terminalHeader}</div>
                                    <div className="text-[10px] text-accent-400 font-mono uppercase tracking-widest">Live</div>
                                </div>
                                <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-loose">
                                    <p className="text-slate-400 mb-2">
                                        <span className="text-accent-400 font-bold">~</span>/aspire-network <span className="text-blue-400">main</span>
                                    </p>
                                    {active.terminalLines.map((line, idx) => (
                                        <motion.p
                                            key={idx}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 * idx }}
                                            className={`${line.color} mt-1`}
                                        >
                                            {line.text}
                                        </motion.p>
                                    ))}
                                    <div className="mt-4 flex items-center">
                                        <span className="text-accent-400 font-bold mr-2">~</span>
                                        <span className="w-2 h-4 bg-white animate-pulse inline-block"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gradient-to-br from-accent-500 to-rose-600 rounded-full blur-[80px] -z-10 mix-blend-screen opacity-50"></div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Carousel Navigation Controls */}
                <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                        {heroSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    current === idx
                                        ? 'w-10 bg-accent-500'
                                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
                            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
