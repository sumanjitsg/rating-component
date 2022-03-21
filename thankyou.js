const ratingContainer = document.querySelector('.line > p');
const rating = window.sessionStorage.getItem('rating');

if (rating === null) {
  ratingContainer.parentNode.style.display = 'none';
} else {
  ratingContainer.textContent = `You selected ${rating} out of 5`;
}