//ex:1 recurso ES6

const pessoa = {
  nome: 'Ana',
  idade: 31,
  endereco:{
    rua: 'ABC',
    numero: 3
  }
}
//destructuring {}
const { nome, idade } = pessoa; // remove nome e idade do obj pessoa

console.log(nome, idade)

//X:2 destructuring array []
const [a] = [10];
console.log(a);

const [n1, , n2, , n3, n4 = 0] = [10, 7, 3, 9]
console.log(n1, n2, n3, n4);

const [, [ , nota]] = [[, 8, 4], [9, 6, 8]];
console.log(nota);

//Ex: 3 
function rand({ min = 0, max = 1000 }) {;
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor);
}

const obj = {max: 50, min: 40 }
console.log(rand(obj));

//Ex: 4 array

function rand1([ min = 0, max = 1000 ]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand1([50, 40]));
console.log(rand1([, 10]))
console.log(rand1([]));