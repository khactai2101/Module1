const products = ["lg", "sony", "samsung"];

function render() {
  const tbody = document.querySelector("tbody");
  let content = "";
  for (const element of products) {
    content += `
    
        <td>${element}</td>
        <td><button class="btn-edit">Edit</button></td>
        <td><button class="btn-edit">Edit</button></td>
        <td></td>
        </tr>
        `;
  }
  tbody.innerHTML = content;
}

render();
