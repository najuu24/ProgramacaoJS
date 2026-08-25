verificarLogin()

function verificarLogin(){
    let autenticado = localStorage.getItem("autenticado")

    if(autenticado == 1){
        document.getElementById("painelAdmin").style.display = "block"
        document.getElementById("painelLogin").style.display = "none"
    }
}


function autenticar(){

    // Busca e popula as variáveis com os valores dos inputs
    let usuario = document.getElementById("inputUsuario").value
    let senha = document.getElementById("inputSenha").value

    if(usuario.trim().length < 3) {
        alert("Usuário incorreto. Verifique e tente novamente...")
        return
    }

    if(senha.length == 0){
        alert("Senha incorreta. Verifique e tente novamente...")
        return
    }

    if(usuario != "admin"){
        alert("Usuário incorreto!")
        return
    }

    if(senha != "123123"){
        alert("Senha incorreta!")
        return
    }

    localStorage.setItem("autenticado", 1)

    // Alterna a visualização dos painéis (mostrar/ocultar)
    document.getElementById("painelAdmin").style.display = "block"
    document.getElementById("painelLogin").style.display = "none"
}

function logout(){
    localStorage.removeItem("autenticado")

    document.getElementById("painelAdmin").style.display = "none"
    document.getElementById("painelLogin").style.display = "block"
}