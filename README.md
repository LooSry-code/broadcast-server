# 📡 Broadcast Server dengan WebSocket (TypeScript)

Aplikasi CLI sederhana berbasis WebSocket yang memungkinkan beberapa client saling mengirim pesan secara real-time. Pesan dari satu client akan disiarkan ke semua client lainnya.

## 🧩 Fitur Utama

✅ Server dapat menyiarkan pesan ke semua client yang terhubung
✅ Dapat menjalankan server atau terhubung sebagai client via CLI
✅ Menangani koneksi dan diskoneksi client secara aman
✅ Dibangun menggunakan:
    * TypeScript
    * WebSocket
    * Node.js
    * Commander.js untuk antarmuka CLI

## 🧰 Prasyarat

Pastikan Anda sudah menginstal:

| Teknologi | Versi Minimal | Link             |
| --------- | ------------- | ---------------- |
| Node.js   | v16+          | [nodejs.org](https://nodejs.org) |
| npm       | Sudah termasuk Node.js | -                |
| TypeScript| npm install -g typescript | -                |
| ts-node   | npm install -g ts-node | -                |

## 📁 Struktur Proyek
broadcast-server/
├── src/
│   ├── index.ts        # Entry point dan penanganan CLI
│   ├── server.ts       # Logika server WebSocket
│   └── client.ts       # Logika client WebSocket
├── package.json        # Konfigurasi dependensi dan skrip proyek
├── tsconfig.json       # Konfigurasi TypeScript
└── README.md           # Dokumentasi proyek

## 🛠️ Instalasi

Clone repositori (jika ada) atau buat folder baru:

```bash
mkdir broadcast-server
cd broadcast-server
```

**Inisialisasi proyek:**
```bash
npm init -y
```


**Install dependensi:**
```bash
npm install ws commander
npm install --save-dev typescript ts-node @types/node @types/ws
```

## Cara menjalankan
**1. Jalankan Server**
```bash
npx ts-node src/index.ts start
```

**Output**
```bash
Server berjalan di ws://localhost:8080
```

**2. Jalankan Klien (di terminal baru)**
```bash
npx ts-node src.index.ts connect
```

**Output**
```bash
Terhubung ke server. Ketik pesan anda (ketik "exit" untuk keluar)
```

**LooSry-code**