const senhaCorreta = "prevest2026";

function verificarSenha() {
    const senhaInput = document.getElementById("senhaDigitada");
    const erro = document.getElementById("erro");

    if (senhaInput.value === senhaCorreta) {
        sessionStorage.setItem("preVestLiberado", "true");
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

window.onload = function () {
    const senhaInput = document.getElementById("senhaDigitada");

    senhaInput.value = "";
    senhaInput.setAttribute("readonly", true);

    if (sessionStorage.getItem("preVestLiberado") === "true") {
        liberarAcesso();
    }
};