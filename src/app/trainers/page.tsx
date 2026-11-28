"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { 
    Users, 
    CheckCircle2, 
    Send, 
    Code2,
    Cpu,
    Terminal,
    Cloud,
    Shield,
    Layers,
    BookOpen,
    Clock,
    Award,
    Sparkles
} from 'lucide-react';

const domainGroups = [
    {
        title: "Full Stack & Web Engineering",
        items: [
            "MERN Stack (MongoDB, Express, React, Node)",
            "MEAN Stack (Angular, Express, Node, TS)",
            "Java Fullstack (Spring Boot, Microservices)",
            "Python Fullstack (Django, FastAPI, React)",
            "Next.js, React & Modern Frontend Architecture",
            ".NET Core & C# Enterprise Engineering"
        ]
    },
    {
        title: "AI, Data Science & Analytics",
        items: [
            "Generative AI, LLMs & Prompt Engineering",
            "Machine Learning & Deep Learning (PyTorch/TensorFlow)",
            "Data Engineering (Spark, Kafka, Snowflake)",
            "Business Intelligence (Power BI, Tableau)",
            "Data Science & Analytics (NumPy, Pandas, Scikit-learn)"
        ]
    },
    {
        title: "QA Automation & SDET",
        items: [
            "SDET Architecture (Java/Python + Selenium)",
            "Playwright Automation & TypeScript",
            "Mobile Automation with Appium",
            "API Testing with Postman & RestAssured",
            "Performance Testing with Apache JMeter"
        ]
    },
    {
        title: "Cloud, DevOps & Cybersecurity",
        items: [
            "AWS Solutions Architecture & SysOps",
            "Microsoft Azure Cloud Infrastructure",
            "DevOps: Docker, Kubernetes, Helm & Terraform",
            "CI/CD Pipelines (GitHub Actions, GitLab CI)",
            "Ethical Hacking & Web App Penetration Testing",
            "SOC Analysis & SIEM Security Operations"
        ]
    }
];

