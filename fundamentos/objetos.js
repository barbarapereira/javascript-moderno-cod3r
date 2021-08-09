const prod1 = {} //objeto é um coleção de chave (nomedo atributo)x valor
prod1.nome = 'Celular Ultra Mega'; //elemento criando dinamicamente dentro de um objeto
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // não é uma boa prática criar um elemento com espaço

console.log(prod1);

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90
}