//Função sem retorno
function imprimirSoma(a, b) {   //parâmetros que queira receber
  console.log(a + b);
}

imprimirSoma(2, 5);

imprimirSoma(2); //o valor não atribuido será undefined e retornará NaN

imprimirSoma(2, 10, 5, 88, 2); // irá calcular apenas os 2 primeiros valores

imprimirSoma(); // retorna NaN por não ter valor no parâmetro

imprimirSoma('olá', 6) //concatena o texto com o valor


//Função com retorno
function soma(a, b = 0) { // trata o segundo valor atribuido
  return a + b;
}

console.log(soma(3));

console.log(soma(3, 5));

console.log(soma('Olá '));

console.log(soma());// retorna NaN

