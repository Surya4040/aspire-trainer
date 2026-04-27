"use client";
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center pt-10">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-400 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-6 border border-brand-100">
                        Tamil Nadu's First AI-Assisted Coding Platform
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                        Code.<br />
                        Practice.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Master Skills.</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                        Transform your career with intensive 3-month programs. Write code directly in our proprietary portal, backed by 24/7 AI-assisted debugging.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button variant="primary" className="text-lg px-8 py-4">Book Free Demo</Button>
                        </Link>
                        <Link href="/courses">
                            <Button variant="outline" className="text-lg px-8 py-4">Explore Courses</Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="text-sm">
                            <div className="font-bold text-slate-900 group">Start Your Engineering Journey</div>
                            <div className="text-slate-500">Learn directly through hands-on project building</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative lg:h-[600px] flex justify-center items-center"
                >
                    <div className="absolute top-10 left-10 p-4 glass-panel rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="font-mono text-sm font-bold text-brand-600">&lt;Code /&gt;</div>
                    </div>
                    <div className="absolute bottom-20 right-10 p-4 glass-panel rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                        <div className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div> Projects Built
                        </div>
                    </div>

                    <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl bg-gradient-to-br from-brand-100 to-accent-100 shadow-2xl overflow-hidden border border-white p-2">
                        <div className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden flex flex-col pt-4 shadow-inner">
                            <div className="flex gap-2 px-4 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 bg-slate-900 p-6 font-mono text-sm text-brand-400 overflow-hidden relative group">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                                >
                                    <p><span className="text-purple-400">const</span> <span className="text-blue-300">practiceUrl</span> = <span className="text-orange-300">'app.aspireinfo.com'</span>;</p>
                                    <p><span className="text-purple-400">const</span> <span className="text-blue-300">assist</span> = <span className="text-green-300">true</span>;</p>
                                    <br />
                                    <p className="text-slate-500">// AI analyzing code...</p>
                                    <p className="text-slate-300 mt-2">✓ Optimization complete.</p>
                                    <p className="text-slate-300">✓ 3-month learning track started.</p>
                                    <br />
                                    <p><span className="text-purple-400">await</span> AspirePortal.<span className="text-blue-300">execute</span>();</p>
                                </motion.div>
                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
