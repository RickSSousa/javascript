function MeuObj() {}
console.log(MeuObj.prototype)

//todos os obj criados a partir da mesma func construtora, apontam pro mesmo prototipo
const obj1 = new MeuObj
const obj2 = new MeuObj
console.log(obj1.__proto__ === obj2.__proto__) //true
console.log(MeuObj.prototype === obj1.__proto__) //true

//adicionando atributos no prorotipo da minha func construtora, fará com que todos os obj instanciados por essa fun tenham esse atributo no seu obj pai
MeuObj.prototype.nome = 'Anônimo'
MeuObj.prototype.falar = function(){
    console.log(`Boa noite! Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Ricardo'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObj.prototype //estou atribuindo manualmente o prototipo do MeuObj no luar do object.prototype default
obj3.nome = 'Obj3'
obj3.falar

// resumo da loucura...
console.log((new MeuObj).__proto__ === MeuObj.prototype)
console.log(MeuObj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)



//--------parte 5

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// todos eles são funções, ou seja, todos tem um prototype que da a liberdade de manipular funções

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4].first())

//ATENÇÃO! Não é recomendado mexer em funções q já existem na linguagem, tipo o ToString() - Não substitua comportamentos q ja existem pra evitar problema



//------------ parte 6

