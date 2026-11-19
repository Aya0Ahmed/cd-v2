import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  ChevronLeft,
  ChevronRight,
  FileSearch,
  Scale,
} from 'lucide-react';
import {
  ASSETS,
  BLOG_ARTICLES,
  DISCIPLINE_LABELS,
  SERVICES,
  SPECIALIST_ROLES,
  UI_COPY,
} from '../data/content';
import type { DisciplineId, Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';
import { Legal3DShowcase } from '../components/Legal3DShowcase';

interface HomePageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

const DISCIPLINE_ICON: Record<DisciplineId, typeof Scale> = {
  legal: Scale,
  accounting: Calculator,
  research: FileSearch,
};

export function HomePage({ lang, onNavigate }: HomePageProps) {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const PrevIcon = lang === 'ar' ? ChevronRight : ChevronLeft;
  const NextIcon = lang === 'ar' ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % SERVICES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const spotlight = SERVICES[spotlightIndex];

  const workflowSteps = [
    {
      num: '01',
      title: { ar: 'دراسة الملف وتكييفه القانوني', en: 'Legal Triage & Case Structuring' },
      desc: {
        ar: 'تحديد الشكل القانوني أو المسار القضائي والضريبي الأنسب خلال ساعات من استلام الطلب.',
        en: 'Immediate classification across corporate law, litigation, tax, and licensing tracks.',
      },
    },
    {
      num: '02',
      title: { ar: 'فحص مشترك (محاماة · محاسبة · أبحاث)', en: 'Tri-Disciplinary Legal & Tax Review' },
      desc: {
        ar: 'مراجعة متزامنة تحمي حقوق الشركاء وتغلق الثغرات التعاقدية والضريبية والإدارية.',
        en: 'Synchronized oversight by attorneys, CPAs, and licensing specialists.',
      },
    },
    {
      num: '03',
      title: { ar: 'الصياغة والتمثيل أمام الهيئات والمحاكم', en: 'Drafting, Authorities & Court Representation' },
      desc: {
        ar: 'تأسيس الشركات وإقامات الأجانب، صياغة العقود، تسجيل العلامات، أو الترافع وتحصيل الديون.',
        en: 'Incorporations, residencies, contract drafting, IP filings, or court/arbitration defense.',
      },
    },
    {
      num: '04',
      title: { ar: 'التسليم الموثق والمتابعة الدورية', en: 'Certified Handover & Ongoing Counsel' },
      desc: {
        ar: 'تسليم كافة العقود والشهادات والقوائم المالية المعتمدة مع التزام كامل بمتابعة التجديدات.',
        en: 'Delivery of notarized deeds, statements, and ongoing statutory compliance.',
      },
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Cinematic Hero with Interactive 3D Scales of Justice Centerpiece */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.cairoSkyline}
            alt={
              lang === 'ar'
                ? 'أفق القاهرة وكورنيش النيل — مقر CD Consulting'
                : 'Cairo Nile Corniche skyline — CD Consulting'
            }
            className="w-full h-full object-cover opacity-40"
            fallbackTitle="CD Consulting — Cairo"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/70 to-[#0B0F0C]/45 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left/Start Editorial Hero Statement */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-3 bg-[#131915]/85 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-2">
                <img
                  src={ASSETS.logo}
                  alt="CD Consulting Logo"
                  className="h-8 w-auto object-contain rounded bg-white p-0.5"
                />
                <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
                  {UI_COPY.hero.kicker[lang]}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.14] text-balance text-white">
                {UI_COPY.hero.headline[lang]}
              </h1>

              <HorizonArc className="max-w-md" />

              <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed max-w-[56ch]">
                {UI_COPY.hero.subheadline[lang]}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request' })}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] active:scale-[0.98] transition-all duration-150 rounded-xl cursor-pointer whitespace-nowrap shrink-0 shadow-[0_0_28px_rgba(101,179,7,0.3)]"
                >
                  <span>{UI_COPY.hero.primaryCta[lang]}</span>
                  <DirectionalArrow className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'services', filter: 'all' })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors duration-150 rounded-xl cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                </button>
              </div>
            </motion.div>

            {/* Right/End: Interactive 3D Illuminated Scales of Justice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <Legal3DShowcase lang={lang} />
            </motion.div>
          </div>

          {/* Interactive 6-Practice Quick-Jump Strip */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICES.map((srv, idx) => {
              const active = idx === spotlightIndex;
              return (
                <motion.button
                  key={srv.id}
                  type="button"
                  whileHover={{ y: -2 }}
                  onClick={() => setSpotlightIndex(idx)}
                  className={`text-start p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#65B307]/15 border-[#85DF1A]/70 text-white'
                      : 'bg-[#131915]/70 border-white/10 text-[#B2BFB4] hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="text-[11px] font-mono tabular-nums text-[#85DF1A]">
                    {srv.indexNumber}
                  </div>
                  <div className="text-xs font-semibold line-clamp-2 mt-0.5 leading-snug">
                    {srv.title[lang]}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Interactive Law-Firm Service Spotlight Carousel */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="bg-[#131915]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] bg-[#0B0F0C] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={spotlight.id}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <ResilientImage
                  src={spotlight.image}
                  alt={spotlight.imageAlt[lang]}
                  className="w-full h-full object-cover"
                  fallbackTitle={spotlight.title[lang]}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-transparent to-[#0B0F0C]/40" />

            <div className="absolute top-4 inset-x-4 flex items-center justify-between">
              <span className="px-2.5 py-1 text-xs font-mono tabular-nums bg-[#0B0F0C]/85 text-[#85DF1A] rounded-md border border-white/10">
                {spotlight.indexNumber} / 06
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label={lang === 'ar' ? 'الخدمة السابقة' : 'Previous service'}
                  onClick={() =>
                    setSpotlightIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length)
                  }
                  className="w-8 h-8 rounded-lg bg-[#0B0F0C]/85 hover:bg-[#65B307] hover:text-[#0B0F0C] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <PrevIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label={lang === 'ar' ? 'الخدمة التالية' : 'Next service'}
                  onClick={() => setSpotlightIndex((prev) => (prev + 1) % SERVICES.length)}
                  className="w-8 h-8 rounded-lg bg-[#0B0F0C]/85 hover:bg-[#65B307] hover:text-[#0B0F0C] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <NextIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={spotlight.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="space-y-4"
              >
                <div className="text-xs font-medium text-[#85DF1A]">
                  {DISCIPLINE_LABELS[spotlight.discipline][lang]}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {spotlight.title[lang]}
                </h2>
                <p className="text-sm sm:text-base text-[#B2BFB4] leading-relaxed">
                  {spotlight.detailedExplanation[lang]}
                </p>
                <ul className="pt-2 space-y-2 text-xs sm:text-sm text-[#F4F7F4]/90">
                  {spotlight.subScopes.slice(0, 3).map((sub) => (
                    <li key={sub.id} className="flex items-start gap-2">
                      <span className="text-[#85DF1A] font-bold" aria-hidden="true">
                        —
                      </span>
                      <span>{sub.title[lang]}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate({
                      name: 'request',
                      preselectedService: spotlight.id,
                      preselectedDiscipline: spotlight.discipline,
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-xl transition-colors cursor-pointer"
                >
                  <span>{UI_COPY.servicesPage.requestThisBtn[lang]}</span>
                  <DirectionalArrow className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'service-detail', slug: spotlight.slug })}
                  className="text-xs sm:text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer"
                >
                  {UI_COPY.homeServices.inspectService[lang]}
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                {SERVICES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={s.title[lang]}
                    onClick={() => setSpotlightIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      idx === spotlightIndex ? 'w-6 bg-[#85DF1A]' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual 6-Service Mosaic Gallery */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              {UI_COPY.homeServices.heading[lang]}
            </h2>
            <p className="text-base text-[#B2BFB4]">{UI_COPY.homeServices.subheading[lang]}</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ name: 'services', filter: 'all' })}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#131915] border border-white/15 hover:border-[#85DF1A] rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <span>{UI_COPY.homeServices.viewAll[lang]}</span>
            <DirectionalArrow className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => onNavigate({ name: 'service-detail', slug: service.slug })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.34, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group text-start bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85DF1A]"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0F0C]">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    fallbackTitle={service.title[lang]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-[#131915]/20 to-transparent" />
                  <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-xs text-white">
                    <span className="font-medium text-[#85DF1A]">
                      {DISCIPLINE_LABELS[service.discipline][lang]}
                    </span>
                    <span className="font-mono tabular-nums font-semibold">
                      {service.indexNumber}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#85DF1A] transition-colors leading-snug">
                    {service.title[lang]}
                  </h3>

                  <p className="text-sm text-[#B2BFB4] leading-relaxed">
                    {service.summary[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#0D120E]/80 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
                <span>{UI_COPY.homeServices.inspectService[lang]}</span>
                <DirectionalArrow className="w-4 h-4 text-[#85DF1A] transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* 4. Three Specialist Divisions (Lawyers / Accountants / Researchers) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              {UI_COPY.pillars.heading[lang]}
            </h2>
            <p className="text-base text-[#B2BFB4]">{UI_COPY.pillars.subheading[lang]}</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ name: 'about' })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <span>{UI_COPY.nav.about[lang]}</span>
            <DirectionalArrow className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIALIST_ROLES.map((role, index) => {
            const Icon = DISCIPLINE_ICON[role.id];
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0F0C]">
                    <ResilientImage
                      src={role.image}
                      alt={role.imageAlt[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      fallbackTitle={role.title[lang]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-[#131915]/30 to-transparent" />
                    <div className="absolute bottom-4 inset-x-5 flex items-center justify-between text-white">
                      <div className="w-10 h-10 rounded-xl bg-[#65B307] text-[#0B0F0C] flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5" strokeWidth={1.85} />
                      </div>
                      <span className="text-xs font-mono tabular-nums text-[#85DF1A]">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{role.title[lang]}</h3>
                      <p className="text-xs text-[#85DF1A] font-medium">{role.subtitle[lang]}</p>
                    </div>

                    <p className="text-sm text-[#B2BFB4] leading-relaxed">
                      {role.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0D120E]/80 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate({ name: 'request', preselectedDiscipline: role.id })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#85DF1A] transition-colors cursor-pointer"
                  >
                    <span>{role.pluralTitle[lang]}</span>
                    <DirectionalArrow className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate({ name: 'services', filter: role.id })}
                    className="text-xs font-medium text-[#B2BFB4] hover:text-white cursor-pointer"
                  >
                    {lang === 'ar' ? 'عرض الخدمات' : 'View Scope'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Interactive Execution Workflow Strip */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="bg-[#131915]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1.5">
              <span className="text-xs font-medium text-[#85DF1A]">
                {UI_COPY.brandTagline[lang]}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'ar'
                  ? 'آلية العمل القانوني والمحاسبي في مكتبنا'
                  : 'How Our Law Firm Executes Client Mandates'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ name: 'about' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer"
            >
              <span>{UI_COPY.nav.about[lang]}</span>
              <DirectionalArrow className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`relative text-start p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#65B307]/15 text-white border-[#85DF1A]'
                      : 'bg-[#0B0F0C]/70 text-[#B2BFB4] border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono tabular-nums font-bold text-[#85DF1A]">
                      {step.num}
                    </span>
                    {isSelected && (
                      <motion.span
                        layoutId="workflow-active-bar"
                        className="h-1.5 w-8 rounded-full bg-[#85DF1A]"
                      />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title[lang]}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#B2BFB4]">
                    {step.desc[lang]}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Legal Insights Blog Preview Strip */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#85DF1A]">
              <BookOpen className="w-4 h-4" />
              <span>{UI_COPY.nav.blog[lang]}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {UI_COPY.blogPage.pageTitle[lang]}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ name: 'blog' })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <span>{lang === 'ar' ? 'تصفح جميع المقالات القانونية' : 'View All Legal Guides'}</span>
            <DirectionalArrow className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_ARTICLES.slice(0, 3).map((article, idx) => (
            <motion.button
              key={article.id}
              type="button"
              onClick={() => onNavigate({ name: 'blog-detail', slug: article.slug })}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.32, delay: idx * 0.06 }}
              whileHover={{ y: -5 }}
              className="group text-start bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#0B0F0C]">
                  <ResilientImage
                    src={article.image}
                    alt={article.imageAlt[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackTitle={article.title[lang]}
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-[#B2BFB4]">
                    <span className="font-semibold text-[#85DF1A]">{article.category[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime[lang]}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#85DF1A] transition-colors leading-snug line-clamp-2">
                    {article.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B2BFB4] line-clamp-2 leading-relaxed">
                    {article.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#0D120E]/80 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#85DF1A]">
                <span>{UI_COPY.blogPage.readMore[lang]}</span>
                <DirectionalArrow className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* 7. Photographic Boardroom Conversion Strip */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-[#131915] border border-white/15 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-5">
              <span className="text-xs font-medium text-[#85DF1A]">
                {UI_COPY.brandTagline[lang]}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold leading-snug text-balance">
                {lang === 'ar'
                  ? 'هل تؤسس شركة أو تحتاج صياغة عقد، استشارة ضريبية، أو حماية علامتك التجارية؟'
                  : 'Incorporating a company, drafting M&A contracts, structuring taxes, or registering a trademark?'}
              </h2>
              <p className="text-sm sm:text-base text-[#B2BFB4] max-w-xl leading-relaxed">
                {lang === 'ar'
                  ? 'احجز استشارتك القانونية الآن مع محامي ومستشاري CD Consulting في القاهرة.'
                  : 'Book your legal consultation now with CD Consulting senior attorneys and tax partners in Cairo.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request' })}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#65B307] hover:bg-[#85DF1A] text-[#0B0F0C] rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{UI_COPY.nav.requestCta[lang]}</span>
                  <DirectionalArrow className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'contact' })}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{UI_COPY.nav.contact[lang]}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 min-h-[260px] relative">
              <ResilientImage
                src={ASSETS.heroBoardroom}
                alt={
                  lang === 'ar'
                    ? 'قاعة اجتماعات CD Consulting في القاهرة'
                    : 'CD Consulting Cairo boardroom overlooking the Nile'
                }
                className="w-full h-full object-cover"
                fallbackTitle="CD Consulting Boardroom"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#131915] via-transparent to-transparent rtl:bg-gradient-to-l pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