export default function TrainerRequirementPage() {
    const [tab, setTab] = useState<'hire' | 'apply'>('hire');
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
                    type: tab === 'hire' ? 'Trainer Requirement (Institution/Corporate)' : 'Instructor Application',
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    organization: formData.get('organization'),
                    domain: formData.get('domain'),
                    mode: formData.get('mode'),
                    details: formData.get('details'),
                    _subject: `Trainer Intake (${tab === 'hire' ? 'Hire Request' : 'Instructor Application'}) - Aspire Info`
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
                        Top Technical Training Vendors in Coimbatore &amp; Pan-India
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
                        HIRE TECHNICAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">TRAINERS ON-DEMAND.</span>
                    </h1>
                    <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                        Coimbatore&apos;s premier corporate training vendors. Deploy industry-proven faculty across 24+ modern tech domains for engineering college placement bootcamps, workshops, and enterprise upskilling batches in Coimbatore, South India, and nationwide.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-14">
                    <div className="bg-brand-900 border border-white/10 p-1.5 rounded-xl inline-flex gap-2">
                        <button
                            onClick={() => { setTab('hire'); setSubmitted(false); }}
                            className={`px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                                tab === 'hire'
                                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/40'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            For Colleges &amp; Corporates
                        </button>
                        <button
                            onClick={() => { setTab('apply'); setSubmitted(false); }}
                            className={`px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                                tab === 'apply'
                                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/40'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Join as Instructor
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                    
                    {/* Left: Key Information */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {tab === 'hire' ? 'Institutional Staffing Advantages' : 'Why Instruct with Aspire Info?'}
                            </h2>
                            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                                {tab === 'hire'
                                    ? 'Avoid recruitment delays and curriculum gaps. Our faculty brings verified industry backgrounds, structured courseware, practical assignments, and hands-on lab execution.'
                                    : 'Deliver high-impact training across colleges, bootcamps, and corporate clients in Tamil Nadu and online with transparent compensation and schedule flexibility.'}
                            </p>

                            <div className="space-y-4">
                                {(tab === 'hire' ? [
                                    { title: "Vetted Industry Practitioners", desc: "Rigorous technical assessment on code proficiency and classroom delivery." },
                                    { title: "Turnkey Labs & Assignments", desc: "Complete daily slide decks, coding exercises, mini-projects, and assessments." },
                                    { title: "Flexible Engagement Models", desc: "On-campus intensive sprints, remote live lectures, or weekend batches." },
                                    { title: "48 to 72 Hour Turnaround", desc: "Trainer profiles shortlisted promptly based on your syllabus and timeline." }
                                ] : [
                                    { title: "Consistent Training Engagements", desc: "Year-round assignments with colleges, hackathons, and corporate teams." },
                                    { title: "Fair & Transparent Remuneration", desc: "Competitive hourly and project-based compensation delivered on time." },
                                    { title: "Flexible Scheduling", desc: "Choose full-time campus commitments, part-time sprints, or weekend batches." },
                                    { title: "Curriculum Support", desc: "Access our pre-built course material, slide decks, and lab problem sets." }
                                ]).map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-white">{item.title}</div>
                                            <div className="text-slate-400 text-xs mt-0.5">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-brand-900/60 border border-white/10 rounded-2xl p-6">
                            <div className="text-xs uppercase tracking-widest font-bold text-accent-400 mb-3">Service Scope</div>
                            <div className="space-y-2 text-xs text-slate-300 font-light">
                                <div>• <strong>Campus Bootcamps:</strong> 1-week to 6-week intensive placement preparation.</div>
                                <div>• <strong>Corporate Upskilling:</strong> Transitioning employee batches into modern stacks.</div>
                                <div>• <strong>Specialized Workshops:</strong> Hands-on 2-day hackathon &amp; lab sprints.</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Intake Form */}
                    <div className="lg:col-span-7 bg-brand-900/90 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                        <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                            {tab === 'hire' ? 'Submit Trainer Requirement' : 'Instructor Application'}
                        </h2>
                        <p className="text-xs text-slate-400 mb-8">
                            {tab === 'hire'
                                ? 'Specify your institution and requirement details to receive verified trainer profiles.'
                                : 'Share your tech stack and training experience to be matched with upcoming batches.'}
                        </p>

                        {submitted ? (
                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                                <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40">
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Submission Confirmed</h3>
                                <p className="text-sm text-slate-300">
                                    Thank you. Our academic coordinator will review your requirement and reach out within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Full Name *</label>
                                        <input required name="name" type="text" placeholder="e.g. Ramesh Kumar" className="w-full bg-brand-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                                        <input required name="phone" type="tel" placeholder="+91 98765 43210" className="w-full bg-brand-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email Address *</label>
                                        <input required name="email" type="email" placeholder="name@domain.com" className="w-full bg-brand-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            {tab === 'hire' ? 'College / Company Name *' : 'Current Employer / Designation *'}
                                        </label>
                                        <input required name="organization" type="text" placeholder={tab === 'hire' ? 'e.g. XYZ Institute of Technology' : 'e.g. Lead Full Stack Architect'} className="w-full bg-brand-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Technical Domain *</label>
                                        <select name="domain" required className="w-full bg-brand-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors">
                                            <optgroup label="Full Stack & Web">
                                                <option value="MERN Stack">MERN Stack (React, Node, Express, MongoDB)</option>
                                                <option value="Java Fullstack">Java Fullstack (Spring Boot, Microservices)</option>
                                                <option value="Python Fullstack">Python Fullstack (Django, FastAPI, React)</option>
                                                <option value="MEAN Stack">MEAN Stack (Angular, Node, Express)</option>
                                                <option value="Next.js Frontend">Next.js &amp; Modern Frontend Engineering</option>
                                                <option value=".NET Core Fullstack">.NET Core &amp; C# Enterprise Stack</option>
                                            </optgroup>
                                            <optgroup label="AI & Data Science">
                                                <option value="Generative AI & LLMs">Generative AI, LLMs &amp; Prompt Engineering</option>
                                                <option value="Machine Learning">Machine Learning &amp; Deep Learning</option>
                                                <option value="Data Engineering">Data Engineering (Spark, Kafka, Snowflake)</option>
                                                <option value="Data Analytics & BI">Data Analytics &amp; Power BI / Tableau</option>
                                            </optgroup>
                                            <optgroup label="QA & Testing">
                                                <option value="SDET Automation">SDET (Selenium, Java, Cucumber)</option>
                                                <option value="Playwright Automation">Playwright &amp; TypeScript Automation</option>
                                                <option value="API & Mobile Testing">API &amp; Mobile Testing (Appium, Postman)</option>
                                            </optgroup>
                                            <optgroup label="Cloud & Security">
                                                <option value="AWS Cloud Architecture">AWS Cloud Architecture &amp; SysOps</option>
                                                <option value="DevOps & Kubernetes">DevOps (Docker, Kubernetes, CI/CD)</option>
                                                <option value="Cybersecurity & Ethical Hacking">Cybersecurity &amp; Ethical Hacking</option>
                                            </optgroup>
                                            <option value="Other Custom Domain">Other Custom Domain / Multiple Stacks</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Training Delivery Mode *</label>
                                        <select name="mode" required className="w-full bg-brand-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors">
                                            <option value="On-Campus / In-Person (Tamil Nadu)">On-Campus / In-Person (Tamil Nadu)</option>
                                            <option value="Online Live Remote">Online Live Remote</option>
                                            <option value="Hybrid (Campus + Online)">Hybrid (Campus + Online)</option>
                                            <option value="Weekend Intensive Bootcamp">Weekend Intensive Bootcamp</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                        {tab === 'hire' ? 'Batch Details & Scope (Students, duration, timeline) *' : 'Experience & Background (Years, topics taught, LinkedIn URL) *'}
                                    </label>
                                    <textarea
                                        required
                                        name="details"
                                        rows={4}
                                        placeholder={tab === 'hire' ? 'e.g. 80 CSE pre-final year students, 4-week placement bootcamp starting next month, 4 hours/day with hands-on labs...' : 'e.g. 6 years in MERN stack, trained 4 corporate batches and 2 college bootcamps, LinkedIn profile URL...'}
                                        className="w-full bg-brand-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors"
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    variant="secondary"
                                    className="w-full py-4 uppercase tracking-widest text-sm"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    {submitting ? "Submitting..." : tab === 'hire' ? 'Submit Trainer Requirement' : 'Submit Faculty Application'}
                                </Button>
                            </form>
                        )}
                    </div>

                </div>

                {/* Extended Domain Grid on Page */}
                <div className="border-t border-white/10 pt-16">
                    <div className="max-w-2xl mb-10">
                        <h3 className="text-3xl font-black text-white tracking-tight uppercase mb-2">Detailed Courseware Roster</h3>
                        <p className="text-sm text-slate-400 font-light">Explore technical domains currently supported for immediate campus and corporate faculty deployment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {domainGroups.map((group, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-white/10 bg-brand-900/60 hover:border-accent-500/40 transition-colors">
                                <h4 className="text-base font-bold text-white mb-3">{group.title}</h4>
                                <ul className="space-y-2 text-xs text-slate-300">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-1.5">
                                            <span className="text-accent-500 font-bold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
