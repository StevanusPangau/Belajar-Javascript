/**
 * EXPORT
 * export merupakan kata kunci yang digunakan untuk mengekspos kode dari sebuah module
 * export bisa ditambahkan diawal sebuah variable, function atau class
 *
 * IMPORT
 * Export digunakan untuk mengekspos kode di module, jika kita ingin menggunakan kode yang sudah di ekspos di module, kita bisa menggunakan kata kunci import
 * Cara menggunakan kata kunci import adalah sebagai berikut :
 * import {namaFunction, namaVariable, NamaClass} from “lokasi-module.js”
 * Module hanya bisa digunakan di module lain, jadi pastikan ketika  membuat script, kita harus menggunakan type module
 * Saat menggunakan import, kita tidak perlu lagi menambahkan script module src satu per satu, karena sudah di handle oleh Browser secara otomatis ketika menggunakan module
 */

export function sayHello(name) {
  console.info(`Hello ${name}`);
}

export function sayGoodBye(name) {
  console.info(`Good Bye ${name}`);
}

export const name = 'Stevanus';
