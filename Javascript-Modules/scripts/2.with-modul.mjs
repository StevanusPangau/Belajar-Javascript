/**
 * EXPORT
 * export merupakan kata kunci yang digunakan untuk mengekspos kode dari sebuah module
 * export bisa ditambahkan diawal sebuah variable, function atau class
 */

export function sayHello(name) {
  console.info(`Hello ${name}`);
}

export function sayGoodBye(name) {
  console.info(`Good Bye ${name}`);
}

const name = 'Stevanus';
