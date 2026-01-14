const SENHA_CURSO = "prevest2026";
const CHAVE_CURSO = "acesso_prevest";

document.addEventListener("DOMContentLoaded", () => {
    sessionStorage.removeItem(CHAVE_CURSO);
});

function verificarSenha() {
    const senhaInput = document.getElementById("senhaDigitada");
    const erro = document.getElementById("erro");

    if (senhaInput.value === SENHA_CURSO) {
        sessionStorage.setItem(CHAVE_CURSO, "true");
        liberarAcesso();
    } else {
        erro.innerText = "Senha incorreta!";
        senhaInput.value = "";
    }
}

function liberarAcesso() {
    document.getElementById("telaSenha").style.display = "none";
}

window.addEventListener("pageshow", () => {
    sessionStorage.removeItem(CHAVE_CURSO);
});
