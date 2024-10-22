const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
const totalSlides = slideImages.length;
function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
  showSlide(currentIndex + 1);
}
function prevSlide() {
  showSlide(currentIndex - 1);
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
setInterval(nextSlide, 3500); // Chuyển ảnh sau mỗi 3 giây
