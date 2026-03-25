'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ageBands = [
  {
    emoji: '🍼',
    label: '0–12 months',
    desc: 'Sensory toys & mobiles',
    href: '/shop-by-age#0-12m',
    color: '#fce7f3',
    accent: '#e879a0',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🧸',
    label: '1–3 years',
    desc: 'Soft toys & building blocks',
    href: '/shop-by-age#1-3y',
    color: '#fff7ed',
    accent: '#f97316',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🎨',
    label: '3–6 years',
    desc: 'Creative & role-play',
    href: '/shop-by-age#3-6y',
    color: '#f5f3ff',
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🚀',
    label: '6–12 years',
    desc: 'LEGO, science & strategy',
    href: '/shop-by-age#6-12y',
    color: '#eff6ff',
    accent: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🎮',
    label: '12+ years',
    desc: 'Tech, hobby & collector',
    href: '/shop-by-age#12plus',
    color: '#f0fdf4',
    accent: '#10b981',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&auto=format&fit=crop&q=80',
  },
];

export function AgeBandCards() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 rounded-full bg-[#C41E3A]" />
            <span className="text-[#C41E3A] text-[11px] font-bold tracking-[0.2em] uppercase">
              Find the Perfect Match
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a00] leading-tight">
            Shop by Age
          </h2>
        </div>
        <p className="text-[#6b5a4e] text-base max-w-xs sm:text-right leading-relaxed">
          Every toy, perfectly matched to your child&apos;s stage of development.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {ageBands.map((band, i) => (
          <motion.div
            key={band.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link href={band.href} className="group block h-full outline-none">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                className="relative rounded-2xl overflow-hidden h-56 flex flex-col justify-end cursor-pointer"
                style={{
                  backgroundColor: band.color,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                {/* Photo background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-45 transition-all duration-500 scale-[1.04] group-hover:scale-110"
                  style={{ backgroundImage: `url(${band.image})` }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(160deg, transparent 30%, ${band.accent}55 100%)`,
                  }}
                />

                {/* Top accent line on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[3px] origin-left"
                  style={{ backgroundColor: band.accent }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Emoji */}
                <div className="absolute top-1/2 -translate-y-2/3 left-0 right-0 flex justify-center">
                  <motion.span
                    className="text-5xl select-none drop-shadow-sm"
                    whileHover={{ scale: 1.22 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    {band.emoji}
                  </motion.span>
                </div>

                {/* Text at bottom */}
                <div className="relative z-10 p-4 bg-gradient-to-t from-white/80 via-white/50 to-transparent pt-8">
                  <div className="font-bold text-[#1a0a00] text-sm leading-tight mb-0.5 group-hover:text-[#1a0a00] transition-colors">
                    {band.label}
                  </div>
                  <div className="text-xs text-[#6b5a4e]">{band.desc}</div>
                </div>

                {/* Arrow appear on hover */}
                <div className="absolute top-3.5 right-3.5">
                  <motion.div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: band.accent }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 9L9 2M9 2H2.5M9 2V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
