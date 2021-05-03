
const modalButton = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.close-btn');

modalButton.addEventListener('click', function () {
  modalOverlay.classList.toggle('open-modal');
})

modalClose.addEventListener('click', function () {
  modalOverlay.classList.toggle('open-modal');
})