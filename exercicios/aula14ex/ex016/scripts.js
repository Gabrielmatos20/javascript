function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resposta')

    if (ini.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert('Preencha todos os campos!')
    } else{
        res.innerHTML = 'contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p=1
        }
        if (i < f){
        // contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} 👉`}
        }else{
            // contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} 👉`}
            }
        }
    }
    res.innerHTML += '🏁'




