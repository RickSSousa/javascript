//o método reduce terá como parâmetro um "acumulador" e o valor da posição atual, que abaixo será o elemento da segunda posição como valor atual e o elemento da primeira posição como acumulador. (nesse exemplo veremos uma soma)

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)

//caso eu queira definir um acumulador e queira que o reduce considere acumular desde o primeiro elemento do array, é só eu adicionar um valor depois da callback, q ele será o acumulador. Esse parâmetro dps da callback, mostrará o resultado final do acúmolo

const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)
console.log(resultado2)


//-- parte 2

//todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //função q trará q se o João e Maria e pedro e ana são verdadeiramente bolsistas. Se um deles for falso será falso e vdd = falso
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) //false


//alguns alunos são bolsistas?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))