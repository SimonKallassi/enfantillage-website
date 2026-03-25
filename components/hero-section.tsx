'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

/* ─── Word-by-word reveal helper ─── */
function WordReveal({
  words,
  delay = 0,
  className = '',
}: {
  words: string[];
  delay?: number;
  className?: string;
}) {
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-flex overflow-hidden mr-[0.22em] last:mr-0">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: '115%', opacity: 0, skewY: 4 }}
            animate={{ y: 0, opacity: 1, skewY: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.13,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ─── Floating star / asterisk decoration ─── */
function FloatingStar({
  className,
  delay = 0,
  size = 24,
  color = '#C41E3A',
}: {
  className?: string;
  delay?: number;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      className={`absolute select-none pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ fontSize: size, color, display: 'block', lineHeight: 1 }}
      >
        ✦
      </motion.span>
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#FFF8F0', minHeight: '100svh' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row min-h-screen">

        {/* ── LEFT — Editorial Text ── */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col justify-center py-28 lg:py-0 lg:w-[46%] lg:pr-16 relative z-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[2px] w-10 rounded-full bg-[#C41E3A]" />
            <span className="text-[#C41E3A] text-[11px] font-bold tracking-[0.22em] uppercase">
              Lebanon&apos;s Toy Experts · Since 1992
            </span>
          </motion.div>

          {/* ── BIG HEADLINE — word-by-word stagger ── */}
          <h1 className="font-extrabold leading-[1.02] tracking-tight text-[#1a0a00] mb-7">
            {/* Line 1: "Making Lebanese" */}
            <div className="text-[clamp(2.8rem,6.5vw,5rem)] flex flex-wrap mb-0.5">
              <WordReveal words={['Making', 'Lebanese']} delay={0.25} />
            </div>
            {/* Line 2: "Childhoods" — accent */}
            <div className="text-[clamp(3rem,7vw,5.5rem)] flex flex-wrap">
              <WordReveal
                words={['Childhoods']}
                delay={0.46}
                className="text-[#C41E3A]"
              />
            </div>
            {/* Line 3: "Magical" — italic serif feel via font-style */}
            <div className="text-[clamp(3rem,7vw,5.5rem)] flex flex-wrap italic">
              <WordReveal words={['Magical']} delay={0.6} />
            </div>
          </h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#6b5a4e] text-lg leading-relaxed mb-10 max-w-sm"
          >
            Three decades of joy. 100+ world-class brands. Expert toy advice for every child, every age.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/shop-by-age"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C41E3A] text-white text-[15px] font-bold rounded-xl transition-all duration-300 hover:bg-[#a01830] hover:shadow-[0_8px_32px_rgba(196,30,58,0.4)] hover:-translate-y-0.5"
            >
              Shop by Age
              <motion.span
                className="inline-block"
                initial={false}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                →
              </motion.span>
            </Link>
            <a
              href="https://wa.me/9613720233?text=Hi! I'm looking for a toy recommendation 🎁"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[#1a0a00] text-[15px] font-semibold rounded-xl border border-[#1a0a00]/15 hover:border-[#C41E3A]/35 hover:bg-[#C41E3A]/5 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask an Expert
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex gap-8 mt-12 pt-8 border-t border-[#1a0a00]/10"
          >
            {[
              { num: '30+', label: 'Years of Joy' },
              { num: '100+', label: 'Top Brands' },
              { num: '★ 1992', label: 'Founded' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.35 + i * 0.1 }}
              >
                <div className="text-xl font-extrabold text-[#1a0a00] tracking-tight">{stat.num}</div>
                <div className="text-[10px] text-[#6b5a4e] font-semibold tracking-widest uppercase mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Image Collage ── */}
        <div className="hidden lg:flex lg:w-[54%] items-center justify-center py-16 relative">

          {/* Decorative large ghost number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.045 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute right-0 bottom-8 text-[22rem] font-black text-[#1a0a00] leading-none select-none pointer-events-none z-0"
            aria-hidden
          >
            92
          </motion.div>

          {/* Image grid */}
          <div className="relative z-10 grid grid-cols-[1.1fr_0.9fr] gap-3 w-full max-w-[520px]">

            {/* Tall left image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl row-span-2"
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{ duration: 1.15, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ aspectRatio: '2/3' }}
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop&q=80)',
                  y: imageY,
                  scale: 1.18,
                }}
              />
              {/* Warm tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00]/30 via-transparent to-transparent" />
            </motion.div>

            {/* Top right image */}
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ aspectRatio: '4/3' }}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80)',
                }}
              />
            </motion.div>

            {/* Bottom right image */}
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{ aspectRatio: '4/3' }}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80)',
                }}
              />
            </motion.div>
          </div>

          {/* Floating badge — Lebanon #1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-28 left-0 bg-[#D4A017] text-[#1a0a00] px-4 py-3 rounded-xl z-20 shadow-2xl"
          >
            <div className="text-sm font-black leading-tight">🇱🇧 Lebanon&apos;s #1</div>
            <div className="text-[10px] font-semibold opacity-75 tracking-wide">Toy Destination</div>
          </motion.div>

          {/* Floating star decorations */}
          <FloatingStar className="top-20 right-14" delay={1.4} size={18} color="#C41E3A" />
          <FloatingStar className="bottom-36 right-4" delay={1.6} size={12} color="#D4A017" />
          <FloatingStar className="top-1/2 left-6" delay={1.8} size={10} color="#1a0a00" />
        </div>
      </div>

      {/* Bottom gradient bleed */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FFF8F0] to-transparent pointer-events-none" />
    </section>
  );
}
