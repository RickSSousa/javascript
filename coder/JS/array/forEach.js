const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//callback
aprovados.forEach(function(nome, indice/*, array - esse é o 3º param q é passado pelo foreach*/){
    console.log(`${indice+1}) ${nome}`)
    //console.log(array)
})

//arrow function
aprovados.forEach(nome => console.log(nome))

//guardando a func numa var const e passando essa var como parametro no forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)