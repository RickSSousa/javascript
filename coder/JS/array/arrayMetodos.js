const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') //adiciona como último elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift("Hamilton") //adiciona como primeiro elemento
console.log(pilotos)

//splice pode adicionar ou remover elementos

//adicionar:
pilotos.splice(2,0,'Botta','Massa') //adiciona do indice 2 em diante esses 2 novos elementos


//remover
pilotos.splice(3,1) //o piloto da posição 3, 'Massa', será removido
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //ele trará um novo array com os elementos da pos 2 em diante do array pilotos
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //vai pegar do indice 1 até o indice 4 (n pegando o elemento do indice 4)
console.log(algunsPilotos2)