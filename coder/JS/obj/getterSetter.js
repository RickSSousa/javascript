const sequencia = {
    _valor: 1, //por convenção, uma variavel com underline antes significa privada
    get valor() {return this._valor++},
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

//isso faz com que vc tem acesso a um atributo dito como "privado" com mais controle

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000