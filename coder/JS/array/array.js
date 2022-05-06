//array é uma estrutura dinamica e indexada

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // vai dar undefined, pois ainda n existe

//adicionando elementos
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) //vai mostrar um array d 10 elementos onde 4 deles são vazios, undefineds
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) //undefined, mas ainda existe a posição 1 e n realoca os elementos subsequentes
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1) //indice e número d elementos q quer deletar. Nesse caso, deletaria o elemento do indice 1
//aprovados.splice(1,2,'Elemento1') Nesse caso deletaria 2 elementos a partir do indice 1 e adicionaria o Elemento1
//aprovados.splice(1,0,'Elemento1') Nesse caso só adicionaria o Elemento1 a partir do indice 1
console.log(aprovados)

//No array constante, o que n poderá ser mudado é onde o endereço do array está apontando, mas seus elementos sim poderão ser alterados