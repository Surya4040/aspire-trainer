import Link from 'next/link';

export const metadata = {
    title: "Blog & Resources | Aspire Info",
    description: "Read our latest articles on software development, career guidance, and interview preparation."
};

const articles = [
    {
        title: "How to Crack Product-Based Company Interviews in 2026",
        excerpt: "A comprehensive guide on Data Structures, System Design, and behavioral rounds to secure your dream job.",
        category: "Career Guidance",
        date: "April 24, 2026",
        slug: "crack-product-based-interviews"
    },
    {
        title: "MERN Stack vs MEAN Stack: Which should you choose?",
        excerpt: "An in-depth comparison of React vs Angular in the full-stack ecosystem and what the industry demands right now.",
        category: "Technical Read",
        date: "April 20, 2026",
        slug: "mern-vs-mean-stack"
    },
    {
        title: "Top 5 Automation Testing Frameworks to Learn",
        excerpt: "Why Playwright and Selenium continue to dominate the SDET landscape and how to get started.",
        category: "Testing",
        date: "April 15, 2026",
        slug: "top-automation-frameworks"
    },
    {
        title: "The Future of AI: Integrating LLMs in Web Apps",
        excerpt: "Learn how modern developers are using APIs like OpenAI and Anthropic to add intelligent features into basic web apps.",
        category: "AI & ML",
        date: "April 10, 2026",
        slug: "future-of-ai-llms"
    }
];

export default function BlogPage() {
    return (
        <div className="bg-slate-50 min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Latest Articles & Insights</h1>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Stay updated with the latest industry trends, tutorials, and career advice directly from our expert team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl transition-shadow group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                    {article.category}
                                </span>
                                <span className="text-sm text-slate-400 font-medium">{article.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                            </h2>
                            <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                                {article.excerpt}
                            </p>
                            <div className="mt-auto">
                                <Link href={`/blog/${article.slug}`} className="text-brand-600 font-semibold hover:underline decoration-2 underline-offset-4">Read Article &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
