/**
Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya
Untungnya itu diperbaiki di ES6 dengan fitur class nya
Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class
 */

class Employee {
  //   constructor(name) {
  //     this.name = name;
  //   }

  sayHello(name) {
    console.log(`Hi ${name} My Name Is Employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`Hi ${name} My Name Is Manager ${this.name}`);
  }
}

const evan = new Employee();
evan.name = 'Evan';
evan.sayHello('Tivani');

const budi = new Manager();
budi.name = 'Budi';
budi.sayHello('Joko');

console.log(evan);
console.log(budi);
