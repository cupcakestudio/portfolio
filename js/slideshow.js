window.addEventListener("DOMContentLoaded", start);

function start() {
  slideShow();
}
//from https://www.itgeared.com/create-simple-slideshow-javascript/

var qoutes = [
  "Curious, structured and resultoriented",
  "Hardworking and organised ",
  "Sweet, smart and welcoming",
  "Responsible, cooperative and nice",
  "Funny, witty and diligient",
  "Persistent, thoughtful and friendly",
];
var qoutesFrom = [
  "Jonas Madvig, fellow multimediadesigner",
  "Frederik Larsen, fellow multimediadesigner",
  "Alberte Jasmin Nielsen, fellow multimediadesigner",
  "Sofia Holm Poulsen, Game and Interaktiondesigner",
  "Tobias Roland Uyet, fellow multimediadesigner",
  "Thomas Hoffmann Kilbak, Software Developer",
];
var curIndex = 0;
var Duration = 5000;

function slideShow() {
  console.log("turning");
  document.getElementById("qoute").textContent = ` " ${qoutes[curIndex]} " `;

  document.getElementById(
    "qoutedFrom"
  ).textContent = `- ${qoutesFrom[curIndex]}`;
  curIndex++;
  if (curIndex === qoutes.length || curIndex === qoutesFrom) {
    console.log(qoutes.length);
    curIndex = 0;
  }
  setTimeout("slideShow()", Duration);
}
