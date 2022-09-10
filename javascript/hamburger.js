const hammenu = document.getElementById('checkbtn');
const buttons = document.getElementById('nav-buttons');
const header = document.getElementById('topbar');
const header1 = document.getElementById('hedara');

hammenu.addEventListener('click', () => {
	buttons.classList.toggle('show');
	header.classList.toggle('show');
	header1.classList.toggle('show');
});