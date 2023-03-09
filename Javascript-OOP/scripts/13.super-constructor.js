/**
Class Inheritance sifatnya seperti Prototype Inheritance
Bagaimana dengan Constructor Inheritance? Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini
Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam constructor
Kata kunci super digunakan untuk memanggil constructor super class
Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor
 */

class Employee {
  // jika membuat constructor di parent maka otomatis akan diturunkan disemua childnya
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(firstName) {
    console.log(`Hi ${firstName} My Name Is Employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(name) {
    console.log(`Hi ${name} My Name Is Manager ${this.firstName} ${this.lastName}`);
  }
}

const evan = new Employee('Evan');
// evan.name = 'Evan';
evan.sayHello('Tivani');

const budi = new Manager('Budi', 'Anwar');
// budi.name = 'Budi';
budi.sayHello('Joko');

console.log(evan);
console.log(budi);
