//Case Sensitive 

function clique(){

    alert("Você clicou no botão!")
}

let nome = window.document.getElementById('nome')
let email = document.querySelector ('email')
let assunto = document.querySelector  ('assunto')

nome.style.width = '50%';
email.style.width='50%'

function validaNome(){
    let txtNome=document.querySelector('#txtNome')
    if(nome.value.length < 3 ){
        txtNome.innerHTML='Nome inválido!'
        txtNome.style.color='red'
    }else{
        txtNome.innerHTML='Nome válido!'
        txtNome.style.color='green'
        nomeOk=true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML='E-mail inválido!'
        txtEmail.style.color='red'
    }else{
        txtEmail.innerHTML='E-mail válido!'
        txtEmail.style.color='green'
        emailOk=true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>=100){
        txtAssunto.innerHTML='Texto não deve ultrapassar 100 caracteres'
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }
    else{
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}

function enviar(){
    if(nomeOk==true && emailOk ==true && assuntoOk==true){
        alert("Olá " + nome.value + ", seu e-mail foi enviado com sucesso!")
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}










