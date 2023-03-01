/**
    Sebenarnya setelah kita membuat object, kita bisa dengan mudah menambahkan property ke dalam object tersebut hanya dengan menggunakan nama variable nya, diikuti tanda titik dan nama property
    Namun jika seperti itu, alhasil, constructor function yang sudah kita buat tidak terlalu berguna, karena property nya hanya ada di object yang kita tambahkan property
    Untuk menambahkan property di dalam semua object yang dibuat dari constructor function, kita bisa menggunakan kata kunci this lalu diikuti dengan nama property nya
 */

function Person() {
  // contoh membuat propery
  this.firstName = '';
  this.lastName = '';
}

const evan = new Person();
// memasukan nilai
evan.firstName = 'Evan';
evan.lastName = 'Pangau';

const budi = new Person();
budi.firstName = 'Budi';
budi.lastName = 'Santoso';

console.log(evan);
console.log(budi);
