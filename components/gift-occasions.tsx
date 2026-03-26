'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const occasions = [
  {
    emoji: '🌙',
    title: 'Eid Gifts',
    subtitle: 'Make it unforgettable',
    desc: 'Curated picks for Eid al-Fitr & Eid al-Adha. From traditional wooden toys to the latest LEGO sets.',
    bg: '#fdf8ff',
    accent: '#7c3aed',
    borderColor: '#ede9fe',
    tag: 'Eid Special',
    tagBg: '#ede9fe',
    tagColor: '#7c3aed',
    href: '/gift-guide',
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🎂',
    title: 'Birthday Magic',
    subtitle: 'They only turn this age once',
    desc: 'Age-perfect toys, surprise-worthy gifts, and expert recommendations. Because birthdays deserve the best.',
    bg: '#fff8f5',
    accent: '#C41E3A',
    borderColor: '#fde8ee',
    tag: 'Most Popular',
    tagBg: '#fde8ee',
    tagColor: '#C41E3A',
    href: '/gift-guide',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
  },
  {
    emoji: '🎄',
    title: 'Christmas Joy',
    subtitle: 'The magic under the tree',
    desc: "Santa's favourites, gift sets, and timeless classics. Make Christmas morning spectacular.",
    bg: '#f5fdf6',
    accent: '#16a34a',
    borderColor: '#dcfce7',
    tag: 'Seasonal',
    tagBg: '#dcfce7',
    tagColor: '#16a34a',
    href: '/gift-guide',
    imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&auto=format&fit=crop&q=80',
  },
];

export function GiftOccasions() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#faf9f7' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 rounded-full bg-[#C41E3A]" />
              <span className="text-[#C41E3A] text-[11px] font-bold tracking-[0.2em] uppercase">
                Perfect for Every Occasion
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a00] leading-tight">
              Gift by Occasion
            </h2>
          </div>
          <p className="text-[#6b5a4e] text-base max-w-xs sm:text-right leading-relaxed">
            Every celebration deserves a gift they&apos;ll remember.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {occasions.map((occasion, i) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.75,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={occasion.href} className="group block h-full outline-none">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                  style={{
                    backgroundColor: occasion.bg,
                    border: `1.5px solid ${occasion.borderColor}`,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Image area — top half */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${occasion.imageUrl})` }}
                    />
                    {/* Light overlay to keep it warm not moody */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, ${occasion.bg}00 40%, ${occasion.bg}dd 100%)`,
                      }}
                    />
                    {/* Tag badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide"
                        style={{
                          backgroundColor: occasion.tagBg,
                          color: occasion.tagColor,
                        }}
                      >
                        {occasion.tag}
                      </span>
                    </div>
                    {/* Floating emoji */}
                    <motion.div
                      className="absolute bottom-3 left-5 text-[3rem] leading-none select-none"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3.5 + i * 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.6,
                      }}
                    >
                      {occasion.emoji}
                    </motion.div>
                  </div>

                  {/* Content area — bottom half */}
                  <div className="p-6 pt-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3
                          className="text-xl font-extrabold leading-tight mb-0.5"
                          style={{ color: '#1a0a00' }}
                        >
                          {occasion.title}
                        </h3>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: occasion.accent }}
                        >
                          {occasion.subtitle}
                        </p>
                      </div>
                      <motion.div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300"
                        style={{ backgroundColor: `${occasion.accent}15` }}
                        whileHover={{ backgroundColor: occasion.accent }}
                      >
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path
                            d="M2.5 10.5L10.5 2.5M10.5 2.5H3.5M10.5 2.5V9.5"
                            stroke={occasion.accent}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:stroke-white"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    <p className="text-[#6b5a4e] text-sm leading-relaxed mt-2">
                      {occasion.desc}
                    </p>

                    {/* Hover accent line at bottom */}
                    <motion.div
                      className="mt-5 h-[2px] rounded-full origin-left"
                      style={{ backgroundColor: occasion.accent }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
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
