import "../thankyou.html";
import "../css/styles.css";

const selectedRatingText = document.querySelector(
  "[data-selected-rating-text]"
);

// get rating from session storage
const rating = window.sessionStorage.getItem("rating");

// display rating if not null
if (rating !== null) {
  selectedRatingText.append(`You selected ${rating} out of 5`);
  selectedRatingText.classList.remove("hidden");
}
