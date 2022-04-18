var jogador,
  vencedor = null
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')

mudarJogador((valor = 'X'))

function escolherQuadrado(id) {
  if (vencedor !== null) {
    return
  }

  //Vai pegar meu ID dos quadrados e quando for clicado mudar para 'X' ou 'O'
  var quadrado = document.getElementById(id)
  //Condição para não mudao jogador
  if (quadrado.innerHTML !== '-') {
    return
  }
  //Estilizar meu jogador
  quadrado.innerHTML = jogador
  quadrado.style.color = 'red'

  //Quando qualquer quadrado for clicado, mandar valor 'X' ou 'O' para função mudarJogador
  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }
  mudarJogador(jogador)
  checarVencedor()
}

function mudarJogador(valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}

function checarVencedor() {
  var quadrado1 = document.getElementById(1)
  var quadrado2 = document.getElementById(2)
  var quadrado3 = document.getElementById(3)
  var quadrado4 = document.getElementById(4)
  var quadrado5 = document.getElementById(5)
  var quadrado6 = document.getElementById(6)
  var quadrado7 = document.getElementById(7)
  var quadrado8 = document.getElementById(8)
  var quadrado9 = document.getElementById(9)

  if (checarSequencia(quadrado1, quadrado2, quadrado3)) {
    mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
    mudarVencedor(quadrado1)
    return
  }
  if (checarSequencia(quadrado4, quadrado5, quadrado6)) {
    mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
    mudarVencedor(quadrado4)
    return
  }
  if (checarSequencia(quadrado7, quadrado8, quadrado9)) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
    mudarVencedor(quadrado7)
    return
  }
  if (checarSequencia(quadrado1, quadrado4, quadrado7)) {
    mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
    mudarVencedor(quadrado1)
    return
  }
  if (checarSequencia(quadrado8, quadrado5, quadrado2)) {
    mudaCorQuadrado(quadrado8, quadrado5, quadrado2)
    mudarVencedor(quadrado8)
    return
  }
  if (checarSequencia(quadrado9, quadrado6, quadrado3)) {
    mudaCorQuadrado(quadrado9, quadrado6, quadrado3)
    mudarVencedor(quadrado9)
    return
  }
  if (checarSequencia(quadrado1, quadrado5, quadrado9)) {
    mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
    mudarVencedor(quadrado5)
    return
  }
  if (checarSequencia(quadrado7, quadrado5, quadrado3)) {
    mudaCorQuadrado(quadrado7, quadrado5, quadrado3)
    mudarVencedor(quadrado3)
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML
  vencedorSelecionado.innerHTML = vencedor
  vencedorSelecionado.style.color = 'red'
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = 'yellow'
  quadrado2.style.background = 'yellow'
  quadrado3.style.background = 'yellow'
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
  var eIgual = false

  if (
    quadrado1.innerHTML !== '-' &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    eIgual = true
  }
  return eIgual
}

function reiniciar() {
  vencedor = null
  vencedorSelecionado.innerHTML = ''

  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i)
    quadrado.style.background = '#eee'
    quadrado.style.color = '#eee'
    quadrado.innerHTML = '-'
  }
  mudarJogador((valor = 'X'))
}
