function showModal(content) {
  var modalText = document.getElementById('modal-text');

  modalText.textContent = content;
  document.getElementById('modal').style.display = 'block';
}

function hideModal() {
  document.getElementById('modal').style.display = 'none';
}


