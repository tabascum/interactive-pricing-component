const slider = document.querySelector(".slider");

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const monthlyPrice = [8, 12, 16, 24, 36];

const views = document.querySelector("#views");
const price = document.querySelector("#price");
const yearlyPrice = document.querySelector("#yearly-price");
const billingSwitch = document.querySelector("#billing");
let yearly = false;

slider.addEventListener("input", () => {
  const inputValue = slider.value;
  const value = inputValue * 25;

  slider.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;

  updateValue(yearly, inputValue);
  views.innerHTML = `${pageViews[inputValue]} Pageviews`;
});

billingSwitch.addEventListener("change", () => {
  yearly = !yearly; // Toggle yearly

  updateValue(yearly, slider.value);
});

function updateValue(yearly, inputValue) {
  const selectedPrice = yearly
    ? monthlyPrice[inputValue] * 0.75
    : monthlyPrice[inputValue];
  const formattedPrice = `$${selectedPrice.toFixed(2)}`;

  price.innerHTML = formattedPrice;
  yearlyPrice.innerHTML = formattedPrice;
}
