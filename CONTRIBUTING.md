# Panduan Kontribusi KITA SMP Landing Page

Kami sangat senang Anda tertarik untuk berkontribusi pada website KITA SMP! Berikut adalah panduan langkah demi langkah untuk membantu Anda berpartisipasi dalam pengembangan landing page ini.

## Cara Berkontribusi

### 1. Laporkan Masalah (Bug Report)
Jika Anda menemukan kesalahan tampilan, typo kata, atau masalah kinerja:
- Buka tab **Issues** di repositori kami.
- Jelaskan masalah secara rinci, termasuk perangkat dan peramban (browser) yang digunakan.
- Sertakan tangkapan layar jika relevan.

### 2. Ajukan Perubahan (Pull Request)
- Lakukan *Fork* pada repositori ini.
- Buat cabang fitur baru dari cabang utama (`main`):
  ```bash
  git checkout -b fitur/nama-fitur-anda
  ```
- Lakukan perubahan kode. Pastikan gaya penulisan kode serasi dengan struktur yang sudah ada.
- Lakukan pengujian lokal dengan menjalankan `npm run build` dan `npm run lint` untuk memastikan tidak ada kesalahan kompilasi.
- Kirim perubahan Anda (*Commit*) dengan pesan commit yang jelas:
  ```bash
  git commit -m "feat: menambah visualisasi lencana baru"
  ```
- Lakukan *Push* ke cabang Anda dan ajukan *Pull Request* ke repositori asal.

## Aturan Gaya Penulisan Kode (Code Style)

- **TypeScript:** Gunakan pengetikan tipe data secara ketat. Hindari tipe data `any`.
- **Tailwind v4:** Gunakan kelas utility bawaan Tailwind daripada menulis CSS inline.
- **Komponen Modular:** Pisahkan komponen visual berukuran besar ke dalam file modular terpisah di bawah direktori `src/components/`.
