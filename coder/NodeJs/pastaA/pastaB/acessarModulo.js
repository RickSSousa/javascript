const moduloA = require('../../moduloA')

console.log(moduloA.ola)


//foi criado um modulo saudacao dentro da pasta modulo, ele encontra sempre o arquivo index.js na pasta do modulo
const saudacao = require('saudacao')
console.log(saudacao.Ola)

const c = require('./pastaC') //ele já  procura sozinho o arquivo index
console.log(c.ola2)
//ou seja, posso usar o msm index pra referenciar vários arquivos d 1x


//modulo core do Node, nativo
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)