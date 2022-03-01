function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por favor, digite um número')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option') //precisa ser isso pois, dentro de um select, se eu quiser ter coisas, eu precisarei ter "options". isso criará de forma dinâmica
            item.text = `${n} x ${c} = ${n*c}` //.text é o tipo dos obj da lista d seleções
            item.value = `tab ${c}` //necessário pois, options de select possuem seus values quando gerados
            tab.appendChild(item) //será adicionado um elemento filho (item) na tabuada do select
            c++
        }
    }
}