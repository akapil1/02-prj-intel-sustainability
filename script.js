const cards = document.querySelectorAll(".flip-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

const timeline = document.querySelector(".timeline");
const dots = document.querySelectorAll(".dot");

timeline.addEventListener("scroll", () => {
  const scrollLeft = timeline.scrollLeft;
  const maxScroll = timeline.scrollWidth - timeline.clientWidth;

  const progress = scrollLeft / maxScroll;

  const activeIndex = Math.min(
    dots.length - 1,
    Math.floor(progress * dots.length)
  );

  dots.forEach(dot => dot.classList.remove("active"));
  dots[activeIndex].classList.add("active");
});
