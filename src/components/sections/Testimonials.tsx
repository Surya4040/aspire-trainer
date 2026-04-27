"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sanjay",
        role: "Aspiring Developer",
        content: "The practical focus here is amazing. I finally understand how full-stack applications work from the ground up.",
        rating: 5
    },
    {
        name: "Karthik",
        role: "Engineering Student",
        content: "The hands-on projects helped me build a great portfolio for my upcoming interviews. Highly recommend their approach.",
        rating: 5
    },
    {
        name: "Divya",
        role: "Early Learner",
        content: "Very accessible and the content is directly aligned with modern tech standards.",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section className="py-32 bg-slate-50 relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-blue-600 font-bold mb-4 tracking-widest uppercase text-sm">Early Feedback</h2>
                    <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tight">The Community Agrees.</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded shadow-lg shadow-black/5 border border-slate-100 hover:shadow-xl hover:shadow-black/10 transition-all"
                        >
                            <div className="flex gap-1 mb-6 text-accent-500">
                                {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-slate-600 mb-8 font-medium leading-relaxed">&quot;{test.content}&quot;</p>
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div className="w-12 h-12 bg-slate-950 rounded flex items-center justify-center font-bold text-white text-lg">
                                    {test.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-950 uppercase tracking-wider text-sm">{test.name}</h4>
                                    <p className="text-xs text-slate-500 font-bold tracking-widest uppercase mt-1">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
