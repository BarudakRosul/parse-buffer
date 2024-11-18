<div align="center">
  <h1>Parse Buffer</h1>
  <p><a href="/docs/README.en.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/parse-buffer/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/parse-buffer/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/parse-buffer/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/parse-buffer/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-buffer"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fparse-buffer" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/parse-buffer" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-buffer"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fparse-buffer" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/parse-buffer/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/parse-buffer?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/parse-buffer/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/parse-buffer?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/parse-buffer/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/parse-buffer" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Donasi](#donasi)
9. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Parse Buffer adalah sebuah fungsi JavaScript yang mengubah representasi string dari sebuah objek Buffer menjadi objek Buffer asli. Fungsi ini berguna ketika Anda ingin memproses kembali data biner yang disimpan atau dikirim dalam format string.

## Fitur

Parse Buffer menawarkan fitur-fitur berikut:

- Mengonversi string representasi Buffer menjadi objek Buffer asli.
- Memeriksa apakah input sudah dalam format Buffer yang valid.
- Dapat di integrasikan ke dalam kode TypeScript.

## Instalasi

Untuk menginstal Parse Buffer secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/parse-buffer
```

## Penggunaan

Untuk memulai menggunakan Parse Buffer, import modulnya terlebuh dahulu:

**1\. CommonJS**
```javascript
const parseBuffer = require("@barudakrosul/parse-buffer");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import parseBuffer from "@barudakrosul/parse-buffer";
```

Contoh penggunaan:

```javascript
const bufferString = "<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>";
const buffer = parseBuffer(bufferString);

console.log(buffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
console.log(buffer.toString()); // "Hello World!"
```

## Berkontribusi

Kontribusi pada Parse Buffer sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Parse Buffer dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Parse Buffer menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@Achixz](https://github.com/Achixz) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%92fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Parse Buffer dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/parse-buffer/releases).

Terima kasih telah memilih Parse Buffer! Kami bertujuan untuk memberikan solusi yang mudah untuk mengonversi string Buffer menjadi objek Buffer asli.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)
