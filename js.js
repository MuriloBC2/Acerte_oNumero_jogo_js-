//variavel numero aleatório
let AleatorioN = Math.floor(Math.random() * 100)+1

//variaveis do resul
const chances = document.querySelector('#chances')
const ultresultado = document.querySelector('#ultresultado')
const altobaixo = document.querySelector('#altobaixo')

//variaveis form
const adcampo = document.querySelector('#adcampo')
const confirmo = document.querySelector('#confirmo')

//variaveis jogo

let contagem = 1
let resetjogo 

function play(){
  const jogada = Number(adcampo.value)

  if (contagem == 1 ){
    chances.innerHTML = `Jogadas Anteriores: `
  }

  chances.textContent = `${jogada}`
  
  if (jogada == AleatorioN){
    ultresultado.innerHTML = `Parabens, você acertou !!`
    altobaixo.innerHTML = ``
    ResetarJogo()
  } else if (chances == 10) {
    chances.innerHTML = `Game Over !!`
    altobaixo.innerHTML = ''
    ResetarJogo()
  } else {
    ultresultado.innerHTML -'Errado!'
    if(jogada < AleatorioN){
       altobaixo.innerHTML ="Chute baixo"
  } else if (jogada > AleatorioN){
    altobaixo.innerHTML =' Chute alto demais. '
  }
}
       chances++
       adcampo.value = ''
       adcampo.focus()

}

