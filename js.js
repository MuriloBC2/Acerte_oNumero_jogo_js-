//variavel numero aleatório
let AleatorioN = Math.floor(Math.random() * 100)+1

//variaveis do resul
// let chances = document.querySelector('#chances')

const chances = document.querySelector('#chances')
const ultresultado = document.querySelector('#ultresultado')
const altobaixo = document.querySelector('#altobaixo')
let tentativas = document.querySelector('#tentativas')

//variaveis form
const adcampo = document.querySelector('#adcampo')
const confirmo = document.querySelector('#confirmo')

//variaveis jogo

let contagem = 1
let resetjogo 




function play(){
  const jogada = Number(adcampo.value);
  if (contagem === 1) {
    chances.textContent = `Jogadas Anteriores: `;
  }
    if(jogada===AleatorioN){
      ultresultado.textContent='Párabens você acertou'
      chances.textContent =''
      altobaixo.textContent =''
    } else if(jogada!=AleatorioN && contagem===10 ){
      chances.textContent += ` ${jogada}`
      ultresultado.textContent='Errou'
      altobaixo.textContent='Você gastou todas as chances'
    } else {
      if (jogada < AleatorioN){
      chances.textContent += ` ${jogada}`
      ultresultado.textContent="Errou"
      altobaixo.textContent = 'Baixo'
      contagem++
      tentativas += `${contagem}`;
    }else if (jogada > AleatorioN){
      chances.textContent += ` ${jogada}`
      ultresultado.textContent='Errou'
      altobaixo.textContent = 'Alto'
      contagem++
      tentativas += `${contagem}`;
    }}
    adcampo.value=''
}
