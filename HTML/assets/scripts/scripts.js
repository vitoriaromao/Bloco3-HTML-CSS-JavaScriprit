//Case Sensitive 

function clique(){

    alert("Você clicou no botão!")
}

let nome = window.document.getElementById("nome")
let email = document.getElementById ("email")
let assunto = document.getElementById ("assunto")

function enviar(){

if(nome.value == ""|| email.value == "" || assunto.value == "") {

    alert ("Todos os campos são obrigatórios !") }

else {

    alert("Olá " + nome.value + ", seu e-mail foi enviado com sucesso!")
}
}







