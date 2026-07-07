# Kebijakan Keamanan (Security Policy) KITA SMP

Kami mengutamakan integritas data, keamanan server, dan perlindungan privasi seluruh anggota komunitas kami. Jika Anda menemukan kerentanan keamanan (*security vulnerability*) baik pada kode sumber website ini, database pendukung, maupun pada konfigurasi sistem Minecraft Game Server, kami sangat menghargai kerja sama Anda untuk mengungkapkannya kepada kami secara aman dan rahasia (*Coordinated Vulnerability Disclosure*).

---

## 🛡️ Versi yang Didukung (Supported Versions)

Kami secara aktif memantau dan memperbaiki kerentanan keamanan untuk versi produk berikut:

| Produk / Komponen | Versi yang Didukung | Status Keamanan |
| :--- | :--- | :--- |
| **KITA SMP Landing Page** | `>= 1.0.0` | 🟢 Aktif Dipantau |
| **Custom Minecraft Plugins** | `>= 2.4.x` | 🟢 Aktif Dipantau |
| **Server Engine (Paper/Spigot)** | `1.21.11` | 🟢 Aktif Dipantau |
| **BungeeCord/Velocity Proxy** | Versi Terbaru | 🟢 Aktif Dipantau |

---

## ✉️ Melaporkan Celah Keamanan (Reporting a Vulnerability)

**PERINGATAN:** Jangan pernah melaporkan celah keamanan (exploit, XSS, kebocoran database, bypass autentikasi) melalui tab **Public Issues** atau komentar terbuka di platform publik apa pun.

Harap laporkan temuan Anda secara langsung melalui saluran komunikasi privat kami:

1. **WhatsApp Pengembang Utama:** `+62 851-8104-0934` (Pilihan Tercepat)
2. **Kontak Pengembang Cadangan:** Hubungi nomor kontak pengembang yang terdaftar secara dinamis pada API Header Website.
3. **Email Keamanan:** `security@kitasmp.com` atau email pengembang `contact@randev.my.id`

### Informasi yang Dibutuhkan dalam Laporan
Untuk membantu kami memproses perbaikan secepatnya, harap sertakan detail berikut:
- **Nama Celah Keamanan:** (misal: *Cross-Site Scripting (XSS) di Input Pencarian*)
- **Deskripsi Dampak:** Apa yang bisa dicapai oleh penyerang jika mengeksploitasi celah ini?
- **Langkah-langkah Reproduksi (PoC):** Berikan panduan langkah-demi-langkah atau kode eksploitasi sederhana. Jika memungkinkan, sertakan link tangkapan layar privat atau rekaman video demonstrasi.
- **Saran Perbaikan:** Jika Anda memiliki ide perbaikan dalam bentuk kode.

---

## ⏱️ Siklus Penanganan Keamanan (Response Timeline)

Kami berkomitmen untuk memperlakukan semua laporan keamanan secara serius dan cepat:

- **Konfirmasi Penerimaan:** Dalam waktu **24-48 jam** setelah laporan diterima, tim kami akan mengirimkan konfirmasi penerimaan awal beserta tiket pelacakan internal.
- **Validasi & Investigasi:** Tim pengembang kami akan mereproduksi celah tersebut untuk mengukur tingkat keparahan (*CVSS Score*).
- **Perbaikan (Patching):** Perbaikan akan dirilis dalam kurun waktu **3 hingga 7 hari kerja** tergantung tingkat kerumitan perbaikan.
- **Pemberitahuan Publik (Disclousure):** Setelah perbaikan berhasil diterapkan pada lingkungan produksi, kami akan memperbarui `CHANGELOG.md` dan memberikan kredit apresiasi kepada pelapor jika dikehendaki.

---

## 🤝 Aturan Keterlibatan yang Aman (Safe Harbor)

Kami menjamin bahwa Anda **tidak akan dituntut secara hukum** jika Anda mematuhi aturan keterlibatan berikut:
- Anda tidak melakukan serangan Denial of Service (DoS/DDoS) yang merusak ketersediaan layanan bagi pemain lain.
- Anda tidak melakukan pencurian, penghapusan, atau manipulasi data pribadi milik pemain lain.
- Anda tidak menggunakan teknik Rekayasa Sosial (*Social Engineering* / Phishing) terhadap staf atau pemain KITA SMP.
- Anda memberi kami waktu yang wajar untuk memperbaiki masalah sebelum mempublikasikannya ke khalayak ramai.
