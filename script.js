
const genres = [
  "Fantasy",
  "Romance",
  "Dark Romance",
  "Mystery",
  "Psychological Thriller",
  "Suspense",
  "Horror",
  "Science Fiction",
  "Historical Fiction",
  "Adventure",
  "Crime",
  "Paranormal",
  "Dystopian Fiction",
  "Literary Fiction",
  "Contemporary Fiction",
  "Young Adult",
  "Children's Fiction",
  "Biography",
  "Memoir",
  "True Crime",
  "History",
  "Self-Help",
  "Business",
  "Psychology",
  "Philosophy",
  "Spirituality",
  "Education",
  "Inspirational",
  "Travel",
  "Cookbooks",
  "Health & Wellness"
];

const genreWord = document.getElementById("genre-word");

let genreIndex = 0;

if (genreWord) {
  setInterval(() => {
    genreWord.classList.add("changing");

    setTimeout(() => {
      genreIndex = (genreIndex + 1) % genres.length;
      genreWord.textContent = genres[genreIndex];
      genreWord.classList.remove("changing");
    }, 450);

  }, 2200);
}

// Smooth reveal as sections enter the screen
const revealElements = document.querySelectorAll(
  ".intro-content, .service-item, .featured-frame, .process-grid article, .price-card, .difference-copy"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});
