'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const brands = [
  { name: 'LEGO', tagline: 'Build the world', color: '#E3000B', bg: '#fff5f5', href: '/lego-lebanon' },
  { name: 'Playmobil', tagline: 'Imagine everything', color: '#E8192C', bg: '#fff5f5', href: '/shop-by-age' },
  { name: 'Chicco', tagline: 'Born for babies', color: '#0066CC', bg: '#f0f8ff', href: '/shop-by-age' },
  { name: 'Mattel', tagline: 'Power of play', color: '#E82C2A', bg: '#fff5f5', href: '/shop-by-age' },
  { name: 'Barbie', tagline: 'You can be anything', color: '#E0218A', bg: '#fff0f7', href: '/shop-by-age' },
  { name: 'Little Tikes', tagline: 'Let the fun begin', color: '#F7941D', bg: '#fff8f0', href: '/shop-by-age' },
];

export function BrandShowcase() {
  return (
    <section className="py-24 px-4 overflow-hidden" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A017]/15 text-[#8B5e00] text-xs font-bold tracking-widest uppercase mb-4">
            Authorised Retailer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a00] mb-4">
            World-Class Brands
          </h2>
          <p className="text-[#6b5a4e] text-lg max-w-xl mx-auto">
            Lebanon&apos;s authorised retailer for the brands every child loves.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link href={brand.href} className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="relative rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer"
                  style={{
                    backgroundColor: brand.bg,
                    border: '1.5px solid transparent',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    backgroundClip: 'padding-box',
                  }}
                >
                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${brand.color}22, ${brand.color}44)`,
                      border: `1.5px solid ${brand.color}50`,
                    }}
                  />

                  {/* Brand initial as logo placeholder */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-white font-black text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.name[0]}
                  </div>

                  <div
                    className="relative z-10 font-extrabold text-base leading-tight mb-1 transition-colors duration-300"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </div>
                  <div className="relative z-10 text-xs text-[#9e8070] group-hover:text-[#6b5a4e] transition-colors duration-300">
                    {brand.tagline}
                  </div>

                  {/* Corner arrow */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H3M8 2V7" stroke={brand.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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
