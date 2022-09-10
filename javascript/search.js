const button = document.getElementById('mglass');
const search = document.getElementById('magn-glass');
const x = document.getElementById('leave-search');

button.addEventListener('click', () => {
	search.classList.toggle('show');
	button.classList.toggle('show');
});