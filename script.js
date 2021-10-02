const next = document.getElementById("next");
const previous = document.getElementById("previous");
const slider = document.getElementById("slider");
const cardWidth = document.querySelector(".dish").offsetWidth + 20;
const scrollButton = document.querySelector("#scroll-top");

console.log(next, previous, slider, cardWidth, scrollButton);
let currentCard = 0;

next.onclick = () => {
  if (currentCard < 5) {
    currentCard++;
    slider.style.transitionDuration = "0.5s";
    slider.style.transform = `translateX(-${currentCard * cardWidth}px)`;
  }
};

previous.onclick = () => {
  if (currentCard) {
    currentCard--;
    slider.style.transitionDuration = "0.5s";
    slider.style.transform = `translateX(-${currentCard * cardWidth}px)`;
  }
};

scrollButton.onclick = () => {
  window.scrollTo(0, 0);
};