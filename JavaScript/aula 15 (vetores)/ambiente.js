let num = [8,5,2,9,3]
console.log(num)

num[5]=1 //nisso deve indicar a nova posição(nesse caso acrescentando um novo número na frente)
console.log(num)

num.push(7) //com isso n precisa indicar a posição que deve ser criada

num.length // mostra o tamanho do vetor

num.sort() // organiza em ordem crescente

console.log(`O tamanho do vetor é ${num.length}`)

//obs: os arrays são heterogênios, ou seja, eles podem ter vários tipos de conteúdo no mesmo array