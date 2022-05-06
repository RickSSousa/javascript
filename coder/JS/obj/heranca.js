// o conseito de herança em JS é que, caso o atributo q vc esteja chamando n exista no obj em q vc instanciou, ele vai procurar no seu prototipo(pai), q caso n ache vai procurar no prototipo do pai(vô),..., que caso n ache vai procurar no object.prototype.

// se existir um atributo tanto no filho quanto no pai, vai ser dado preferencia pro q está no escopo do obj chamado, ignorando a procura na cadeia de prototipos

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: '260'
}

console.log(ferrari.prototype) //o objeto ferrari n é um prototipo
console.log(ferrari.__proto__) //o prototipo de ferrari é o obj pai
console.log(ferrari.__proto__ === Object.prototype) //o prototipo de ferrari é um prototipo
console.log(Object.prototype.__proto__ === null)

function MeuObj() {}
console.log(typeof Object, typeof MeuObj)
console.log(Object.prototype, MeuObj.prototype)

// ---------- parte 2

Object.prototype.attr0 = '0' //não recomendado mexer no prototype
const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B', attr3: '3'} //__proto__:avo estou definindo q o prototipo desse ibj vai apontar pro obj avo
const filho = {__proto__:pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, filho.attr4)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax: 324 //shadowing, sombreamento - significa q esse velMax vai se sobrepor ao da classe mãe, caso esse obj for chamado
}

const volvo2 = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //da mesma forma q o this é usado pra referenciar o obj atual, o super é usado pra referenciar o prototipo
    }
}

Object.setPrototypeOf(ferrari2, carro) //essa é uma das formas de setar o carro como classe mãe de ferrari
Object.setPrototypeOf(volvo2, carro)

console.log(ferrari2)
console.log(volvo2)

volvo.acelerarMais(100)
console.log(volvo2.status())

ferrari.acelerarMais(300)
console.log(ferrari2.status())


//------------ parte 3

const pai2 = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai2)//essa função já define o pai como uma propriedade do obj filha1
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai2, { //esse seg parametro já estabelece os atributos pro filha2
    nome: {value: 'Bia', weitable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//como saber se o atributo veio por herança ou se é do próprio obj:
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}



