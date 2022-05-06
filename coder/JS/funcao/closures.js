// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro // a chamada dessa func retornará 'Local1
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // retornará 'Local'

// quando vc exec uma func, ela tem memória do local das suas origens, o escopo externo à func, por isso esse comportamento acontece