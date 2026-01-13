const btnDarkMode = document.getElementById('btnDarkMode');

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

if (btnDarkMode) {
  btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  });
}
