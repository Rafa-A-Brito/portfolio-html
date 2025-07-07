// Carousel Images
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let idx = 0;

function carousel() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }

  const carouselWidth = imgs.parentElement.offsetWidth;
  imgs.style.transform = `translateX(${-idx * carouselWidth}px)`;
}

// Start the carousel
setInterval(carousel, 5500);

// Responsive actions

function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Forms Contact
var cellphone = document.getElementById("phone");

cellphone.addEventListener("input", () => {
  var cleanSpace = cellphone.value.replace(/\D/g, "").substring(0, 11);

  var numberArray = cleanSpace.split("");

  var formatedNumber = "";

  if (numberArray.length > 0) {
    formatedNumber += `(${numberArray.slice(0, 2).join("")})`;
  }

  if (numberArray.length > 2) {
    formatedNumber += `${numberArray.slice(2, 7).join("")}`;
  }

  if (numberArray.length > 7) {
    formatedNumber += `-${numberArray.slice(7, 11).join("")}`;
  }

  cellphone.value = formatedNumber;
});
