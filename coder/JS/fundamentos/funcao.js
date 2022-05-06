// armazenando função em variável
const imprimiSoma = function (a, b){
    console.log(a + b)
}

imprimiSoma(2, 3)

//sarmazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

//retorno implícito
const subtracao = (a, b) => a - b

const imprimir2 = a => console.log(a)


// arrow com operador ternário
const resultado = nota => nota >= 7 ?  'Aprovado' : 'Reprovado'