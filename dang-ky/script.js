const accounts = [];
// Cachs xu ly register bang for
function handleRegister() {
  // b1: lấy dữ liệu từ form
  const user = getDataForm();
  //  Kiểm duyệt dữ liệu --> validate
  if (user.password !== user.repeatPassword) {
    alert("Password phải trùng nhau");
    return;
  }

  //   b2: Kiểm tra rằng - email có tồn tại trong mảng dữ liệu hay không (database)
  // Dùng vòng lặp lặp qua từng phần tử để so sánh --> for, for of, forEach, find()

  let isExist = false;
  for (let i = 0; i < accounts.length; i++) {
    if (user.email === accounts[i].email) {
      isExist = true;
      break; //rut ngan lan lap
    }
  }

  //555555555555

  // Nếu trùng lặp email -> thông báo email đã tồn tại --> yêu cầu đăng nhập hoặc đăng ký email mới
  // Nếu email không tồn tại --> push vào mảng accounts --> điều hướng sang đăng nhập
  if (isExist) {
    alert("Email đã tồn tại, vui lòng nhập lại hoặc đăng nhập");
  } else {
    // Delete key không cần thiết --> repeat password
    delete user.repeatPassword;
    accounts.push(user);
    alert("Đăng ký thành công");
  }
  console.log(accounts);
}

// cach xu ly register bang forEach
function handleRegister2() {
  // b1: lấy dữ liệu từ form
  const user = getDataForm();
  //  Kiểm duyệt dữ liệu --> validate
  if (user.password !== user.repeatPassword) {
    alert("Password phải trùng nhau");
    return;
  }

  //   b2: Kiểm tra rằng - email có tồn tại trong mảng dữ liệu hay không (database)
  // Dùng vòng lặp lặp qua từng phần tử để so sánh --> for, for of, forEach, find()

  let isExist = false;
  accounts.forEach((item) => {
    if (item.email === user.email) {
      isExist = true;
    }
  });

  //555555555555

  // Nếu trùng lặp email -> thông báo email đã tồn tại --> yêu cầu đăng nhập hoặc đăng ký email mới
  // Nếu email không tồn tại --> push vào mảng accounts --> điều hướng sang đăng nhập
  if (isExist) {
    alert("Email đã tồn tại, vui lòng nhập lại hoặc đăng nhập");
  } else {
    // Delete key không cần thiết --> repeat password
    delete user.repeatPassword;
    accounts.push(user);
    alert("Đăng ký thành công");
  }
}

// cach xu ly register bang find()
function handleRegister3() {
  // b1: lấy dữ liệu từ form
  const user = getDataForm();
  //  Kiểm duyệt dữ liệu --> validate
  if (user.password !== user.repeatPassword) {
    alert("Password phải trùng nhau");
    return;
  }

  //   b2: Kiểm tra rằng - email có tồn tại trong mảng dữ liệu hay không (database)
  // Dùng vòng lặp lặp qua từng phần tử để so sánh --> for, for of, forEach, find()

  const userExist = accounts.find((item) => {
    //item.email === user.email
    if (item.email === user.email) {
      return true;
    }
  });

  //555555555555

  // Nếu trùng lặp email -> thông báo email đã tồn tại --> yêu cầu đăng nhập hoặc đăng ký email mới
  // Nếu email không tồn tại --> push vào mảng accounts --> điều hướng sang đăng nhập
  if (isExist) {
    alert("Email đã tồn tại, vui lòng nhập lại hoặc đăng nhập");
  } else {
    // Delete key không cần thiết --> repeat password
    delete user.repeatPassword;
    accounts.push(user);
    alert("Đăng ký thành công");
  }
}
// Lấy dữ liệu trong form
function getDataForm() {
  // Lấy dữ liệu từ ô input

  const emailValue = document.querySelector("#email").value;
  const userNameValue = document.querySelector("#user-name").value;
  const passwordValue = document.querySelector("#password").value;
  const repeatPasswordValue = document.querySelector("#repeat-password").value;

  return {
    email: emailValue,
    userName: userNameValue,
    password: passwordValue,
    repeatPassword: repeatPasswordValue,
  };
}
/**----------------------Login------------ */

function handleLogin() {
  const user = getDataFormLogin();
  console.log(user);

  for (let i = 0; i < accounts.length; i++) {
    if (
      user.email === accounts[i].email &&
      user.password === accounts[i].password
    ) {
      window.location.href = "https://www.google.com/";
    } else {
      alert("Email hoặc mật khẩu không đúng!!!");
    }
  }
}

function getDataFormLogin() {
  const emailValue = document.querySelector("#emailLogin").value;
  const passwordValue = document.querySelector("#passwordLogin").value;

  return {
    email: emailValue,
    password: passwordValue,
  };
}

// cach 2: có check không nhập tài khoản hoặc mật khẩu sẽ thông báo alert
function handleLogin2() {
  // b1: Lấy dữ liệu từ form
  const emailValue = document.querySelector("#emailLogin").value;
  const passwordValue = document.querySelector("#passwordLogin").value;
  //   b2: Kiểm tra account --> email và password có trùng hay không
  let isLogin = false;
  for (let i = 0; i < accounts.length; i++) {
    const user = accounts[i];
    if (user.email === emailValue && user.password === passwordValue) {
      isLogin = true;
      break;
    }
  }
  if (isLogin) {
    alert("Đăng nhập thành công");
    // điều hướng về page mong muốn // window.location = ""
  } else {
    alert("Email hoặc mật khẩu không đúng!!!");
  }
}
