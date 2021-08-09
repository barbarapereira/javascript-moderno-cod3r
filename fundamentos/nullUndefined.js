let valor // não inicializada
console.log(valor); // valor por padrão undefined (FOI DECLARADO, MAS NÃO INICIALIZADO)
//console.log(valor2); // erro no console pois a variável não foi criada(DECLARADO)

valor = null;
console.log(valor); //variável foi definida mas possui ausência de valor (não aponta para nenhum endereço na memória)

//console.log(valor.toString());

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined, opite por zero
console.log(!!produto.preco);
delete produto.preco;// deletar produto.preco
console.log(produto);

produto.preco = null // sem preço

console.log(!!produto.preco);
console.log(produto);