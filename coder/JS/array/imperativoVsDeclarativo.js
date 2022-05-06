const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true}
]

//Imperativo
let total1 = 0
for (let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)
//aqui eu me importo mais com como deve ser feito do q com o q deve ser feito


//Declarativo
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//dessa forma abre possibilidades de reuso das funções em outros contextos, tipo o getNota, soma...