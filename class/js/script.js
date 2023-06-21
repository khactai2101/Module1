// kiem tra 1 so co phai la so nguyen to hay k

function bai_1() {
  // b1: lấy được dữ liệu
  const inputValue = document.querySelector("#input-1").value;
  //   b2: xử lý dữ liệu để có thể lấy được từng số
  // split lấy dữ liệu từ string thành mảng
  const convertArray = inputValue.split(",");
  console.log(convertArray);

  let result = "";
  //   bước 3: dùng vòng lặp for để kiếm tra và lưu kết quả

  for (let i = 0; i < convertArray.length; i++) {
    const checkIsPrime = isPrime(convertArray[i]);
    if (checkIsPrime) {
      // số nguyên tố sẽ được thêm vào kết quả
      result += convertArray[i] + " ";
    }
  }
  const resultElement = document.querySelector("#result_1");
  resultElement.innerHTML = "Cac so nguyen to la: " + result;
}

function isPrime(number) {
  //   let isPrime = true;

  // kiem tra co phai la so hay k
  if (isNaN(number)) {
    return false;
  }
  if (number < 2) {
    // isPrime = false
    return false; // -> các số bé hơn 2 không phải số  nguyên tố
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      // isPrime = false
      return false;
    }
  }
  //   return isPrime
  return true; // --> có ước --> không phải số nguyên tố
}
// -------------------------

// const foot = [];
// function footToMeter() {
//   const inputValue = document.querySelector("#input-2").value;

//   foot.push(inputValue);
//   // hiển thị giá trị nhập vào

//   // hiển thị kết quả đã được tính
//   let result = inputValue * 0.305;
//   const resultElement = document.querySelector("#result_meter");
//   resultElement.innerHTML = "Foot to meter is: " + result;
// }
// function meterToFoot() {
//   const inputValue = document.querySelector("#input-2").value;

//   let result = inputValue * 3.279;
//   const resultElement = document.querySelector("#result_foot");
//   resultElement.innerHTML = "Meter to foot is: " + result;
// }
// ===============================================

function draw() {
  const inputValue = document.querySelector("#input-3").value;
  circle(inputValue);
  square(inputValue);
  rectangle(inputValue);
}
function circle(inputValue) {
  document.getElementById("circle").style.width = inputValue + "px";
  document.getElementById("circle").style.height = inputValue + "px";
  document.getElementById("circle").style.borderRadius = "50%";
  document.getElementById("circle").style.border = "1px solid black";
  document.getElementById("circle").style.background = "black";
}
function square(inputValue) {
  document.getElementById("square").style.width = inputValue + "px";
  document.getElementById("square").style.height = inputValue + "px";
  document.getElementById("square").style.border = "1px solid black";
  document.getElementById("square").style.background = "green";
}
function rectangle(inputValue) {
  document.getElementById("rectangle").style.width = inputValue * 2 + "px";
  document.getElementById("rectangle").style.height = inputValue + "px";
  document.getElementById("rectangle").style.border = "1px solid black";
  document.getElementById("rectangle").style.background = "red";
}
