/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Terminal, ExternalLink, Globe } from 'lucide-react';

export default function ServerAddress() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeCopied, setActiveCopied] = useState<'java' | 'bedrock' | null>(null);

  const copyToClipboard = (text: string, type: 'java' | 'bedrock') => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setToastMessage(`IP berhasil disalin.`);
        setActiveCopied(type);
        setTimeout(() => {
          setToastMessage(null);
          setActiveCopied(null);
        }, 2500);
      })
      .catch((err) => {
        console.error('Gagal menyalin teks:', err);
      });
  };

  return (
    <section id="server-address" className="py-16 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface border border-primary/30 shadow-2xl text-white font-medium text-sm"
          >
            <div className="w-2 h-2 rounded-full bg-success-custom animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-wide uppercase text-glow-purple">
          Mulai Petualanganmu
        </h2>
        <p className="text-sm md:text-base text-body-text/70 mt-2">
          Pilih edisi Minecraft favoritmu dan bergabunglah bersama ribuan pemain aktif lainnya hari ini!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Java Edition Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 flex flex-col justify-between relative group border-glow-purple"
        >
          {/* Header Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-4 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider font-display">
                Java Edition
              </span>
              <Terminal size={20} className="text-body-text/40" />
            </div>

            <h3 className="font-display font-bold text-2xl text-white">PLAY.KITASMP.COM</h3>
            <p className="text-xs text-body-text/70 mt-1">Gunakan alamat IP di atas untuk masuk</p>

            <div className="mt-8 space-y-4 bg-surface/50 p-4 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-body-text/50">Server IP</span>
                <span className="font-mono text-white font-medium select-all">play.kitasmp.com</span>
              </div>
              <div className="h-[1px] bg-white/5" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-body-text/50">Versi Minecraft</span>
                <span className="text-accent font-semibold">1.21.11+</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => copyToClipboard('play.kitasmp.com', 'java')}
            className="w-full mt-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {activeCopied === 'java' ? (
              <>
                <Check size={16} />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Salin IP Java</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Bedrock Edition Card (Pocket Edition / Console / Win10) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 flex flex-col justify-between relative group border-glow-purple"
        >
          {/* Header Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-4 py-1.5 rounded-xl bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-wider font-display">
                Bedrock Edition
              </span>
              <Globe size={20} className="text-body-text/40" />
            </div>

            <h3 className="font-display font-bold text-2xl text-white">PLAY.KITASMP.COM</h3>
            <p className="text-xs text-body-text/70 mt-1">Mendukung Android, iOS, Xbox, Nintendo Switch, & Win10</p>

            <div className="mt-8 space-y-4 bg-surface/50 p-4 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-body-text/50">Server IP</span>
                <span className="font-mono text-white font-medium select-all">play.kitasmp.com</span>
              </div>
              <div className="h-[1px] bg-white/5" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-body-text/50">Port</span>
                <span className="text-accent font-semibold select-all">19132</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => copyToClipboard('play.kitasmp.com:19132', 'bedrock')}
            className="w-full mt-8 py-3.5 rounded-2xl bg-surface hover:bg-white/5 text-white font-bold text-sm border border-white/10 hover:border-accent/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            {activeCopied === 'bedrock' ? (
              <>
                <Check size={16} className="text-accent" />
                <span className="text-accent">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Salin IP Bedrock</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Trust & Community Subtext */}
      <div className="mt-12 text-center text-xs text-body-text/40 flex items-center justify-center gap-4 max-w-md mx-auto">
        <div className="h-[1px] bg-white/5 flex-grow" />
        <div className="flex items-center gap-1.5">
          <span>Keamanan Terjamin</span>
          <span>•</span>
          <span>Anti-DDoS Proteksi</span>
        </div>
        <div className="h-[1px] bg-white/5 flex-grow" />
      </div>
    </section>
  );
}
