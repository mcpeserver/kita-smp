/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck, XCircle, Skull, ZapOff, MessageSquareOff, Heart, EyeOff, Bot } from 'lucide-react';

export default function ServerRules() {
  const rulesList = [
    {
      title: 'No Griefing',
      description: 'Dilarang merusak bangunan, merampas barang, atau mengacak-acak wilayah klaim milik pemain lain tanpa izin.',
      icon: <XCircle className="text-danger-custom" size={20} />,
    },
    {
      title: 'No Cheat',
      description: 'Dilarang keras menggunakan modifikasi ilegal, fly, hack, auto-clicker, atau aplikasi pihak ketiga yang merugikan.',
      icon: <Skull className="text-danger-custom" size={20} />,
    },
    {
      title: 'No X-Ray',
      description: 'Dilarang menggunakan resource pack X-Ray atau hack vision sejenis untuk mencari bijih berharga (ore) secara instan.',
      icon: <EyeOff className="text-danger-custom" size={20} />,
    },
    {
      title: 'No Exploit & Bug Abusing',
      description: 'Segera laporkan bug atau celah sistem yang ditemukan kepada staf. Menyalahgunakan bug untuk keuntungan pribadi dilarang keras.',
      icon: <ZapOff className="text-danger-custom" size={20} />,
    },
    {
      title: 'No Toxic Speech',
      description: 'Jaga kebersihan obrolan di obrolan global. Dilarang melakukan provokasi berat, penghinaan berlebih, spamming, atau bullying.',
      icon: <MessageSquareOff className="text-danger-custom" size={20} />,
    },
    {
      title: 'Respect Semua Player & Staff',
      description: 'Hargai sesama petualang dan tim staf server. Ciptakan lingkungan bermain yang suportif, ramah, dan kondusif.',
      icon: <Heart className="text-success-custom" size={20} />,
    },
    {
      title: 'Tidak Menggunakan Bot Farming',
      description: 'Dilarang mengintegrasikan bot otomatis untuk melakukan panen, pertambangan, ataupun aktivitas grinding non-manusia.',
      icon: <Bot className="text-danger-custom" size={20} />,
    },
    {
      title: 'Tidak Membuat AFK Farm Dekat Shop',
      description: 'Dilarang membangun mesin otomatis penghasil resource (AFK farm) berjarak terlalu dekat dari area Shop untuk menghindari kelambatan (lag) regional.',
      icon: <AlertTriangle className="text-warning-custom" size={20} />,
    },
  ];

  return (
    <section id="rules" className="py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-primary uppercase tracking-widest font-display text-glow-purple">
          Regulasi Server
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-wide uppercase mt-2">
          Aturan Bermain (Ingame Rules)
        </h2>
        <p className="text-sm md:text-base text-body-text/70 mt-3">
          Demi kenyamanan bersama, seluruh pemain wajib memahami dan menaati aturan ketat di bawah ini selama bermain.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Timeline (Takes 2 columns on desktop) */}
        <div className="lg:col-span-2 space-y-6 relative before:absolute before:left-6 md:before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-primary/50 before:via-secondary/30 before:to-transparent">
          {rulesList.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative pl-14 md:pl-20 group"
            >
              {/* Timeline Bullet Indicator with Glowing Effect */}
              <div className="absolute left-3 md:left-5 top-1.5 w-7 h-7 md:w-8 md:h-8 rounded-full bg-surface border-2 border-primary/40 group-hover:border-accent flex items-center justify-center z-10 transition-all duration-300 shadow-md group-hover:scale-110">
                {rule.icon}
              </div>

              {/* Rule Card */}
              <div className="glass-card p-5 rounded-2xl relative border-glow-purple">
                <h3 className="font-display font-bold text-sm md:text-base text-white tracking-wide group-hover:text-accent transition-colors flex items-center gap-2">
                  <span>{index + 1}.</span> {rule.title}
                </h3>
                <p className="text-xs md:text-sm text-body-text/80 mt-1.5 leading-relaxed font-light">
                  {rule.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning / Policy Column */}
        <div className="space-y-6 lg:sticky lg:top-24">
          {/* Warning Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#211A36] to-[#18142B] border border-warning-custom/20 shadow-2xl relative overflow-hidden"
          >
            {/* Soft pulsing glow backdrop */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-warning-custom/5 rounded-full blur-2xl animate-pulse-slow" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-warning-custom/10 border border-warning-custom/20 text-warning-custom">
                <AlertTriangle size={24} className="animate-bounce" />
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                Kebijakan ClearLag
              </h3>
            </div>

            <p className="text-xs md:text-sm text-body-text/90 leading-relaxed font-light mb-6">
              Server menggunakan sistem pembersihan otomatis berkala (ClearLag) untuk menjaga stabilitas performa (TPS) server tetap lancar. 
            </p>

            <div className="p-4 rounded-2xl bg-[#0d0b18]/60 border border-warning-custom/15 text-warning-custom font-medium text-xs md:text-sm leading-relaxed">
              <strong>PERHATIAN:</strong> Item yang terjatuh di tanah dan terhapus akibat pembersihan otomatis ClearLag <strong>bukan merupakan tanggung jawab Admin / Staff server.</strong> Harap amankan barang berhargamu sebelum penghitungan mundur pembersihan dimulai!
            </div>
          </motion.div>

          {/* Decorative Security Check card */}
          <div className="p-6 rounded-2xl bg-surface/40 border border-white/5 flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-success-custom/10 border border-success-custom/20 text-success-custom">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Keamanan Adil</h4>
              <p className="text-[10px] text-body-text/60 mt-0.5">Semua laporan pelanggaran diproses secara transparan oleh Staff.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
