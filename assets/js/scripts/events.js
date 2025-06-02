const songSpan = document.getElementById('songSpan');

songSpan.addEventListener('click', () => {
	const songComponent = document.getElementById('songComponent');
	songComponent.play();

	songSpan.style.display = 'none';
});