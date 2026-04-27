import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            Aspire Info
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Online & Remote Learning. A fast-growing startup based in Tamil Nadu dedicated to teaching software engineering through practical execution.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Top Courses</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/courses/mern-stack" className="hover:text-brand-400 transition-colors">MERN Stack Development</Link></li>
                            <li><Link href="/courses/java-fullstack" className="hover:text-brand-400 transition-colors">Java Fullstack</Link></li>
                            <li><Link href="/courses/python-fullstack" className="hover:text-brand-400 transition-colors">Python Fullstack</Link></li>
                            <li><Link href="/courses/sdet" className="hover:text-brand-400 transition-colors">SDET / Automation</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
                            <li><Link href="/blog" className="hover:text-brand-400 transition-colors">Blog & Resources</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>
                        <p className="text-sm mb-2">Email: info@aspireinfo.com</p>
                        <p className="text-sm mb-4">Phone: +91 8220924040</p>
                        <Link href="/contact" className="inline-block border border-slate-600 hover:border-brand-500 hover:text-white px-4 py-2 rounded transition-colors text-sm">
                            Get in Touch
                        </Link>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Aspire Info. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
