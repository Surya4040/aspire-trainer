import { Button } from "@/components/ui/Button";
import { CheckCircle, Clock, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const courseTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `${courseTitle} Masterclass | Aspire Info`,
        description: `Master ${courseTitle} in 3 months with our AI-assisted custom coding portal.`,
    };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const courseTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="min-h-screen">
            <section className="bg-brand-900 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="inline-block px-3 py-1 bg-brand-800 text-brand-200 rounded-full text-sm font-semibold mb-6">
                        Intensive Building Program
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        {courseTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-brand-300">Masterclass</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                        Become an expert in {courseTitle} via our custom practice portal backed by AI assistance. Maximum outcome in just 3 months.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-12">
                        <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-lg">
                            <Clock className="w-5 h-5 text-accent-400" />
                            <span>3 Months Duration</span>
                        </div>
                        <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-lg">
                            <BookOpen className="w-5 h-5 text-accent-400" />
                            <span>12+ Deep Modules</span>
                        </div>
                        <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-lg">
                            <Layers className="w-5 h-5 text-accent-400" />
                            <span>Custom Portal Included</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/contact">
                            <Button variant="primary" className="px-8 py-4 text-lg bg-accent-500 hover:bg-accent-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]">Enroll Now</Button>
                        </Link>
                        <Button variant="outline" className="px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white">Download Syllabus</Button>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Course Overview</h2>
                        <div className="prose prose-lg text-slate-600 mb-12">
                            <p>This comprehensive {courseTitle} training is designed to take you from fundamentals to advanced enterprise concepts rapidly. Write and test your code directly on our in-house portal while receiving 24/7 AI-assisted debugging and explanations.</p>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">What You will Learn</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {['Writing code on our proprietary platform', 'Interacting with our built-in AI tutor', 'Building scalable architectures', 'Security best practices', 'Performance optimization', 'Mastering the latest frameworks'].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-brand-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Career Opportunities</h3>
                        <p className="text-slate-600 mb-6">Graduates of this condensed 3-month program typically secure interviews for roles such as Software Engineer, Tester, and Developer after building a solid portfolio of projects entirely within our practice portal.</p>
                    </div>

                    <div className="lg:col-span-1 border-l border-slate-200 lg:pl-12">
                        <div className="bg-white p-8 rounded-2xl shadow-xl sticky top-28 border border-slate-100">
                            <h4 className="text-xl font-bold mb-6 text-slate-900 border-b pb-4">Program Details</h4>
                            <ul className="space-y-4 mb-8">
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Format</span>
                                    <span className="font-semibold text-slate-800">Custom Practice Portal</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Access</span>
                                    <span className="font-semibold text-slate-800">Lifetime LMS</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-500">AI Assist</span>
                                    <span className="font-semibold text-slate-800">24/7 Integrated</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Mentorship</span>
                                    <span className="font-semibold text-brand-600">Included</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="w-full">
                                <Button variant="primary" className="w-full h-14 text-lg">Talk to Counselor</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
