// hiển thị danh sách học viên
//  thông tin cần biết
// 1. Dữ liệu --> array
// 2. Hiển thị ở đâu --> id="render-student"

// const students = [
//   "Minh",
//   "Hạnh",
//   "Thắng",
//   "Huyền",
//   "Hùng",
//   "Nương",
//   "Tú",
//   "Tài",
// ]; // Có dữ liệu lưu trữ
const students = [];
function renderData() {
  const renderElement = document.querySelector("#render-student");

  let renderContent = "";

  for (let i = 0; i < students.length; i++) {
    renderContent += `<li>${students[i]}</li>`;
  }
  renderElement.innerHTML = renderContent;
}

function add_handle() {
  const txtElement = document.querySelector("#txt").value;
  txtElement.value = "";
  students.push(txtElement);
  renderData();
}
