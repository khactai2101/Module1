if (10 > 5) {
  console.log("Chinh xac");
}
if (10 < 5) {
  console("muoi be hon 5");
}
console.log("hello world");

if (10) {
}

// falsy: " ", null, undefined, 0, NaN, false
//  nghich dao: !falsy = truethy hoac nguoc lai

/*
if long vao nhau
tim so lon nhat trong 3 so
 */

const a = 10;
const b = 20;
const c = 5;

if (a < b) {
  // max=b;
  if (b < c) {
    max = c;
    console.log("ket qua so lon nhat la", c);
  } else {
    console.log("ket qua so lon nhat la", b);
  }
} else {
  if (a < c) {
    console.log("ket qua so lon nhat la", c);
  } else {
    console.log("ket qua so lon nhat la", a);
  }
}

let max = a;

if (max < b) {
  max = b;
  if (max < c) {
    max = c;

    // neu khong thoa man dieu kien tren -> max van la b
  }
} else {
  //max van bang a
  if (max < c) {
    max = c;
  }
}
console.log("ket qua kiem tra lan 2 la", max);

// phan loai hoc sinh
// cach 1
// const mark = 8;

// if (mark >= 8) {
//   console.log("hoc sinh gioi");
// } else if (mark >= 6.5) {
//   console.log("hoc sinh kha");
// } else if (mark >= 5) {
//   console.log("hoc sinh trung binh");
// } else {
//   console.log("hoc sinh yeu");
// }

// ------------------------------------cach 2
const mark = 6;
let rank = " ";

if (mark >= 8) {
  rank = "hoc sinh gioii";
} else if (mark >= 6.5) {
  rank = "hoc sinh kha";
} else if (mark >= 5) {
  rank = "hoc sinh trung binh";
} else {
  rank = "hoc sinh yeu";
}
console.log(rank);

// cau truc switch - case

function bai_1() {
  const number = Number(prompt("Nhap tu 1 -5"));
  switch (number) {
    case 1:
      console.log("One");
      break;
    case 2:
      console.log("Two");
      break;
    case 3:
      console.log("Three");
      break;
    case 4:
      console.log("Four");
      break;
    case 5:
      console.log("Five");
      break;

    default:
      console.log("vui long nhap tu 1 den 5");
  }
}

function bai_2() {
  const weight = Number(prompt("nhap can nang cua ban"));
  const height = Number(prompt("Nhap chieu cao"));

  if (weight <= 0 || height <= 0) {
    alert("Vui long nhap so duong");
    return;
  }

  let bmi = (weight / (height * height)).toFixed(1);
  let result = "";
  let rank = "";
  if (bmi < 18.5) {
    result = "Gầy";
  } else if (bmi < 25) {
    result = "binh thuong";
  } else {
    result = "thua can";
    // phan loại cac truong hop thua can
    if (bmi < 30) {
      rank = "tien beo phi";
    } else if (bmi < 35) {
      rank = "beo phi do 1";
    } else if (bmi < 40) {
      rank = "beo phi do 2";
    } else {
      rank = "beo phi do 3";
    }
  }

  // hien thi ket qua
  const stringRank = " co cap do la" + rank;

  const resultElement = document.querySelector("#result-2");
  resultElement.innerHTML =
    "Chỉ số BMI của bạn là" +
    bmi +
    " và phân loại là" +
    result +
    (rank ? stringRank : "");
}

function bai_3() {
  const month = Number(prompt("Nhap thang vao de kiem tra (so)"));
  let dayOfMonth = "";

  //   xu ly du lieu
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dayOfMonth = "31 ngay";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayOfMonth = "30 ngay";
      break;
    case 2:
      dayOfMonth = "28 hoac 29";
      break;

    default:
      dayOfMonth = "error";
  }
  const resultElement = document.querySelector("#result-3");
  resultElement.innerHTML =
    dayOfMonth === "error"
      ? "Vui long nhap dung dinh dang"
      : "thang " + month + " co " + dayOfMonth;
}

function bai_4() {
  const edge = Number(prompt("Vui long nhap canh hinh vuong"));
  let acreage = edge * edge;

  const resultElement = document.querySelector("#result-4");
  resultElement.innerHTML = "chu vi hinh vuong la " + acreage;
}

function bai_5() {
  const chieuDai = Number(prompt("Nhap chieu dai"));
  const chieuRong = Number(prompt("Nhap chieu rong"));
  let dienTich = chieuDai * chieuRong;

  const resultElement = document.querySelector("#result-5");
  resultElement.innerHTML = "dien tich hinh chu nhat la " + dienTich;
}

function bai_6() {
  const inputElement = document.querySelector("#temp");
  console.log(1111, inputElement);
  console.log("gia tri cua input", inputElement.value);
  //   inputElement.className = "box-input";
  //name, id, className, placeholder, style la nhung thuoc tinh cua element co the lay gia tri va thay doi

  //   lay gia tri input
  const tempValue = inputElement.value;
  const F = tempValue * 1.8 + 32;

  const resultElement = document.querySelector("#result-6");
  resultElement.innerHTML =
    "Nhiet do da chuyen doi: " + tempValue + " do C bang " + F + "do F";
}
function bai_7() {
  // input: VND, gia thanh chuyen doi
  // output: usd -> DOM input de hien thi

  const usdValue = document.querySelector("#usd").value;
  const vnd = usdValue * 23000;
  //hien thi gia tri qua input
  const vndElement = document.querySelector("#vnd");
  vndElement.value = vnd.toLocaleString() + "VND";
}
//vong lap for
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " so chan");
//   } else {
//     console.log(i + " so le");
//   }
// }

const number = Number(prompt("nhap so de tinh tong"));
let sum = 0;

for (let i = 0; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
