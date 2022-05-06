const pessoa = {nome: 'João'}
// pessoa ta apontando constantemente pro endereço d memória, q aponta constantemente pro obj
pessoa.nome = 'pedro'
//ainda sim é possível manipular os atributos
console.log(pessoa)

//pessoa = {nome: 'Ana'} isso n da certo, pq faria com q a constante pessoa tentasse mudar o endereço d memória pra apontar pra esse novo obj, e isso n da pra acontecer por ser valor CONSTANTE

Object.freeze(pessoa) //isso faz com q os atributos sejam congelados, ou seja, não possam ser alterados também

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
//nd disso vai ser executado no obj congelado

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
//isso define um obj 100% constante já na sua criação
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)