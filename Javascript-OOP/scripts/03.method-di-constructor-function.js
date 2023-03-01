/**
    Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam constructor function
    Jika kita tambahkan method di constructor function, secara otomatis object yang dibuat akan memiliki method tersebut
 */

function Person() {
  this.firstName = '';
  this.lastName = '';
  //   contoh method
  this.sayHello = function (name) {
    console.log(`Hello ${name} My Name Is ${this.firstName}`);
  };
}

const evan = new Person();
evan.firstName = 'Evan';
evan.lastName = 'Pangau';
// menampilkan method
evan.sayHello('Tivani');

const budi = new Person();
budi.firstName = 'Budi';
budi.lastName = 'Santoso';
budi.sayHello('Joko');

console.log(evan);
console.log(budi);
