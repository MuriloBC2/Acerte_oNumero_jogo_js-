//variavel numero aleatório
let AleatorioN = Math.floor(Math.random() * 100)+1

//variaveis do resul
const chances = document.querySelector('.chances')
const ultresultado = document.querySelector('.ultresultado')
const altobaixo = document.querySelector('.altobaixo')

//variaveis form
const adcampo = document.querySelector('#adcampo')
const confirmo = document.querySelector('#confirmo')

//variaveis jogo

let contagem = 1
let resetjogo 

function play(){
  const jogada = Number(adcampo.value)

  if (contagem ===1 ){
    chances.textContent = `Jogadas Anteriores: `
  }

  chances.textContent = `${jogada}`
  
  if (jogada === AleatorioN){
    ultresultado.textContent = `Parabens, você acertou !!`
    altobaixo.textContent = ``
    ResetarJogo()
  } else if (chances === 10) {
    chances.textContent = `Game Over !!`
    altobaixo.textContent = ''
    ResetarJogo()
  } else {
    ultresultado.textContent -'Errado!'
    if(jogada < AleatorioN){
       altobaixo.textContent ="Chute baixo"
  } else if (jogada > AleatorioN){
    altobaixo.textContent =' Chute alto demais. '
  }
}
       chances++
       adcampo.value = ''
       adcampo.focus()

}

confirmo.addEventListener('click' , play() )