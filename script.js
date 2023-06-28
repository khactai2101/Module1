function bai_01() {
  class Car {
    constructor(name, speed, weight, isRun, color) {
      this.name = name;
      this.speed = speed;
      this.weight = weight;
      this.isRun = false;
      this.color = color;
    }
    // Xây dựng các phương thức
    start() {
      this.isRun = true;
    }
    stop() {
      this.isRun = false;
    }
    getColor = () => this.color;
    getSpeed = () => this.speed;

    //ngoặc tròn bọc lại sẽ k cần return
    getInfor = () => ({
      name: this.name,
      speed: this.speed,
      weight: this.weight,
      color: this.color,
    });
    setColor = (color) => {
      this.color = color;
    };
  }
  const car_1 = new Car("Mercedes", "300km/h", 2000, "black");
  console.log("kiem tra thognn tin xe", car_1.getInfor());
}
// Kiểm tra một số đối tượng, phương thức có sẵn trong JS
// Array(), Object(), String(), Date()

// const today = new Date();
// console.log("kiem tra today", today);

// // Phương thức lấy ngày
// const day = today.getDate();
// // phuong thuc lay thang
// // tinh tu thang 0->11
// const month = today.getMonth();
// // phuong thuc lay nam
// const year = today.getFullYear();

// lay duoc gio`, lay duoc phut', lay dc giay tuong ung' --> getHour(), getminus(), getSecond()
// MuỐn lấy ngày tháng năm
// const fomartToday = today.toLocaleDateString();
// const time = today.toLocaleTimeString();
// console.log("ngay hom nay la", day);
// console.log("thang nay la", month);
// console.log("nam nay la", year);
// console.log("ngay thang nam", fomartToday);
// console.log("bay gio la", time);

// // Một số phương thức khác
// Math.random(); //kết quả số thập phân từ 0 -> bé hơn 1
// Math.sqrt(number); // căn bậc 2
// Math.floor(number); //Làm tròn xuống --> ParseInt()
// Math.round(number); //làm tròn thông thường
// Math.pow(); // Số mũ

class Human {
  constructor(name, weight, gender) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;
  }
  eat(fruit) {
    if (fruit.size > 0) {
      return (this.weight += 1);
    } else return this.weight;
  }
  speake() {}
  listen() {}
  sleep() {}
}
const human_1 = new Human("adam", 50, "nam");
const human_2 = new Human("eva", 80, "nu");

class Fruit {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  getSize() {}
  decrease() {
    if (this.size > 0) {
      return (this.size -= 1);
    } else return this.size;
  }
}
const fruit_1 = new Fruit("Apple", 10);

const fruit_2 = new Fruit("Banana", 20);

function bai_02() {
  console.log("can nang sau khi an", human_2.eat(fruit_2));
  console.log("can nang cua fruit sau khi an", fruit_2.decrease());
}

function bai_03() {
  class Person {
    constructor(name, age, address, phoneNumber) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.phoneNumber = phoneNumber;
    }
  }
  const person_1 = new Person("Tai", 18, "Da Nang", "089343489");
  console.log(person_1);
}
//-------------------------------------
const students = [];
function bai_04() {
  // Viết chương trình tạo đối tượng student có cặp key và value tương ứng

  class Students {
    constructor(id, name, gender, age, mark) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.mark = mark;
    }
  }
}

function bai_05() {
  const student = {
    id: "1",
    name: "Nguyen Van A",
    gender: "name",
    age: 20,
    mark: 8,
  };
  const newStudent = new Students();
  newStudent.id = prompt("nhap id");
  newStudent.name = prompt("nhap ten");
  newStudent.gender = prompt("nhap gioi tinh");
  newStudent.age = prompt("nhap tuoi");
  newStudent.mark = prompt("nhap diem");

  students.push(student, newStudent);
  console.log(students);
  // ------

  finMarkMax(students);
  function finMarkMax(data) {
    let studentMarkMax = [];
    let markMax = 0;
    // Lặp ra từng data để tìm sv có điểm lớn nhất
    for (let i = 0; i < data.length; i++) {
      if (data[i].mark > markMax) {
        markMax = data[i].mark;
      }
    }
    console.log(student);
  }
}

class Students {
  constructor(id, name, gender, age, mark) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.mark = mark;
    this.rank = "";
  }
}
