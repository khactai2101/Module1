const imageUrl = [
  {
    id: 1,
    name: "danei",
    img: "slice.jpg",
  },
  {
    id: 1,
    name: "danei",
    img: "slice.jpg",
  },
  {
    id: 1,
    name: "danei",
    img: "slice.jpg",
  },
  {
    id: 1,
    name: "danei",
    img: "slice.jpg",
  },
];

renderAlbum(imageUrl);
function renderAlbum(data) {
  const mainElement = document.querySelector("main");
  let mainContent = "";
  data.forEach((element) => {
    mainContent += ` <div class="item">
    <img src="./img/${element.img}" alt="" />
    <h1>${element.name}</h1>
    </div>`;
  });

  mainElement.innerHTML = mainContent;
}
