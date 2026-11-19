import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ASSETS, OFFICE_INFO, SERVICES, UI_COPY } from '../data/content';
import type { Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';
import { Legal3DShowcase } from '../components/Legal3DShowcase';
import { SocialLinksBar } from '../components/SocialLinksBar';

interface ContactPageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

export function ContactPage({ lang, onNavigate }: ContactPageProps) {
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const contactItems = [
    {
      icon: MapPin,
      label: UI_COPY.contactPage.addressLabel[lang],
      value: OFFICE_INFO.address[lang],
    },
    {
      icon: Phone,
      label: UI_COPY.contactPage.phoneLabel[lang],
      value: OFFICE_INFO.phone,
      href: `tel:${OFFICE_INFO.phone.replace(/\s+/g, '')}`,
      dir: 'ltr' as const,
    },
    {
      icon: Mail,
      label: UI_COPY.contactPage.emailLabel[lang],
      value: OFFICE_INFO.email,
      href: `mailto:${OFFICE_INFO.email}`,
      dir: 'ltr' as const,
    },
    {
      icon: Clock,
      label: UI_COPY.contactPage.hoursLabel[lang],
      value: OFFICE_INFO.hours[lang],
    },
  ];

  return (
    <div className="space-y-14">
      {/* Photographic Header */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.executiveLounge}
            alt={
              lang === 'ar'
                ? 'مقر استقبال الموكلين في CD Consulting بالقاهرة'
                : 'CD Consulting client reception in Cairo'
            }
            className="w-full h-full object-cover opacity-40"
            fallbackTitle="Contact CD Consulting"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/75 to-[#0B0F0C]/50 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
              {UI_COPY.brandTagline[lang]}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {UI_COPY.contactPage.pageTitle[lang]}
            </h1>
            <HorizonArc className="max-w-sm" />
            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {UI_COPY.contactPage.pageIntro[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Start: Direct Channels + Fast Consultation CTA */}
        <div className="lg:col-span-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-[#131915]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#65B307]/15 text-[#85DF1A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-medium text-[#85DF1A]">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      dir={item.dir}
                      className="block text-sm sm:text-base font-bold text-white hover:text-[#85DF1A] transition-colors text-start"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-white leading-relaxed">
                      {item.value}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Direct Booking Panel */}
          <div className="bg-gradient-to-br from-[#19241B] to-[#111712] border border-[#65B307]/40 rounded-2xl p-7 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {lang === 'ar'
                ? 'احجز جلسة استشارة قانونية أو محاسبية مباشرة'
                : 'Schedule a Direct Legal or Tax Consultation'}
            </h2>
            <p className="text-sm sm:text-base text-[#B2BFB4] leading-relaxed">
              {lang === 'ar'
                ? 'املأ نموذج الحجز الإلكتروني وحدد الخدمة القانونية أو التخصص المطلوب ليتولى شريكنا المختص مراجعة ملفك فوراً.'
                : 'Complete our consultation intake form and pick the service or specialist required for immediate partner review.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate({ name: 'request' })}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#65B307] hover:bg-[#85DF1A] text-[#0B0F0C] rounded-xl transition-colors cursor-pointer"
              >
                <span>{UI_COPY.nav.requestCta[lang]}</span>
                <DirectionalArrow className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate({ name: 'services', filter: 'all' })}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
              >
                <span>{UI_COPY.nav.services[lang]}</span>
              </button>
            </div>
          </div>

          {/* Quick Practice Directory */}
          <div className="bg-[#131915]/85 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white">
              {lang === 'ar' ? 'احجز مباشرة حسب الخدمة:' : 'Direct Booking by Practice Area:'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES.map((srv) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() =>
                    onNavigate({
                      name: 'request',
                      preselectedService: srv.id,
                      preselectedDiscipline: srv.discipline,
                    })
                  }
                  className="text-start px-3.5 py-2.5 rounded-xl bg-[#0B0F0C]/70 border border-white/10 hover:border-[#85DF1A]/60 text-xs font-medium text-[#F4F7F4] hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[#85DF1A] me-1.5">{srv.indexNumber}</span>
                  {srv.title[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right/End: Interactive 3D Scales Centerpiece + Cairo Office Preview */}
        <div className="lg:col-span-6 space-y-6">
          <Legal3DShowcase lang={lang} />

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#131915]/90">
            <div className="aspect-[16/8] overflow-hidden bg-[#0B0F0C]">
              <ResilientImage
                src={ASSETS.cairoSkyline}
                alt={lang === 'ar' ? 'القاهرة — مصر' : 'Cairo, Egypt'}
                className="w-full h-full object-cover"
                fallbackTitle="Cairo Headquarters"
              />
            </div>
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-[#85DF1A]">
                  {lang === 'ar' ? 'الاستشارات داخل المكتب أو عن بُعد' : 'In-Office & Virtual Counsel'}
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {lang === 'ar'
                    ? 'تمثيل كامل للشركات المحلية والمستثمرين الأجانب في كافة أنحاء مصر'
                    : 'Full representation for local enterprises and foreign investors across Egypt'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Social Media Channels Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="bg-[#131915]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-white/10 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-medium text-[#85DF1A]">
                {lang === 'ar' ? 'الحسابات الرسمية الموثقة' : 'Verified Official Channels'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'ar'
                  ? 'تابع CD Consulting على منصات التواصل الاجتماعي'
                  : 'Connect With CD Consulting on Social Media'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#B2BFB4]">
              {lang === 'ar'
                ? 'فيسبوك · إنستغرام · تيك توك · يوتيوب · تويتر (X)'
                : 'Facebook · Instagram · TikTok · YouTube · Twitter (X)'}
            </p>
          </div>

          <SocialLinksBar lang={lang} variant="cards" />
        </div>
      </section>
    </div>
  );
}
