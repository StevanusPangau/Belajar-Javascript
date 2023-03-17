/**
Walaupun JavaScript sudah memiliki standard class Error
Namun alangkah baiknya, kita membedakan tiap jenis error
Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error
Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error
 */

// kegunaan dari class manual error yaitu kita bisa memberikan informasi tambahan
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError('Total Parameter harus lebih dari 0', 'numbers');
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
  if (error instanceof ValidationError) {
    console.log(`Terjadi error di field : ${error.field} dengan error ${error.message}`);
  } else {
    console.log(`Terjadi Error ${error.message}`);
  }
} finally {
  console.log('Kode Program Selesai');
}

// tetap dijalankan jika terjadi error karena yang berhenti hanya di block try
console.log('Pangau');
