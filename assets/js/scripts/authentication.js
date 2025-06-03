window.onload = () => {
  const correctPassword = 'bHVhbmluaGFzMg==';

  let userPassword = prompt('Senha:');
  while (userPassword !== atob(correctPassword)) userPassword = prompt('Senha incorreta. Tente novamente:');

  alert('Senha correta, aproveita a surpresa que lhe preparei amor 🥰🥰');

  const overlayContainer = document.getElementById('overlayContainer');
  overlayContainer.style.display = 'none';
};