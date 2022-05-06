function getPreco(imporsto = 0, moeda = 'R$'){
    return `${nome} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //aqui ta acessando o this do global

console.log(produto.getPreco()) //aqui pega do obj

const carro = {preco: 49990, desconto: 0.20}
console.log(getPreco.call(carro)) //o call chama a função e passa como parametro o contexto que quer que a função colete os dados
console.log(getPreco.apply(carro)) // vai acontecer a msm coisa do call


console.log(getPreco.call(carro, 0.17, '$'))
//quando eu chamo uma func fo tipo call, eu passo diretamente nos parametros cada um do parametros que serão passados pra func: contexto, e os parametros da func

console.log(getPreco.apply(carro, [0.17, '$']))
//no aply, os parametros são: o contexto e um array dos parametros da func