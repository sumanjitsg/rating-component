import "index.html";
import "styles.css";

const ratingForm =
  document.querySelector<HTMLFormElement>("[data-rating-form]");

// event listeners
ratingForm.addEventListener("submit", handleSubmit);

function handleSubmit(event: SubmitEvent) {
  if (!(event.currentTarget instanceof HTMLFormElement)) {
    throw new Error("Current target is not a form element!");
  }

  event.preventDefault();

  // get selected rating from form data
  const formData = new FormData(event.currentTarget);
  const rating = formData.get("rating");

  // get content container
  const contentContainerEl = document.querySelector("[data-content-container]");

  // get thankyou template
  const thankyouTemplate = document.querySelector<HTMLTemplateElement>(
    "[data-thankyou-template]"
  );

  // get rating text
  const selectedRatingText = thankyouTemplate?.content?.querySelector(
    "[data-selected-rating-text]"
  );

  selectedRatingText?.append(`You selected ${rating} out of 5`);
  selectedRatingText?.classList?.remove("hidden");

  contentContainerEl?.replaceChildren(
    thankyouTemplate?.content?.firstElementChild?.cloneNode(true)
  );
}
