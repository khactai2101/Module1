function bai_1() {
  const animals = ["Lion", "Tiger", "Wolf", "Kangaroo"];

  // cách 1
  let result = "";
  for (let i = 0; i < animals.length; i++) {
    if (i == animals.length - 1) {
      result += animals[i];
    } else {
      result += animals[i] + ",";
    }
  }
  console.log(result);

  //   // cachs 2: toString()
  //   let result_2 = animals.toString();
  //   console.log(result_2);

  //   //cach 3: join()
  //   let result_3 = animals.join();
  //   console.log(result_3);
}
function bai_2() {
  const number = prompt("nhap vao");
  let result = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0 && number[i + 1] % 2 == 0) {
      result += number[i] + "-";
    } else {
      result += number[i];
    }
  }
  console.log(result);
}
//cách 2
// const numStr = prompt("Nhap vo ");
// let arr = numStr.split(""); // CHUYỂN ĐỔI CHUỖI THÀNH MẢNG KÝ TỰ
// console.log(arr);
// let result = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
//     result += arr[i] + "-";
//   } else {
//     result += arr[i];
//   }
// }
// console.log(result);
// }

function bai_3() {
  const words = prompt("Nhap vao");
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (i = 0; i < words.length; i++) {
    // gắn cờ để xác định chữ có in hoa hay không
    let isUpper = false;

    for (k = 0; k < UPPER.length; k++) {
      if (words[i] === UPPER[k]) {
        result += words[i].toLowerCase();
        // isUpper này dùng để xác định được là đã lọc xong ký tự đầu rồi tiếp tục lọc ký tự tiếp theo nếu chưa tìm thấy
        isUpper = true;
        break;
      }
    }
    // kiem tra neu chua in hoa thi in hoa
    if (!isUpper) {
      result += words[i].toUpperCase();
    }
  }
  //   hiển thị kết quả
  const resultElement = document.querySelector("#result-3");
  resultElement.innerHTML = result;
}

function bai_4() {
  const tiengAnh = ["Apple", "Banana", "Orange"];
  const tiengViet = ["Quả táo", "Quả chuối", "Quả cam"];
  let word = document.querySelector("#word").value;
  let result = "";

  for (let i = 0; i < tiengAnh.length; i++) {
    if (word == tiengAnh[i]) {
      result = tiengViet[i];
      break;
    }
  }
  console.log(result);
}

let count = 0;
let result = "";
function bai_5(element) {
  // element la tham so do oninput truyenf vào khi gọi
  const String = " Xin chao cac ban";
  //   result += string[count];
  //   if (count == string.length) {
  //     count = 0;
  //     result = "";
  //   } else {
  //     count++;
  //   }
  //   console.log(result);
  // }
  if (count == String.length) {
    count = 0;
  } else {
    count++;
  }
  for (let i = 0; i < count; i++) {
    result += string[i];
  }
  console.log(result);
}

function bai_6() {
  const students = ["Tai", "Tu", "Minh"];
  let result = document.querySelector("#txt").value;
}
