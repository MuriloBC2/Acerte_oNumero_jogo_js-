//variavel numero aleatório
let AleatorioN = Math.floor(Math.random() * 100)+1

//variaveis do resul
// let chances = document.querySelector('#chances')

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


  if (contagem === 1 ){
    chances.textContent = `Jogadas Anteriores: `
    
  chances.textContent += jogada + ' '
  }
  if (jogada === AleatorioN){
    ultresultado.textContent = `Parabens, você acertou !!`
    ultresultado.style.backgroundcolor = 'green'
    altobaixo.textContent = `Acertou `
    ResetarJogo()
  } else if (jogada != AleatorioN && contagem === 10) {
    ultresultado.textContent = `Game Over !!`
    altobaixo.textContent = 'Errado'
    ResetarJogo()
  } else {
    ultresultado.textContent -'Errado!'
    ultresultado.style.backgroundcolor = 'red'
    if(jogada < AleatorioN){
       altobaixo.textContent ="Chute baixo"
       contagem++
  } else if (jogada > AleatorioN){
    altobaixo.textContent =' Chute alto demais. '
    contagem++ 

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
  }
console.log(contagem)
       
      chances++
       adcampo.value = ''
       adcampo.focus()
    
    
}
}
