import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-brand-950 text-slate-300 border-t border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                            <div className="w-9 h-9 rounded-lg bg-brand-900 border border-white/10 text-white font-bold text-sm flex items-center justify-center group-hover:border-accent-500/40 transition-colors">
                                A
                            </div>
                            <span className="text-xl font-black tracking-tight text-white group-hover:text-accent-400 transition-colors">
                                Aspire<span className="text-accent-500">.</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                            Pan-India technical faculty staffing for institutions and enterprises, bespoke modern web creation, and practical online certification courses.
                        </p>
                        <div className="text-xs text-accent-400 font-semibold tracking-wide">
                            Serving Colleges &amp; Corporates Nationwide
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Faculty Staffing</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                            <li><Link href="/trainers" className="hover:text-white transition-colors">College Bootcamps</Link></li>
                            <li><Link href="/trainers" className="hover:text-white transition-colors">Corporate Technical Faculty</Link></li>
                            <li><Link href="/trainers" className="hover:text-white transition-colors">Faculty Development (FDP)</Link></li>
                            <li><Link href="/trainers" className="hover:text-white transition-colors">Apply as Instructor</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Digital Engineering</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                            <li><Link href="/web-services" className="hover:text-white transition-colors">Website Creation &amp; Next.js</Link></li>
                            <li><Link href="/web-services#quote-form" className="hover:text-white transition-colors">Request Project Estimate</Link></li>
                            <li><Link href="/digital-marketing" className="hover:text-white transition-colors">Technical SEO &amp; Google Ads</Link></li>
                            <li><Link href="/courses" className="hover:text-white transition-colors">Online IT Courses</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Direct Contact</h3>
                        <p className="text-xs sm:text-sm text-slate-400 mb-2">Email: <a href="mailto:aspireinfo.edu@gmail.com" className="text-slate-200 hover:text-accent-400 transition-colors">aspireinfo.edu@gmail.com</a></p>
                        <p className="text-xs sm:text-sm text-slate-400 mb-5">Phone: <a href="tel:+918220924040" className="text-slate-200 hover:text-accent-400 transition-colors">+91 82209 24040</a></p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 rounded-lg shadow-lg shadow-accent-500/20 transition-all hover:scale-105"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Hidden SEO Geolocation index for search crawlers without cluttering user UI */}
                <div className="sr-only">
                    <h4>Regional Coverage Across India</h4>
                    <p>
                        Providing technical trainers, college campus bootcamps, and website creation across Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Erode, Vellore, Bangalore, Mysore, Mangalore, Hubli, Hyderabad, Warangal, Vizag, Vijayawada, Guntur, Kochi, Trivandrum, Calicut, Mumbai, Pune, Delhi NCR, and all districts of Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and Kerala.
                    </p>
                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Aspire Info. All rights reserved.</p>
                    <div className="flex space-x-6 text-slate-400">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
