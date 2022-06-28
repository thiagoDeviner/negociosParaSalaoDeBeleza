// swiper slider home atualizado

var swiper = new Swiper(".mySwiper", {
  
  autoplay: {
    delay: 8000,
  },

  loop: true,

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
    

/* efeitos na navegação e rolagem do site */

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// efeitos da barra de rolagem de navegação

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// navegacao responsiva alternar menu

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

// fim slider home

// inicio slider produtos

var swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 8000,
  },

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// fim slider produtos
