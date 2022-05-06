const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}// não é mais necessário nomear as chaves quando o atributo ter o msm nome d uma variável criada anteriormente, pra n haver essa duplicidade:
const obj2 = {a, b, c}
console.log(obj1, obj2)

//pode ser dado também a seguinte notação:
const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 = {}
obj[nomeAttr] = valorAttr
console.log(obj3)

//tbm pd ser assim:
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//forma reduzida de declarar func em obj
const obj5 = {
    funcao1: function(){
        //...
    },
    //reduzida:
    funcao2(){
        //...
    }
}
console.log(obj5)