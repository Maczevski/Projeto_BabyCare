/* AS CONFI DO MODAL */
var modal = document.getElementById("myModal"); 
var btn = document.getElementById("btn-salvar");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    var nomeUsuario = document.getElementById("nome-usuario").value;
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var telefone = document.getElementById("Telefone").value;
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("data-nascimento").value;
    var cpf = document.getElementById("cpf").value;

    var userInfo = "Nome do Usuário: " + nomeUsuario +
                "<br>Nome: " + nome +
                "<br>Sobrenome: " + sobrenome +
                "<br>Telefone: " + telefone +
                "<br>Email: " + email +
                "<br>Data de Nascimento: " + dataNascimento +
                "<br>CPF: " + cpf;

    document.getElementById("user-info").innerHTML = userInfo;
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}