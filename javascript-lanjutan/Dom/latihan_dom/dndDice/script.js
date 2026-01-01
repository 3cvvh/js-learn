function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
const btnRole = document.getElementById('rollButton')
let getDice = (dadu)=>{
if (dadu == 1) return 4
if (dadu == 2) return 6
if (dadu == 3) return 8
if (dadu == 4) return 10
if (dadu == 5) return 12
if (dadu == 6) return 20
return null
}
let elemtnresultD = document.querySelector('p').lastChild
let elementresultRole = document.getElementById('hasilDadu')
let diceNum = document.getElementsByClassName('dicenum')[0]
console.log(elemtnresultD)


btnRole.addEventListener('click',()=>{
    let roll = getRandomArbitrary(1,6)
    let dice = getDice(roll)
    let resultDice = getRandomArbitrary(1,dice)
    elemtnresultD.textContent = dice
    elementresultRole.textContent = resultDice
    diceNum.textContent = `D${dice}`
})