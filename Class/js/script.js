function ex_01() {
  const resultElement = document.querySelector("#result-01");
  const number = Number(prompt("Nhap so muon sinh bang cuu chuong"));
  let resultContent = "";
  for (let i = 1; i < 10; i++) {
    // resultContent += "<p>5 x " + i + " = " + 5 * i + "</p>";
    resultContent += `<p> ${number} x ${i} = ${number * i} </p>`;
  }
  resultElement.innerHTML = resultContent;
}

function ex_02() {
  const number = Number(prompt(""));
  const resultElement = document.querySelector("#result-02");
  let count = 0;
  let resultContent = "";
  while (count < number) {
    resultContent += '<hr width="' + count + '%">';
    count++;
  }
  resultElement.innerHTML = resultContent;
}

function ex_03() {
  let answer;
  do {
    answer = confirm("ban co yeu toi khong");
    console.log("answer", answer);
    if (answer) {
      alert("I love u too");
    }
  } while (answer);
}

function ex_04() {
  for (let i = 0; i < 1000; i++) {
    console.log("log lan 1", i);
    if (i === 10) {
      break;
    }
    console.log("log lan 2", i);
  }
  console.log("hello world");
}

function ex_05() {
  for (let i = 0; i < 20; i++) {
    console.log("log lan 1", i);
    if (i % 2 == 0) {
      continue;
    }
    console.log("log lan 2", i);
  }
  console.log("hello world");
}

function ex_06() {
  const resultElement = document.querySelector("#result-06");

  let resultContent = "";

  for (let row = 1; row <= 9; row++) {
    resultContent += "<tr>";

    for (let col = 1; col <= 9; col++) {
      resultContent += `<td> ${col}  x ${row} = ${row * col}   </td>`;
    }
    resultContent += "</tr>";
  }
  resultElement.innerHTML = resultContent;
}

function ex_07() {
  const number = Number(prompt("nhap so"));
}
