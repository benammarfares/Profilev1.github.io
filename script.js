const imageSlider1 = document.querySelector('.image-slider1');
const imageSlider2 = document.querySelector('.image-slider2');
const imageSlider3 = document.querySelector('.image-slider3');

const imageNames1 = ['d1', 'd2', 'd3', 'd4', 'd5'];
const imageNames2 = ['W1', 'W2', 'W3', 'W4', 'W5'];
const imageNames3 = ['M1', 'M2', 'M3', 'M4', 'M5','M6','M7','M8','M9','M10'];

let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

function displayNextImage1() {

  const oldImages1 = imageSlider1.querySelectorAll('img');
  if (oldImages1.length > 0) {
    oldImages1[0].classList.add('fade-out');
    setTimeout(() => {
      oldImages1[0].remove();
    }, 0);
  }

  const img1 = document.createElement('img');
  img1.src = `./assets/${imageNames1[currentIndex1]}.png`;
  img1.alt = `Project ${currentIndex1 + 1}`;
  img1.classList.add('project-img');
  imageSlider1.appendChild(img1);

  currentIndex1 = (currentIndex1 + 1) % imageNames1.length;

  setTimeout(displayNextImage1, 4000);
}

function displayNextImage2() {
  const oldImages2 = imageSlider2.querySelectorAll('img');
  if (oldImages2.length > 0) {
    oldImages2[0].classList.add('fade-out');
    setTimeout(() => {
      oldImages2[0].remove();
    }, 0);
  }

  const img2 = document.createElement('img');
  img2.src = `./assets/${imageNames2[currentIndex2]}.png`;
  img2.alt = `Project ${currentIndex2 + 1}`;
  img2.classList.add('project-img');
  imageSlider2.appendChild(img2);

  currentIndex2 = (currentIndex2 + 1) % imageNames2.length;

  setTimeout(displayNextImage2, 4000); 
}



function displayNextImage3() {
  const oldImages3 = imageSlider3.querySelectorAll('img');
  if (oldImages3.length > 0) {
    oldImages3[0].classList.add('fade-out');
    setTimeout(() => {
      oldImages3[0].remove();
    }, 0);
  }

  const img3 = document.createElement('img');
  img3.src = `./assets/${imageNames3[currentIndex3]}.png`;
  img3.alt = `Project ${currentIndex3 + 1}`;
  img3.classList.add('project-img');
  imageSlider3.appendChild(img3);

  currentIndex3 = (currentIndex3 + 1) % imageNames3.length;

  setTimeout(displayNextImage3, 4000); 
}

displayNextImage1();
displayNextImage2();  
displayNextImage3();


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade");

  setTimeout(function() {
    slides[slideIndex - 1].classList.remove("fade");
  }, 1000); // Fade transition lasts 1 second

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


const slides2 = document.getElementsByClassName("mySlides2");
let slideIndex2 = 0;

function showSlides2() {
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }

  slides2[slideIndex2 - 1].style.display = "block";
  slides2[slideIndex2 - 1].classList.add("fade");

  setTimeout(function() {
    slides2[slideIndex2 - 1].classList.remove("fade");
  }, 1000); // Fade transition lasts 1 second

  setTimeout(showSlides2, 3000); // Change image every 3 seconds
}

showSlides();
showSlides2();



