import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const articleTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `${articleTitle} | Aspire Info Blog`,
        description: `Read "${articleTitle}" on the Aspire Info blog. Insights on technical faculty staffing, web application development, and software engineering.`,
        alternates: {
            canonical: `https://www.aspireinfoedu.in/blog/${slug}`,
        },
        keywords: [
            articleTitle.toLowerCase(),
            "aspire info tech blog",
            "training vendors in coimbatore",
            "application development in coimbatore",
            "best online course in coimbatore"
        ],
        openGraph: {
            title: `${articleTitle} | Aspire Info`,
            description: `Read "${articleTitle}" on Aspire Info.`,
            url: `https://www.aspireinfoedu.in/blog/${slug}`,
            siteName: "Aspire Info",
            locale: "en_IN",
            type: "article",
            images: [
                {
                    url: "https://www.aspireinfoedu.in/logo.svg",
                    width: 1200,
                    height: 630,
                    alt: articleTitle,
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: articleTitle,
            description: `Read "${articleTitle}" on the Aspire Info blog.`,
            images: ["https://www.aspireinfoedu.in/logo.svg"],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const articleTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": articleTitle,
        "description": `Read "${articleTitle}" on the Aspire Info blog.`,
        "url": `https://www.aspireinfoedu.in/blog/${slug}`,
        "datePublished": "2026-04-15",
        "author": {
            "@type": "Organization",
            "name": "Aspire Info",
            "url": "https://www.aspireinfoedu.in"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Aspire Info",
            "url": "https://www.aspireinfoedu.in",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.aspireinfoedu.in/logo.svg"
            }
        }
    };

    return (
        <div className="bg-brand-950 text-white min-h-screen pt-32 pb-24 relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Link href="/blog" className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-accent-400 hover:text-accent-300 transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
                </Link>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 uppercase leading-tight">
                    {articleTitle}
                </h1>

                <div className="flex items-center gap-4 text-slate-400 text-xs font-mono mb-10 border-b border-white/10 pb-6">
                    <span>Published: April 2026</span>
                    <span>•</span>
                    <span>5 min read</span>
                    <span>•</span>
                    <span className="text-accent-400">Engineering Staff</span>
                </div>

                <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl mb-12 space-y-6 text-slate-300 font-light leading-relaxed">
                    <p className="text-base sm:text-lg text-white font-normal">
                        Welcome to the detailed engineering analysis on <strong>{articleTitle}</strong>.
                    </p>
                    <p>
                        In today&apos;s fast-evolving software landscape, building scalable architectures and hiring the right technical talent requires a balanced blend of hands-on execution and structured fundamentals.
                    </p>
                    <p>
                        Whether you are an engineering coordinator planning a placement bootcamp, a business owner looking for a high-performance web platform, or a developer leveling up their stack, practical execution remains the primary differentiator.
                    </p>
                </div>

                <div className="bg-brand-900 border border-white/10 p-8 sm:p-10 rounded-2xl text-center shadow-2xl">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                        Ready to level up your team or career?
                    </h3>
                    <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6 font-light">
                        Deploy verified technical trainers for your campus or explore our project-driven programs.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/trainers">
                            <Button variant="secondary" className="px-6 py-3 text-xs uppercase tracking-wider">
                                Hire a Trainer &rarr;
                            </Button>
                        </Link>
                        <Link href="/courses">
                            <Button variant="outline" className="px-6 py-3 text-xs uppercase tracking-wider bg-white/5 border-white/10 hover:bg-white/10">
                                Explore Courses &rarr;
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
