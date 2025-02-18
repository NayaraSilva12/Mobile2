/**
 * Variaveis
 * Listas
 * For
 * If
 * 
 * CreateElement - Cria um elemento na memória para usar no HTML
 * getElementById - Pega um elemento do HTML para manipular no JS
 */


// 17/02 acessar os dados do um input 
// salvar antes os dados da lista
// mostrar os dados dessa lista 
// funções > um bloco de codigos com um nome, para ser executado
// criar estilos


const nome =  document.getElementById("nome") 
const email = document.getElementById("email") 
const telefone = document.getElementById("fone") 

let dados = []

function Salvar() {

    const n = nome.value
    const e = email.value
    const t = telefone.value

    dados.push(n, e, t)

    console.log(dados)

}


function Listar(){

    for (let index = 0; index < dados.length; index++) {

        const elemento = dados[index];

        const caixa = document.createElement("div")

        caixa.classList.add("card")

        caixa.innerText = elemento

        container.appendChild(caixa)
        
    }
}


