const nums = [1,2,3,4,5]

//o método map trás um novo array porém transformado, d acordo com a func callback que dermos como parametro

let resultado = nums.map(function(e){
    return e*2
})//ele pode receber até 3 params, igual o foreach
console.log(resultado)

const soma10 = e=> e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)