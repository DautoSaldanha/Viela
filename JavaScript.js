// Seleciona elementos HTML
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".carousel-item");
const progressBar = document.querySelector(".progress-bar");
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");

// Inicia as variáveis do carrossel
let currentSlide = 0;
let slideInterval = null;
let progressInterval = null;

// Função para avançar para o próximo slide
function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  updateProgressBar();
}

// Função para pausar o carrossel
function pauseCarousel() {
  clearInterval(slideInterval);
  clearInterval(progressInterval);
  slideInterval = null;
  progressInterval = null;
  pauseBtn.textContent = "Continuar";
}

// Função para parar o carrossel
function stopCarousel() {
  clearInterval(slideInterval);
  clearInterval(progressInterval);
  slideInterval = null;
  progressInterval = null;
  currentSlide = 0;
  slides[currentSlide].classList.add("active");
  updateProgressBar();
  pauseBtn.textContent = "Pausar";
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
  const progress = progressBar.querySelector(".progress");
  progress.style.width = `${(currentSlide + 1) / slides.length * 100}%`;
}

// Função para iniciar o carrossel
function startCarousel() {
  slideInterval = setInterval(nextSlide, 3000);
  progressInterval = setInterval(updateProgressBar, 30);
  pauseBtn.addEventListener("click", function() {
    if (slideInterval) {
      pauseCarousel();
    } else {
      slideInterval = setInterval(nextSlide, 3000);
      progressInterval = setInterval(updateProgressBar, 30);
      pauseBtn.textContent = "Pausar";
    }
  });
  stopBtn.addEventListener("click", stopCarousel);
}

// Inicia o carrossel
startCarousel();
