let inputNumero = document.querySelector('#numero')
let resultadoContainer = document.querySelector('#resultados')
let mensagensContainer = document.querySelector('#mensagens')
inputNumero.focus()

let listaDeNumeros = []

function inserirNovoNumero() {
  let novoNumeroString = document.querySelector('#numero').value
  let novoNumero = Number(document.querySelector('#numero').value)
  mensagensContainer.innerHTML = ''
  resultadoContainer.innerHTML = ''
  inputNumero.value = ''
  inputNumero.focus()

  try {
    verificarSeONumeroEhValido(novoNumeroString)
    adicionarNumeroNoArray(novoNumero)
    mostrarNumeros(listaDeNumeros)
  }
  catch(erro) {
    mensagensContainer.innerHTML = erro
  }
}

function mostrarResultados() {
  try {
    if(listaDeNumeros.length === 0) throw 'Nenhum número foi adicionado ainda'
    resultadoContainer.innerHTML = `Quantidade de números cadastrados: ${calcularAQuantidadeDeNumerosCadastrados(listaDeNumeros)} <br>`
    resultadoContainer.innerHTML += `O menor número é: ${obterOMenorNumero(listaDeNumeros)} <br>`
    resultadoContainer.innerHTML += `O maior número é: ${obterOMaiorNumero(listaDeNumeros)} <br>`
    resultadoContainer.innerHTML += `A soma de todos os números é: ${calcularASomaDeTodosOsNumeros(listaDeNumeros)} <br>`
    resultadoContainer.innerHTML += `A média de todos os números é: ${calcularAMediaDeTodosOsNumeros(listaDeNumeros)} <br>`
  }
  catch(erro) {
    mensagensContainer.innerHTML = erro
  }
}

function calcularASomaDeTodosOsNumeros(listaDeNumeros) {
  let somaDosNumeros = 0
  for(posicao = 0; posicao < listaDeNumeros.length; posicao++) {
    somaDosNumeros += listaDeNumeros[posicao]
  }
  return somaDosNumeros
}

function calcularAMediaDeTodosOsNumeros(listaDeNumeros) {
  let somaDosNumeros = calcularASomaDeTodosOsNumeros(listaDeNumeros)
  return somaDosNumeros / listaDeNumeros.length
}

function ordenarNumeros(a, b) {
  return a - b
}

function ordenarListaDeNumeros(listaDeNumeros) {
  return listaDeNumeros.sort(ordenarNumeros)
}

function calcularAQuantidadeDeNumerosCadastrados(listaDeNumeros) {
  return listaDeNumeros.length
}

function obterOMenorNumero(listaDeNumeros) {  
  ordenarListaDeNumeros(listaDeNumeros)
  return listaDeNumeros[0]
}

function obterOMaiorNumero(listaDeNumeros) {
  ordenarListaDeNumeros(listaDeNumeros)
  return listaDeNumeros[listaDeNumeros.length-1]
}

function mostrarNumeros(listaDeNumeros) {
  let numerosContainer = document.querySelector('#numeros')
  numerosContainer.innerHTML = ''
  for (posicao = 0; posicao < listaDeNumeros.length; posicao++) {
    numerosContainer.innerHTML += `${listaDeNumeros[posicao]} | `
  }
}

function adicionarNumeroNoArray(numero) {
  listaDeNumeros.push(numero)
}

function verificarSeONumeroEhValido(numeroString) {
  let numero = Number(numeroString)
  if(numeroString === '') {
    throw 'O campo está vazio'
  }
  if(numero < 1) {
    throw 'O número é menor que 1'
  }
  if(numero > 100) {
    throw 'O número é maior que 100'
  }
  if(listaDeNumeros.indexOf(numero) != -1) {
      throw 'Este número já foi adicionado'
  }
}

// ✔ Se os resultados estiverem sendo mostrados e o usuário adicionar um outro número, deve esconder os resultados e adicionar o número
// ✔ Se ao clicar em finalizar não houver nenhum número adicionado, deve avisar o usuário

// ✔ Solicita um número de 1 a 100
// ✔ Adiciona o número em um array
// ✔ Se um valor for repetido, não deve inserir e deve avisar o usuário
// ✔ Se o número for menor que 1 ou maior que 100 não deve adicionar e deve avisar o usuário
// ✔ Se o campo for vazio, deve avisar o usuário

// Ao clicar em finalizar deve mostrar:
// ✔ - Quantidade de números cadastrados
// ✔ - O maior valor informado
// ✔ - O menor valor informado
// ✔ - A soma de todos os números
// ✔ - A média dos valores digitados