/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageSquare, Phone, Bell, Globe, Share2, Flame, ArrowUpRight } from 'lucide-react';

export default function SocialMedia() {
  const socialChannels = [
    {
      name: 'TikTok',
      tagline: 'Video konten seru, pameran base, & update event',
      url: 'https://tiktok.com/@kitasmp',
      icon: <Flame size={24} className="text-[#FE2C55]" />,
      accentColor: 'hover:border-[#FE2C55]/30 hover:shadow-[#FE2C55]/10',
      textColor: 'group-hover:text-[#FE2C55]',
    },
    {
      name: 'Website Resmi',
      tagline: 'Portal utama informasi, update patch, & pendaftaran',
      url: 'https://kitasmp.com',
      icon: <Globe size={24} className="text-accent" />,
      accentColor: 'hover:border-accent/30 hover:shadow-accent/10',
      textColor: 'group-hover:text-accent',
    },
    {
      name: 'Discord Server',
      tagline: 'Mabar voice chat, diskusi server, & laporan pemain',
      url: 'https://discord.gg/9KUN2byKRM',
      icon: <MessageSquare size={24} className="text-[#5865F2]" />,
      accentColor: 'hover:border-[#5865F2]/30 hover:shadow-[#5865F2]/10',
      textColor: 'group-hover:text-[#5865F2]',
    },
    {
      name: 'WhatsApp Group',
      tagline: 'Grup obrolan aktif santai sesama pemain',
      url: 'https://wa.me/6285181040934',
      icon: <Phone size={24} className="text-success-custom" />,
      accentColor: 'hover:border-success-custom/30 hover:shadow-success-custom/10',
      textColor: 'group-hover:text-success-custom',
    },
    {
      name: 'Announcement Channel',
      tagline: 'Saluran info penting terpercaya dari tim Admin',
      url: 'https://wa.me/6285181040934',
      icon: <Bell size={24} className="text-warning-custom" />,
      accentColor: 'hover:border-warning-custom/30 hover:shadow-warning-custom/10',
      textColor: 'group-hover:text-warning-custom',
    },
    {
      name: 'Linktree KITA',
      tagline: 'Satu pintu akses semua link penting server',
      url: 'https://linktr.ee/kitasmp',
      icon: <Share2 size={24} className="text-[#39E09B]" />,
      accentColor: 'hover:border-[#39E09B]/30 hover:shadow-[#39E09B]/10',
      textColor: 'group-hover:text-[#39E09B]',
    },
  ];

  return (
    <section id="komunitas-sosial" className="py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-accent uppercase tracking-widest font-display text-glow-cyan">
          Sosial Media
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-wide uppercase mt-2">
          Hubungi & Ikuti Kami
        </h2>
        <p className="text-sm md:text-base text-body-text/70 mt-3">
          Bergabunglah ke media sosial kami untuk berdiskusi dengan komunitas dan mendapatkan info pembaharuan tercepat.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {socialChannels.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`glass-card p-6 rounded-3xl flex items-start gap-4 relative group cursor-pointer border-glow-purple ${social.accentColor}`}
          >
            {/* Hover decorative glowing element */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/[0.02] group-hover:bg-white/[0.04] rounded-bl-full pointer-events-none transition-colors" />

            {/* Icon Circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-all duration-300">
              {social.icon}
            </div>

            {/* Channel Details */}
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className={`font-display font-bold text-base text-white tracking-wide transition-colors ${social.textColor}`}>
                  {social.name}
                </h3>
                <ArrowUpRight size={14} className="text-body-text/40 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
              </div>
              <p className="text-xs text-body-text/80 mt-1 leading-relaxed font-light">
                {social.tagline}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
