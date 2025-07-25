let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`nosso vetor tem o total de ${num.length} elementos`)
console.log(`o primeiro valor do vetor e de ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log('valor nao encontrado')
}else{
    console.log(`o valor 4 está na posição ${pos} `)
}