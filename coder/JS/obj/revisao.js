//coleção dinamica para chave/valor
const produto = new Object //instanciei o obj produto
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco //deletando atributos
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 38000,
    proprietario: { //obj dentro de outro obj
        nome:  'Rick',
        idade: 21,
        endereco: {
            rua: 'prainha',
            numero: 274
        }
    },
    condutores: [{ //array de obj
        nome: 'Antonio',
        idade: 55
    },{
        nome: 'Percilia',
        idade: 45
    }],
    calculaSeguro: function (){ //func dentro d obj
        //...
    }
}

carro.proprietario.endereco.numero = 1000 //atribuindo valor
carro['proprietario']['endereco']['rua'] = 'rua giga'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaSeguro
console.log(carro)
console.log(carro.condutores) //retorna undefined
console.log(carro.condutores.length) //da erro pq condutores ta indefinido por ter sido deletado