import "../index.html";
import "../css/styles.css";

// dom elements
const ratingForm = document.querySelector("[data-rating-form]");

// event listeners
ratingForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // get selected rating from form data
  const formData = new FormData(ratingForm);
  const rating = formData.get("rating");

  // set selected rating in session storage
  window.sessionStorage.setItem("rating", rating);

  // go to thankyou page
  window.location.replace("thankyou.html");
}
