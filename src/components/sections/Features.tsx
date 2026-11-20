import { Users, Code, Search, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: "Subject Matter Experts on Demand",
        description: "Direct access to technical faculty with real-world development experience, equipped with structured course materials and live coding labs."
    },
    {
        icon: Code,
        title: "Engineered for Peak Performance",
        description: "Our websites and web applications are designed with clean architecture, sub-second loading speed, and mobile responsiveness from day one."
    },
    {
        icon: Search,
        title: "Search & Conversion Focused",
        description: "We align digital marketing and SEO strategies with real business outcomes: targeted traffic, search visibility, and verifiable client inquiries."
    },
    {
        icon: ShieldCheck,
        title: "Transparent Communication & SLA",
        description: "Clear timelines, straightforward pricing, and regular updates on every engagement without confusing technical jargon."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-brand-950 text-white border-b border-white/10 relative overflow-hidden">
            <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 font-bold text-xs uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Why Aspire Info
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
                        Built for Institutions &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">Growing Enterprises.</span>
                    </h2>
                    <p className="text-slate-300/80 text-base sm:text-lg font-light">
                        We prioritize reliability, measurable execution, and high standards across our staffing engagements, web engineering, and growth marketing.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={idx} 
                                className="group bg-brand-900/80 border border-white/10 rounded-2xl p-7 hover:border-accent-500/50 hover:bg-brand-900 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between backdrop-blur-md cursor-default"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 flex items-center justify-center mb-5 transition-transform group-hover:scale-105">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
