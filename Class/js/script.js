const accounts = [];
function handleRegis() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeat-password").value;

  const user = {
    email: email,
    password: password,
  };

  const errorMessage = {
    emailMSG: "",
    passwordMSG: "",
    repeatPasswordMSG: "",
  };

  const validateEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!email.match(validateEmail)) {
    errorMessage.emailMSG = "khong hop";
    alert("khong hop");
  }
  if (password != repeatPassword) {
    errorMessage.passwordMSG = "khong khop";
    alert("vui long nhap lai mat khau");
  }
  accounts.push(user);
  console.log(accounts);
}
