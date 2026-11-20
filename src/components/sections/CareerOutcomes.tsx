import { Users, BookOpen, Monitor, Award } from 'lucide-react';

const stats = [
    { icon: <Users className="w-6 h-6 text-accent-400" />, value: "120+", label: "Vetted Tech Faculty" },
    { icon: <BookOpen className="w-6 h-6 text-blue-400" />, value: "50+", label: "Partner Institutions" },
    { icon: <Monitor className="w-6 h-6 text-emerald-400" />, value: "200+", label: "Web Applications Built" },
    { icon: <Award className="w-6 h-6 text-purple-400" />, value: "10k+", label: "Students Upskilled" }
];

export function CareerOutcomes() {
    return (
        <section className="py-20 bg-brand-950 text-white border-b border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div 
                            key={idx} 
                            className="bg-brand-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md shadow-xl hover:border-accent-500/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
