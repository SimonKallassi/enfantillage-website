'use client';

import { motion } from 'framer-motion';

const stats = [
  { icon: '⭐', label: '32 Years of Excellence' },
  { icon: '🏷️', label: '100+ Top Brands' },
  { icon: '🧸', label: '772+ Toy Options' },
  { icon: '👨‍👩‍👧', label: 'Family Owned' },
];

export function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="py-5 border-b border-[#e8d5c4]"
      style={{ backgroundColor: '#D4A017' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.08 }}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{stat.icon}</span>
              <span className="text-[#1a0a00] font-semibold text-sm md:text-base">{stat.label}</span>
              {i < stats.length - 1 && (
                <span className="hidden sm:block text-[#8B5e00] ml-4 md:ml-6">·</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
