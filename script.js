document.getElementById("senhaForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    var senhaDigitada = document.getElementById("senha").value;
    var senhaCorreta = "beyondgodeyes"; // Defina sua senha aqui

    // Verifica se a senha está correta
    if (senhaDigitada === senhaCorreta) {
        // Cria um link de download para o arquivo protegido
        var linkDownload = document.getElementById("linkDownload");
        linkDownload.setAttribute("href", "godgame.rar");
        linkDownload.setAttribute("download", "godgame.rar");

        // Exibe o link de download
        linkDownload.style.display = "inline";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
});