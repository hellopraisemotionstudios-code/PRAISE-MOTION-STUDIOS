
// PRAISE MOTION STUDIOS — Website animations

// 1. Create glowing background particles
const particleContainer = document.getElementById("particles");

if (particleContainer) {
  for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = (5 + Math.random() * 10) + "s";
    particle.style.animationDelay = (Math.random() * 5) + "s";

    particleContainer.appendChild(particle);
  }
}

// 2. Make the hero headline words change
const changingWord = document.querySelector(".changing-word");

const words = [
  "UNSEEN.",
  "UNDISCOVERED.",
  "UNFORGOTTEN.",
  "UNCELEBRATED.",
  "UNSTOPPABLE."
];

let wordIndex = 0;

if (changingWord) {
  setInterval(() => {
    changingWord.style.opacity = "0";

    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      changingWord.textContent = words[wordIndex];
      changingWord.style.opacity = "1";
    }, 400);
  }, 2500);
}

// 3. Reveal sections as visitors scroll
const revealElements = document.querySelectorAll(
  ".about, .genre-card, .service-card, .price-card, .contact"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}
