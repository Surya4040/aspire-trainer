"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 border-b border-slate-200' : 'bg-white py-4 border-b border-slate-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-950 rounded shadow-md shadow-accent-500/20 flex items-center justify-center border border-slate-800">
                                <span className="text-xl font-black text-white">A</span>
                            </div>
                            <div className="text-3xl font-black tracking-tighter">
                                <span className="text-slate-950">Aspire</span>
                                <span className="text-accent-500">.</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex space-x-8 items-center px-6 py-2">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-slate-950 uppercase tracking-widest transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="/contact" className="text-sm font-bold tracking-wide text-slate-600 hover:text-slate-950 uppercase">Log in</Link>
                        <Link href="/contact">
                            <Button variant="secondary" className="px-6 py-3 text-sm shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/50 bg-accent-500 hover:bg-accent-600">
                                Explore Portal
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="flex lg:hidden items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-950 focus:outline-none">
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 absolute w-full left-0 top-full shadow-2xl origin-top animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-800 hover:text-accent-500 hover:bg-slate-50 transition-colors uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-4 pt-6 pb-2 grid grid-cols-2 gap-4 border-t border-slate-100 mt-4">
                            <Link href="/contact" className="flex items-center justify-center font-bold text-slate-900 bg-slate-100 rounded-xl py-3 uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="secondary" className="w-full py-3 h-auto leading-none text-sm uppercase tracking-wider">Explore Portal</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
