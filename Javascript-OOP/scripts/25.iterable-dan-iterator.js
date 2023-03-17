/**
Salah satu fitur terbaru di ES6 adalah iterable
Iterable adalah spesial object yang memiliki standarisasi
Dengan mengikuti standarisasi Iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan perulangan for...of
Contoh yang sudah mengikuti standarisasi Iterable adalah string, Array, Object, dan lain-lain

CARA KERJA
Jika kita mengikuti kontrak Iterable, maka object yang kita buat akan bisa dilakukan iterasi menggunakan for...of
Setiap kita melakukan perulangan, object Iterator akan dibuat
Hal ini menjadi aman jika kita melakukan iterasi berulang-ulang, karena Iterator baru akan dibuat terus menerus
 */

class CounterIteratorResult {
  constructor(value, done) {
    this.done = done;
    this.value = value;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counter = new Counter(1, 10);
for (const element of counter) {
  console.log(element);
}
