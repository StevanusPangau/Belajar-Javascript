/**
# Kata Kunci Static
static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasannya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function di prototype
Jika kita tambahkan static, maka hal itu tidak terjadi

# Static Class Field
Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri
Biasanya static digunakan jika kita ingin membuat utility field atau function
Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya
Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama
 */

class Configuration {
  static name = 'Belajar Javascrip OOP';
  static version = 1.0;
  static author = 'Stevanus Pangau';
}

const config = new Configuration();
console.log(config);

// bisa juga diubah
Configuration.author = 'Evan Pangau';

// fieldnya jadi object bisa dipanggil dimana saja jika menggunakan static
console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);
