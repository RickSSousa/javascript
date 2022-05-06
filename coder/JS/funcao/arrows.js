let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//sem declarar escopo, é a maneira mais correta quando quer fazer com retorno implicito
dobro = a => 2 * a
console.log(dobro(2))

//func anonimas
let ola = function(){
    return 'Ola'
}
//existem 2 jeitos d arrow anonimas:
ola = () => 'Ola'
ola = _ => 'Ola'
console.log(ola())


//- parte 2 --

function pessoa2(){
    this.idade = 0

    const self = this
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa2

// ---- parte 3 ------

let comparaComThis = function (param){
    console.log(param === this)
}

comparaComThis(global)
//tem q tomar cuidado ao atribuir valores com o this nesse caso, pq vc vai esar mexendo no escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj)//agr o comportamento vai ser voltado ao ao this d dentro da função
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // na func arrow, o this n pertence ao global e sim ao modulo do console.log
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //o conceito da arrow function vai ser mantido, n sendo apontado pro obj
comparaComThisArrow(module.exports)//true novamente, a func arrow é firme