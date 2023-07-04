const data = [
  { mark: 7, content: "This is feedback item 2 comasding" },
  { mark: 8, content: "This is feedback item 2 comasding" },
  { mark: 9, content: "This is feedback item 2 coddddddddddming" },
  { mark: 6, content: "This is feedback item 2 cdddddoming" },
];
renderFeedback(data);
function renderFeedback(data) {
  const cardBottom = document.querySelector(".card-bottom");
  let valueFeedback = "";
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);
    valueFeedback += `
    
    <div class="feedback">
    <div class="icon">
      <i class="bx bxs-edit-alt"></i>
      <i class="bx bx-message-alt-x"></i>
    </div>
    <p>${element.content}</p>
    <div class="mark-notify">
      <p id="mark-item">${element.mark}</p>
    </div>
  </div>
  `;
  }
  cardBottom.innerHTML = valueFeedback;
}
