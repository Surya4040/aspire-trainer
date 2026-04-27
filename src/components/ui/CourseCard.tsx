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

export function CourseCard({ title, description, slug, duration = "3 Months", modules = 12, tags = [], delay = 0 }: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="bg-brand-950 rounded p-px isolate relative group h-full flex flex-col"
        >
            {/* Outer Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-white/10 rounded group-hover:from-accent-500/50 group-hover:to-blue-500/50 transition-colors duration-500 -z-10"></div>

            <div className="bg-brand-900 rounded-[3px] p-6 h-full flex flex-col relative z-0 overflow-hidden">
                {/* Inner subtle glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-colors duration-700"></div>

                <div className="flex gap-2 flex-wrap mb-6 relative z-10">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-bold px-3 py-1 bg-white/5 text-blue-300 rounded border border-white/10 uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors relative z-10 leading-tight">
                    {title}
                </h3>

                <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed relative z-10">
                    {description}
                </p>

                <div className="flex gap-6 mb-6 pt-6 border-t border-white/10 text-xs text-slate-300 font-semibold tracking-wide uppercase relative z-10">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" /> {duration}
                    </div>
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-400" /> {modules} Modules
                    </div>
                </div>

                <Link href={`/courses/${slug}`} className="inline-flex items-center text-accent-400 font-bold uppercase tracking-widest text-sm group/btn mt-auto relative z-10">
                    Explore Program
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
