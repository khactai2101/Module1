const products = ["LG", "Sony", "Samsung"];

renderProduct();

function handleAdd() {
  // B1: Xác định giá trị cần add
  const inputElement = document.querySelector("#input-add");

  // B2: Thêm vào products

  products.push(inputElement.value);

  //   B3: Xóa value input
  inputElement.value = "";
  // B4: Render lại
  renderProduct();
}

function handleDelete(index) {
  // Xóa phần thử thứ index
  products.splice(index, 1);
  // render lại
  renderProduct();
}

function renderProduct() {
  // B1: Xác định element
  const table = document.querySelector("table");

  // B2: Tạo content chứa thông tin sp theo html
  let tableContent = `<tr>
  <th>Product</th>
  <th>${products.length} products</th>
</tr>`;

  // B3: Lặp qua từng sp --> hiển thị nội dung theo html

  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    tableContent += `<tr>
        <td>${element}</td>
        <td><button onclick="handleEdit('${element}')">Edit</button>
         <button onclick="handleDelete(${i})">Delete</button></td>
      </tr>`;
  }

  //   B4: gán lại element
  table.innerHTML = tableContent;
}
// edit value

function handleEdit(pro) {
  // trỏ vào chỗ cần view dữ liệu ra
  const inputElement = document.querySelector("#input-update");

  // view dữ liệu ra input đã được trỏ
  inputElement.value = pro;

  // trỏ tới nút button
  const setBtn = document.querySelector("#btn-update");

  const inputUpdate = document.querySelector(".form-update");
  inputUpdate.style.display = "block";

  //set thuoc tinh onclick cho nut button
  setBtn.setAttribute("onclick", `handleUpdate('${pro}')`);
}
function handleUpdate(pro) {
  // lấy được dữ liệu người dùng vừa edit
  const inputElement = document.querySelector("#input-update").value;

  const index = products.indexOf(pro);
  console.log("vị trí của sản phẩm", index);

  // products[index] vi tri của sản phẩm trong mảng

  products[index] = inputElement;

  // xóa dữ liệu sau khi bấm
  const hollow = document.querySelector("#input-update");
  hollow.value = "";

  //  truyen lại mảng , hiển thị ra màn hình, cập nhật mảng mới
  renderProduct(products);
}

// function search san pham
// function handleSearch() {
//   // lấy được value khi người nhập vào
//   const searchValue = document.querySelector("#input-search").value;

//   const productSearch = [];
//   // so sánh kết quả
//   for (const element of products) {
//     if (element.toLowerCase().includes(searchValue.toLowerCase())) {
//       productSearch.push(element);
//     }
//   }
//   renderProduct(productSearch);
// }
