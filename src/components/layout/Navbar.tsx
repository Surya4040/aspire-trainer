"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Hire Trainers', href: '/trainers' },
        { name: 'Website Creation', href: '/web-services' },
        { name: 'Digital Marketing', href: '/digital-marketing' },
        { name: 'Courses', href: '/courses' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
            isScrolled 
                ? 'bg-brand-950/95 backdrop-blur-md shadow-xl shadow-black/30 py-2.5 border-b border-white/10' 
                : 'bg-brand-950/80 backdrop-blur-sm py-4 border-b border-white/10'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-brand-900/90 rounded-xl shadow-md shadow-accent-500/20 flex items-center justify-center border border-white/10 group-hover:border-accent-500/50 transition-all p-1.5">
                                <img src="/logo-mark.svg" alt="Aspire Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-3xl font-black tracking-tighter">
                                <span className="text-white">Aspire</span>
                                <span className="text-accent-500">.</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex space-x-6 items-center px-4 py-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 relative py-1 ${
                                        isActive 
                                            ? 'text-white' 
                                            : 'text-slate-300 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="/trainers">
                            <Button variant="secondary" className="px-6 py-2.5 text-xs uppercase tracking-wider shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/50">
                                Hire a Trainer
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="flex lg:hidden items-center">
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
                            aria-label="Toggle Navigation"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-brand-950/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0 top-full shadow-2xl origin-top animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-6 space-y-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                                        isActive
                                            ? 'text-white bg-accent-500/15 border border-accent-500/30'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="px-4 pt-4 pb-2 border-t border-white/10 mt-4">
                            <Link href="/trainers" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="secondary" className="w-full py-3 h-auto text-xs uppercase tracking-wider">
                                    Hire a Trainer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
