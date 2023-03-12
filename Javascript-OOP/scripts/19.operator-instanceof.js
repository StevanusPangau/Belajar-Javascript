/**
Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan
 */

class Employee {
  //
}

// akan jadi true karena instanceof juga dapat membaca turunan class
class Manager extends Employee {
  //
}

const evan = new Employee();
const budi = new Manager();

console.log(typeof evan);
console.log(typeof budi);

console.log(evan instanceof Employee); // true
console.log(evan instanceof Manager); // false

console.log(budi instanceof Employee); // false (jadi true jika dibuat turunan/pewarisan)
console.log(budi instanceof Manager); // true
