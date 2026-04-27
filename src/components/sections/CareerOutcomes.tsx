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
        <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-brand-300 font-semibold mb-2 tracking-wide uppercase">Your Skill Progression</h2>
                        <h3 className="text-4xl font-extrabold mb-6">Built for Knowledge, Not Just Certificates.</h3>
                        <p className="text-lg text-slate-300">
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
                            className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center hover:bg-white/15 transition-colors"
                        >
                            <div className="w-12 h-12 bg-brand-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-black mb-2 text-white">{stat.value}</div>
                            <div className="text-slate-300 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
