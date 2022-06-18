
let slide_1 = document.getElementById("slide-1");
let slide_2 = document.getElementById("slide-2");
slide_1.addEventListener("click", slider);
slide_2.addEventListener("click", sliderTwo);

let slide_img = [
  "/img-1/slider1.png",
  "/img-1/slider2.png",
  "/img-1/slider3.png",
  "/img-1/slider4.png",
];

let img = document.getElementById("productSlide");
let count = 0;
function slider() {
  if (count === 0) {
    count = slide_img.length - 1;
  } else {
    count--;
  }
  img.src = slide_img[count];
}
function sliderTwo() {
  if (count == slide_img.length - 1) {
    count = 0;
  } else {
    count++;
  }
  img.src = slide_img[count];
}
