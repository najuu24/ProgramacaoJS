// Dados mockados
let nomes = ["Conrado", "Naju", "Caio", "Felipe", "Ingrid", "Vitória"] // Array (lista)

let posicaoAlteracao = 0

    buscarTodos()

    function remover(nome){

        let resposta = confirm("Tem certeza que deseja remover?")
        if(resposta == false){
            return
        }

        let posicaoRemocao = nomes.indexOf(nome)
        nomes.splice(posicaoRemocao, 1)
        buscarTodos()
    }

    function salvarAlteracao(){
        let nome = document.getElementById("inputNome").value

        if(nome.trim().length < 3){
            alert("Nome inválido. Tente novamente...")
            return
        }

        nomes[posicaoAlteracao] = nome
        buscarTodos()
        document.getElementById("inputNome").value = ""

    }



    function atualizar(nome){

        posicaoAlteracao = nomes.indexOf(nome)

        document.getElementById("inputNome").value = nome

        document.getElementById("botaoSalvar").style.display = "none"
        document.getElementById("botaoAlterar").style.display = "inline-block"
    }



    function inserir(){
        let nome = document.getElementById("inputNome").value

        if(nome.trim().length < 3){
            alert("Nome inválido. Tente novamente...")
            return
        }
        
        nomes = nomes.concat(nome)
        buscarTodos()
        document.getElementById("inputNome").value = ""
    }



    function buscarTodos(){
        // let html = "<li>" + nomes[0] + "</li>"
        // html += "<li>" + nomes[1] + "</li>"
        // html += "<li>" + nomes[2] + "</li>"
        // html += "<li>" + nomes[3] + "</li>"
        // html += "<li>" + nomes[4] + "</li>"
        // document.getElementById("listaUsuario").innerHTML = html

        let html = ""
        nomes.map(i => html += `<li>${i}<button onclick='atualizar("${i}")'>🖊️</button> <button onclick='remover("${i}")'>🗑</button> </li>`)
        document.getElementById("listaUsuarios").innerHTML = html
    }