/**
Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function
Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object
Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
Untung nya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype
 */

class Person {
  constructor(name) {
    this.name = name;

    // tidak direkomendasikan
    // this.sayHello = function name(name) {
    //   console.log(`Hello ${name} My Name Is ${this.name}`);
    // };
  }

  sayHello(name) {
    console.log(`Hello ${name} My Name Is ${this.name}`);
  }
}

const evan = new Person('Evan');
console.log(evan);
evan.sayHello('Tivani');
// console.log(evan.name);

const budi = new Person('Budi');
console.log(budi);
budi.sayHello('Joko');
