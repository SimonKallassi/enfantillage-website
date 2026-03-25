'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const occasions = [
  {
    emoji: '🌙',
    title: 'Eid Gifts',
    subtitle: 'Make it unforgettable',
    desc: 'Curated picks for Eid al-Fitr & Eid al-Adha. From traditional wooden toys to the latest LEGO sets.',
    bg: '#1a0a2e',
    accent: '#c4b5fd',
    tag: 'Eid Special',
    href: '/gift-guide',
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🎂',
    title: 'Birthday Magic',
    subtitle: 'They only turn this age once',
    desc: 'Age-perfect toys, surprise-worthy gifts, and expert recommendations. Because birthdays deserve the best.',
    bg: '#2d0a0a',
    accent: '#fca5a5',
    tag: 'Most Popular',
    href: '/gift-guide',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🎄',
    title: 'Christmas Joy',
    subtitle: 'The magic under the tree',
    desc: "Santa's favourites, gift sets, and timeless classics. Make Christmas morning spectacular.",
    bg: '#0a2210',
    accent: '#86efac',
    tag: 'Seasonal',
    href: '/gift-guide',
    imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&auto=format&fit=crop&q=80',
  },
];

/* Section header animation */
const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function GiftOccasions() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#120604' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 rounded-full bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[11px] font-bold tracking-[0.2em] uppercase">
                Perfect for Every Occasion
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Gift by Occasion
            </h2>
          </div>
          <p className="text-[#7a6560] text-base max-w-xs sm:text-right leading-relaxed">
            Every celebration deserves a gift they&apos;ll remember.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {occasions.map((occasion, i) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={occasion.href} className="group block h-full outline-none">
                <motion.div
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="relative rounded-2xl overflow-hidden h-[380px] flex flex-col justify-between p-7 cursor-pointer"
                  style={{ backgroundColor: occasion.bg }}
                >
                  {/* Background photo — subtle, moody */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.18] group-hover:opacity-[0.28] transition-opacity duration-600 scale-[1.06] group-hover:scale-110"
                    style={{ backgroundImage: `url(${occasion.imageUrl})` }}
                  />

                  {/* Radial glow */}
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at 75% 20%, ${occasion.accent}40 0%, transparent 60%)`,
                    }}
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Top row: tag + arrow */}
                  <div className="relative z-10 flex items-center justify-between">
                    <motion.span
                      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide"
                      style={{
                        backgroundColor: `${occasion.accent}20`,
                        color: occasion.accent,
                        border: `1px solid ${occasion.accent}30`,
                      }}
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {occasion.tag}
                    </motion.span>

                    <motion.div
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                      whileHover={{
                        backgroundColor: 'rgba(255,255,255,0.18)',
                        scale: 1.1,
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2.5 10.5L10.5 2.5M10.5 2.5H3.5M10.5 2.5V9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10">
                    {/* Emoji with individual float animation */}
                    <motion.div
                      className="text-[3.5rem] mb-4 select-none leading-none"
                      animate={{ y: [0, -7, 0] }}
                      transition={{
                        duration: 3.5 + i * 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.6,
                      }}
                    >
                      {occasion.emoji}
                    </motion.div>

                    <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-white transition-colors">
                      {occasion.title}
                    </h3>
                    <p
                      className="text-[13px] font-semibold mb-2.5"
                      style={{ color: occasion.accent }}
                    >
                      {occasion.subtitle}
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {occasion.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
