let num = [8,5,2,9,3]

for(var i = 0; i< num.length; i++){
    console.log(`A posição ${i} possui o valor: ${num[i]}`)
}

console.log('--------------------------------------------------')
for(let i in num){//para cada posição na variável comum... mostra
    console.log(`A posição ${i} possui o valor: ${num[i]}`)
}

console.log('--------------------------------------------------')
let verif = num.indexOf(7) //ele vai verificar se tem o valor 7 e me mostrar a posição onde ele está
// se ão tiver, ele devolve o valor -1, significa que ele pesquisou mas não encontrou nenhum
if(verif == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 7 está na posição ${verif}`)
}
