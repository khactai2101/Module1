// Xây dựng một class đối tương hình chữ nhật

class Rectangle {
  // Hàm tạo các thuộc tính
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  //   có các phương thức với đối tượng
  // Phương thức tính diện tích
  getArea() {
    return this.width * this.height;
  }
  // Tính chu vi
  getPerimeter = () => {
    return (this.width + this.height) * 2;
  };
  setHeight = (height) => {
    this.height = height;
  };
  setWidth = (width) => {
    this.width = width;
  };

  //print console
  printer = () => {
    console.log("dien tich hinh chu nhat", this.getArea());
    console.log("chu vi hinh chu nhat", this.getPerimeter());
  };
}
function bai_01() {
  // nhap thong tin height, width từ người dùng
  const height = Number(prompt("nhap chieu cao"));
  const width = Number(prompt("nhap chieu rong"));
  const rectangle_1 = new Rectangle(width, height);
  const area_1 = rectangle_1.getArea();
  //   console.log("kiem tra hinh chu nhat", rectangle_1);

  //   khong can goi console.log
  rectangle_1.printer();

  const setHeight = Number(prompt("Nhập vào chiều cao muốn set lại"));
  rectangle_1.setHeight(setHeight); //đối số truyền vào
  rectangle_1.printer();
}
/**------------------------------------------------------------------ */
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  convertF() {
    return this.celsius * 1.8 + 32;
  }
  convertK() {
    return this.celsius + 273;
  }
  printer = () => {
    console.log("Độ C sang độ F", this.convertF());
    console.log("Độ C sang độ K", this.convertK());
  };
}
function bai_02() {
  const celsius = Number(prompt("Nhập độ C"));
  if (celsius < -273) {
    alert("Nhiêt độ phải lớn hơn -273");
    return;
  }
  const temperature = new Temperature(celsius);
  const convertF = temperature.convertF();
  const convertK = temperature.convertK();
  temperature.printer();
}

//------------------------------------------------------------

class Mouse {
  constructor(kg, speed) {
    this.kg = kg;
    this.speed = speed;
    this.alive = true;
  }
}

function bai_03(){
    const infoCat = prompt('nhap vao thong tin cua meo` lan` luot la` name, weight, speed theo thu tu va cach nhau dau ,', 'Tom,5,20')
    
}
function Cat(name, weight, speed) {
  this.name = name;
  this.weight = weight;
  this.speed = speed;
  //   Khai baos hanh vi
  this.speak = () => {
    return "meowmeow";
  };
  this.catchMouse = (mouse) => {
    // Điều kiện bắt chuột khi tốc độ mèo lớn hơn chuột
  };
  this.eatMouse = (mouse) => {
    // Điều kiện để ăn chuột
  };
}
function Mouse(name, weight, speed, status) {
  this.name = name;
  this.weight = weight;
  this.speed = speed;
  this.status = status;
  //   Khai báo hành vi
  this.speak = () => "Chit Chit";
  this.
}

// baitap1: tao doi tuong rong~
// let person = {};

// person.firstName = "Nguyễn Văn";
// person.lastName = "Bình";

// person.lastName = "Hòa";
// delete person.lastName;

// console.log(person);
// // bai tap 2: viet ham checkEmpty kiem tra doi tuong co thuoc tinh khong, co th tra ve true, nguoc lai tra ve false

// function bai_04() {
//   const obj = { name: "Tú" };
//   const isEmpty = checkEmpty(obj);
//   console.log(
//     isEmpty ? " object khong co thuoc tinh" : " object co thuoc tinh"
//   );
// }
// function checkEmpty(obj) {
//   let isEmpty = true;
//   for (const key in obj) {
//     console.log("key", key);
//   }
//   return false;
// }

// function Menu(width, height, title) {
//   this.width = width;
//   this.height = height;
//   this.title = title;
// }

// Menu. function = (){
//     if(typeof this.width === 'number' && typeof this.height === 'number'){
//         this.width = this.width *2;
//         this.height = this.height *2;
// }

// }
