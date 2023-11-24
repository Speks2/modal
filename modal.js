var modalOverlay = document.getElementById('modalOverlay');
var modalContent = document.getElementById('modalContent');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');


function openModal() {
  modalOverlay.classList.add('show-modal');
  modalContent.style.display = 'block';
}


function closeModal() {
  modalOverlay.classList.remove('show-modal');
  modalContent.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);


closeModalBtn.addEventListener('click', closeModal);


modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});


document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});