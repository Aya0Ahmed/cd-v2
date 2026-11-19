import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { ASSETS, BLOG_ARTICLES, UI_COPY } from '../data/content';
import type { Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface BlogPageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

export function BlogPage({ lang, onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const categories = Array.from(
    new Set(BLOG_ARTICLES.map((article) => article.category[lang])),
  );

  const visibleArticles =
    selectedCategory === 'all'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((article) => article.category[lang] === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Legal Insights Hero Banner */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.legalContracts}
            alt={
              lang === 'ar'
                ? 'المدونة القانونية ومراجع التشريع في CD Consulting'
                : 'CD Consulting Legal Insights and legislative guides'
            }
            className="w-full h-full object-cover opacity-35"
            fallbackTitle="CD Consulting Legal Insights"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/75 to-[#0B0F0C]/50 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#85DF1A]">
              <BookOpen className="w-4 h-4" />
              <span>{UI_COPY.brandTagline[lang]}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {UI_COPY.blogPage.pageTitle[lang]}
            </h1>

            <HorizonArc className="max-w-sm" />

            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {UI_COPY.blogPage.pageIntro[lang]}
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#131915]/85 backdrop-blur-xl border border-white/15 rounded-xl">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'text-[#0B0F0C] font-semibold'
                  : 'text-[#B2BFB4] hover:text-white'
              }`}
            >
              {selectedCategory === 'all' && (
                <motion.span
                  layoutId="blog-category-tab"
                  transition={{ type: 'spring', stiffness: 440, damping: 34 }}
                  className="absolute inset-0 bg-[#65B307] rounded-lg"
                />
              )}
              <span className="relative z-10">
                {lang === 'ar' ? 'جميع المقالات القانونية' : 'All Legal Guides'}
              </span>
            </button>

            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'text-[#0B0F0C] font-semibold'
                      : 'text-[#B2BFB4] hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="blog-category-tab"
                      transition={{ type: 'spring', stiffness: 440, damping: 34 }}
                      className="absolute inset-0 bg-[#65B307] rounded-lg"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.34, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              onClick={() => onNavigate({ name: 'blog-detail', slug: article.slug })}
              className="group bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200 cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#0B0F0C] border-b border-white/10">
                  <ResilientImage
                    src={article.image}
                    alt={article.imageAlt[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    fallbackTitle={article.title[lang]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-[#131915]/25 to-transparent" />
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#B2BFB4]">
                    <span className="font-semibold text-[#85DF1A]">{article.category[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime[lang]}</span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#85DF1A] transition-colors leading-snug">
                    {article.title[lang]}
                  </h2>

                  <p className="text-sm sm:text-base text-[#B2BFB4] leading-relaxed">
                    {article.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-[#0D120E]/80 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#85DF1A]">
                <span>{UI_COPY.blogPage.readMore[lang]}</span>
                <DirectionalArrow className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
