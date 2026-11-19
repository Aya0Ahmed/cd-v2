import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Scale } from 'lucide-react';
import { BLOG_ARTICLES, SERVICES, UI_COPY } from '../data/content';
import type { Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface BlogDetailPageProps {
  lang: Language;
  slug: string;
  onNavigate: (route: PageRoute) => void;
}

export function BlogDetailPage({ lang, slug, onNavigate }: BlogDetailPageProps) {
  const article = BLOG_ARTICLES.find((a) => a.slug === slug) ?? BLOG_ARTICLES[0];
  const relatedService = SERVICES.find((s) => s.slug === article.relatedServiceSlug) ?? SERVICES[0];
  const otherArticles = BLOG_ARTICLES.filter((a) => a.id !== article.id);

  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft;
  const ForwardArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-14">
      {/* Parallax Article Header */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={article.image}
            alt={article.imageAlt[lang]}
            className="w-full h-full object-cover opacity-35"
            fallbackTitle={article.title[lang]}
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/75 to-[#0B0F0C]/50 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 pb-16 space-y-6">
          <button
            type="button"
            onClick={() => onNavigate({ name: 'blog' })}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#B2BFB4] hover:text-[#85DF1A] transition-colors cursor-pointer"
          >
            <BackArrow className="w-4 h-4" />
            <span>{UI_COPY.blogPage.backToBlog[lang]}</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl space-y-4"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#B2BFB4]">
              <span className="font-semibold text-[#85DF1A]">{article.category[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>{article.publishedDate[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime[lang]}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-balance">
              {article.title[lang]}
            </h1>

            <HorizonArc className="max-w-sm" />

            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {article.excerpt[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Article Body + Linked Service Sidebar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <article className="lg:col-span-8 bg-[#131915]/85 backdrop-blur-md border border-white/10 rounded-2xl p-7 sm:p-10 space-y-8">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#0B0F0C] border border-white/10">
            <ResilientImage
              src={article.image}
              alt={article.imageAlt[lang]}
              className="w-full h-full object-cover"
              fallbackTitle={article.title[lang]}
            />
          </div>

          <div className="space-y-8">
            {article.sections.map((sec, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="space-y-3"
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {sec.heading[lang]}
                </h2>
                <p className="text-base text-[#B2BFB4] leading-relaxed">{sec.body[lang]}</p>
              </motion.section>
            ))}
          </div>
        </article>

        {/* Related Legal Service & Consultation Conversion Card */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-[#19241B] to-[#111712] border border-[#65B307]/40 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#85DF1A]">
              <Scale className="w-4 h-4" />
              <span>{lang === 'ar' ? 'الخدمة القانونية المرتبطة' : 'Related Practice Area'}</span>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#0B0F0C] border border-white/10">
              <ResilientImage
                src={relatedService.image}
                alt={relatedService.imageAlt[lang]}
                className="w-full h-full object-cover"
                fallbackTitle={relatedService.title[lang]}
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl font-bold text-white">
                {relatedService.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#B2BFB4] leading-relaxed">
                {relatedService.summary[lang]}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="button"
                onClick={() =>
                  onNavigate({
                    name: 'request',
                    preselectedService: relatedService.id,
                    preselectedDiscipline: relatedService.discipline,
                  })
                }
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-xl transition-colors cursor-pointer"
              >
                <span>{UI_COPY.nav.requestCta[lang]}</span>
                <ForwardArrow className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate({ name: 'service-detail', slug: relatedService.slug })}
                className="w-full px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
              >
                {UI_COPY.servicesPage.exploreBtn[lang]}
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* More Legal Guides */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
          {lang === 'ar' ? 'مقالات قانونية أخرى' : 'More Legal Insights'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherArticles.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate({ name: 'blog-detail', slug: item.slug })}
              className="group text-start bg-[#131915]/85 border border-white/10 hover:border-[#85DF1A]/60 rounded-xl overflow-hidden transition-colors cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#0B0F0C]">
                <ResilientImage
                  src={item.image}
                  alt={item.imageAlt[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={item.title[lang]}
                />
              </div>
              <div className="p-4 space-y-1.5">
                <div className="text-xs font-medium text-[#85DF1A]">{item.category[lang]}</div>
                <div className="text-sm font-bold text-white group-hover:text-[#85DF1A] transition-colors line-clamp-2">
                  {item.title[lang]}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
