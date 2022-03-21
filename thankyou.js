// todo - CORS policy to restrict opening this page only from feedback page

const ratingContainer = document.querySelector('.line > p');
const rating = window.sessionStorage.getItem('rating');

if (rating !== null) {
  ratingContainer.textContent = `You selected ${rating} out of 5`;

  ratingContainer.parentElement.classList.remove('hidden');
}
