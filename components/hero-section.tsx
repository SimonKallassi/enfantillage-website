'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function FloatingShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.08]',
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border border-white/[0.12]',
            'shadow-[0_8px_32px_0_rgba(255,255,255,0.08)]',
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3 + i * 0.18,
      ease: 'easeOut' as const,
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1800&auto=format&fit=crop&q=80)',
        }}
      />

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#C41E3A]/90 via-[#8B0000]/75 to-[#1a0a00]/95" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#1a0a00]/60 via-transparent to-transparent" />

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 z-[3] overflow-hidden">
        <FloatingShape
          delay={0.3}
          width={580}
          height={130}
          rotate={14}
          gradient="from-[#D4A017]/[0.18]"
          className="left-[-8%] top-[18%]"
        />
        <FloatingShape
          delay={0.5}
          width={460}
          height={110}
          rotate={-16}
          gradient="from-[#C41E3A]/[0.2]"
          className="right-[-3%] top-[68%]"
        />
        <FloatingShape
          delay={0.4}
          width={280}
          height={70}
          rotate={-9}
          gradient="from-white/[0.1]"
          className="left-[8%] bottom-[8%]"
        />
        <FloatingShape
          delay={0.6}
          width={180}
          height={50}
          rotate={22}
          gradient="from-[#D4A017]/[0.2]"
          className="right-[18%] top-[12%]"
        />
        <FloatingShape
          delay={0.7}
          width={130}
          height={36}
          rotate={-28}
          gradient="from-white/[0.08]"
          className="left-[24%] top-[7%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-[4] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 backdrop-blur-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[#D4A017] text-sm font-semibold tracking-widest uppercase">
              Lebanon&apos;s Original Toy Experts
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8"
          >
            <span className="block text-white/95">Making Lebanese</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #D4A017 0%, #f0c842 50%, #D4A017 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Childhoods Magical
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-white/65 font-light tracking-wide mb-10 max-w-2xl mx-auto"
          >
            Trusted by Lebanese families since 1992. Three decades of wonder, 100+ world-class brands, and one family&apos;s unwavering mission.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/shop-by-age"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-[#1a0a00] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,160,23,0.5)]"
              style={{ backgroundColor: '#D4A017' }}
            >
              <span className="relative z-10">Shop by Age 🎁</span>
            </Link>
            <a
              href="https://wa.me/9613720233?text=Hi! I'm looking for a toy recommendation 🎁"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-[#FFF8F0] to-transparent pointer-events-none" />
    </section>
  );
}
