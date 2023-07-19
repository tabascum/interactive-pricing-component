const slider = document.querySelector(".slider");

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const monthlyPrice = [8, 12, 16, 24, 36];

const views = document.querySelector("#views");
const price = document.querySelector("#price");

slider.addEventListener("input", () => {
  let inputValue = slider.value;
  let yearly = false;

  if (yearly) {
    price.innerHTML = monthlyPrice[inputValue] * 0.75 + `.00$ `;
  } else {
    price.innerHTML = monthlyPrice[inputValue] + `.00$`;
  }

  views.innerHTML = pageViews[inputValue] + ` Pageviews`;
});
