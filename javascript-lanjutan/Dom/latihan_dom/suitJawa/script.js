let getRandom = () => {
    let Rand = Math.round(Math.random() * 150) //merandom angka dan membulatkan angka tersebut
    if (Rand <= 50) return 'batu'
    if (Rand > 50 && Rand < 100) return 'gunting'
    if (Rand >= 100) return "kertas"

}
let setRules = (Player, Computer) => {
    if (Player == Computer) return "Seri"
    if (Player == "batu") return Computer == 'kertas' ? 'kalah' : 'menang'
    if (Player == 'gunting') return Computer == 'batu' ? 'kalah' : 'menang'
    if (Player == 'kertas') return Computer == 'gunting' ? 'kalah' : 'menang'
}
let spin = () => {
    let num = 0
    let img = ['gunting', 'batu', 'kertas']
    let getTimenow = new Date().getTime()
    setInterval(() => {
        if (new Date().getTime() - getTimenow > 1000) {
            clearInterval
            console.log("Test")
            return
        }
        document.getElementsByTagName('img')[0].setAttribute('src', 'img/' + img[num++] + '.png')
        if (img.length == num) num = 0
    }, 100);
}
console.log(new Date().getTime())
const getImg = document.querySelectorAll('li img')
let scoreC = document.getElementsByClassName('score')[0].firstChild
let scoreP = document.getElementsByClassName('score')[1].firstChild
let scoreplayer = parseInt(scoreP.textContent)
let scorecomputer = parseInt(scoreC.textContent)
let imgC = document.querySelector('img, .img-komputer')
console.log(scoreplayer)
getImg.forEach(Element => {
    Element.addEventListener('click', () => {
        let getP = Element.classList.value
        let getC = getRandom()
        let result = setRules(getP, getC)
        spin()
        setTimeout(() => {
            if (result == 'menang') {
                scoreplayer += 1
                scoreP.textContent = scoreplayer
            } else if (result == 'kalah') {
                scorecomputer += 1
                scoreC.textContent = scorecomputer
            }
            imgC.setAttribute('src', 'img/' + getC + '.png')
            document.getElementById('result').innerHTML = result
        }, 1000)
    })
})