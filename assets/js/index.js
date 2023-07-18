const slider = document.querySelector(".slider");

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const priceValueMonth = [8, 12, 16, 24, 36];

const views = document.querySelector("#views");
const price = document.querySelector("#price");

slider.addEventListener("input", () => {
  this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${this.value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;
});
