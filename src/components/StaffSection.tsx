/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Code, Settings, HeartHandshake, User } from 'lucide-react';
import { StaffItem } from '../types';

export default function StaffSection() {
  const staffTeam: StaffItem[] = [
    {
      id: '1',
      name: 'Andika / KITA_Owner',
      role: 'Owner',
      skinUrl: 'Notch',
      description: 'Pendiri utama KITA SMP. Bertanggung jawab atas pendanaan, kebijakan utama, dan arah pengembangan server.',
    },
    {
      id: '2',
      name: 'Ran Dev',
      role: 'Developer',
      skinUrl: 'jeb_',
      description: 'Arsitek sistem dan pengembang plugin. Mengurus optimasi server, kestabilan database, dan fitur baru.',
    },
    {
      id: '3',
      name: 'Bima / KITA_Admin',
      role: 'Admin',
      skinUrl: 'Steve',
      description: 'Mengelola kedisiplinan pemain, mengawasi laporan pelanggaran, serta menyelenggarakan event seru berkala.',
    },
    {
      id: '4',
      name: 'Siti / KITA_Helper',
      role: 'Helper',
      skinUrl: 'Alex',
      description: 'Siap membantu membimbing pemain baru, menjawab pertanyaan seputar gameplay, dan menjaga ketertiban umum.',
    },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Owner':
        return <Shield size={16} className="text-warning-custom" />;
      case 'Developer':
        return <Code size={16} className="text-accent" />;
      case 'Admin':
        return <Settings size={16} className="text-primary" />;
      case 'Helper':
        return <HeartHandshake size={16} className="text-success-custom" />;
      default:
        return <User size={16} className="text-white" />;
    }
  };

  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'Owner':
        return 'bg-warning-custom/10 border-warning-custom/20 text-warning-custom';
      case 'Developer':
        return 'bg-accent/10 border-accent/20 text-accent';
      case 'Admin':
        return 'bg-primary/10 border-primary/20 text-primary';
      case 'Helper':
        return 'bg-success-custom/10 border-success-custom/20 text-success-custom';
      default:
        return 'bg-white/10 border-white/20 text-white';
    }
  };

  return (
    <section id="rank" className="py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-accent uppercase tracking-widest font-display text-glow-cyan">
          Staf Profesional
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-wide uppercase mt-2">
          Tim Pengelola Server
        </h2>
        <p className="text-sm md:text-base text-body-text/70 mt-3">
          Kenali tim berdedikasi kami yang selalu siap sedia menjaga server KITA SMP tetap aman, lancar, dan menyenangkan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {staffTeam.map((staff, index) => (
          <motion.div
            key={staff.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl p-6 relative group overflow-hidden border-glow-purple flex flex-col justify-between"
          >
            {/* Glowing Accent Top border */}
            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:via-primary group-hover:to-transparent duration-500`} />

            <div>
              {/* Avatar Holder with pulsing rings */}
              <div className="relative w-28 h-28 mx-auto mb-6 flex justify-center items-center">
                <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 scale-100 group-hover:scale-125 transition-all duration-500" />
                <div className="absolute inset-1.5 rounded-full border border-white/5 group-hover:border-primary/20 transition-colors" />
                
                {/* Real-time Helmet Skin Face API from Minotar */}
                <img
                  src={`https://minotar.net/helm/${staff.skinUrl}/100.png`}
                  alt={`Minecraft helm avatar of ${staff.name}`}
                  className="w-16 h-16 object-contain z-10 drop-shadow-[0_8px_16px_rgba(139,61,255,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Staff Details */}
              <div className="text-center">
                {/* Role Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider ${getRoleBadgeStyle(staff.role)}`}>
                  {getRoleIcon(staff.role)}
                  <span>{staff.role}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mt-4 tracking-wide group-hover:text-accent transition-colors">
                  {staff.name}
                </h3>
                
                <p className="text-xs md:text-sm text-body-text/80 mt-3 leading-relaxed font-light">
                  {staff.description}
                </p>
              </div>
            </div>

            {/* Online Indicator Status Dot */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-body-text/40">
              <span>Status Pengelola</span>
              <span className="flex items-center gap-1 text-success-custom">
                <span className="h-1.5 w-1.5 rounded-full bg-success-custom animate-pulse" />
                Sedia Membantu
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
