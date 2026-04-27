"use client";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("https://formsubmit.co/ajax/aspireinfo.edu@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    course: formData.get('course'),
                    _subject: "New Lead from Aspire Info Website"
                })
            });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            form.reset();
        } catch (error) {
            console.error(error);
            // Fallback
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    return (
        <div className="bg-white min-h-screen pt-12 pb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Let&apos;s Discuss Your IT Future</h1>
                    <p className="text-lg text-slate-600">
                        Have questions about our programs or enrollment process? Fill out the form below or reach out to us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative z-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Drop us a line</h2>
                        {submitted ? (
                            <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center">
                                <div className="font-bold text-lg mb-2">Thank You!</div>
                                <p>Your request has been received. Our counselor will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input type="hidden" name="_captcha" value="false" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                        <input name="name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Phone / WhatsApp</label>
                                        <input name="phone" required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="+91 8220924040" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input name="email" required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Course of Interest</label>
                                    <select name="course" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-slate-700">
                                        <option value="">Select a Course</option>
                                        <option value="mern">MERN Stack Development</option>
                                        <option value="java">Java Fullstack</option>
                                        <option value="python">Python Fullstack</option>
                                        <option value="sdet">SDET Automation</option>
                                        <option value="ai">AI & Machine Learning</option>
                                        <option value="other">Not Sure / Counseling Needed</option>
                                    </select>
                                </div>
                                <div className="pt-2">
                                    <Button type="submit" variant="primary" className="w-full text-lg py-4">Request Callback</Button>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="flex flex-col justify-center space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-brand-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us / WhatsApp</h4>
                                    <p className="text-slate-600">+91 8220924040</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-brand-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                                    <p className="text-slate-600">aspireinfo.edu@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start sm:col-span-2">
                                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Location</h4>
                                    <p className="text-slate-600 max-w-sm">Online Platform<br />Based in Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl mt-4 relative overflow-hidden">
                            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Need immediate assistance?</h3>
                                    <p className="text-slate-400">Our counselors are available on WhatsApp 24/7.</p>
                                </div>
                                <a href="https://wa.me/918220924040" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    <MessageSquare className="w-5 h-5 fill-current" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#25D366] rounded-full blur-[60px] opacity-30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
