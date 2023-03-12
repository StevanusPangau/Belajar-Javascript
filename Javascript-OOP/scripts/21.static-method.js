/**
Kata kunci static juga tidak hanya bisa ditambahkan di field, tapi juga di method
Jika kita tambahkan di method, artinya method tersebut jadi milik class nya, bukan prototype
Dan untuk mengakses method tersebut, kita juga bisa lakukan seperti mengakses static class field
 */

class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
}

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.log(result);
