import { CourseCard } from '../ui/CourseCard';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const topCourses = [
    {
        title: "MERN Stack Development",
        description: "MongoDB, Express.js, React, and Node.js. Practical, project-driven full-stack development with hands-on labs.",
        slug: "mern-stack",
        duration: "3 Months",
        modules: 12,
        tags: ["React", "Node.js", "Fullstack"]
    },
    {
        title: "Java Fullstack Development",
        description: "Core Java, Spring Boot, REST APIs, and modern frontend fundamentals for enterprise engineering.",
        slug: "java-fullstack",
        duration: "3 Months",
        modules: 15,
        tags: ["Java", "Spring Boot", "Enterprise"]
    },
    {
        title: "Python Fullstack Development",
        description: "Python, Django, relational databases, and API development with real-world application building.",
        slug: "python-fullstack",
        duration: "3 Months",
        modules: 14,
        tags: ["Python", "Django", "Backend"]
    }
];

export function CoursesHighlight() {
    return (
        <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 font-bold text-xs uppercase tracking-wider mb-4">
                            <Sparkles className="w-3.5 h-3.5" />
                            Secondary Upskilling Catalog
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                            Hands-On IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">Training Programs.</span>
                        </h2>
                        <p className="text-slate-300/80 text-base sm:text-lg font-light mt-3 max-w-xl">
                            Intensive 3-month courses with in-browser code practice and active mentor code reviews.
                        </p>
                    </div>
                    <Link href="/courses">
                        <Button variant="outline" className="px-6 py-3 text-xs uppercase tracking-wider bg-white/5 border-white/10 hover:bg-white/10 whitespace-nowrap">
                            View All Courses &rarr;
                        </Button>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {topCourses.map((course) => (
                        <CourseCard
                            key={course.slug}
                            {...course}
                            delay={0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
