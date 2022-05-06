let valor //n inicializada, portanto vai dar como undefined por padrão

console.log(valor) 


valor = null //significa que não tem nenhum valor e nem está apontada pra nenhum local de memória com valor (ausência de valor)

console.log(valor)

const produto = {}
console.log(produto.preco) //vai dar undefined, pq n tem nenhum preco atribuído

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //!! está convertendo o valorpara boolean
console.log(produto)

produto.preco = null //sem preco
