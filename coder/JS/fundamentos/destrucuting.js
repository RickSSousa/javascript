const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        longradouro: 'Rua A',
        numero: 256
    }
}
 //para desestruturar algo, usa-se {} para obj e [] para array

const {nome, idade} = pessoa //tire o nome e a idade do obj pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //aqui eu to criando variáveis, apelidos, para os atributos
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) //o sobrenome dará undefined, por n ter sido atribuído nd

const {endereco: {longradouro, numero, cep}} = pessoa
console.log(longradouro, numero, cep)

//const {conta: {ag, nume}} = pessoa //aqui vai dar erro por eu estar tentando acessar algo q n é obj, n está setado


//------------ Parte 2 ------------------

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // aqui ele ignora o segundo e  ultimo elementos do array

console.log(n1, n3, n5, n6) 

const [, [,nota]] = [[,8,8],[9,6,8]] //aqui ele ignora o primeiro array e ignora o primeiro e ultimo elemento do segundo array
console.log(nota)




