function tratarErro(erro) {
  throw new Error('Ops! Houve um erro');
}
function imprimirNome(obj) {
  try {
    console.log(obj.name.toUppercase() + '!!!')
  }
  catch (e) {
    tratarErro(e);
  }
  finally {
    console.log('Fim do erro');
  }
}

const obj = { name: 'Bárbara'}
imprimirNome(obj);