const SENHA_CURSO = "prevest2026";
const CHAVE_CURSO = "preVestLiberado";

function verificarSenha() {
    const senhaInput = document.getElementById("senhaDigitada");
    const erro = document.getElementById("erro");

    if (senhaInput.value === SENHA_CURSO) {
        sessionStorage.setItem(CHAVE_CURSO, "true");
        liberarAcesso();
    } else {
        erro.innerText = "Senha incorreta!";
        erro.style.opacity = "1";
        senhaInput.value = "";
    }
}

function liberarAcesso() {
    const tela = document.getElementById("telaSenha");

    tela.style.opacity = "0";

    setTimeout(() => {
        tela.style.display = "none";
    }, 300);
}

window.onload = () => {
    const senhaInput = document.getElementById("senhaDigitada");
    senhaInput.value = "";

    if (sessionStorage.getItem(CHAVE_CURSO) === "true") {
        liberarAcesso();
    }
};
