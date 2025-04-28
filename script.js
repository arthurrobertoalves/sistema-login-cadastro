function logar() {
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
        window.location.href = "pagina_inicial.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}