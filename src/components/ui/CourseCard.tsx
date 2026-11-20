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

export function CourseCard({ title, description, slug, duration = "3 Months", modules = 12, tags = [] }: CourseCardProps) {
    return (
        <div className="group relative bg-brand-900/80 rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-accent-500/50 hover:bg-brand-900 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-500/10 cursor-pointer overflow-hidden backdrop-blur-md">
            {/* Ambient hover glow */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/25 transition-all pointer-events-none" />

            <div className="relative z-10">
                <div className="flex gap-2 flex-wrap mb-4">
                    {tags.map((tag, idx) => (
                        <span 
                            key={idx} 
                            className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 text-accent-400 rounded-md group-hover:border-accent-500/30 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-accent-300 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-300/80 text-xs sm:text-sm mb-6 leading-relaxed font-light">
                    {description}
                </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-accent-400" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-accent-400" />
                        <span>{modules} Modules</span>
                    </div>
                </div>

                <Link
                    href={`/courses/${slug}`}
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-white/5 group-hover:bg-gradient-to-r group-hover:from-accent-500 group-hover:to-accent-600 border border-white/10 group-hover:border-transparent rounded-xl transition-all duration-300 gap-2 shadow-sm group-hover:shadow-lg group-hover:shadow-accent-500/30"
                >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
