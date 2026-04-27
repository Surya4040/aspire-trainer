import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fake blog format
    const articleTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="bg-white min-h-screen pt-12 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/blog" className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">{articleTitle}</h1>
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-12 border-b border-slate-100 pb-8">
                    <span>April 2026</span>
                    <span>•</span>
                    <span>5 min read</span>
                </div>
                <div className="prose prose-lg text-slate-700">
                    <p>
                        Welcome to the detailed article about <strong>{articleTitle}</strong>.
                        This is currently a placeholder text as we are actively writing more comprehensive
                        insights on this topic. Aspire Info is dedicated to bringing you the best tech education.
                    </p>
                    <p>
                        Stay tuned! Our curriculum experts and content writing team will update this fully
                        very soon. In the meantime, you can explore our course offerings to start your hands-on
                        journey in software development.
                    </p>
                </div>
                <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to start building?</h3>
                    <p className="text-slate-600 mb-6">Check out our practical, project-driven training programs.</p>
                    <Link href="/courses">
                        <Button variant="primary" className="px-8 py-3">Explore Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
