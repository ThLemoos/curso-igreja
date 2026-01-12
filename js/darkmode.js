// Pega o botão
const btnDarkMode = document.getElementById('btnDarkMode');

// Aplica dark mode se estiver salvo no localStorage
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

// Alterna dark mode ao clicar
if(btnDarkMode){
  btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Salva a preferência
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  });
}
