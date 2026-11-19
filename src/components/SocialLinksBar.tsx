import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, type SocialLinkItem } from '../data/content';
import type { Language } from '../types';

interface SocialLinksBarProps {
  lang: Language;
  variant?: 'compact' | 'cards';
}

function PlatformIcon({ id, className = 'w-4 h-4' }: { id: SocialLinkItem['id']; className?: string }) {
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M13.5 22v-8.2h2.75l.41-3.2H13.5V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.14c-.3-.04-1.31-.14-2.49-.14-2.47 0-4.16 1.51-4.16 4.28v2.32H7.36v3.2h2.78V22h3.36Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M16.6 5.82A4.46 4.46 0 0 1 15.27 2h-3.17v13.14a2.68 2.68 0 1 1-2.68-2.68c.26 0 .51.04.75.1V9.32a5.88 5.88 0 0 0-.75-.05A5.87 5.87 0 1 0 15.3 15.14V8.55a7.58 7.58 0 0 0 4.4 1.4V6.8a4.43 4.43 0 0 1-3.1-.98Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.95C17.92 4.78 12 4.78 12 4.78s-5.92 0-7.64.46A2.76 2.76 0 0 0 2.42 7.2 28.9 28.9 0 0 0 1.96 12c0 1.63.16 3.24.46 4.81a2.76 2.76 0 0 0 1.94 1.95c1.72.46 7.64.46 7.64.46s5.92 0 7.64-.46a2.76 2.76 0 0 0 1.94-1.95c.3-1.57.46-3.18.46-4.81s-.16-3.24-.46-4.81ZM10 15.05V8.95L15.24 12 10 15.05Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      );
  }
}

export function SocialLinksBar({ lang, variant = 'compact' }: SocialLinksBarProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-2.5">
        {SOCIAL_LINKS.map((item) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            aria-label={`${item.name[lang]} — ${item.handle}`}
            title={item.name[lang]}
            className="w-9 h-9 rounded-lg bg-[#131915] border border-white/15 hover:border-[#85DF1A] text-[#B2BFB4] hover:text-[#85DF1A] flex items-center justify-center transition-colors"
          >
            <PlatformIcon id={item.id} className="w-4 h-4" />
          </motion.a>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
      {SOCIAL_LINKS.map((item, idx) => (
        <motion.a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.28, delay: idx * 0.05 }}
          whileHover={{ y: -4 }}
          className="group bg-[#131915]/90 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/70 rounded-2xl p-4 flex items-center justify-between gap-3 transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-10 h-10 rounded-xl bg-[#65B307]/15 group-hover:bg-[#65B307] text-[#85DF1A] group-hover:text-[#0B0F0C] flex items-center justify-center shrink-0 transition-colors">
              <PlatformIcon id={item.id} className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white group-hover:text-[#85DF1A] transition-colors truncate">
                {item.name[lang]}
              </div>
              <div className="text-xs text-[#B2BFB4] font-mono truncate" dir="ltr">
                {item.handle}
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#B2BFB4] group-hover:text-[#85DF1A] shrink-0 transition-colors" />
        </motion.a>
      ))}
    </div>
  );
}
