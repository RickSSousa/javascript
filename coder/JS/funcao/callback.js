//passar  uma função pra outra e quado determinado evento acontecer, a func é chamada novamente

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome,indice){//isso é uma assinatura d um foreach
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //o foreach vai passar como parametros pra func imprimir o nome e o indice, ou seja, o foreach vai chamando de volta a func imprimir pra cada elemento, realizando o callback

fabricantes.forEach(fabricantes => console.log(fabricantes)) //me retorna o conteúdo do array 

//parte 2 ----------------

const notas = [7.7, 8.5, 9.6, 5.9, 7.6]
//ideia: pegar tds as notas abaixo d 8
//se callback
let notasBaixas = []
for(let i in notas){
    if(nota[i] < 8){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
notasBaixas2 = notas.filter( nota => nota < 8) //filter é uma func q vai filtrar os elementos d um array em cima d um determinado critério, resultando em um outro array
console.log(notasBaixas2)