"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    service: formData.get('service'),
                    organization: formData.get('organization'),
                    message: formData.get('message'),
                    _subject: `New Inquiry (${formData.get('service')}) - Aspire Info`
                })
            });
            setSubmitted(true);
            form.reset();
        } catch {
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

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
                        Direct Communication
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
                        CONNECT WITH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
                            OUR TEAM.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                        Have a technical trainer requirement for your institution, need a custom modern website, or looking for performance SEO &amp; marketing? Send us your inquiry below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column: Dark Frosted Form */}
                    <div className="lg:col-span-7 bg-brand-900/90 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                            Direct Inquiry
                        </span>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                            Send Us a Message
                        </h2>
                        <p className="text-xs text-slate-400 mb-6 font-light">
                            All fields marked with an asterisk (*) are required. We respond within 24 hours.
                        </p>

                        {submitted ? (
                            <div className="bg-brand-950 border border-accent-500/40 rounded-xl p-8 text-center">
                                <div className="w-12 h-12 bg-accent-500/20 text-accent-400 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Message Received</h3>
                                <p className="text-sm text-slate-300 font-light">
                                    Thank you for contacting Aspire Info. Our team will review your requirements and reach out within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="e.g. Ramesh Kumar"
                                            className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            Phone / WhatsApp *
                                        </label>
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="ramesh@institution.edu"
                                            className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            Institution / Organization
                                        </label>
                                        <input
                                            name="organization"
                                            type="text"
                                            placeholder="College or Company Name"
                                            className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                                        Primary Service of Interest *
                                    </label>
                                    <select
                                        name="service"
                                        required
                                        className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors"
                                    >
                                        <option value="Technical Trainer Sourcing">Technical Trainer Sourcing (1st Priority)</option>
                                        <option value="Website Creation & Development">Website Creation &amp; Next.js Engineering</option>
                                        <option value="SEO & Performance Marketing">SEO &amp; Performance Advertising</option>
                                        <option value="Online IT Practical Courses">Online IT Courses with Web IDE</option>
                                        <option value="Instructor Application">Apply as Technical Instructor</option>
                                        <option value="General Inquiry">General Inquiry / Partnership</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                                        Requirement Details *
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        placeholder="Describe your tech stack, bootcamp timeline, student batch size, website features, or SEO goals..."
                                        className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 transition-colors"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    variant="secondary"
                                    className="w-full py-4 text-xs uppercase tracking-wider"
                                >
                                    {submitting ? "Sending Inquiry..." : "Submit Inquiry &rarr;"}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Direct Channels & SLA */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Direct Channels Card */}
                        <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400 mb-2 block">
                                Quick Reach
                            </span>
                            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6">
                                Direct Contact Channels
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono uppercase text-slate-400">Email Address</div>
                                        <a href="mailto:aspireinfo.edu@gmail.com" className="text-sm font-semibold text-white hover:text-accent-400 transition-colors">
                                            aspireinfo.edu@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono uppercase text-slate-400">Phone &amp; WhatsApp</div>
                                        <a href="tel:+918220924040" className="text-sm font-semibold text-white hover:text-accent-400 transition-colors">
                                            +91 82209 24040
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono uppercase text-slate-400">Location</div>
                                        <a 
                                            href="https://share.google/K2tk7WqErcGum90bn" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-sm text-slate-300 hover:text-accent-400 font-light block transition-colors"
                                        >
                                            Tamil Nadu, India (Delivering on-site across all South Indian districts &amp; pan-India)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Turnaround Commitment Card */}
                        <div className="bg-gradient-to-b from-brand-900 to-brand-950 border border-white/10 rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock className="w-4 h-4 text-accent-500" />
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-400">
                                    Response Guarantee
                                </span>
                            </div>
                            <h4 className="text-base font-bold text-white mb-2">Fast Turnaround Commitments</h4>
                            <ul className="space-y-2 text-xs text-slate-300 font-light">
                                <li>• <strong>Trainer Shortlists:</strong> Vetted instructor profiles within 48 to 72 hours.</li>
                                <li>• <strong>Web Proposals:</strong> Detailed scope &amp; milestone estimates within 24 hours.</li>
                                <li>• <strong>Urgent Campus Inquiries:</strong> Direct WhatsApp assistance available.</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
