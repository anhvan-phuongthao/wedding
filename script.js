// AOS
AOS.init({
  duration: 1000,
  once: true
});

// PRELOADER
window.onload = () => {
  document.getElementById('preloader').style.display = 'none';
};

// MUSIC
let isPlaying = false;
const music = document.getElementById('bgMusic');

function toggleMusic() {
  if (!isPlaying) {
    music.play();
  } else {
    music.pause();
  }
  isPlaying = !isPlaying;
}
//countdown
const weddingDate = new Date("2026-01-22T09:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);
//anh   footer
const images = document.querySelectorAll(".love-img");
const lightbox = document.getElementById("albumLightbox");
const lbImg = document.querySelector(".lb-image");
const closeBtn = document.querySelector(".lb-close");
const nextBtn = document.querySelector(".lb-next");
const prevBtn = document.querySelector(".lb-prev");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lbImg.src = images[index].src;
  lightbox.classList.add("active");
}

images.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

closeBtn.onclick = () => lightbox.classList.remove("active");

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  lbImg.src = images[currentIndex].src;
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lbImg.src = images[currentIndex].src;
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") lightbox.classList.remove("active");
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});
