/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Crown, MessageCircle, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function CTAPurchasing() {
  const whatsappUrl = "https://wa.me/6285181040934?text=Halo%20Admin%20KITA%20SMP%20-%20Saya%20tertarik%20untuk%20membeli%20Rank%20VIP%20atau%20melakukan%20donasi%20donatur!";

  return (
    <section id="kontak" className="py-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow orb specifically for this CTA section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#211A36] via-[#18142B] to-[#0d0b18] border border-primary/20 shadow-2xl p-8 md:p-14 text-center overflow-hidden"
      >
        {/* Sparkles / Stars decorations */}
        <div className="absolute top-8 left-8 text-primary/30 animate-bounce">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-8 right-8 text-accent/30 animate-pulse">
          <Star size={24} />
        </div>

        {/* Header Icon */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Crown size={40} className="text-warning-custom animate-float" />
          {/* Subtle accent dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-[#18142B] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </span>
        </div>

        {/* Text Details */}
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-wide uppercase">
          Dukung Kami & <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning-custom to-accent">Beli VIP</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-sm md:text-base text-body-text/80 mt-4 leading-relaxed font-light">
          Dapatkan keuntungan eksklusif di dalam server seperti kit berharga, kosmetik kosmetik sayap legendaris, title chat mencolok, serta prioritas slot masuk penuh saat server sedang ramai!
        </p>

        {/* Benefits Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-white/95 uppercase tracking-wider">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface border border-white/5">
            <ShieldCheck size={14} className="text-success-custom" />
            Instant Delivery
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface border border-white/5">
            <ShieldCheck size={14} className="text-accent" />
            Keuntungan Permanen
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface border border-white/5">
            <ShieldCheck size={14} className="text-primary" />
            Dukungan Server 24/7
          </span>
        </div>

        {/* Number & Action Column */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-[#0d0b18]/60 border border-white/5 max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-body-text/60 font-semibold font-display">
            Hubungi Hub Pembelian Kami via WhatsApp
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white mt-2 tracking-wide font-mono select-all">
            +62 851-8104-0934
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full md:w-auto px-10 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-base transition-all duration-300 shadow-xl shadow-[#25D366]/10 hover:shadow-[#25D366]/20 mt-6 hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle size={20} className="fill-current" />
            <span>Hubungi Via WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-body-text/40 mt-6">
          Seluruh dana pembelian digunakan untuk biaya sewa server bulanan, pemeliharaan hardware, dan pengembangan fitur baru.
        </p>
      </motion.div>
    </section>
  );
}
