// import { initLoop, loop } from "/js/typewriterJS.js";

window.addEventListener("DOMContentLoaded", start);
// window.addEventListener("onresize", startMobile);
// let deviceWidth = window.innerWidth;
// function startMobile() {
//   if (deviceWidth <= "430px") {
//     console.log("small size");
//     initLoop();
//   }
// }
function start() {
  document.querySelector(".hamburger").addEventListener("click", toggleMenu);
  //   console.log("everything loaded");
  // initLoop();

  drawShapesJS();
  document.querySelector("#moreShapes").addEventListener("click", drawShapesJS);

  //show the loop code on button click
  const showCode = document.querySelector("#showCode");
  showCode.addEventListener("click", showPopop);
  const hideCode = document.querySelector("#ClosePopop");
  hideCode.addEventListener("click", hidePopop);
  slideShow();
}
function drawShapesJS() {
  //globale var
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");

  // draw something in the canvas
  //context.fillRect(100, 100, 400, 400);
  //0,0 = top left corner, values => coordinates

  //begin outline of canvas
  // tell to start new shape
  context.lineWidth = 4;
  context.beginPath();
  context.rect(100, 100, 400, 400);
  //context.stroke();

  // DRAW A CIRCLE
  context.beginPath();
  context.arc(300, 300, 100, 0, Math.PI * 2);
  //context.stroke();

  //array
  const width = 30;
  const height = 30;
  const gap = 20;
  let x, y;

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

function showPopop() {
  document.querySelector(".CodeContainerPopop").classList.remove("hide");
}
function hidePopop() {
  document.querySelector(".CodeContainerPopop").classList.add("hide");
}
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");

const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });
}
