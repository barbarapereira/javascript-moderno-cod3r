function getInteroAleatorio(min, max) {
  const valor = Math.random()*(max - min) + min;
  return Math.floor(valor);
}

let opcao;

while(opcao != -1) {
  opcao = getInteroAleatorio(-1, 10);
  console.log(`Opção escolhoda foi ${opcao}`);
}

/**
 * 
 * Do While
 * 
 * do {
  opcao = getInteroAleatorio(-1, 10);
  console.log(`Opção escolhoda foi ${opcao}`);
}
while(opcao != -1);
 * 
 */

console.log('Até a próxima');