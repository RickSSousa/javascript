// pra evitar q seja criado novos atributos pro obj, mas deixando excluir atributos:
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto)) //false

produto.nome = 'Borracha'
produto.descricao = 'Borracha para pneus'
delete produto.tag
console.log(produto)


//selar um objeto, n consegue adicionar, excluir mas consegue modificar os valores dos atributos
const pessoa = {nome: 'Rick', idade:21}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Santos'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)


// congelar um objeto (freeze) = ele sela e proibe a extenção desse obj