let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Logar";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    document.title = "Página de Login";
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Cadastrar";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    document.title = "Página de Cadastro";
}