const slider = document.querySelector(".slider");

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const monthlyPrice = [8, 12, 16, 24, 36];

const views = document.querySelector("#views");
const price = document.querySelector("#price");
const yearlyPrice = document.querySelector("#yearly-price");
const billingSwitch = document.querySelector("#billing");
let yearly = false;

slider.addEventListener("input", () => {
  let inputValue = slider.value;

  updateValue(yearly, inputValue);
  views.innerHTML = pageViews[inputValue] + ` Pageviews`;

  let value = inputValue * 25;

  slider.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
});

billingSwitch.addEventListener("change", () => {
  if (yearly != true) {
    yearly = true;
    yearlyPrice.innerHTML = `$` + monthlyPrice[inputValue] * 0.75 + `.00 `;
  } else {
    yearly = false;
    price.innerHTML = `\$${monthlyPrice[inputValue]}.00`;
  }
  updateValue();
});

function updateValue(yearly, inputValue) {
  if (yearly) {
    price.innerHTML = `$` + monthlyPrice[inputValue] * 0.75 + `.00 `;
    yearlyPrice.innerHTML = `$` + monthlyPrice[inputValue] * 0.75 + `.00 `;
  } else {
    price.innerHTML = `\$${monthlyPrice[inputValue]}.00`;
    yearlyPrice.innerHTML = `\$${monthlyPrice[inputValue]}.00`;
  }
}
