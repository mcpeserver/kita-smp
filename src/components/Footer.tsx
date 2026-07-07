/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ShieldAlert, ArrowUp, ArrowUpRight, Github, Code, Phone, Globe, MessageCircle } from 'lucide-react';
import { DeveloperData } from '../types';

interface FooterProps {
  logoUrl: string;
}

export default function Footer({ logoUrl }: FooterProps) {
  const [devData, setDevData] = useState<DeveloperData | null>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((data: DeveloperData) => {
        setDevData(data);
      })
      .catch((err) => {
        console.error("Error fetching developer data in footer:", err);
        // Robust fallback
        setDevData({
          name: "Ran Dev",
          contact: {
            phone: "0895602592430",
            whatsapp: "0895602592430"
          },
          community: {
            name: "Ran Dev Community",
            website: "https://community.randev.com",
            discord: "https://discord.gg/9KUN2byKRM"
          },
          website: {
            portfolio: "https://sfl.gl/x2ic"
          }
        });
      });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="developer" className="relative z-20 bg-[#07050d] border-t border-white/5 pt-16 pb-8 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Footer Left Area: Branding & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="KITA SMP Logo"
                className="w-12 h-12 rounded-xl object-cover border border-white/10"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div>
                <h4 className="font-display font-extrabold text-lg text-white tracking-wider uppercase">
                  KITA <span className="text-accent">SMP</span>
                </h4>
                <p className="text-[10px] uppercase text-body-text/40 font-mono tracking-widest mt-0.5">Survival Economy Server</p>
              </div>
            </div>
            
            <p className="text-body-text/60 leading-relaxed font-light max-w-sm">
              Bangun dunia, bentuk komunitas, ciptakan petualangan. Mulailah perjalanan epikmu hari ini bersama ribuan pemain Minecraft terbaik di Indonesia.
            </p>

            <div className="pt-2 text-xs text-body-text/40">
              <p>&copy; 2026 KITA SMP. All Rights Reserved.</p>
              <p className="mt-1">Minecraft is a trademark of Mojang Synergies AB. KITA SMP is not affiliated with Mojang AB.</p>
            </div>
          </div>

          {/* Footer Middle Area: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Navigasi Cepat
            </h5>
            <ul className="space-y-2.5 text-body-text/70">
              <li>
                <button
                  onClick={() => handleScrollTo('#home')}
                  className="hover:text-accent transition-colors font-sans cursor-pointer"
                >
                  Beranda (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#server-address')}
                  className="hover:text-accent transition-colors font-sans cursor-pointer"
                >
                  Alamat IP Server
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#rules')}
                  className="hover:text-accent transition-colors font-sans cursor-pointer"
                >
                  Peraturan Bermain
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#kontak')}
                  className="hover:text-accent transition-colors font-sans cursor-pointer"
                >
                  Beli VIP / Rank
                </button>
              </li>
            </ul>
          </div>

          {/* Footer Right Area: Dynamic Developer (Fetched via Github Raw Config) */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Informasi Developer
            </h5>
            
            {devData ? (
              <ul className="space-y-3.5 text-body-text/70">
                <li className="flex items-center gap-2.5">
                  <Code size={16} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-body-text/40 uppercase font-mono tracking-wider">Developer Utama</p>
                    <p className="font-medium text-white">{devData.name}</p>
                  </div>
                </li>
                
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="text-[#25D366] flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-body-text/40 uppercase font-mono tracking-wider">WhatsApp Developer</p>
                    <a
                      href={`https://wa.me/${devData.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors flex items-center gap-0.5 text-white/90"
                    >
                      <span>{devData.contact.whatsapp}</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <Globe size={16} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-body-text/40 uppercase font-mono tracking-wider">Server Lain / Portfolio</p>
                    <a
                      href={devData.website.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors flex items-center gap-0.5 text-white/90 truncate max-w-[200px]"
                    >
                      <span className="truncate">{devData.website.portfolio}</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <MessageCircle size={16} className="text-[#5865F2] flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-body-text/40 uppercase font-mono tracking-wider">Komunitas Developer</p>
                    <a
                      href={devData.community.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors flex items-center gap-0.5 text-white/90"
                    >
                      <span>{devData.community.name} (Discord)</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </li>
              </ul>
            ) : (
              <div className="flex items-center gap-2 text-body-text/50 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span>Memuat data developer...</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Credits with Scroll-To-Top button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-body-text/40">
          <p>
            Didesain dan dibangun dengan penuh dedikasi sebagai Landing Page Minecraft Premium KITA SMP.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/30 hover:bg-surface text-white/95 text-xs transition-all cursor-pointer shadow-inner"
            aria-label="Scroll back to top"
          >
            <span>Kembali Ke Atas</span>
            <ArrowUp size={14} className="animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
