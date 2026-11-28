import Link from 'next/link';
import { MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-brand-950 text-slate-300 border-t border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                            <div className="w-9 h-9 rounded-lg bg-brand-900 border border-white/10 text-white flex items-center justify-center group-hover:border-accent-500/40 transition-colors p-1.5">
                                <img src="/logo-mark.svg" alt="Aspire Info Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-black tracking-tight text-white group-hover:text-accent-400 transition-colors">
                                Aspire<span className="text-accent-500">.</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 font-light">
                            Premier training vendors in Coimbatore &amp; pan-India technical faculty staffing for institutions, bespoke web application development, and practical online certification courses.
                        </p>
                        <div className="text-xs text-accent-400 font-semibold tracking-wide mb-2">
                            Coimbatore, Tamil Nadu &amp; Pan-India
                        </div>
                        <a 
                            href="https://share.google/K2tk7WqErcGum90bn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                        >
                            <MapPin className="w-3.5 h-3.5 text-accent-500" />
                            <span>View Google Location &rarr;</span>
                        </a>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Faculty Staffing</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                            <li><Link href="/trainers" className="hover:text-white transition-colors">Training Vendors in Coimbatore</Link></li>
                            <li><Link href="/trainers" className="hover:text-white transition-colors">College Bootcamps &amp; Placement</Link></li>
                            <li><Link href="/trainers" className="hover:text-white transition-colors">Corporate Technical Training</Link></li>
                            <li><Link href="/trainers" className="hover:text-white transition-colors">Faculty Development (FDP)</Link></li>
                            <li><Link href="/trainers" className="hover:text-white transition-colors">Apply as Technical Instructor</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Digital Engineering</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                            <li><Link href="/web-services" className="hover:text-white transition-colors">Application Development Coimbatore</Link></li>
                            <li><Link href="/web-services#quote-form" className="hover:text-white transition-colors">Custom Next.js &amp; Web Portals</Link></li>
                            <li><Link href="/digital-marketing" className="hover:text-white transition-colors">Digital Marketing Search Engine (SEO)</Link></li>
                            <li><Link href="/digital-marketing" className="hover:text-white transition-colors">Google Ads &amp; Meta Lead Gen</Link></li>
                            <li><Link href="/courses" className="hover:text-white transition-colors">Best Online Courses in Coimbatore</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Direct Contact</h3>
                        <p className="text-xs sm:text-sm text-slate-400 mb-1.5">
                            Location: <a href="https://share.google/K2tk7WqErcGum90bn" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-accent-400 transition-colors">Coimbatore, Tamil Nadu, India</a>
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 mb-1.5">Email: <a href="mailto:aspireinfo.edu@gmail.com" className="text-slate-200 hover:text-accent-400 transition-colors">aspireinfo.edu@gmail.com</a></p>
                        <p className="text-xs sm:text-sm text-slate-400 mb-4">Phone: <a href="tel:+918220924040" className="text-slate-200 hover:text-accent-400 transition-colors">+91 82209 24040</a></p>
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
                    <h4>Top Local SEO Index — Coimbatore, Tamil Nadu &amp; Pan-India</h4>
                    <p>
                        Aspire Info (Coimbatore, Tamil Nadu). Best online course in coimbatore, training vendors in coimbatore, training ventors in coimbatore, corporate training vendors in coimbatore, technical training vendors in coimbatore, college placement training vendors in coimbatore, application development in coimbatore, web application development in coimbatore, website development company in coimbatore, custom software development in coimbatore, digital marketing in coimbatore, digital marketing search engine, seo company in coimbatore, best seo services in coimbatore, search engine optimization coimbatore, google ads agency in coimbatore, hire technical trainers in coimbatore, technical faculty recruitment coimbatore, mern stack training in coimbatore, full stack web development course coimbatore, python training in coimbatore, java fullstack training in coimbatore, sdet automation testing course coimbatore, playwright automation training in coimbatore, best it training institute in coimbatore with placement, it training in gandhipuram, peelamedu, saravanampatti, rs puram, thudiyalur, singanallur, kurichi, pollachi, mettupalayam, tiruppur, erode, salem, madurai, trichy, chennai, bangalore, hyderabad, visakhapatnam, kochi, trivandrum, and all districts across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and Kerala. Google Location: https://share.google/K2tk7WqErcGum90bn.
                    </p>
                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Aspire Info (https://www.aspireinfoedu.in). All rights reserved.</p>
                    <div className="flex space-x-6 text-slate-400">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                        <Link href="/trainers" className="hover:text-white transition-colors">Hire Trainers</Link>
                        <a href="https://share.google/K2tk7WqErcGum90bn" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">Google Location</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
