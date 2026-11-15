/* =========================================
   PRAISE MOTION STUDIOS
   CINEMATIC WEBSITE ANIMATIONS
========================================= */


/* =========================================
   1. LIVE GENRE WORDS
========================================= */

const genreWord = document.getElementById("genreWord");

const genres = [
  "FANTASY",
  "DARK ROMANCE",
  "ROMANCE",
  "THRILLER",
  "MYSTERY",
  "HORROR",
  "SCI-FI",
  "HISTORICAL FICTION",
  "CRIME",
  "SUSPENSE",
  "PARANORMAL",
  "ADVENTURE",
  "DYSTOPIAN",
  "LITERARY FICTION",
  "YOUNG ADULT",
  "CHILDREN'S",
  "BIOGRAPHY",
  "MEMOIR",
  "SELF-HELP",
  "BUSINESS",
  "PSYCHOLOGY",
  "PHILOSOPHY",
  "SPIRITUALITY",
  "POETRY",
  "INSPIRATIONAL",
  "EDUCATIONAL",
  "COOKBOOKS",
  "GRAPHIC NOVELS",
  "TRUE CRIME",
  "WOMEN'S FICTION"
];

let genreIndex = 0;

function changeGenre() {

  if (!genreWord) return;

  genreWord.style.opacity = "0";
  genreWord.style.transform = "translateY(25px)";

  setTimeout(() => {

    genreIndex++;

    if (genreIndex >= genres.length) {
      genreIndex = 0;
    }

    genreWord.textContent = genres[genreIndex];

    genreWord.style.opacity = "1";
    genreWord.style.transform = "translateY(0)";

  }, 450);
}

setInterval(changeGenre, 2200);



/* =========================================
   2. LIVE HERO WORD
========================================= */

const heroWord = document.querySelector(".hero-word");

const heroWords = [
  "SEEN.",
  "FELT.",
  "REMEMBERED.",
  "DISCOVERED.",
  "UNFORGOTTEN."
];

let heroIndex = 0;

function changeHeroWord() {

  if (!heroWord) return;

  heroWord.style.opacity = "0";
  heroWord.style.transform = "translateY(15px)";

  setTimeout(() => {

    heroIndex++;

    if (heroIndex >= heroWords.length) {
      heroIndex = 0;
    }

    heroWord.textContent = heroWords[heroIndex];

    heroWord.style.opacity = "1";
    heroWord.style.transform = "translateY(0)";

  }, 350);
}

setInterval(changeHeroWord, 2800);



/* =========================================
   3. MOVING PARTICLES
========================================= */

const particleContainer = document.createElement("div");

particleContainer.className = "particle-container";

document.body.appendChild(particleContainer);


for (let i = 0; i < 45; i++) {

  const particle = document.createElement("span");

  particle.className = "particle";

  particle.style.left =
    Math.random() * 100 + "%";

  particle.style.top =
    Math.random() * 100 + "%";

  particle.style.animationDuration =
    (6 + Math.random() * 10) + "s";

  particle.style.animationDelay =
    (Math.random() * 8) + "s";

  particleContainer.appendChild(particle);
}



/* =========================================
   4. SCROLL REVEAL
========================================= */

const revealItems = document.querySelectorAll(
  ".about-section, .service, .price-card, .contact-inner"
);

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealItems.forEach((item) => {

  item.classList.add("reveal");

  revealObserver.observe(item);

});



/* =========================================
   5. MOUSE MOVEMENT
========================================= */

document.addEventListener("mousemove", (event) => {

  const x =
    (event.clientX / window.innerWidth - 0.5) * 20;

  const y =
    (event.clientY / window.innerHeight - 0.5) * 20;

  const book =
    document.querySelector(".book");

  const lights =
    document.querySelectorAll(".blue-light");

  if (book) {

    book.style.transform =
      `perspective(1000px)
       rotateY(${-20 + x * 0.25}deg)
       rotateX(${5 - y * 0.15}deg)`;

  }

  lights.forEach((light, index) => {

    const amount = index + 1;

    light.style.transform =
      `translate(${x * amount}px, ${y * amount}px)`;

  });

});



/* =========================================
   6. BUTTON MAGNETIC EFFECT
========================================= */

const buttons =
  document.querySelectorAll(
    ".button, .contact-button, .price-button"
  );

buttons.forEach((button) => {

  button.addEventListener("mousemove", (event) => {

    const rect =
      button.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.08}px, ${y * 0.08}px)`;

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translate(0, 0)";

  });

});
