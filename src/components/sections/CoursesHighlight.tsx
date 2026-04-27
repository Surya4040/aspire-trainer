"use client";
import { CourseCard } from '../ui/CourseCard';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const topCourses = [
    {
        title: "MERN Stack Development",
        description: "Master MongoDB, Express.js, React, and Node.js. Build scalable, full-stack applications with real-world projects.",
        slug: "mern-stack",
        duration: "3 Months",
        modules: 12,
        tags: ["Web Dev", "React", "Node.js"]
    },
    {
        title: "Java Fullstack Development",
        description: "Learn Core Java, Spring Boot, Hibernate, and Frontend technologies to become enterprise-ready.",
        slug: "java-fullstack",
        duration: "3 Months",
        modules: 15,
        tags: ["Enterprise", "Java", "Spring Boot"]
    },
    {
        title: "AI and Machine Learning",
        description: "Dive deep into Python, Data Science, TensorFlow, and building intelligent LLM applications.",
        slug: "ai-ml",
        duration: "3 Months",
        modules: 16,
        tags: ["AI/ML", "Python", "Data Science"]
    }
];

export function CoursesHighlight() {
    return (
        <section className="py-32 bg-brand-950 relative border-b border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-accent-500 font-bold mb-4 tracking-widest uppercase text-sm">Featured Programs</h2>
                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">Engineer Your Future.</h3>
                    <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
                        Our intensive 3-month courses are curated to make you job-ready via our in-house practice portal.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {topCourses.map((course, idx) => (
                        <CourseCard
                            key={course.slug}
                            {...course}
                            delay={idx * 0.15}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/courses">
                        <Button variant="outline" className="px-10 py-4 uppercase tracking-widest text-sm bg-white/5 border-white/10 hover:bg-white/10">View All Programs</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
