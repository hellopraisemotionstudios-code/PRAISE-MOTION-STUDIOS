
document.addEventListener("DOMContentLoaded", () => {

  // AUTOMATIC GENRE DISPLAY
  const genres = [
    "Fantasy",
    "Romance",
    "Dark Romance",
    "Mystery",
    "Psychological Thriller",
    "Horror",
    "Science Fiction",
    "Historical Fiction",
    "Adventure",
    "Crime",
    "Suspense",
    "Paranormal",
    "Dystopian Fiction",
    "Young Adult",
    "Children's Fiction",
    "Contemporary Fiction",
    "Literary Fiction",
    "Women's Fiction",
    "Graphic Novels",
    "Biography",
    "Memoir",
    "True Crime",
    "History",
    "Self-Help",
    "Business",
    "Psychology",
    "Spirituality",
    "Poetry",
    "Cookbooks",
    "Travel",
    "Education",
    "Inspirational"
  ];

  const genreWord = document.getElementById("genreWord");
  const genreNumber = document.getElementById("genreNumber");
  const genreProgress = document.getElementById("genreProgress");

  let currentGenre = 0;

  function displayGenre(index) {
    if (!genreWord) return;

    genreWord.classList.add("leaving");

    window.setTimeout(() => {
      genreWord.textContent = genres[index];

      if (genreNumber) {
        genreNumber.textContent =
          String(index + 1).padStart(2, "0") +
          " / " +
          String(genres.length).padStart(2, "0");
      }

      if (genreProgress) {
        genreProgress.style.width =
          ((index + 1) / genres.length * 100) + "%";
      }

      genreWord.classList.remove("leaving");
    }, 400);
  }

  displayGenre(0);

  const reducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducedMotion && genreWord) {
    window.setInterval(() => {
      currentGenre = (currentGenre + 1) % genres.length;
      displayGenre(currentGenre);
    }, 3000);
  }


  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  // GENTLE SCROLL REVEAL
  document.body.classList.add("js-ready");

  const revealTargets = document.querySelectorAll(
    ".about-heading, .about-copy, .genre-intro, .genre-display, .services-heading, .service-item, .process-grid article, .price-item, .contact-content"
  );

  revealTargets.forEach(element => {
    element.classList.add("reveal-on-scroll");
  });

  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(element => observer.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add("visible"));
  }


  // AUTOMATIC COPYRIGHT YEAR
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
