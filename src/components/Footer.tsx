import { ASSETS, SERVICES, UI_COPY } from '../data/content';
import type { Language, PageRoute } from '../types';
import { ResilientImage } from './ResilientImage';
import { SocialLinksBar } from './SocialLinksBar';

interface FooterProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

export function Footer({ lang, onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080B09] border-t border-white/10 mt-24 text-[#F4F7F4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Official Brand Logo Block */}
          <div className="md:col-span-4 space-y-4">
            <div className="inline-block bg-[#F4F7F4] rounded-xl px-4 py-2 max-w-[250px] shadow-lg">
              <ResilientImage
                src={ASSETS.logo}
                alt="CD Consulting Logo"
                className="w-full h-auto object-contain"
                fallbackTitle="CD Consulting"
              />
            </div>
            <p className="text-sm text-[#B2BFB4] leading-relaxed max-w-md">
              {UI_COPY.footer.tagline[lang]}
            </p>
            <div className="pt-1 space-y-2">
              <div className="text-xs font-semibold text-white/90">
                {lang === 'ar' ? 'تابعنا على منصاتنا' : 'Follow Us'}
              </div>
              <SocialLinksBar lang={lang} variant="compact" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">
              {lang === 'ar' ? 'صفحات الموقع' : 'Site Pages'}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#B2BFB4]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'home' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.home[lang]}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'about' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.about[lang]}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'services', filter: 'all' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.services[lang]}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'blog' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.blog[lang]}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'contact' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.contact[lang]}
                </button>
              </li>
            </ul>
          </div>

          {/* Core 6 Legal & Financial Services */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">
              {lang === 'ar' ? 'الخدمات القانونية والمالية' : 'Core Practice Areas'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#B2BFB4]">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate({ name: 'service-detail', slug: srv.slug })}
                    className="text-start hover:text-[#85DF1A] transition-colors cursor-pointer"
                  >
                    {srv.title[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Action & Specializations */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white">
              {lang === 'ar' ? 'اطلب مستشاراً' : 'Specialists'}
            </h3>
            <ul className="space-y-2 text-sm text-[#B2BFB4]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request', preselectedDiscipline: 'legal' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'اطلب محامياً' : 'Request Lawyers'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request', preselectedDiscipline: 'accounting' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'اطلب محاسباً' : 'Request Accountants'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request', preselectedDiscipline: 'research' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'اطلب باحثاً' : 'Request Researchers'}
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request' })}
                  className="px-3.5 py-2 text-xs font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-lg transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.requestCta[lang]}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#B2BFB4]">
          <span>{UI_COPY.footer.rights[lang]}</span>
          <span>{UI_COPY.brandTagline[lang]}</span>
        </div>
      </div>
    </footer>
  );
}
