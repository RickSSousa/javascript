class Pessoa{
    constructor(nome){
        this.nome = nome 
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

//obs: no momento em q coloquei lá no constructor this.nome, a variável nome passou a ser pública, dando acesso a essa variável sempre quando houver uma instancia do obj, igual abaixo

const p1 = new Pessoa('Rick')
p1.falar()

//func factory
const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('Rick')
p2.falar()