import "../index.html";
import "../css/styles.css";

function nullCheckedQuerySelector(
  container: Document | DocumentFragment | Element,
  selector: string
) {
  const element = container.querySelector(selector);

  if (element === null) {
    throw new Error(
      `Selector ${selector} didn't match any element in ${container} tree.`
    );
  }

  return element;
}

function typeCheckedQuerySelector<T extends typeof Element>(
  container: Document | DocumentFragment | Element,
  selector: string,
  type: T
) {
  const element = container.querySelector(selector);

  if (!(element instanceof type)) {
    throw new Error(
      `Element ${element} matched with ${selector} is not an ${type}.`
    );
  }

  return element as InstanceType<typeof type>;
}

const ratingForm = typeCheckedQuerySelector(
  document,
  "[data-rating-form]",
  HTMLFormElement
);

// event listeners
ratingForm.addEventListener("submit", handleSubmit);

function handleSubmit(event: SubmitEvent) {
  if (!(event.currentTarget instanceof HTMLFormElement)) {
    throw new Error("current target not form element!");
  }

  event.preventDefault();

  // get selected rating from form data
  const formData = new FormData(event.currentTarget);
  const rating = formData.get("rating");

  // get content container
  const contentContainerEl = typeCheckedQuerySelector(
    document,
    "[data-content-container]",
    HTMLElement
  );

  // get thankyou template
  const thankyouTemplate = typeCheckedQuerySelector(
    document,
    "[data-thankyou-template]",
    HTMLTemplateElement
  );

  // get rating text
  const selectedRatingText = typeCheckedQuerySelector(
    thankyouTemplate.content,
    "[data-selected-rating-text]",
    HTMLElement
  );

  selectedRatingText.append(`You selected ${rating} out of 5`);
  selectedRatingText.classList.remove("hidden");

  contentContainerEl.replaceChildren(
    thankyouTemplate.content.firstElementChild!.cloneNode(true)
  );
}
