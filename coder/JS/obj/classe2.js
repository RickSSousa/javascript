class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //isso define a classe Avo em herança
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) //to chamando o construtor da classe mae pra setar o sobrenome
        this.profissao = profissao
    }
}

class Filho extends pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)