import { CheckCircle } from "lucide-react";

export const metadata = {
    title: "About Us | Aspire Info",
    description: "Learn about Aspire Info's vision, mission, and how we are bridging the gap between college and the IT industry."
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <section className="mb-20 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Mission is Your <span className="text-brand-600">Growth</span></h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        At Aspire Info, we believe that practical execution is the only true way to learn software engineering.
                        We strive to bridge the massive gap between academic curricula and actual industry expectations.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-bl-full -z-10"></div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            To be the most trusted emerging Ed-Tech startup from Tamil Nadu, creating a generation of developers who build skills through execution.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-500 w-5 h-5" /> Make high-quality tech education accessible online.</li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-500 w-5 h-5" /> Ensure continuous industry alignment.</li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-500 w-5 h-5" /> Foster a community of lifelong learners.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="aspect-square bg-brand-50 rounded-full w-full max-w-md mx-auto relative flex items-center justify-center p-12">
                            <div className="text-center">
                                <div className="text-6xl font-black text-brand-600 mb-4">Focus</div>
                                <div className="text-2xl font-semibold text-slate-800">Code. Practice.<br />Master Skills.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Passionate About Building the Future</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">We are a dedicated startup with a deep focus on teaching coding the right way—through execution entirely online.</p>
                </section>
            </div>
        </div>
    );
}
