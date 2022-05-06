//armazenar função em variável
const fun = function () {}

//armazenar em array
const array = [function(a,b){return a + b}, fun]
console.log(array[0](2,4))

//armazena em um atributo de obj
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passar func como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//uma funçao pd retornar/conter uma func
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4) //esses parametros ao lado é pq o resultado da fun soma é outra fun