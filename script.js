// SCROLL REVEAL for .reveal elements
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// STAGGERED REVEAL for .service-card elements
const serviceCards = document.querySelectorAll(".service-card");

function showServiceCards() {
  serviceCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 120);
  });
}

window.addEventListener("load", showServiceCards);
