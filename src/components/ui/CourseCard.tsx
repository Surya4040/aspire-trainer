"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

interface CourseCardProps {
    title: string;
    description: string;
    slug: string;
    duration?: string;
    modules?: number;
    tags?: string[];
    delay?: number;
}

export function CourseCard({ title, description, slug, duration = "6 Months", modules = 12, tags = [], delay = 0 }: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-100 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="flex gap-2 flex-wrap mb-4">
                {tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-brand-50 text-brand-700 rounded-md">
                        {tag}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors">
                {title}
            </h3>

            <p className="text-slate-600 text-sm mb-6 flex-1">
                {description}
            </p>

            <div className="flex gap-4 mb-6 border-y border-slate-100 py-3 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-brand-500" /> {duration}
                </div>
                <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-brand-500" /> {modules} Modules
                </div>
            </div>

            <Link href={`/courses/${slug}`} className="inline-flex items-center text-brand-600 font-semibold group/btn mt-auto">
                View Program Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}
