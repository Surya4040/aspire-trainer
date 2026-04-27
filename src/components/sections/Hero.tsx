"use client";
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-brand-950 min-h-[95vh] flex items-center pt-24 pb-20 border-b border-white/10">
            <div className="absolute inset-0 grid-bg opacity-30"></div>

            {/* Intense Glowing Orbs */}
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-accent-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium text-xs tracking-widest uppercase mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                        Tamil Nadu&apos;s First AI-Assisted Platform
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                        MASTER<br />
                        SOFTWARE<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">ENGINEERING.</span>
                    </h1>
                    <p className="text-xl text-slate-300/80 mb-10 leading-relaxed max-w-xl font-light">
                        Transform your career with intensive 3-month programs. Write scalable code directly in our proprietary portal, backed by 24/7 AI-assisted debugging.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-14">
                        <Link href="/courses">
                            <Button variant="secondary" className="text-lg px-10 py-4 uppercase tracking-widest">Explore Programs</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="text-lg px-8 py-4 uppercase tracking-widest bg-white/5 border-white/10">Book Demo</Button>
                        </Link>
                    </div>

                    <div className="flex sm:items-center gap-6 flex-col sm:flex-row border-t border-white/10 pt-8 mt-auto">
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold tracking-wide"><CheckCircle2 className="w-4 h-4 text-accent-500" /> 100% Practical</div>
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold tracking-wide"><CheckCircle2 className="w-4 h-4 text-accent-500" /> Web IDE Included</div>
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold tracking-wide"><CheckCircle2 className="w-4 h-4 text-accent-500" /> 3-Month Fast Track</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative lg:h-[600px] flex justify-center items-center perspective-[2000px]"
                >
                    {/* 3D Tilted Editor Window */}
                    <div className="relative w-full max-w-2xl bg-brand-900 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                        <div className="w-full flex items-center justify-between px-4 py-3 bg-brand-950 border-b border-white/10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                            </div>
                            <div className="text-xs text-slate-500 font-mono">Terminal</div>
                            <div></div>
                        </div>
                        <div className="p-6 font-mono text-sm leading-loose">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                <p className="text-slate-400"><span className="text-accent-400 font-bold">~</span>/projects/career-growth <span className="text-blue-400">master</span></p>
                                <p className="text-white mt-1">$ npm install @aspireinfo/skills</p>
                                <br />
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                                    <p className="text-slate-300">Installing dependencies [=======             ]</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
                                    <br />
                                    <p className="text-green-400">✓ AI-Assist Integrated</p>
                                    <p className="text-green-400">✓ Portal Activated</p>
                                    <p className="text-green-400">✓ 3-Month Plan Executed</p>
                                    <br />
                                    <p className="text-blue-300 font-bold">Start coding to compile your future.</p>
                                </motion.div>
                                <div className="mt-4 flex">
                                    <span className="text-accent-400 font-bold mr-2">~</span>
                                    <span className="w-2 h-4 bg-white animate-pulse inline-block mt-1"></span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-accent-500 to-rose-600 rounded-full blur-[80px] -z-10 mix-blend-screen opacity-60"></div>

                </motion.div>
            </div>
        </section>
    );
}
