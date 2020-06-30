let banners = ["img/destaque-home.png", "img/destaque-home-2.png"]
let bannerAtual = 0

function trocarBanner(){
    bannerAtual = (bannerAtual + 1) % 2
    document.querySelector('.banner-destaque img').src = banners[bannerAtual]
}

// setInterval(trocarBanner, 4000)

let timer = setInterval(trocarBanner, 4000)

var controle = document.querySelector('.pause')

controle.onclick = function(){
    if (controle.className == 'pause'){
        clearInterval(timer)
        controle.className = 'play'
    } else {
        timer = setInterval(trocarBanner, 4000)
        controle.className = 'pause'
    }
    return false
}