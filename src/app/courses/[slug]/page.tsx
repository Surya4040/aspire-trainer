import { CheckCircle2, Clock, BookOpen, Layers, Terminal, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { Button } from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const courseTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `${courseTitle} Practical Training | Aspire Info`,
        description: `Learn ${courseTitle} with project-driven curriculum, hands-on labs in our practice portal, and active mentor code reviews.`,
    };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const courseTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const syllabusModules = [
        { week: "Weeks 1 - 3", title: "Foundation & Core Fundamentals", desc: "Language syntax, data structures, state management, and modern programming paradigms." },
        { week: "Weeks 4 - 6", title: "Backend Architecture & Data Modeling", desc: "REST API design, database schemas, authentication, and secure business logic." },
        { week: "Weeks 7 - 9", title: "Full-Stack Integration & Testing", desc: "Connecting frontend UI with backend services, end-to-end testing, and debugging." },
        { week: "Weeks 10 - 12", title: "Production Deployment & Capstone", desc: "Containerization, cloud hosting, CI/CD pipeline, and comprehensive project portfolio defense." }
    ];

    return (
        <div className="min-h-screen bg-brand-950 text-white relative">
            
            {/* Hero Section */}
            <section className="bg-brand-950 text-white pt-32 pb-20 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-accent-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 font-bold text-xs uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                        3-Month Project-Driven Masterclass
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase leading-tight">
                        {courseTitle} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                            PRACTICAL CURRICULUM.
                        </span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300/85 max-w-2xl mb-10 leading-relaxed font-light">
                        Become industry-ready in {courseTitle} through real-world projects, live coding in our browser practice portal, and 1-on-1 mentor guidance.
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 text-xs sm:text-sm font-medium">
                        <div className="flex items-center gap-2 bg-brand-900/80 border border-white/10 px-4 py-2.5 rounded-xl text-slate-200">
                            <Clock className="w-4 h-4 text-accent-400" />
                            <span>3 Months Duration</span>
                        </div>
                        <div className="flex items-center gap-2 bg-brand-900/80 border border-white/10 px-4 py-2.5 rounded-xl text-slate-200">
                            <BookOpen className="w-4 h-4 text-accent-400" />
                            <span>12+ Practical Modules</span>
                        </div>
                        <div className="flex items-center gap-2 bg-brand-900/80 border border-white/10 px-4 py-2.5 rounded-xl text-slate-200">
                            <Terminal className="w-4 h-4 text-accent-400" />
                            <span>Custom Practice IDE</span>
                        </div>
                        <div className="flex items-center gap-2 bg-brand-900/80 border border-white/10 px-4 py-2.5 rounded-xl text-slate-200">
                            <ShieldCheck className="w-4 h-4 text-accent-400" />
                            <span>Verified Certificate</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button variant="secondary" className="px-8 py-3.5 text-xs uppercase tracking-wider">
                                Enroll / Inquire Now &rarr;
                            </Button>
                        </Link>
                        <Link href="/portal">
                            <Button variant="outline" className="px-6 py-3.5 text-xs uppercase tracking-wider bg-white/5 border-white/10 hover:bg-white/10">
                                Try Practice Portal &rarr;
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Curriculum & Details */}
            <section className="py-20 bg-brand-950 text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Course Syllabus & Competencies */}
                    <div className="lg:col-span-8 space-y-12">
                        
                        {/* Course Overview */}
                        <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                                Course Overview
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-6">
                                This training is designed to take you from foundational syntax to real-world deployment. You will construct functional applications, learn database modeling, write robust APIs, and follow industry best practices under active mentor guidance.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                                Write and test your code directly on our in-browser practice portal while receiving continuous feedback, milestone reviews, and code refactoring suggestions.
                            </p>
                        </div>

                        {/* Core Competencies */}
                        <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                                Core Competencies Covered
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Hands-on coding labs in our practice portal',
                                    'Component and state architecture',
                                    'Backend API design & database queries',
                                    'Testing, debugging and error handling patterns',
                                    'Version control and Git collaboration workflows',
                                    'Clean deployment and cloud hosting practices'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-brand-950/60 hover:border-accent-500/40 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-200 text-xs sm:text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Structured Weekly Roadmap */}
                        <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                                12-Week Structured Roadmap
                            </h3>
                            <div className="space-y-4">
                                {syllabusModules.map((m, idx) => (
                                    <div key={idx} className="p-5 rounded-xl border border-white/10 bg-brand-950/70 hover:border-white/20 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent-400">
                                                {m.week}
                                            </span>
                                            <span className="text-xs text-slate-400 font-mono">Milestone {idx + 1}</span>
                                        </div>
                                        <h4 className="text-base font-bold text-white mb-1">{m.title}</h4>
                                        <p className="text-xs sm:text-sm text-slate-300 font-light">{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Target Career Paths */}
                        <div className="bg-brand-900/60 border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Target Career Roles</h3>
                            <p className="text-slate-300 text-sm leading-relaxed font-light">
                                Students completing this program are equipped to interview for junior and mid-level software engineering positions, full-stack developer roles, backend engineers, and QA automation profiles across tech companies and corporate teams.
                            </p>
                        </div>
                    </div>

                    {/* Right: Program Summary Sidebar */}
                    <div className="lg:col-span-4 sticky top-28 space-y-6">
                        <div className="bg-brand-900/90 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
                            <div className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2">
                                Enrollment Details
                            </div>
                            <h3 className="text-xl font-black text-white mb-6 tracking-tight">Program Summary</h3>
                            
                            <div className="space-y-4 text-sm divide-y divide-white/10 mb-8">
                                <div className="flex justify-between pt-3">
                                    <span className="text-slate-400">Duration</span>
                                    <span className="font-semibold text-white">3 Months</span>
                                </div>
                                <div className="flex justify-between pt-3">
                                    <span className="text-slate-400">Mode</span>
                                    <span className="font-semibold text-white">Live Online + Labs</span>
                                </div>
                                <div className="flex justify-between pt-3">
                                    <span className="text-slate-400">Practice Portal</span>
                                    <span className="font-semibold text-accent-400">Included (Web IDE)</span>
                                </div>
                                <div className="flex justify-between pt-3">
                                    <span className="text-slate-400">Mentorship</span>
                                    <span className="font-semibold text-white">Weekly 1-on-1 Reviews</span>
                                </div>
                                <div className="flex justify-between pt-3">
                                    <span className="text-slate-400">Level</span>
                                    <span className="font-semibold text-white">Beginner to Advanced</span>
                                </div>
                            </div>

                            <Link href="/contact" className="block w-full">
                                <Button variant="secondary" className="w-full py-3.5 text-xs uppercase tracking-wider">
                                    Inquire for Next Batch &rarr;
                                </Button>
                            </Link>

                            <p className="text-[11px] text-slate-400 text-center mt-3 font-light">
                                Fast response within 24 hours. No hidden fees.
                            </p>
                        </div>

                        {/* Institutional Trainers Notice */}
                        <div className="bg-brand-900/50 border border-white/10 rounded-xl p-6 text-center">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                                Need Faculty for Your College?
                            </div>
                            <p className="text-xs text-slate-400 mb-4 font-light">
                                We source verified technical instructors for campus bootcamps.
                            </p>
                            <Link href="/trainers" className="text-xs font-bold text-accent-400 hover:text-accent-300 uppercase tracking-wider inline-flex items-center gap-1">
                                <span>Sponsor a Bootcamp</span> &rarr;
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
