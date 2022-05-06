function Carro(velocidadeMaxima = 200, delta = 5){//o delta é a aceleração, por padrão aumentará d 5 em 5
    //atributo privado, q pertence apenas ao escopo da func
    let velocidadeAtual = 0

    //metodo publico
    //o this é o q torna algo público, para ser visto fora da func
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual+=delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function (){
    return velocidadeAtual
    }
}

const uno = new Carro //uno é um objeto
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


