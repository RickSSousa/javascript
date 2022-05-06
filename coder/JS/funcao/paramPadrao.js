//estrategia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) // aqui daria 3, pq o valor padrão dos parametros é 1, visto que n foram definidos na chamada da função
console.log(soma1(3))//dará 5
console.log(soma1(1,2,3)) //dará 6

//o número 0 retornará o valor falso, atribuindo o valor padrão aos elementos, gerando um erro de soma

//estratégia 2, 3 e 4 pra gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 //se a for restritamente diferente de undefined, a recebe a, se não, recebe 1
    b = 1 in arguments ? b : 1 //se existir algum indice no arguments pro b, mantem o valor d b. se não, atribui 1 (aqui o indice foi posto como 1 in arguments pois o a fica no indice 0 e o c no indice 2)
    c = isNaN(c) ? 1:c //se o c for NaN, atribui 1 como padrão - essa é a forma mais segura
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//valor padrão ES2015

function soma3 (a=1, b=1, c=1){//aqui já é definido um valor padrão caso nd for atribuido aos argumentos
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))