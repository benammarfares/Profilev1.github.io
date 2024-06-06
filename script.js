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



