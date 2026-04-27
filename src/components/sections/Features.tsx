"use client";
import { motion } from 'framer-motion';
import { Bot, Terminal, Target, Briefcase } from 'lucide-react';

const features = [
    {
        icon: <Terminal className="w-8 h-8 text-accent-500" />,
        title: "Integrated Practice Portal",
        description: "Write, test, and execute your code directly inside our custom-built learning portal without any complex local setups."
    },
    {
        icon: <Bot className="w-8 h-8 text-accent-500" />,
        title: "24/7 AI Assistance",
        description: "Stuck on a bug? Our smart AI assistant analyzes your code in real-time, explaining errors and helping you debug instantly."
    },
    {
        icon: <Target className="w-8 h-8 text-accent-500" />,
        title: "Fast-Track 3 Month Programs",
        description: "Learn only the most crucial, modern industry standards in a condensed, highly rigorous 3-month timeframe."
    },
    {
        icon: <Briefcase className="w-8 h-8 text-accent-500" />,
        title: "Actionable Career Coaching",
        description: "From optimizing your GitHub to crafting the perfect resume, receive ongoing coaching to tackle the modern interview process."
    }
];

export function Features() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-blue-600 font-bold mb-4 tracking-widest uppercase text-sm">Why Aspire Info?</h2>
                        <h3 className="text-5xl lg:text-6xl font-black text-slate-950 mb-8 leading-[1.1] tracking-tight uppercase">
                            A Learning Ecosystem <span className="text-accent-500">Engineered</span> for Speed.
                        </h3>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                            We leverage an internal coding platform and AI to dramatically shorten your learning curve. Our 3-month intensives are designed for maximum output.
                        </p>

                        <div className="flex gap-12 pt-8 border-t border-slate-200">
                            <div>
                                <div className="text-4xl font-black text-slate-950 mb-2">Portal</div>
                                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">In-House Coding</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-slate-950 mb-2">AI</div>
                                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Always Assist</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className={`bg-white p-8 rounded-xl shadow-lg shadow-black/5 border border-slate-100 hover:shadow-xl hover:shadow-black/10 hover:border-slate-300 transition-all duration-500 ${idx % 2 !== 0 ? 'sm:mt-16' : ''}`}
                            >
                                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner shadow-slate-100 uppercase">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-950 mb-4">{feature.title}</h4>
                                <p className="text-slate-600 text-sm leading-loose font-medium">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
