const SENHA_CURSO = "premilitar2026";
const CHAVE_CURSO = "preMilitarLiberado";

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

window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        sessionStorage.removeItem(CHAVE_CURSO);
        location.reload();
    }
});

window.addEventListener("beforeunload", () => {
    sessionStorage.removeItem(CHAVE_CURSO);
});
