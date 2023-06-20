// khai báo một mảng (array)
// cach 1:

const cars = ["BMW", "Toyota", "Honda", "Vinfast"];

// Lấy giá trị phần tử đầu tiên trong mảng

const cars_1 = cars[0];
console.log("cars", cars_1);

// Cách 2:
const students = new Array(
  "Minh",
  "Hạnh",
  "Thắng",
  "Huyền",
  "Hùng",
  "Nương",
  "Tú",
  "Tài"
);
console.log("students", students);

// kiểm tra độ dài của mảng
const lengthStudents = students.length;
console.log("Độ dài của mảng là", lengthStudents);

// mảng rỗng
const a = [];
// falsy --> null, undefinded, NaN, false, " ", 0

// gán - thay thế 1 phần tử trong mảng

cars[0] = "Mazda";
console.log("thay doi", cars);

// Tạo 1 mảng có chiều dài 10
const numbers = new Array(10);
console.log(11111, numbers);

// in 1 mảng gồm 100 số
const numbers_100 = [];
for (let i = 0; i < 100; i++) {
  numbers_100[i] = i + 1; // gán phần tử thứ i trong mảng bằng 1 giá trị mới
}
console.log("kiem tra 1 so", numbers_100);

// Làm việc với for in --> lấy được chỉ số của mảng-- --> phù hợp trong Object

for (let index in students) {
  console.log("Học viên thử", index, " có tên là", students[index]);
}

// Làm việc với for of --> lấy được chỉ số của mảng-- --> phù hợp trong Array

for (const student of students) {
  console.log("Kiểm tra học viên", student);
}

//  Các phương thức trong mảng
//  CRUD --> Create, Read, Update, Delete

/**
 * @create push() , unshift()
 * @read for, for in, for of, array[i]
 * @update splice(), array[i] = value
 * @delete pop(), shift(), splice()
 */

// Phương thức nối mảng --> concat()
const number_A = [1, 2, 3];
const number_B = [4, 6];
const number_C = number_A.concat(number_B);
console.log("kiem tra number", number_C);

// create
const leghtCars = cars.push("Ford");
const leghtCars2 = cars.unshift("Lexus");
console.log("sau khi push", cars, leghtCars);

// làm quen với mảng đa chiều --> hai chiều

const location_1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(location_1[2][1]);
console.log("kiểm tra mảng 2 chiều", location_1);

console.log("kiem tra", location_1.length);

//
const row = 5;
const col = 8;
const array_row = new Array(row);

for (let m = 0; m < array_row.length; m++) {
  const array_col = new Array(col);
  array_row[m] = array_col;
  for (let n = 0; n < array_col.length; n++) {
    const number = parseInt(Math.random() * 100);
    array_row[m][n] = number;
  }
}
console.log("kiem tra mang 2 chieu so ngau nhien", array_row);

const array_2 = [];
for (let m = 0; m < row; m++) {
  const array_col = new Array(col);
  array_row[m] = [];
  for (let n = 0; n < col; n++) {
    const number = parseInt(Math.random() * 100);
    array_row[m][n] = number;
  }
}
console.log("Mang 2 chieu 2", array_2);

// ----------- nối chuỗi

//cách 1: sử dụng toString()
myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
console.log(myColor.toString());

//Cách 2: sử dụng join()
myColor2 = ["Lion", "Tiger", "Wolf", "Kangaroo"];
console.log(myColor2.join());

//cách 3 sử dụng for
let string = "";
myColor3 = ["Lion", "Tiger", "Wolf", "Kangaroo"];
for (let i = 0; i < myColor3.length; i++) {
  string += myColor3[i];
}
console.log(string);
