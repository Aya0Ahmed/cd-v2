import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Check,
  Compass,
  FileSearch,
  Scale,
  Target,
} from 'lucide-react';
import {
  ASSETS,
  CREATORS,
  DISCIPLINE_LABELS,
  SERVICES,
  SPECIALIST_ROLES,
  UI_COPY,
} from '../data/content';
import type { DisciplineId, Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface AboutPageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

const DIVISION_ICON: Record<DisciplineId, typeof Scale> = {
  legal: Scale,
  accounting: Calculator,
  research: FileSearch,
};

export function AboutPage({ lang, onNavigate }: AboutPageProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineId>('legal');
  const [selectedTeam, setSelectedTeam] = useState<DisciplineId[]>(['legal', 'accounting']);
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const connectedServices = SERVICES.filter(
    (s) =>
      s.discipline === selectedDiscipline ||
      s.secondaryDisciplines?.includes(selectedDiscipline),
  );

  const toggleRole = (id: DisciplineId) => {
    setSelectedTeam((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id],
    );
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Full-Bleed Law Firm Heritage & Leadership Banner */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.executiveTeam}
            alt={
              lang === 'ar'
                ? 'فريق الشركاء المؤسسين والمحامين في CD Consulting'
                : 'Founding partners and legal counsel at CD Consulting'
            }
            className="w-full h-full object-cover opacity-40"
            fallbackTitle="CD Consulting — About Us"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/70 to-[#0B0F0C]/50 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-3 bg-[#131915]/80 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-2">
              <img
                src={ASSETS.logo}
                alt="CD Consulting Logo"
                className="h-8 w-auto object-contain rounded bg-white p-0.5"
              />
              <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
                {UI_COPY.brandTagline[lang]}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {UI_COPY.aboutPage.pageTitle[lang]}
            </h1>

            <HorizonArc className="max-w-sm" />

            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {UI_COPY.aboutPage.pageIntro[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-20">
        {/* Vision & Mission Visual Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-4 bg-[#131915]/85 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#65B307]/15 text-[#85DF1A] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {UI_COPY.aboutPage.visionTitle[lang]}
              </h2>
              <p className="text-base text-[#B2BFB4] leading-relaxed">
                {UI_COPY.aboutPage.visionBody[lang]}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#85DF1A]">
              {lang === 'ar' ? 'حماية الحقوق واستدامة الاستثمار' : 'Rights Protection & Sustainable Growth'}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="lg:col-span-4 bg-gradient-to-br from-[#19241B] to-[#111712] text-white border border-[#65B307]/40 rounded-2xl p-8 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#65B307] text-[#0B0F0C] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                {UI_COPY.aboutPage.missionTitle[lang]}
              </h2>
              <p className="text-base text-white/85 leading-relaxed">
                {UI_COPY.aboutPage.missionBody[lang]}
              </p>
            </div>
            <div className="pt-4 border-t border-white/15 text-xs font-medium text-[#85DF1A]">
              {lang === 'ar' ? 'محاماة · محاسبة · أبحاث وتراخيص' : 'Law · Accounting · Regulatory Research'}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 rounded-2xl overflow-hidden border border-white/10 min-h-[280px]"
          >
            <ResilientImage
              src={ASSETS.executiveLounge}
              alt={
                lang === 'ar'
                  ? 'صالة استقبال المقر الرئيسي لمؤسسة CD Consulting'
                  : 'CD Consulting executive reception gallery'
              }
              className="w-full h-full object-cover"
              fallbackTitle="CD Consulting Headquarters"
            />
          </motion.div>
        </section>

        {/* Interactive Synergy Matrix */}
        <section className="bg-[#131915]/85 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-medium text-[#85DF1A]">
                {lang === 'ar' ? 'التكامل المهني' : 'Operational Synergy'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'ar'
                  ? 'كيف يتقاطع المحامي والمحاسب والباحث في خدماتنا؟'
                  : 'How Lawyers, Accountants & Researchers Collaborate'}
              </h2>
            </div>

            <div className="inline-flex flex-wrap gap-1.5 p-1.5 bg-[#0B0F0C] border border-white/10 rounded-xl">
              {(['legal', 'accounting', 'research'] as DisciplineId[]).map((key) => {
                const active = selectedDiscipline === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedDiscipline(key)}
                    className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      active ? 'text-[#0B0F0C] font-semibold' : 'text-[#B2BFB4] hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="about-synergy-tab"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 bg-[#65B307] rounded-lg"
                      />
                    )}
                    <span className="relative z-10">{DISCIPLINE_LABELS[key][lang]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {connectedServices.map((srv) => (
              <motion.button
                key={`${selectedDiscipline}-${srv.id}`}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => onNavigate({ name: 'service-detail', slug: srv.slug })}
                className="group text-start rounded-xl overflow-hidden border border-white/10 hover:border-[#85DF1A]/60 bg-[#0B0F0C]/80 transition-colors cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#0B0F0C]">
                  <ResilientImage
                    src={srv.image}
                    alt={srv.imageAlt[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle={srv.title[lang]}
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-xs font-mono tabular-nums text-[#85DF1A] font-semibold">
                    {srv.indexNumber}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#85DF1A] transition-colors">
                    {srv.title[lang]}
                  </h3>
                  <p className="text-xs text-[#B2BFB4] line-clamp-2">{srv.summary[lang]}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* 4 Legal Operating Principles */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {UI_COPY.aboutPage.pillarsTitle[lang]}
            </h2>
            <button
              type="button"
              onClick={() => onNavigate({ name: 'services', filter: 'all' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer"
            >
              <span>{UI_COPY.nav.services[lang]}</span>
              <DirectionalArrow className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UI_COPY.aboutPage.principles.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.28, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/50 rounded-2xl p-7 space-y-3 transition-colors"
              >
                <span className="text-sm font-mono tabular-nums font-semibold text-[#85DF1A]">
                  {item.num}.
                </span>
                <h3 className="text-lg font-bold text-white">{item.title[lang]}</h3>
                <p className="text-sm text-[#B2BFB4] leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founding Partners / Legal Leadership */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              {UI_COPY.aboutPage.teamHeading[lang]}
            </h2>
            <span className="text-xs sm:text-sm text-[#B2BFB4]">
              {lang === 'ar'
                ? 'قيادة مشتركة لقطاعات المحاماة والمحاسبة والأبحاث'
                : 'Joint Leadership Across Law, Accounting & Research'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CREATORS.map((creator, idx) => (
              <motion.article
                key={creator.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-colors duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#0B0F0C] border border-[#65B307]/40 text-white font-bold text-lg flex items-center justify-center shrink-0">
                        <span className="text-[#85DF1A]">{creator.initials[0]}</span>
                        <span>{creator.initials[1]}</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {creator.name[lang]}
                        </h3>
                        <p className="text-sm font-medium text-[#85DF1A]">{creator.role[lang]}</p>
                      </div>
                    </div>
                    <div className="text-end shrink-0">
                      <span className="text-base font-bold tabular-nums text-white">
                        {creator.experienceYears}
                      </span>
                      <div className="text-[11px] text-[#B2BFB4]">
                        {UI_COPY.aboutPage.yearsLabel[lang]}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-[#B2BFB4]">
                    <span>{creator.divisionLabel[lang]}</span>
                  </div>

                  <p className="text-sm text-[#B2BFB4] leading-relaxed">{creator.bio[lang]}</p>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#F4F7F4]/85 flex flex-wrap items-center gap-2">
                    {creator.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-2">
                        <span>{spec[lang]}</span>
                        {sIdx < creator.specialties.length - 1 && (
                          <span aria-hidden="true" className="text-[#B2BFB4]">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        name: 'request',
                        preselectedDiscipline:
                          creator.division === 'executive' ? 'legal' : creator.division,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#85DF1A] hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{UI_COPY.aboutPage.consultBtn[lang]}</span>
                    <DirectionalArrow className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Custom Team Assembler & Division Cards */}
        <section className="space-y-8">
          <div className="bg-gradient-to-br from-[#19241B] to-[#111712] border border-[#65B307]/40 text-white rounded-2xl p-7 sm:p-10 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-medium text-[#85DF1A]">
                  {UI_COPY.aboutPage.divisionsHeading[lang]}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">
                  {lang === 'ar'
                    ? 'اختر الخبراء المطلوبين لملفك (محامي · محاسب · باحث)'
                    : 'Assemble Your Advisory Team (Lawyers · Accountants · Researchers)'}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  onNavigate({
                    name: 'request',
                    preselectedDiscipline: selectedTeam[0] || 'legal',
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#65B307] hover:bg-[#85DF1A] text-[#0B0F0C] rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {lang === 'ar'
                    ? `توجيه الطلب لـ (${selectedTeam.length}) تخصصات`
                    : `Request Selected (${selectedTeam.length}) Disciplines`}
                </span>
                <DirectionalArrow className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SPECIALIST_ROLES.map((role) => {
                const Icon = DIVISION_ICON[role.id];
                const isSelected = selectedTeam.includes(role.id);
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => toggleRole(role.id)}
                    className={`text-start p-5 rounded-xl border transition-all duration-150 cursor-pointer flex items-start justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#65B307]/15 border-[#85DF1A]'
                        : 'bg-[#0B0F0C]/60 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#85DF1A]" />
                        <span className="font-bold text-base text-white">{role.title[lang]}</span>
                      </div>
                      <p className="text-xs text-[#B2BFB4] leading-relaxed">{role.subtitle[lang]}</p>
                    </div>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-[#65B307] text-[#0B0F0C]' : 'border border-white/30'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SPECIALIST_ROLES.map((role, idx) => {
              const Icon = DIVISION_ICON[role.id];
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.28, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#0B0F0C]">
                      <ResilientImage
                        src={role.image}
                        alt={role.imageAlt[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        fallbackTitle={role.title[lang]}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-transparent to-transparent" />
                      <div className="absolute bottom-3 inset-x-4 flex items-center gap-2 text-white">
                        <Icon className="w-4 h-4 text-[#85DF1A]" />
                        <span className="text-sm font-bold">{role.title[lang]}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <ul className="space-y-2 text-sm text-[#B2BFB4]">
                        {role.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="text-[#85DF1A] font-bold" aria-hidden="true">
                              —
                            </span>
                            <span>{cap[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => onNavigate({ name: 'request', preselectedDiscipline: role.id })}
                      className="w-full py-2.5 px-4 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-lg transition-colors cursor-pointer"
                    >
                      {role.pluralTitle[lang]}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
