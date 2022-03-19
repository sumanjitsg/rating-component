const form = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted');
}

// Register Event Listeners
form.addEventListener('submit', handleSubmit);
