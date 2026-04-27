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
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-brand-600 font-semibold mb-2 tracking-wide uppercase">Early Feedback</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-6">See What Our Learners Say</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 relative group hover:shadow-xl transition-shadow"
                        >
                            <div className="flex gap-1 mb-4 text-amber-400">
                                {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-slate-600 mb-6 italic">"{test.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-brand-300 rounded-full flex items-center justify-center font-bold text-brand-700 text-lg">
                                    {test.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{test.name}</h4>
                                    <p className="text-sm text-slate-500">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
