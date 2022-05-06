// obj são compostos por atributos chave valor

const prod1 = {} //{} significa objeto
prod1.nome = 'Celular ultra'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar chaves com nome separado por espaço

console.log(prod1)

const prod2 = {  //podem ter objtos aninhados dentro de objetos
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}

console.log(prod2)

//java script object notation JSON. Vc consegue a partir d um obj formar um JSON.
//JSON é num formato textual, exemplo:
'{"nome": "Camisa Polo", "preco": 79.90}'



function compras(trab1, trab2){
    const compraSorvete = trab1 || trab2
    const compraTV = trab1 && trab2
    
    return {compraSorvete, compraTV} //nesse caso n preciso eu declarar o atributo chave, pois no ES2015 foi dado essa possibilidade, sendo assim a propria linguagem criará o atributo chave com o mesmo nome do valor, evitando possíveis redundancias
}