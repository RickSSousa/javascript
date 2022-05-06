const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco
    //posso retornar algo com uma lógica, como o exemplo acima, ou retornar false, q vai retornar um array vazio, ou retornar true q n vai filtrar nd e retornar o array cheio
}))

//criando funções pra filtrar 2 coisas noarray
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))