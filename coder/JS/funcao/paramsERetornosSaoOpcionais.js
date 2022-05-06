function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor acima do permitido ${area}m2`)//nesse ramo da função, n há retorno, apenas um console.log
    }else{
        return area
    }
}

console.log(area(2,2))//retornará normal
console.log(area(2)) //NaN
console.log(area()) //NaN
console.log(area(2,3,4,5,6)) // a linguagem vai ignorar os parâmetros sobrando
console.log(area(5,5))//imprimirá no console mas com o tipo Undefined