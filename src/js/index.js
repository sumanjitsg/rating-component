import '../index.html';
import '../css/styles.css';

const form = document.querySelector('#form');

function handleSubmit(e) {
  e.preventDefault();

  // get rating from form data
  const formData = new FormData(form);
  const rating = formData.get('rating');

  // set rating in session storage
  window.sessionStorage.setItem('rating', rating);

  // goto thankyou page
  window.location.replace('thankyou.html');
}

// Register Event Listeners
form.addEventListener('submit', handleSubmit);

