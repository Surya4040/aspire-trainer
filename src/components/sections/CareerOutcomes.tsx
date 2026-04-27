"use client";
import { motion } from 'framer-motion';
import { TrendingUp, Award, Building2, Code2 } from 'lucide-react';

const stats = [
    { icon: <Code2 className="w-6 h-6" />, value: "Hands-on", label: "Practical Training" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "Modern", label: "Tech Stack" },
    { icon: <Award className="w-6 h-6" />, value: "Quality", label: "Curriculum" },
    { icon: <Building2 className="w-6 h-6" />, value: "Online", label: "Remote Access" }
];

export function CareerOutcomes() {
    return (
        <section className="py-32 bg-brand-950 text-white relative overflow-hidden border-b border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600 rounded-full blur-[150px] mix-blend-screen opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen opacity-20 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-blue-500 font-bold mb-4 tracking-widest uppercase text-sm">Your Skill Progression</h2>
                        <h3 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight">Focus on Execution.</h3>
                        <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
                            Our training is focused entirely on providing real value through practical learning. Elevate your skills from anywhere in the state.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded text-center hover:bg-white/10 transition-colors shadow-2xl shadow-black/50"
                        >
                            <div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center mx-auto mb-6 text-blue-400 border border-blue-500/30">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-black mb-2 text-white tracking-widest">{stat.value}</div>
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
