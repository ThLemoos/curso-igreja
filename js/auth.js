window.onload = () => {
  document.querySelectorAll("input").forEach(i => i.value = "");
};

function getUsers() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function saveUsers(users) {
  localStorage.setItem("usuarios", JSON.stringify(users));
}

function msg(texto, cor = "red") {
  const p = document.getElementById("msg");
  if (p) {
    p.style.color = cor;
    p.innerText = texto;
  }
}

function toggleSenha(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if (!email || !senha || !confirmar) {
    msg("Preencha todos os campos");
    return;
  }

  if (senha.length < 6) {
    msg("Senha mínima: 6 caracteres");
    return;
  }

  if (senha !== confirmar) {
    msg("As senhas não coincidem");
    return;
  }

  let users = getUsers();

  if (users.find(u => u.email === email)) {
    msg("Email já cadastrado");
    return;
  }

  users.push({ email, senha });
  saveUsers(users);

  msg("Cadastro realizado! Redirecionando...", "green");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let users = getUsers();

  const user = users.find(u => u.email === email && u.senha === senha);

  if (!user) {
    msg("Email ou senha inválidos");
    return;
  }

  localStorage.setItem("logado", email);
  window.location.href = "../selecaoCurso/selecao.html";
}

function recuperar() {
  const email = document.getElementById("email").value;
  let users = getUsers();

  const user = users.find(u => u.email === email);

  if (!user) {
    msg("Email não encontrado");
    return;
  }

  msg(`Sua senha é: ${user.senha}`, "green");
}
