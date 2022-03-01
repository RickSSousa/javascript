function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //a idade que o user digitará
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')//radsex[0] é masc e [1] é fem
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //criei um img com o id foto
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bb-homem.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-homem.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'aduulto-homem.jpg')
            }else{
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
            }else if(idade < 21){
                //jovem
            }else if (idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}