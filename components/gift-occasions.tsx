'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const occasions = [
  {
    emoji: '🌙',
    title: 'Eid Gifts',
    subtitle: 'Make it unforgettable',
    desc: 'Curated picks for Eid al-Fitr & Eid al-Adha. From traditional wooden toys to the latest LEGO sets.',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1860 40%, #4c1d95 100%)',
    accent: '#c4b5fd',
    accentBg: 'rgba(196,181,253,0.15)',
    href: '/gift-guide',
    tag: 'Eid Special',
  },
  {
    emoji: '🎂',
    title: 'Birthday Magic',
    subtitle: 'They only turn this age once',
    desc: 'Age-perfect toys, surprise-worthy gifts, and expert recommendations. Because birthdays deserve the best.',
    gradient: 'linear-gradient(135deg, #7c1d1d 0%, #C41E3A 50%, #ef4444 100%)',
    accent: '#fca5a5',
    accentBg: 'rgba(252,165,165,0.15)',
    href: '/gift-guide',
    tag: 'Most Popular',
  },
  {
    emoji: '🎄',
    title: 'Christmas Joy',
    subtitle: 'The magic under the tree',
    desc: 'Santa\'s favourites, gift sets, and timeless classics. Make Christmas morning spectacular.',
    gradient: 'linear-gradient(135deg, #14532d 0%, #16a34a 50%, #4ade80 100%)',
    accent: '#86efac',
    accentBg: 'rgba(134,239,172,0.15)',
    href: '/gift-guide',
    tag: 'Seasonal',
  },
];

export function GiftOccasions() {
  return (
    <section className="py-24 px-4 bg-[#1a0a00]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A017]/15 text-[#D4A017] text-xs font-bold tracking-widest uppercase mb-4">
            Perfect for Every Occasion
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Gift by Occasion
          </h2>
          <p className="text-[#a08070] text-lg max-w-xl mx-auto">
            Every celebration deserves a gift they&apos;ll remember.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {occasions.map((occasion, i) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link href={occasion.href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative rounded-3xl overflow-hidden h-80 flex flex-col justify-between p-8 cursor-pointer"
                  style={{ background: occasion.gradient }}
                >
                  {/* Background texture */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle at 80% 20%, ${occasion.accent}40 0%, transparent 50%), radial-gradient(circle at 20% 80%, ${occasion.accent}20 0%, transparent 50%)`,
                    }}
                  />

                  {/* Tag */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                      style={{ backgroundColor: occasion.accentBg, color: occasion.accent }}
                    >
                      {occasion.tag}
                    </span>

                    {/* Arrow icon */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-6xl mb-4 select-none"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                      }}
                    >
                      {occasion.emoji}
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-white mb-1">
                      {occasion.title}
                    </h3>
                    <p className="text-sm font-medium mb-2" style={{ color: occasion.accent }}>
                      {occasion.subtitle}
                    </p>
                    <p className="text-white/65 text-sm leading-relaxed">
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
