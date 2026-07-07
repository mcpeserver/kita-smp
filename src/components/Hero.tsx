/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play, Info, ChevronDown } from 'lucide-react';

interface HeroProps {
  logoUrl: string;
  bgUrl: string;
}

export default function Hero({ logoUrl, bgUrl }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-12"
    >
      {/* Background Image Layer with Parallax-like Slow Movement */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.35 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
        {/* Soft Dark Overlays & Gradients to guarantee high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b18] via-[#0d0b18]/80 to-[#0d0b18]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0d0b18]/50 to-[#0d0b18]" />
      </div>

      {/* Floating Magic Orbs in Background */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/10 w-44 h-44 rounded-full bg-secondary/15 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/10 blur-2xl"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Main Logo Group */}
        <div className="relative mb-8 mt-4 md:mt-0">
          {/* Pulsing Aura Behind the Logo */}
          <motion.div
            animate={{
              scale: [0.95, 1.08, 0.95],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-4 rounded-full bg-primary/25 blur-3xl pointer-events-none"
          />

          {/* Majestic Purple Dragon Logo with Float + Soft Rotation Parallax Effect */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative group cursor-pointer"
            aria-hidden="true"
          >
            <img
              src={logoUrl}
              alt="Logo KITA SMP Naga Ungu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            {/* Sparkle Reflection Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          </motion.div>
        </div>

        {/* Cinematic Title & Taglines */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Accent Mini-Header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-primary/20 text-xs font-semibold text-accent uppercase tracking-widest text-glow-cyan">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Season 12 Baru Dimulai
          </div>

          {/* Main Title (Only one H1 on the page as required for SEO) */}
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white tracking-wider uppercase text-glow-purple">
            KITA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">SMP</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="max-w-2xl mx-auto font-sans text-base md:text-lg text-body-text/90 leading-relaxed font-light">
            Server Survival Economy Indonesia dengan komunitas aktif, sistem permainan seimbang, dan pengalaman bermain yang terus berkembang.
          </p>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md px-4"
        >
          <button
            onClick={() => handleScrollTo('#server-address')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:to-primary text-white font-bold text-base shadow-xl shadow-primary/30 hover:shadow-accent/40 transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Play size={18} className="fill-current" />
            <span>Gabung Server</span>
          </button>

          <button
            onClick={() => handleScrollTo('#quick-info')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-surface/60 border border-white/8 hover:border-primary/50 text-white font-bold text-base hover:bg-surface transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Info size={18} className="text-accent" />
            <span>Lihat Informasi</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mt-20 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => handleScrollTo('#quick-info')}
        >
          <span className="font-sans text-xs tracking-widest text-body-text/60 uppercase">Scroll Kebawah</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-1.5">
            <div className="w-1.5 h-2 bg-accent rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
