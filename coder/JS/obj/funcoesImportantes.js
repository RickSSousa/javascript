const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // mostra as chaves do obj
console.log(Object.values(pessoa)) //mostra os valores do obj
console.log(Object.entries(pessoa)) //mostra os registros do obj separados por arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) //mostra a listagem dos registros do obj

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, //significa que pode ser listado
    writable: false, //significa q n pode ser alterado
    value: '01/01/2019'
}) //essa func permite definir as propriedades de um atributo

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//object.assign (ES 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // concatena os valores do obj o1 e o2 para o obj dest

Object.freeze(obj)//vai congelar o obj
obj.c = 1234
console.log(obj)