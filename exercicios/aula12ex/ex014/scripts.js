function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 23
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        //bom dia
        img.src = 'manha500.png'
        document.body.style.background = '#feb482e7'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde500.png'
        document.body.style.background = '#B77A4B'
    }else {
        //boa noite
        img.src = 'noite500.png'
        document.body.style.background = '#295186' 
    }
}