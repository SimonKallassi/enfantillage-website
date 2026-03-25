'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ageBands = [
  {
    emoji: '🍼',
    label: '0–12 months',
    desc: 'Sensory toys & mobiles',
    href: '/shop-by-age#0-12m',
    gradient: 'from-rose-400/80 via-pink-500/70 to-red-600/80',
    bgAccent: '#fce7f3',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(244,114,182,0.3) 0%, transparent 60%)',
  },
  {
    emoji: '🧸',
    label: '1–3 years',
    desc: 'Soft toys & building blocks',
    href: '/shop-by-age#1-3y',
    gradient: 'from-orange-400/80 via-amber-500/70 to-yellow-600/80',
    bgAccent: '#fff7ed',
    pattern: 'radial-gradient(circle at 20% 80%, rgba(251,146,60,0.3) 0%, transparent 60%)',
  },
  {
    emoji: '🎨',
    label: '3–6 years',
    desc: 'Creative & role-play',
    href: '/shop-by-age#3-6y',
    gradient: 'from-violet-400/80 via-purple-500/70 to-fuchsia-600/80',
    bgAccent: '#f5f3ff',
    pattern: 'radial-gradient(circle at 80% 80%, rgba(167,139,250,0.3) 0%, transparent 60%)',
  },
  {
    emoji: '🚀',
    label: '6–12 years',
    desc: 'LEGO, science & strategy',
    href: '/shop-by-age#6-12y',
    gradient: 'from-blue-400/80 via-cyan-500/70 to-sky-600/80',
    bgAccent: '#eff6ff',
    pattern: 'radial-gradient(circle at 20% 20%, rgba(96,165,250,0.3) 0%, transparent 60%)',
  },
  {
    emoji: '🎮',
    label: '12+ years',
    desc: 'Tech, hobby & collector',
    href: '/shop-by-age#12plus',
    gradient: 'from-emerald-400/80 via-teal-500/70 to-green-600/80',
    bgAccent: '#f0fdf4',
    pattern: 'radial-gradient(circle at 80% 50%, rgba(52,211,153,0.3) 0%, transparent 60%)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function AgeBandCards() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#C41E3A]/10 text-[#C41E3A] text-xs font-bold tracking-widest uppercase mb-4">
          Find the Perfect Match
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a00] mb-4">
          Shop by Age
        </h2>
        <p className="text-[#6b5a4e] text-lg max-w-xl mx-auto">
          Every toy, perfectly matched to your child&apos;s stage of development.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {ageBands.map((band) => (
          <motion.div key={band.label} variants={cardVariants}>
            <Link href={band.href} className="group block h-full">
              <div
                className="relative rounded-3xl overflow-hidden h-52 flex flex-col justify-end p-5 cursor-pointer transition-all duration-400"
                style={{
                  background: band.bgAccent,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${band.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />
                {/* Pattern bg */}
                <div
                  className="absolute inset-0"
                  style={{ background: band.pattern }}
                />

                {/* Emoji - large, centered top */}
                <div className="absolute top-6 left-0 right-0 flex justify-center">
                  <motion.span
                    className="text-5xl select-none"
                    whileHover={{ scale: 1.2, rotate: [0, -8, 8, -4, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {band.emoji}
                  </motion.span>
                </div>

                {/* Text at bottom */}
                <div className="relative z-10">
                  <div className="font-bold text-[#1a0a00] group-hover:text-white text-sm leading-tight mb-0.5 transition-colors duration-300">
                    {band.label}
                  </div>
                  <div className="text-xs text-[#6b5a4e] group-hover:text-white/80 transition-colors duration-300">
                    {band.desc}
                  </div>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
