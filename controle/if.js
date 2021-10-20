function teste1(num){
  if(num > 7) {
    console.log(num);
  }
  console.log('Final');
}
//teste1(6);
//teste1(8);


function teste2(num) {
  if(num > 7); { // sentença de códico em branco ;
    console.log(num)
  }
}
teste2(6);
teste2(8);

/** If Else */
console.log('***************************')
const imprimirResultado = function(nota) {
  if(nota >= 7) {
    console.log('Aprovado');
  } else {
    console.log('Reprovado');
  }
}

imprimirResultado(4.7);
imprimirResultado(7.2);
imprimirResultado(9);
imprimirResultado(3);

/** If Else If */
console.log('***************************')
Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}
const imprimirResult = function (nota) {
  if(nota.entre(9, 10)) {
    console.log("Quadro de Honra");
  }
  else if (nota.entre(7, 8.99)) {
    console.log('Aprovado');
  }
  else if (nota.entre(4, 6.99)) {
    console.log('Recuperação');
  }
  else if (nota.entre(0, 3.99)) {
    console.log('Reprovado');
  }
  else {
    console.log('Nota inválida');
  }
}
imprimirResult(6.98);
imprimirResult(8.75);
imprimirResult(9);
imprimirResult(0);
imprimirResult(4.1);
imprimirResult(20)
imprimirResult(-2);