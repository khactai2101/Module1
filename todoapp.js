const items = [
  "Buy flowes for girlfriend",
  "Buy movie tickets",
  "Book a table at the restaurant",
];
function renderItems() {
  const table = document.querySelector("table");
  let tableContent = "";
  for (let i = 0; i < items.length; i++) {
    tableContent += `<tr>
    <td>2</td>
    <td>${element}</td>
    <td>In progress</td>
    <td>
      <button class="btn-edit btn">Edit</button
      ><button class="btn-delete btn">Delete</button
      ><button class="btn-finished btn">Finished</button>
    </td>
  </tr>`;
  }
  table.innerHTML = tableContent;
}
