/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldAlert, Users, Ban, AlertOctagon, Scale } from 'lucide-react';

export default function GroupRules() {
  const groupRulesList = [
    { title: 'Hormati Semua Anggota', desc: 'Jaga sopan santun dan hargai sesama anggota grup tanpa memandang status.' },
    { title: 'Tidak Boleh Spam', desc: 'Dilarang mengirim pesan berulang, emoji berlebihan, atau stiker berturut-turut.' },
    { title: 'Tidak Boleh Promosi', desc: 'Dilarang mengiklankan server Minecraft lain, link referral, jualan pribadi, atau grup lain.' },
    { title: 'Tidak Boleh Voice Note', desc: 'Dilarang mengirim rekaman suara (VN) tanpa kepentingan darurat demi kerapian grup.' },
    { title: 'Tidak Boleh AI Spam', desc: 'Dilarang membagikan teks spam panjang hasil generate AI yang memenuhi riwayat percakapan.' },
    { title: 'Tidak Boleh NSFW', desc: 'Dilarang keras menyebarkan foto, video, kata-kata vulgar, kasar, maupun konten berbau pornografi.' },
    { title: 'Tidak Boleh Doxxing', desc: 'Dilarang menyebarkan data pribadi, foto wajah asli, alamat, atau privasi anggota lain.' },
    { title: 'Tidak Boleh Ragebait', desc: 'Dilarang sengaja memprovokasi kemarahan, memicu kepanikan, atau membuat hoaks dalam grup.' },
    { title: 'Tidak Boleh Membawa Konflik', desc: 'Hindari perdebatan sengit atau dendam pribadi. Selesaikan masalah di luar grup obrolan.' },
    { title: 'Tidak Boleh Menghina Keluarga', desc: 'Pernyataan yang menghina orang tua, nama keluarga, atau kerabat dekat dilarang mutlak.' },
    { title: 'Tidak Boleh SARA', desc: 'Dilarang keras mendiskusikan atau menyinggung unsur suku, ras, agama, maupun golongan tertentu.' },
    { title: 'Keputusan Admin Bersifat Final', desc: 'Setiap keputusan moderasi dari tim Admin mutlak, adil, dan tidak dapat diganggu gugat.' },
  ];

  return (
    <section id="komunitas" className="py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-accent uppercase tracking-widest font-display text-glow-cyan">
          Aturan Komunitas
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-wide uppercase mt-2">
          Peraturan Grup Sosial
        </h2>
        <p className="text-sm md:text-base text-body-text/70 mt-3">
          Regulasi khusus untuk grup WhatsApp, Discord, dan media komunikasi resmi KITA SMP lainnya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Rules Grid (8/12 space) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {groupRulesList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="glass-card p-5 rounded-2xl flex items-start gap-3.5 relative border-glow-purple"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-danger-custom/10 border border-danger-custom/20 text-danger-custom flex items-center justify-center font-bold text-xs font-mono mt-0.5">
                !
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-body-text/80 mt-1 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Special Warning and Stats (4/12 space) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          
          {/* Main Strict Punishment Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#211A36] to-[#18142B] border border-danger-custom/20 shadow-2xl relative overflow-hidden flex-grow flex flex-col justify-between"
          >
            {/* Background absolute glowing icon for dramatic effect */}
            <div className="absolute -bottom-8 -right-8 text-danger-custom/5 pointer-events-none">
              <Ban size={180} />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-danger-custom/10 border border-danger-custom/20 text-danger-custom">
                  <AlertOctagon size={24} className="animate-pulse" />
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                  Sanksi Pelanggaran
                </h3>
              </div>

              <p className="text-xs md:text-sm text-body-text/90 leading-relaxed font-light mb-6">
                Kami sangat menghargai kenyamanan berinteraksi setiap anggota. Admin memantau aktivitas grup secara berkala dan menindak tegas setiap pelanggaran tanpa pengecualian.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-danger-custom/10 border border-danger-custom/25 text-white font-semibold text-xs md:text-sm leading-relaxed relative z-10 flex gap-3 items-center">
              <ShieldAlert size={28} className="text-danger-custom flex-shrink-0 animate-bounce" />
              <div>
                <p className="text-danger-custom uppercase tracking-wider font-extrabold text-[11px] font-display">Tindakan Langsung</p>
                <p className="font-sans font-medium mt-0.5 text-white/90">Pelanggaran berat akan langsung dikeluarkan dari grup tanpa peringatan!</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Team Card */}
          <div className="p-5 rounded-2xl bg-surface/40 border border-white/5 flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Scale size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hukum Adil & Teratur</h4>
              <p className="text-[10px] text-body-text/60 mt-0.5">Segala tindak moderasi tercatat secara objektif dalam sistem.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
