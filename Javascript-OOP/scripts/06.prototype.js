/**
    JavaScript sebelumnya dikenal dengan pemrograman berbasis prototype
    Memang agak sedikit membingungkan, dan tidak dipungkiri, banyak sekali yang bingung dengan konsep prototype di JavaScript
    Pada chapter ini, kita akan bahas tentang konsep prototype

    Saat kita membuat object dari constructor function, object tersebut disebut instance, semua property (baik itu value atau method), akan berada di dalam instance object nya
    Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
    Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya
    Untuk mengakses prototype milih sebuah instance, kita bisa menggunakan __proto__
 */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`Hello ${name} My Name Is ${this.firstName}`);
  };
}

Person.prototype.sayBye = function () {
  console.log('Good Bye');
};

Person.prototype.run = function () {
  console.log(`${this.firstName} is running`);
};

const evan = new Person('Evan', 'Pangau');
// saya bye akan duluan di ambil karena yang pertama di dapatkan sebelum masuk ke prototype
// evan.sayBye = function () {
//   console.log('Sampai Jumpa');
// };

const budi = new Person('Budi', 'Santoso');

console.log(evan);
console.log(budi);

evan.sayBye();
evan.run();
