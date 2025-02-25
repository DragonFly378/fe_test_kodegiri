// Test no 1
for (let i = 50; i <= 100; i++) {
  switch (true) {
    case i <= 60:
      console.log(i + " KURANG");
      break;
    case i <= 70:
      console.log(i + " CUKUP");
      break;
    case i <= 80:
      console.log(i + " BAIK");
      break;
    default:
      console.log(i + " LUAR BIASA");
  }
}





// Test no 2
let fib = new Array();
for (let i = 0; i < 20; i++) {
  fib.push(i < 2 ? i : fib[i - 2] + fib[i - 1]);
}
console.log(fib);





// Test no 3
const triGen = (totalStar) => {
  for (let i = 0; i < totalStar; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
};
triGen(5);






// Test no 4
const convertRupiah = (num) => {
  if (num < 2000 && num > 9999) {
    console.log("Angka harus 4 digit dan lebih dari 2000");
    return;
  }

  let res = new Array();

  const angka = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
  ];

  let arr = num.toString().split("").map(Number);

  const [ribuan, ratusan, puluhan, satuan] = arr;

  const bilangan = [
    { value: ribuan, label: "Ribu" },
    { value: ratusan, label: "Ratus" },
    { value: puluhan, label: "Puluh" },
    { value: satuan, label: "" },
  ];

  bilangan.forEach((unit) => {
    if (unit.value > 0) {
      res.push(angka[unit.value] + (unit.label ? " " + unit.label : ""));
    }
  });

  console.log(res.join(" "));
};

convertRupiah(4566);
