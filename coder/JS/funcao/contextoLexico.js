const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //quando essa função for executada, ela vai ter a consiência do contexto em que foi declarada (lá em cima, onde ela n achou nenhuma const valor em seu contexto e foi para o contexto superior e achou a valor = 'global')
}

exec() 