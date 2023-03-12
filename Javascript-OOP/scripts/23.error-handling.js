/**
Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti
Di JavaScript, kita bisa menangkap jika terjadi error
Kita bisa menggunakan try catch statement untuk menangkap error
Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
Jika tidak terjadi error, block catch tidak akan dieksekusi
 */

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error('Total Parameter harus lebih dari 0');
    }

    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
}

try {
  console.log(MathUtil.sum());
  console.log('Evan');
} catch (error) {
  console.log(`Terjadi Error ${error.message}`);
} finally {
  console.log('Kode Program Selesai');
}

// tetap dijalankan jika terjadi error karena yang berhenti hanya di block try
console.log('Pangau');

// try finally
class Counter {
  #counter = 1;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
