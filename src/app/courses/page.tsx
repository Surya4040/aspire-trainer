"use client";
import { useState } from 'react';
import Link from 'next/link';
import { CourseCard } from "@/components/ui/CourseCard";
import { Button } from "@/components/ui/Button";
import { Sparkles, Users, Code2, Cpu, Terminal, ArrowRight } from 'lucide-react';

const allCourses = [
    {
        title: "MERN Stack Development",
        description: "MongoDB, Express.js, React, and Node.js. Practical full-stack architecture with production-level projects.",
        slug: "mern-stack",
        duration: "3 Months",
        modules: 12,
        category: "fullstack",
        tags: ["React", "Node.js", "Fullstack"]
    },
    {
        title: "Java Fullstack Development",
        description: "Core Java, Spring Boot, Hibernate, and RESTful web services for enterprise applications.",
        slug: "java-fullstack",
        duration: "3 Months",
        modules: 15,
        category: "fullstack",
        tags: ["Java", "Spring Boot", "Enterprise"]
    },
    {
        title: "Python Fullstack Development",
        description: "Python, Django, relational databases, and API development with real-world application builds.",
        slug: "python-fullstack",
        duration: "3 Months",
        modules: 14,
        category: "fullstack",
        tags: ["Python", "Django", "Backend"]
    },
    {
        title: "SDET & Automation Testing",
        description: "Selenium WebDriver, TestNG, Cucumber, and API test automation frameworks with CI/CD execution.",
        slug: "sdet",
        duration: "3 Months",
        modules: 10,
        category: "testing",
        tags: ["Selenium", "Java", "QA"]
    },
    {
        title: "Playwright Automation",
        description: "Modern end-to-end testing with Playwright, TypeScript, and CI/CD automated test pipelines.",
        slug: "playwright",
        duration: "2 Months",
        modules: 8,
        category: "testing",
        tags: ["TypeScript", "Playwright", "Modern QA"]
    },
    {
        title: "AI & Machine Learning Foundations",
        description: "Data analysis with Python, NumPy, Pandas, Scikit-learn, and neural network foundations.",
        slug: "ai-ml",
        duration: "3 Months",
        modules: 16,
        category: "ai",
        tags: ["Python", "Machine Learning", "Data"]
    }
];

const categories = [
    { id: "all", label: "All Programs" },
    { id: "fullstack", label: "Full Stack" },
    { id: "testing", label: "QA & Automation" },
    { id: "ai", label: "AI & Data Science" }
];

export default function CoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredCourses = selectedCategory === "all"
        ? allCourses
        : allCourses.filter(c => c.category === selectedCategory);

    return (
        <div className="bg-brand-950 text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-accent-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium text-xs tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                        Best Online Courses in Coimbatore &amp; Pan-India
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
                        BEST ONLINE COURSES &amp; <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                            CAREER UPSKILLING.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                        Recognized as the best online course provider in Coimbatore with placement preparation. Master modern software engineering stacks through hands-on browser IDE coding labs, weekly milestones, and active mentor code reviews.
                    </p>
                </div>

                {/* Category Filter Pills */}
                <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
                    <div className="bg-brand-900 border border-white/10 p-1.5 rounded-xl inline-flex gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                                    selectedCategory === cat.id
                                        ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/40'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {filteredCourses.map((course) => (
                        <CourseCard
                            key={course.slug}
                            {...course}
                        />
                    ))}
                </div>

                {/* Bottom Banner: Sourcing Faculty Notice */}
                <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 flex items-center justify-center shrink-0">
                            <Users className="w-7 h-7" />
                        </div>
                        <div>
                            <span className="text-[11px] font-bold text-accent-400 uppercase tracking-widest">Institutions &amp; Enterprises</span>
                            <h3 className="text-xl font-bold text-white mt-0.5">Looking to Source Technical Trainers On-Demand?</h3>
                            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
                                We supply vetted faculty for college bootcamps, workshops, and corporate workforce training across 24+ modern domains nationwide.
                            </p>
                        </div>
                    </div>
                    <Link href="/trainers">
                        <Button variant="secondary" className="px-8 py-3.5 text-xs uppercase tracking-wider whitespace-nowrap">
                            Hire a Trainer &rarr;
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
