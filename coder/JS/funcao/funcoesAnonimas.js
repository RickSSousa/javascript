//função anonima é uma função sem nome:
const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a, b, operacao = soma){//aqui está recebendo a função soma por padrão, caso eu n insira nd no param operacao
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3, 4, soma)//passando uma func(variavel) pronta como parametro
imprimirResultado(3, 4, function(x,y){//passando uma func anonima como parametro
    return x-y
})
imprimirResultado(3,2, (x,y)=> x*y) //passando uma arrow function como parametro (arrows são sempre anonimas)

const pessoa= {//passagem d func anonima dentro d um obj
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()