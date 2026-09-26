const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const senhas = document.querySelectorAll('input[type="password"]');
    const senha = senhas[0].value;
    const confirmarSenha = senhas[1].value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    formulario.reset();
});