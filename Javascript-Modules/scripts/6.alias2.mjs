const company = 'Programmer Tombatu';

function sum(first, second) {
  return first + second;
}

class Company {}

// bisa di aliaskan saat di export, tapi ini tidak di rekomendasikan
// export { company as perusahaan, sum as total, Company as Perusahaan };

export { company, sum, Company };
