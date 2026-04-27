"use client";
import { motion } from 'framer-motion';
import { Bot, Terminal, Target, Briefcase } from 'lucide-react';

const features = [
    {
        icon: <Terminal className="w-8 h-8 text-brand-600" />,
        title: "Integrated Practice Portal",
        description: "Write, test, and execute your code directly inside our custom-built learning portal without any complex local setups."
    },
    {
        icon: <Bot className="w-8 h-8 text-brand-600" />,
        title: "24/7 AI Assistance",
        description: "Stuck on a bug? Our smart AI assistant analyzes your code in real-time, explaining errors and helping you debug instantly."
    },
    {
        icon: <Target className="w-8 h-8 text-brand-600" />,
        title: "Fast-Track 3 Month Programs",
        description: "Learn only the most crucial, modern industry standards in a condensed, highly rigorous 3-month timeframe."
    },
    {
        icon: <Briefcase className="w-8 h-8 text-brand-600" />,
        title: "Actionable Career Coaching",
        description: "From optimizing your GitHub to crafting the perfect resume, receive ongoing coaching to tackle the modern interview process."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-brand-600 font-semibold mb-2 tracking-wide uppercase">Why Aspire Info?</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                            A modern learning ecosystem engineered for speed.
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We leverage an internal coding platform and AI to dramatically shorten your learning curve. Our 3-month intensives are designed for maximum output.
                        </p>

                        <div className="flex gap-12">
                            <div>
                                <div className="text-4xl font-extrabold text-brand-600 mb-2">Portal</div>
                                <div className="text-slate-600 font-medium">In-House Coding</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-brand-600 mb-2">AI</div>
                                <div className="text-slate-600 font-medium">Always Listening</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}
                            >
                                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
