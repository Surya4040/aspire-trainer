import Link from 'next/link';
import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface SeoHighlight {
  title: string;
  desc: string;
  points: string[];
}

export interface SeoLandingProps {
  badge: string;
  h1Top: string;
  h1Highlight: string;
  subtitle: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  serviceHighlights: SeoHighlight[];
  serviceAreasTitle: string;
  serviceAreas: string[];
  faqs: { question: string; answer: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  schema: Record<string, unknown>;
}

/**
 * Shared layout component for dedicated regional and service SEO landing pages.
 */
export function SeoLandingPage({
  badge,
  h1Top,
  h1Highlight,
  subtitle,
  overviewTitle,
  overviewParagraphs,
  serviceHighlights,
  serviceAreasTitle,
  serviceAreas,
  faqs,
  primaryCta,
  secondaryCta,
  schema,
}: SeoLandingProps) {
  return (
    <div className="bg-brand-950 text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-accent-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium text-xs tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            {badge}
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase leading-tight">
            {h1Top} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accent-500">
              {h1Highlight}
            </span>
          </h1>
          <p className="text-lg text-slate-300/80 leading-relaxed font-light mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryCta.href}>
              <Button variant="secondary" className="px-7 py-3.5 text-xs uppercase tracking-wider shadow-lg shadow-accent-500/20">
                {primaryCta.label} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href={secondaryCta.href}>
              <Button variant="outline" className="px-7 py-3.5 text-xs uppercase tracking-wider bg-white/5 border-white/10 hover:bg-white/10">
                {secondaryCta.label}
              </Button>
            </Link>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            {overviewTitle}
          </h2>
          {overviewParagraphs.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {serviceHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl hover:border-accent-500/50 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed font-light mb-5">
                {item.desc}
              </p>
              <ul className="space-y-2.5 border-t border-white/10 pt-4">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-brand-900/60 border border-white/10 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 text-accent-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" />
            <span>Coverage &amp; Locations</span>
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-5">
            {serviceAreasTitle}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {serviceAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-brand-900/80 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
