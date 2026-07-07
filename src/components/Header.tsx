/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ArrowUpRight, Github, MessageCircle, Phone, Globe, ChevronDown } from 'lucide-react';
import { DeveloperData } from '../types';

interface HeaderProps {
  logoUrl: string;
}

export default function Header({ logoUrl }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [devData, setDevData] = useState<DeveloperData | null>(null);
  const [showDevDropdown, setShowDevDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Fetch developer data
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data developer");
        return res.json();
      })
      .then((data: DeveloperData) => {
        setDevData(data);
      })
      .catch((err) => {
        console.error("Error fetching developer data:", err);
        // Robust fallback if Github is unreachable
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

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Server', href: '#server' },
    { label: 'Rules', href: '#rules' },
    { label: 'Rank', href: '#rank' },
    { label: 'Komunitas', href: '#komunitas' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col"
    >
      {/* Premium Developer Announcement Banner */}
      <div className="w-full bg-gradient-to-r from-[#0d0b18]/95 via-[#8B3DFF]/15 to-[#00F0FF]/10 border-b border-white/5 py-2 px-4 text-white relative z-50 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left Block: Dynamic Badge & Developer Core Info */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="font-sans font-medium text-white/90">
              Official Website Developer: <strong className="text-accent hover:underline cursor-pointer" onClick={() => handleScrollTo('#developer')}>{devData?.name || "Ran Dev"}</strong>
              <span className="hidden lg:inline text-white/50"> &mdash; Jasa Pembuatan Website Minecraft, Setup Server &amp; Custom Plugin Premium</span>
            </span>
          </div>

          {/* Right Block: Dynamic Action Links with micro-animations */}
          <div className="flex items-center gap-4 text-[11px] font-semibold text-white/70">
            <a
              href={`https://wa.me/${devData?.contact.whatsapp || "0895602592430"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors group"
            >
              <Phone size={11} className="text-primary group-hover:scale-110 transition-transform" />
              <span>WhatsApp Developer</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a
              href={devData?.community.discord || "https://discord.gg/9KUN2byKRM"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors group"
            >
              <MessageCircle size={11} className="text-primary group-hover:scale-110 transition-transform" />
              <span>Discord</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a
              href={devData?.website.portfolio || "https://sfl.gl/x2ic"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors group"
            >
              <Globe size={11} className="text-primary group-hover:scale-110 transition-transform" />
              <span>Portfolio &amp; Shop</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0d0b18]/90 backdrop-blur-md border-b border-white/8 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('#home');
            }}
            className="flex items-center gap-3 group"
            aria-label="KITA SMP Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-surface border border-white/10 group-hover:border-primary/50 transition-all">
              <img
                src={logoUrl}
                alt="KITA SMP Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-primary transition-colors">
              KITA <span className="text-accent">SMP</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.href);
                }}
                className="font-sans text-sm font-medium text-body-text hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            {/* Custom Developer menu item inside desktop links to anchor to developer section or triggers the dropdown */}
            <button
              onClick={() => handleScrollTo('#developer')}
              className="font-sans text-sm font-medium text-body-text hover:text-white transition-colors cursor-pointer"
            >
              Developer
            </button>
          </nav>

          {/* Header Right Actions (Developed Card + Button) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Developed By Widget */}
            <div className="relative">
              <button
                onClick={() => setShowDevDropdown(!showDevDropdown)}
                onMouseEnter={() => setShowDevDropdown(true)}
                onMouseLeave={() => setShowDevDropdown(false)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface/50 border border-white/8 hover:border-primary/40 text-xs text-white/90 font-medium transition-all cursor-pointer"
                aria-label="Developer Information"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span>Developed by <strong className="text-accent">{devData?.name || "Ran Dev"}</strong></span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${showDevDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dev Dropdown Content */}
              {showDevDropdown && devData && (
                <div
                  onMouseEnter={() => setShowDevDropdown(true)}
                  onMouseLeave={() => setShowDevDropdown(false)}
                  className="absolute right-0 top-full mt-2 w-64 p-4 rounded-2xl bg-card border border-white/10 shadow-2xl z-50 animate-float"
                >
                  <div className="mb-3 pb-2 border-b border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-body-text/60">Developer</p>
                    <h4 className="text-sm font-semibold text-white">{devData.name}</h4>
                  </div>
                  
                  <ul className="space-y-2.5 text-xs">
                    <li>
                      <a
                        href={`https://wa.me/${devData.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-body-text hover:text-accent transition-colors"
                      >
                        <Phone size={14} className="text-primary" />
                        <span>WhatsApp: {devData.contact.whatsapp}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={devData.website.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-body-text hover:text-accent transition-colors"
                      >
                        <Globe size={14} className="text-primary" />
                        <span className="truncate">Server Lain / Portfolio</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={devData.community.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-body-text hover:text-accent transition-colors"
                      >
                        <MessageCircle size={14} className="text-primary" />
                        <span>Discord Community</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Gabung Sekarang Button */}
            <button
              onClick={() => handleScrollTo('#server-address')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer flex items-center gap-1"
            >
              Gabung Sekarang
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Dev Small Indicator Card for Mobile */}
            {devData && (
              <button
                onClick={() => handleScrollTo('#developer')}
                className="px-2.5 py-1 rounded-lg bg-surface/40 border border-white/5 text-[10px] text-white/80"
              >
                Dev: <span className="text-accent">{devData.name}</span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-surface border border-white/8 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0d0b18]/95 backdrop-blur-lg border-b border-white/10 px-4 py-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.href);
                }}
                className="font-sans text-base font-semibold text-body-text hover:text-white px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#developer"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#developer');
              }}
              className="font-sans text-base font-semibold text-body-text hover:text-white px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
            >
              Developer
            </a>
          </nav>

          {/* Dev Data Info Card inside Mobile Dropdown Menu */}
          {devData && (
            <div className="p-4 rounded-2xl bg-card border border-white/5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">Info Developer</p>
              <div className="space-y-2 text-sm text-body-text">
                <p><span className="text-white/60">Nama:</span> <strong className="text-white">{devData.name}</strong></p>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href={`https://wa.me/${devData.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Phone size={14} className="text-primary" />
                    <span>WhatsApp Developer</span>
                  </a>
                  <a
                    href={devData.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Globe size={14} className="text-primary" />
                    <span>Server Lain / Portfolio</span>
                  </a>
                  <a
                    href={devData.community.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <MessageCircle size={14} className="text-primary" />
                    <span>Discord Community</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => handleScrollTo('#server-address')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-center font-bold text-sm shadow-lg shadow-primary/25"
          >
            Gabung Sekarang
          </button>
        </div>
      )}
    </header>
  );
}
