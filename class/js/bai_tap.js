function bai_1() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  let sum = parseInt(a) + b;

  document.getElementById("result").innerHTML = sum;
}
