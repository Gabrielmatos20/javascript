let num = [8, 3, 5, 6, 7, 2]
/*for(let pos = 0; pos<=num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/
for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}