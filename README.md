# KITA SMP Minecraft Indonesia - Premium Landing Page

<div align="center">

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://kitasmp.com)
[![React Version](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Minecraft Version](https://img.shields.io/badge/Minecraft-1.21.11+-128c12?style=for-the-badge&logo=minecraft)](https://minecraft.net)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Pusat Informasi & Landing Page Sinematik Utama untuk Server Survival Economy Minecraft Indonesia Terkemuka**

[Pratinjau Live Website](https://kitasmp.com) • [Laporkan Masalah](CONTRIBUTING.md) • [Keamanan](SECURITY.md)

</div>

---

## 🌟 Tentang Proyek

Landing Page modern, premium, cinematic, dan responsif untuk **KITA SMP**, salah satu Server Minecraft Survival Economy Indonesia terkemuka. Website ini dirancang dengan standar kualitas visual setara landing page game komersial kelas atas dan dioptimalkan secara mendalam untuk kecepatan muat maksimal (Google Lighthouse 95+).

Website ini mengintegrasikan navigasi glassmorphism yang mengalir, visualisasi naga ungu & kristal mengapung interaktif, sistem salin alamat IP otomatis, visualisasi tim staf dinamis yang tersinkronisasi dengan API skin Minecraft asli (Minotar), serta integrasi penarikan data API dynamic developer profil secara *real-time*.

---

## 🚀 Fitur Utama Website

- **Desain Premium Cinematic:** Palet warna serasi dengan logo (ungu, cyan, charcoal) yang dipadukan dengan efek *glassmorphism* elegan, animasi parallax ringan, floating particle, dan shadow halus tanpa pencahayaan berlebih.
- **Dynamic Developer Integration:** Mengambil data pengembang utama secara real-time dari API eksternal Github Raw (`https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json`) tanpa penulisan manual di header maupun footer.
- **Dua Edisi Koneksi:** Menyediakan informasi alamat server `play.kitasmp.com` yang dapat disalin secara instan (Copy-to-Clipboard) baik untuk **Java Edition** (port standard `25565`) maupun **Bedrock Edition** (port `19132`) lengkap dengan port-nya.
- **Staf Minecraft Terintegrasi:** Menampilkan daftar pengelola server menggunakan integrasi API Skin Helmet Minecraft asli (Minotar) yang memuat avatar wajah skin secara dinamis.
- **Optimalisasi SEO Maksimal:** Dilengkapi metadata lengkap (Meta Title, Meta Description, Canonical, Open Graph, Twitter Cards) serta 4 jenis schema JSON-LD terstruktur (Organization, WebSite, Breadcrumb, dan FAQ).
- **Performa Tinggi:** Tidak bergantung pada file statis eksternal di folder public, favicon dan logo di-generate secara programatis menggunakan SVG inline, serta menggunakan font preloading untuk meminimalkan *Layout Shift*.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Core:** React 19 + TypeScript + Vite 6
- **Styling:** Tailwind CSS v4 (Sistem utility murni, kustomisasi `@theme`, & glassmorphism ringan)
- **Animasi:** `motion/react` (Animasi transisi mikro, floating, rotasi naga, scroll reveal)
- **Ikon:** `lucide-react` (Koleksi icon modern responsif)
- **Build & Optimization Engine:** Esbuild + TypeScript Compiler (Type Stripping cepat)

---

## 📁 Struktur Folder Proyek

```text
├── .github/                # Template GitHub & Alur Kerja CI/CD
│   ├── ISSUE_TEMPLATE/     # Template pelaporan bug & request fitur
│   └── workflows/          # Konfigurasi aksi CI linter & compiler
├── .env.example            # Contoh berkas konfigurasi variabel lingkungan
├── .gitignore              # Daftar berkas terabaikan oleh Git
├── README.md               # Dokumentasi utama proyek (Berkas ini)
├── LICENSE                 # Lisensi MIT
├── CONTRIBUTING.md         # Panduan kontribusi proyek
├── CODE_OF_CONDUCT.md      # Panduan perilaku komunitas
├── SECURITY.md             # Kebijakan penanganan kerentanan keamanan
├── CHANGELOG.md            # Riwayat perubahan versi
├── CODEOWNERS              # Kepemilikan kode repositori
├── vercel.json             # Konfigurasi deployment & header keamanan Vercel
├── index.html              # Entrypoint HTML5 utama (SEO & JSON-LD)
├── package.json            # Daftar dependensi & script proyek
├── tsconfig.json           # Konfigurasi kompilator TypeScript
├── vite.config.ts          # Konfigurasi Vite bundler
├── src/
│   ├── App.tsx             # Komponen layout utama aplikasi
│   ├── main.tsx            # Entrypoint TypeScript React
│   ├── index.css           # Styling global Tailwind CSS v4 & Utilitas kustom
│   ├── types.ts            # Definisi tipe & interface data pengembang & staf
│   └── components/         # Komponen modular halaman
│       ├── Header.tsx      # Navigasi sticky glassmorphic & penarik data API
│       ├── Hero.tsx        # Banner sinematik naga ungu & kristal mengapung
│       ├── QuickInfo.tsx   # Kartu facts horizontal ringkas
│       ├── ServerAddress.tsx # Kartu IP koneksi dengan aksi salin otomatis & toast
│       ├── Features.tsx    # Kisi-kisi keunggulan gameplay server
│       ├── ServerRules.tsx # Alur linimasa aturan dalam game & kartu ClearLag
│       ├── GroupRules.tsx  # Kisi aturan sosial WhatsApp & Discord
│       ├── StaffSection.tsx # Grid staf pengelola dengan rendering skin MC asli
│       ├── SocialMedia.tsx # Daftar tautan eksternal komunitas
│       └── CTAPurchasing.tsx # Ajakan pembelian Rank VIP dengan hub nomor WA
```

---

## ⚙️ Integrasi API Developer (Dynamic)

Website ini secara dinamis mengonsumsi API eksternal untuk profil pengembang dari GitHub Raw:
`https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json`

### Skema Respons API
```json
{
  "name": "Ran Dev",
  "contact": {
    "whatsapp": "6285181040934",
    "email": "contact@randev.my.id"
  },
  "website": {
    "portfolio": "https://randev.my.id",
    "shop": "https://shop.randev.my.id"
  },
  "community": {
    "discord": "https://discord.gg/9KUN2byKRM"
  }
}
```

Website menggunakan mekanisme pengaman otomatis (fallback) jika API eksternal mengalami gangguan, memastikan tampilan header dan footer tetap elegan tanpa crash runtime.

---

## 🚀 Panduan Instalasi Lokal

Ikuti langkah-langkah berikut untuk menjalankan landing page di komputer lokal Anda:

### 1. Prasyarat
Pastikan komputer Anda telah terinstal [Node.js](https://nodejs.org) versi 18 atau lebih baru.

### 2. Kloning Repositori & Masuk Folder
```bash
git clone https://github.com/username/kita-smp-landing.git
cd kita-smp-landing
```

### 3. Instal Dependensi
```bash
npm install
```

### 4. Jalankan Server Dev
```bash
npm run dev
```
Buka peramban (browser) Anda di alamat [http://localhost:3000](http://localhost:3000) untuk melihat pratinjau website.

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil build siap unggah akan berada di folder `dist/`.

---

## 🌐 Panduan Deployment (Vercel)

Website ini siap dideploy ke **Vercel** tanpa memerlukan konfigurasi tambahan. Berkas `vercel.json` telah mengintegrasikan kompresi, perutean SPA, dan header perlindungan keamanan maksimal:

1. Buat akun di [Vercel](https://vercel.com).
2. Hubungkan akun GitHub Anda dan pilih repositori `kita-smp-landing`.
3. Klik tombol **Deploy**. Vercel akan otomatis membaca konfigurasi `vercel.json` dan melakukan kompilasi proyek.

---

## 📋 Frequently Asked Questions (FAQ)

**Q: Apakah server Kitasmp mendukung crossplay?**
A: Ya, pemain dari Java Edition (PC) dan Bedrock Edition (Android/iOS/Console) dapat bermain bersama secara lancar di alamat IP yang sama.

**Q: Di mana saya bisa membeli rank VIP?**
A: Anda dapat langsung menghubungi staf melalui WhatsApp (+62 851-8104-0934) yang terhubung pada bagian CTA Pembelian di website.

**Q: Bagaimana data pengembang didapatkan?**
A: Data ditarik secara dinamis menggunakan JavaScript `fetch` dari API github resmi pengembang, menjamin informasi WhatsApp dan portfolio selalu mutakhir secara otomatis.

---

## 🏆 Kredit & Kontributor

- **Art Direction & UI/UX:** Ran Dev / KITA SMP Team
- **Front-end Architect:** Senior Web Performance Engineer (Minecraft Indonesia)
- **Sumber Logo & Ilustrasi:** KITA SMP Branding Asset
