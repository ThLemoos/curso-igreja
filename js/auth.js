function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    msg("Preencha todos os campos");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.find(u => u.email === email)) {
    msg("Email já cadastrado");
    return;
  }

  usuarios.push({ email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  msg("Cadastro realizado! Redirecionando...", "green");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}


function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (!usuario) {
    msg("Email ou senha incorretos");
    return;
  }

  localStorage.setItem("logado", email);
  window.location.href = "dashboard.html";
}

function msg(texto, cor = "red") {
  const p = document.getElementById("msg");
  p.style.color = cor;
  p.innerText = texto;
}

window.onload = () => {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  if (email) email.value = "";
  if (senha) senha.value = "";
};
