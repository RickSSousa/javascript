const escola = "Cod3r"

console.log(escola.charAt(4)) //me retorna o que está na posição 4
console.log(escola.charCodeAt(3)) //me retorna o valor da tabela ASC do que está na posição 3
console.log(escola.indexOf('3')) // me mostra o indice d onde está o 3

console.log(escola.substring(1)) //me mostra td q está dps do indice 1
console.log(escola.substring(0, 3)) //me mostra td que está depois do indice 0 e antes do indice 3

console.log('Escola '.concat(escola).concat("!")) //concatena, pode substituir pelo simbolo: +
console.log(escola.replace(3, 'e')) //subistitui onde tiver 3 pela letra 'e'

console.log('Ana, Maria, Pedro'.split(',')) //vai gerar um array com os elementos separados por virgula em cada posição do arraay
