/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Coins, Smartphone, ShieldAlert, Users, Zap, Sparkles, Flag, Crown } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'Survival Economy',
      description: 'Sistem ekonomi berimbang dengan Shop, Auction House, dan pekerjaan unik untuk mengumpulkan kekayaan.',
      icon: <Coins size={28} className="text-primary" />,
    },
    {
      title: 'Java & Bedrock Crossplay',
      description: 'Dapat dimainkan bersama di platform PC (Java Edition) maupun Smartphone/Tablet (Bedrock Edition) dengan mulus.',
      icon: <Smartphone size={28} className="text-accent" />,
    },
    {
      title: 'Anti Cheat Kelas Atas',
      description: 'Sistem deteksi otomatis aktif 24 jam untuk memblokir cheat ilegal, menjamin keadilan murni bagi seluruh pemain.',
      icon: <ShieldAlert size={28} className="text-danger-custom" />,
    },
    {
      title: 'Komunitas Super Aktif',
      description: 'Ribuan pemain ramah yang terhubung melalui grup WhatsApp aktif dan server Discord untuk berdiskusi & berdagang.',
      icon: <Users size={28} className="text-success-custom" />,
    },
    {
      title: 'Lag Minimal & Server Handal',
      description: 'Didukung oleh spesifikasi hardware server modern (NVMe SSD, High Clock CPU) untuk kestabilan TPS maksimal.',
      icon: <Zap size={28} className="text-warning-custom" />,
    },
    {
      title: 'Event Seru Berkala',
      description: 'Ikuti ajang kompetisi, perang antar fraksi, perburuan harta karun, dan mini-games spesial berhadiah menarik.',
      icon: <Sparkles size={28} className="text-primary" />,
    },
    {
      title: 'Town Claim System',
      description: 'Lindungi rumah, bangunan megah, dan seluruh harta berhargamu dari griefing dan pencurian dengan sistem klaim wilayah.',
      icon: <Flag size={28} className="text-accent" />,
    },
    {
      title: 'Rank Eksklusif & Kustom',
      description: 'Dapatkan status VIP spesial, title unik, kit eksklusif, serta kosmetik premium untuk menonjol di hadapan pemain lain.',
      icon: <Crown size={28} className="text-warning-custom" />,
    },
  ];

  return (
    <section id="server" className="py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-accent uppercase tracking-widest font-display text-glow-cyan">
          Keunggulan Utama
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-wide uppercase mt-2">
          Fitur Unggulan Server
        </h2>
        <p className="text-sm md:text-base text-body-text/70 mt-3">
          Semua fitur dirancang demi menciptakan petualangan Minecraft terbaik yang adil, seru, dan adiktif.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresList.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card p-6 rounded-3xl relative group overflow-hidden border-glow-purple flex flex-col justify-between"
          >
            {/* Glowing Accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-accent/40" />
            
            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-surface/80 border border-white/5 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-body-text/80 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
            
            {/* Decorative arrow corner */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <Sparkles size={16} className="text-accent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
