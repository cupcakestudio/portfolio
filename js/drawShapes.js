export function drawShapesJS() {
  for (let i = 0; i < 5; i++) {
    //more row array
    for (let j = 0; j < 5; j++) {
      x = 100 + (width + gap) * i;
      y = 100 + (width + gap) * j;

      context.beginPath();
      context.rect(x, y, width, height);
      context.stroke();
      //everytime page gets refreshed, a random number of smaller squares gets drawn inside bigger squares.
      if (Math.random() > 0.5) {
        // draw another shape inside first loop / first shapes
        context.beginPath();
        context.rect(x + 8, y + 8, width - 16, height - 16);
        context.stroke();
      }
    }
  }
}
//show the loop code on button click
// const showCode = document.querySelector("#showCode");
// showCode.addEventListener("click", showPopop);
// const hideCode = document.querySelector("#ClosePopop");
// hideCode.addEventListener("click", hidePopop);

export function showPopop() {
  document.querySelector(".CodeContainerPopop").classList.remove("hide");
}
export function hidePopop() {
  document.querySelector(".CodeContainerPopop").classList.add("hide");
}
