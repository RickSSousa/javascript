function fatorial(n){
    if(n == 1){
        return  1 //pois fatorial de 1 é 1
    }else{
        return n * fatorial(n-1) //recursividade, chamando a mesma função dentro dela mesma
    }
}

console.log(fatorial(5))

/*
5!  5.4.3.2.1, q é igual a 5.4!

n! = nx(n-1)!
*/