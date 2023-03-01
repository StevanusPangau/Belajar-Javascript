/**
    Karena dalam JavaScript, class adalah berbentuk function, jadi secara default, function tersebut bisa memiliki parameter
    Constructor function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat ketika kita membuat object, kita bisa mengirim langsung data lewat parameter di constructor function tersebut
 */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`Hello ${name} My Name Is ${this.firstName}`);
  };
}

// * langsung masukan parameter
const evan = new Person('Evan', 'Pangau');
evan.sayHello('Tivani');

const budi = new Person('Budi', 'Santoso');
budi.sayHello('Joko');

console.log(evan);
console.log(budi);
