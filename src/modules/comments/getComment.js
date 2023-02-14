import getMovieDetails from './getMovieDetails.js';

const showCommentPopUp = () => {
  const popup = document.querySelector('.popup');

  const commentButton = document.querySelectorAll('.comment');
  commentButton.forEach((submitButton) => {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const movieId = event.target.id;
      getMovieDetails(movieId);
      popup.classList.remove('hide');
    });
  });
  const closeButton = document.querySelectorAll('#popup-close');
  closeButton.forEach((button) => button.addEventListener('click', () => {
    popup.style.display = 'none';
    window.location.reload();
  }));
};
export default showCommentPopUp;
