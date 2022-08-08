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

  // get content container
  const contentContainerEl = document.querySelector("[data-content-container]");

  // get thankyou template
  const thankyouTemplate = document.querySelector("[data-thankyou-template]");

  // get rating text
  const selectedRatingText = thankyouTemplate.content.querySelector(
    "[data-selected-rating-text]"
  );

  // display rating if not null
  if (rating !== null) {
    selectedRatingText.append(`You selected ${rating} out of 5`);
    selectedRatingText.classList.remove("hidden");
  }

  contentContainerEl.replaceChildren(
    thankyouTemplate.content.firstElementChild.cloneNode(true)
  );

  // go to thankyou page
  // window.location.replace("thankyou.html");
}
