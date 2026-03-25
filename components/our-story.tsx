'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  { value: '1992', label: 'Founded', detail: 'By brothers Elie & Georges' },
  { value: '32+', label: 'Years', detail: 'Serving Lebanese families' },
  { value: '100+', label: 'Brands', detail: 'World-class toy makers' },
  { value: '2nd', label: 'Generation', detail: 'Now serving their kids' },
];

export function OurStory() {
  return (
    <section className="py-24 px-4 overflow-hidden" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Magazine-style label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-[#e8d5c4]" />
          <span className="text-xs font-bold tracking-[0.3em] text-[#C41E3A] uppercase">Our Story</span>
          <div className="h-px flex-1 bg-[#e8d5c4]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Editorial text block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1a0a00] leading-[0.95] mb-8">
              32 Years of Joy,
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                One Family&apos;s Mission.
              </span>
            </h2>

            <p className="text-[#6b5a4e] text-xl leading-relaxed mb-5 font-light">
              In <strong className="text-[#1a0a00] font-bold">1992</strong>, brothers <strong className="text-[#1a0a00] font-bold">Elie and Georges Diab</strong> opened Enfantillage in Mazra&apos;at Yashu&apos; — with a simple, stubborn belief that every Lebanese child deserves the world&apos;s best toys.
            </p>
            <p className="text-[#8a7065] text-base leading-relaxed mb-8">
              Three decades later, we&apos;re still here. Same family. Same passion. Now serving the children of our very first customers. Through wars, recessions, and a global pandemic — Enfantillage never closed its doors.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-semibold text-[#C41E3A] text-sm tracking-wide uppercase"
            >
              Read the full story
              <span className="inline-flex w-8 h-8 rounded-full border-2 border-[#C41E3A] items-center justify-center group-hover:bg-[#C41E3A] transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Right: Stats as editorial grid + image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Background image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-6">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1555169062-013468b47731?w=900&auto=format&fit=crop&q=80)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00]/60 via-transparent to-transparent" />

              {/* Overlay quote */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-semibold italic leading-snug">
                  &ldquo;Every toy we sell is chosen with the care of a parent, not a buyer.&rdquo;
                </p>
                <p className="text-white/70 text-sm mt-2">— Elie Diab, Co-founder</p>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="text-center py-4 px-2 rounded-2xl bg-white border border-[#e8d5c4]"
                >
                  <div className="text-2xl font-extrabold text-[#C41E3A] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#1a0a00] mb-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#9e8070] leading-tight hidden sm:block">{stat.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
