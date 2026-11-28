import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';
import { blogArticles, getBlogArticle } from '@/lib/seo-content';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return blogArticles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogArticle(slug);

    if (!article) {
        const fallbackTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return {
            title: `${fallbackTitle} | Aspire Info Blog`,
            description: `Read "${fallbackTitle}" on Aspire Info.`,
            alternates: { canonical: `https://www.aspireinfoedu.in/blog/${slug}` },
        };
    }

    return {
        title: article.metaTitle,
        description: article.description,
        alternates: {
            canonical: `https://www.aspireinfoedu.in/blog/${article.slug}`,
        },
        keywords: article.keywords,
        openGraph: {
            title: article.metaTitle,
            description: article.description,
            url: `https://www.aspireinfoedu.in/blog/${article.slug}`,
            siteName: "Aspire Info",
            locale: "en_IN",
            type: "article",
            publishedTime: article.dateISO,
            images: [
                {
                    url: "https://www.aspireinfoedu.in/logo.svg",
                    width: 1200,
                    height: 630,
                    alt: article.title,
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: article.metaTitle,
            description: article.description,
            images: ["https://www.aspireinfoedu.in/logo.svg"],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getBlogArticle(slug);

    if (!article) {
        notFound();
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "headline": article.title,
                "description": article.description,
                "url": `https://www.aspireinfoedu.in/blog/${article.slug}`,
                "datePublished": article.dateISO,
                "dateModified": article.dateISO,
                "keywords": article.keywords.join(", "),
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
            },
            ...(article.faqs.length > 0
                ? [
                      {
                          "@type": "FAQPage",
                          "mainEntity": article.faqs.map((faq) => ({
                              "@type": "Question",
                              "name": faq.question,
                              "acceptedAnswer": {
                                  "@type": "Answer",
                                  "text": faq.answer
                              }
                          }))
                      }
                  ]
                : [])
        ]
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

                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 text-accent-400 rounded-md mb-4">
                    {article.category}
                </span>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 uppercase leading-tight">
                    {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-mono mb-10 border-b border-white/10 pb-6">
                    <span>Published: {article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span className="text-accent-400">Aspire Info Engineering Team</span>
                </div>

                <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl mb-12 space-y-8 text-slate-300 font-light leading-relaxed">
                    <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
                        {article.intro}
                    </p>

                    {article.sections.map((section, idx) => (
                        <section key={idx} className="space-y-4 pt-4 border-t border-white/10">
                            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                {section.heading}
                            </h2>
                            {section.paragraphs.map((p, pIdx) => (
                                <p key={pIdx}>{p}</p>
                            ))}
                            {section.bullets && (
                                <ul className="space-y-3 pt-2">
                                    {section.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-200">
                                            <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-1" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}

                    {article.faqs.length > 0 && (
                        <section className="space-y-4 pt-6 border-t border-white/10">
                            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {article.faqs.map((faq, fIdx) => (
                                    <div key={fIdx} className="bg-brand-950/60 border border-white/10 rounded-xl p-5">
                                        <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-300">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <div className="bg-brand-900 border border-white/10 p-8 sm:p-10 rounded-2xl text-center shadow-2xl">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                        Ready to take the next step?
                    </h3>
                    <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6 font-light">
                        Partner with Aspire Info across Coimbatore, Chennai, Bangalore &amp; pan-India for technical trainers, web application development, or IT certification tracks.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={article.primaryCta.href}>
                            <Button variant="secondary" className="px-6 py-3 text-xs uppercase tracking-wider">
                                {article.primaryCta.label} &rarr;
                            </Button>
                        </Link>
                        <Link href={article.secondaryCta.href}>
                            <Button variant="outline" className="px-6 py-3 text-xs uppercase tracking-wider bg-white/5 border-white/10 hover:bg-white/10">
                                {article.secondaryCta.label} &rarr;
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
