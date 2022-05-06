function soma(){//mesmo que n tem argumentos definidos aqui, a linguagem guadará no array arguments algum parametro que for colocado 
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(3,3,3))
console.log(soma(3,3,' teste'))//aqui será somado os 2 números e concatenar o string