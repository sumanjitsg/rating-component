import '../thankyou.html';
import '../css/styles.css';

// get rating from session storage
const ratingContainer = document.querySelector('.row > p');
const rating = window.sessionStorage.getItem('rating');

// show rating if not null
if (rating !== null) {
  ratingContainer.append(`You selected ${rating} out of 5`);
  ratingContainer.parentElement.classList.remove('hidden');
}
