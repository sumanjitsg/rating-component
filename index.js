const form = document.querySelector('form');
let currentRating = document.querySelector('.selected');

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const rating = formData.get('rating');

  window.sessionStorage.setItem('rating', rating);

  // replace allows not going back to feedback form page
  window.location.replace('thankyou.html');
}

// Register Event Listeners
form.addEventListener('submit', handleSubmit);
