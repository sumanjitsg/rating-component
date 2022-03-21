const form = document.querySelector('form');
let currentRating = document.querySelector('.selected');

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const rating = formData.get('rating');

  window.sessionStorage.setItem('rating', rating);

  // rating doesn't reset to 5 on reload. resets on hard reload (browser caching?)

  window.location.replace('thankyou.html');
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
