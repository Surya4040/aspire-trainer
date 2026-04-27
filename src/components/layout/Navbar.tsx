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
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-brand-700 to-accent-500 bg-clip-text text-transparent">
                            Aspire Info
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary">Book Free Demo</Button>
                    </nav>

                    {/* Mobile Nav Toggle */}
                    <div className="flex md:hidden items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600">
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 top-20 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 pt-4">
                            <Button variant="primary" className="w-full">Book Free Demo</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
