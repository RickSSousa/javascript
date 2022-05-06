const pessoa = {
    saudacao: 'Bom dia!',
    Falar(){//no ES2015 foi possivel atribuir função em obj
        console.log(this.saudacao)//to acessando o atributo saudacao desse obj
    }
}
pessoa.Falar()
const falar1 = pessoa.falar
falar1() //n vai ser chamado a função do obj, dará erro pelo this

const falar11 = pessoa.falar.bind(pessoa)
falar11() //agr sim vai dar, pq o bind amarra a chamada da func no obj dessa func, resolvendo o this

//------ parte 2

function pessoa(){
    this.idade = 0

    setInterval(function(){//func sem nome, anonima
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)//a func setInterval define um intervalo de tempo em milisegundo que algo será exec, nesse caso a func anonima criada
    //o .bind(this) amarrará essa func criada ao this d todo o obj pessoa, evitando problema
}

new pessoa

//versão com self
function pessoa2(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
    //aqui eu declarei o this em uma constante e setei ele dentro do escopo da func anonima, tbm da certo
}