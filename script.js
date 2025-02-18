/**
 * Variaveis
 * Listas
 * For
 * If
 * 
 * CreateElement - Cria um elemento na memória para usar no HTML
 * getElementById - Pega um elemento do HTML para manipular no JS
 */

var nome = "Nayara" //String 
var idade = 26 // int (integer)
var salario = 29.460 // double (numero quebrado)/float

var alunos = ["João", "Nathalia", "Gabriele", "Vinicius"]

const container = document.getElementById("container")

console.log(container)

for (let index = 0; index < alunos.length; index++) {
    const meuElemento = document.createElement("div")
    const Aluno = alunos[index];
    
    meuElemento.innerText = Aluno

    container.appendChild(meuElemento)
}

var precos = ["10.00", "20.00", "30.00", "40.00"]

console.log(container)

for (let index = 0; index < precos.length; index++) {
    const meuElemento = document.createElement("h4")
    const Preço  = precos[index];

meuElemento.innerText = Preço

container.appendChild(meuElemento)

}


