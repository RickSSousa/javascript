//pegar um obj e transformar em JSON
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))
//o JASON n leva configurações tipo funções, ele leva só dados no formato textual

//pegar um JSON e transformar em obj

//console.log(JSON.parse("{a:1,b:2,c:3}"))  ERRADO
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))  ERRADO
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //todo nome de atributo em JSON tem q ser entre aspas duplas
console.log(JSON.parse('{"a": 1.7,"b": "string", "c":true, "d": {}, "e": []'))