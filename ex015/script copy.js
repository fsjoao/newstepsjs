function corno() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('EROOOOU, PREENCHE ESSA BAGAÇA')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Baby 
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovi
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //Véio
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Baby 
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovi
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                //Véio
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        } else if (fsex[2].checked) {
            genero = 'uma bixooooona'
            if (idade >= 0 && idade < 10) {
                //Baby 
            } else if (idade < 21) {
                //Jovi
            } else if (idade < 50) {
                //Adulto
            } else {
                //Véio
            }
        }
    }
    res.style.textaling = 'center'
    res.innerHTML = `Detectmanos ${genero} com ${idade} anos`
    res.appendChild(img)
}