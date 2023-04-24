/**
 * Ada waktunya kadang kita ingin meng agregate beberapa module menjadi satu agar penggunaannya lebih sederhana
 * Jika module sudah banyak, maka ketika butuh banyak kode dari banyak module, kita harus sebutkan nama module tersebut tiap kalo import
 * Dengan melakukan aggregate, kita bisa membuat module aggregate, yang isinya menggabungkan export dari module lain
 * Caranya sangat mudah, cukup gunakan perintah :
 * export {a, b, c} from “./module.js”
 */

// Aggregate yaitu untuk mengambungkan beberapa module ke satu module

export { Person } from './4.class.mjs';
export { sayHello, sayGoodBye } from './2.with-modul.mjs';
export { sum } from './5.multiple-export.mjs';
