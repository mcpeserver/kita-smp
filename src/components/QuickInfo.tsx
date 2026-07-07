/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layers, Trophy, Cpu, Calendar } from 'lucide-react';

export default function QuickInfo() {
  const infoCards = [
    {
      title: 'Platform',
      value: 'Java & Bedrock',
      description: 'Bisa mabar PC, Android, & iOS',
      icon: <Layers className="text-accent" size={24} />,
    },
    {
      title: 'Musim Aktif',
      value: 'Season 12',
      description: 'Sistem ekonomi stabil teruji',
      icon: <Trophy className="text-primary" size={24} />,
    },
    {
      title: 'Status Server',
      value: 'Online',
      description: 'Aktif 24/7 tanpa henti',
      icon: <Cpu className="text-success-custom" size={24} />,
      isOnline: true,
    },
    {
      title: 'Berdiri Sejak',
      value: '30 Nov 2024',
      description: 'Komunitas mapan & terpercaya',
      icon: <Calendar className="text-warning-custom" size={24} />,
    },
  ];

  return (
    <section id="quick-info" className="py-12 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 rounded-3xl flex flex-col justify-between h-40 relative group overflow-hidden border-glow-purple"
          >
            {/* Background glowing element on hover */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-body-text/50 uppercase tracking-widest font-display">
                {card.title}
              </span>
              <div className="p-2.5 rounded-xl bg-surface/80 border border-white/5 shadow-inner">
                {card.icon}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-white tracking-wide font-display">
                  {card.value}
                </span>
                {card.isOnline && (
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-custom opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success-custom"></span>
                  </span>
                )}
              </div>
              <p className="text-xs text-body-text/80 mt-1">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
