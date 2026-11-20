import { 
    Code2, 
    Cpu, 
    Terminal, 
    Cloud, 
    Shield, 
    Layers, 
    CheckCircle2, 
    ArrowRight,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const domainCategories = [
    {
        category: "Full Stack & Web Engineering",
        icon: Code2,
        accentBorder: "hover:border-accent-500/50",
        iconBg: "bg-accent-500/10 text-accent-400 border border-accent-500/30",
        domains: [
            "MERN Stack (MongoDB, Express, React, Node.js)",
            "MEAN Stack (Angular, Express, Node.js, TypeScript)",
            "Java Full Stack (Core Java, Spring Boot, Microservices)",
            "Python Full Stack (Django, FastAPI, PostgreSQL, React)",
            "Next.js, TypeScript & Modern Frontend Architecture",
            ".NET Core & C# Enterprise Full Stack"
        ]
    },
    {
        category: "Artificial Intelligence & Data Analytics",
        icon: Cpu,
        accentBorder: "hover:border-blue-500/50",
        iconBg: "bg-blue-500/10 text-blue-400 border border-blue-500/30",
        domains: [
            "Generative AI, Large Language Models (LLMs) & Prompting",
            "Machine Learning & Deep Learning (PyTorch, TensorFlow)",
            "Data Science & Analytics (NumPy, Pandas, Scikit-Learn)",
            "Data Engineering with Apache Spark, Kafka & Snowflake",
            "Business Intelligence with Power BI & Tableau",
            "Computer Vision & Natural Language Processing (NLP)"
        ]
    },
    {
        category: "QA Automation & SDET",
        icon: Terminal,
        accentBorder: "hover:border-emerald-500/50",
        iconBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
        domains: [
            "SDET Architecture (Java/Python + Selenium WebDriver)",
            "Modern Web Automation with Playwright & TypeScript",
            "Mobile App Automation with Appium (iOS & Android)",
            "API Testing with Postman & RestAssured",
            "Performance Testing with Apache JMeter",
            "CI/CD Test Pipeline Integration (Jenkins, GitHub Actions)"
        ]
    },
    {
        category: "Cloud Architecture & DevOps",
        icon: Cloud,
        accentBorder: "hover:border-sky-500/50",
        iconBg: "bg-sky-500/10 text-sky-400 border border-sky-500/30",
        domains: [
            "Amazon Web Services (AWS Solutions Architect & SysOps)",
            "Microsoft Azure Cloud Solutions & Administration",
            "DevOps: Docker, Kubernetes Container Orchestration",
            "Infrastructure as Code (IaC) with Terraform & Ansible",
            "CI/CD Automated Pipelines (GitHub Actions, GitLab CI)",
            "Linux Systems Administration & Bash Automation"
        ]
    },
    {
        category: "Cybersecurity & Ethical Hacking",
        icon: Shield,
        accentBorder: "hover:border-red-500/50",
        iconBg: "bg-red-500/10 text-red-400 border border-red-500/30",
        domains: [
            "Ethical Hacking & Web Application Penetration Testing",
            "Network Security, Firewalls & Threat Analysis",
            "Security Operations Center (SOC) & SIEM Tools",
            "Incident Response & Vulnerability Management (VAPT)",
            "Cloud Security Compliance (AWS/Azure Security)",
            "Cryptography & Secure Coding Best Practices"
        ]
    },
    {
        category: "Enterprise Systems & Low Code",
        icon: Layers,
        accentBorder: "hover:border-purple-500/50",
        iconBg: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
        domains: [
            "ServiceNow System Administration & Development",
            "SAP FICO / SAP ABAP Enterprise ERP Modules",
            "Salesforce CRM Administration & Apex Development",
            "Oracle Database Administration (DBA & PL/SQL)",
            "RPA (Robotic Process Automation with UiPath)",
            "Power Platform (Power Apps & Power Automate)"
        ]
    }
];

export function DomainShowcase() {
    return (
        <section id="domains" className="py-24 bg-brand-950 text-white border-b border-white/10 relative overflow-hidden">
            <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 font-bold text-xs uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Comprehensive Faculty Roster
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
                        24+ Technical Domains <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">Covered On-Demand.</span>
                    </h2>
                    <p className="text-slate-300/80 text-base sm:text-lg font-light">
                        Deploy industry-proven corporate faculty across modern programming languages, AI models, automation suites, cloud frameworks, and enterprise software.
                    </p>
                </div>

                {/* Domain Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                    {domainCategories.map((group, idx) => {
                        const Icon = group.icon;
                        return (
                            <div 
                                key={idx} 
                                className={`group bg-brand-900/80 border border-white/10 rounded-2xl p-7 ${group.accentBorder} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 backdrop-blur-md flex flex-col justify-between`}
                            >
                                <div>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${group.iconBg} transition-transform group-hover:scale-105`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-accent-300 transition-colors">
                                        {group.category}
                                    </h3>

                                    <ul className="space-y-2.5">
                                        {group.domains.map((domain, di) => (
                                            <li key={di} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/90 font-light">
                                                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                                <span>{domain}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Syllabus Delivery Banner */}
                <div className="bg-brand-900 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
                    <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-400">
                            Custom Syllabus Delivery
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white mt-1 uppercase tracking-tight">
                            Need a specialized domain or custom college curriculum?
                        </h3>
                        <p className="text-sm text-slate-300/80 mt-2 max-w-2xl font-light leading-relaxed">
                            We curate tailored lab exercises, projects, and faculty matched to your semester timelines and specific student batch sizes.
                        </p>
                    </div>
                    <Link href="/trainers">
                        <Button variant="secondary" className="px-8 py-3.5 text-xs uppercase tracking-wider whitespace-nowrap">
                            Request Specific Domain Faculty &rarr;
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
