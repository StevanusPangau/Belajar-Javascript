/**
    Sekarang kita sudah tahu, bahwa prototype selalu memiliki parent, artinya dia adalah turunan, parent tertinggi adalah Object prototype
    Pertanyaannya bagaimana jika kita ingin melakukan inheritance ke Prototype lain?
    Hal ini juga bisa dilakukan, namun agak sedikit tricky, karena hal ini, sebenarnya untuk JavaScript modern, tidak direkomendasikan lagi praktek OOP menggunakan Prototype, karena di ES6 sudah dikenalkan kata kunci class yang akan nanti dibahas di chapter tersendiri
 */

function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype; // salah
Manager.prototype = Object.create(Employee.prototype); // cara benar

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name} My Name Is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name} My Name Is Employee ${this.name}`);
};

const employee = new Employee('Evan');
employee.sayHello('Tivani');

const manager = new Manager('Budi');
manager.sayHello('Tivani');

console.info(employee);
console.info(manager);
