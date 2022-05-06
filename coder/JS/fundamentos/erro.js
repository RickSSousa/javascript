function tratarErroLancar(erro){
    throw new Error('Deu ruim aí') // aqui lança essa mensagem caso essa função de erro for chamada
    // throw 10 - pode usar um valor
    // trhow true - pode usar um boolean
    //throw 'Mensagem' - pode lançar só uma mensagem string

    /*throw { - pode lançar um obj com alguns parametros do próprio erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
}

function imprimirNome(obj){
    try{
    console.nome(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroLancar(e) //aqui trata o erro
    }finally{ //esse bloco sempre será exibido
        console.log('final')
    }
}

const obj = {nome: 'Roberto'} //daria erro na função pq lá está 'name'

imprimirNome(obj)