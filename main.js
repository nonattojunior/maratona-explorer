//variáveis
//dados de entrada
//dados de saída
const elementoResposta = document.querySelector("#resposta")
const respostas = [
  "Não",
  "Provavelmente",
  "Sim",
  "Definitivamente sim",
  "Definitivamente não"
]
const inputPergunta = document.querySelector("#inputPergunta")

function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(math.random() * totalRespostas) 

  elementoResposta.innerHTML = respostas[numeroAleatorio]


}
