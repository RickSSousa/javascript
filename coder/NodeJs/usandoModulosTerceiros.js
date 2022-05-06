//abaixo a prática comum de importar uma biblioteca de terceiros
const _ = require('lodash')
setInterval(() => console.log(_.random(1,1000)), 2000) //vai trazer um número random d 0 a 1000 a cada 2 seg