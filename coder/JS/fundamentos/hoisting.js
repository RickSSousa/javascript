console.log(a)

var a =  2 //a var a vai ser isçada pra cima do programa, não dando erro na chamada dela acima. Isso é Hoisting
//o var sofre isso, mesmo dentro de uma função:

function teste(){
    console.log(a)
    var a = 2
}

teste()
console.log(a)

// essa estratégia não trás benefícios, mas é possível ser

// isso não ocorre com o let

console.log(b)
let b = 2