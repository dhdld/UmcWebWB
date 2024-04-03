const open = document.getElementById('openModal');
const close = document.getElementById('closeModal');
const modal = document.querySelector('.modalWrapper');

open.onclick = () => {
    modal.style.display = 'flex';
}

close.onclick = () => {
    modal.style.display = 'none';
}