const form = document.querySelector('form');
let currentRating = document.querySelector('.selected');

function handleSubmit(e) {
  console.log(e);
  e.preventDefault();
}

function setRating({ target }) {
  const selectedRating = target.labels[0];

  currentRating.classList.remove('selected');
  selectedRating.classList.add('selected');

  currentRating = selectedRating;

  // needed?
  // e.preventDefault();
}

// Register Event Listeners
form.addEventListener('submit', handleSubmit);
form.addEventListener('change', setRating);
