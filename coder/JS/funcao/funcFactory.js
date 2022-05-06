// é uma função q retorna um obj


function criarPessoa(){
    return {
        nome: 'Ana', //to passando valores fixos, mas posso passar parametros na chamada da fuc tbm
        sobrenome: 'Barbosa'
    }
}

console.log(criarPessoa()) //aqui to criando um obj quando chamei a func, instanciando uma nova pessoa

function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: preco - 100*0.05
    }
}

console.log(criarProduto('Aço', 100))