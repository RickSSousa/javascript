//uma função auto invocada é uma das formas de fugir da manipulação de dados no escopo global, visto que o escopo dela é interno dela

(function() {
    console.log('Será executado na hora')
    console.log('Foge do escopo global')
    //tudo que for criado aqui dentro estará disponível apenas aqui dentro
})() // será invocada imediatamente