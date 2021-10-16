
const saudacao = 'Iaee'; //contexto lexico 1

function exec() {
  const saudacao = 'Faaaala'; //contexto lexo 2
  return saudacao;
}

const cliente = {
  nome: 'Pedro',
  idade: 31,
  peso: 73,
  endereco: {
    logradouro: 'rua 1',
    numero: 123
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);