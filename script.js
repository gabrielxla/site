/** Ano automatico
 *  @author Gabriel Lima
 */
 
let ano = document.getElementById('copyrightYear')

let anoAtual = new Date() . getFullYear()

ano.innerHTML = anoAtual

const main = document.querySelector('main')
const backgrounds = ['url(img/banner.jpg)','url(img/carrossell01.jpg)','url(img/carrossell2.jpg)']

let indice = 0
function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    
    main.style.backgroundImage = backgrounds[indice]
    main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)


