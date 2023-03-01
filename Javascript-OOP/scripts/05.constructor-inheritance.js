/**
    Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function
    Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersebut
    Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)
 */

function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hello ${name} My Name Is ${firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  //   contoh mengcopy data dari constructor Employee
  Employee.call(this, firstName);
}

const evan = new Manager('Evan', 'Pangau');
console.log(evan);
