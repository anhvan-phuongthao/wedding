// AOS
AOS.init({
  duration: 1000,
  once: true
});
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
//music button
// ELEMENTS
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-percent");
const openBtn = document.getElementById("open-card");

const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// ===== PROGRESS AUTO 0 → 100 =====
let value = 0;
const duration = 3000; // 3 giây
const stepTime = 30;
const step = 100 / (duration / stepTime);

const progressTimer = setInterval(() => {
    value += step;
    if (value >= 100) {
        value = 100;
        clearInterval(progressTimer);
        progressText.innerText = "Hoàn tất 🎉";
        openBtn.style.display = "inline-block";
    } else {
        progressText.innerText = Math.floor(value) + "%";
    }
    progressBar.style.width = value + "%";
}, stepTime);

// ===== MỞ THIỆP =====
let isPlaying = false;

openBtn.addEventListener("click", () => {
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
        musicBtn.style.display = "block";
    }, 500);

    music.play(); // KHÔNG bị chặn
    isPlaying = true;
    musicBtn.innerText = "⏸";
});

// ===== PAUSE / PLAY =====
musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "▶";
    } else {
        music.play();
        musicBtn.innerText = "⏸";
    }
    isPlaying = !isPlaying;
});
//
// hearts animation
const heartsContainer = document.getElementById('hearts-container');
const heartTypes = [ '💗', '💖', '💕', '💞'];

function createHearts(batch = 3) {
  for (let i = 0; i < batch; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = 14 + Math.random() * 20 + 'px';
    heart.style.animationDuration = 10 + Math.random() * 4 + 's';
    heart.style.opacity = 0.6 + Math.random() * 0.4;

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
  }
}

// 🌸 tăng batch = rơi nhiều hơn
setInterval(() => createHearts(2), 400);
