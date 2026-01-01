// let close = document.querySelectorAll('.close')
// console.log(close)
// close.forEach(element => {
//     element.addEventListener('click',(elemens)=>{
//     elemens.target.parentElement.style.display = "none"
//     elemens.preventDefault()
// })
// });

let container = document.querySelectorAll('.container') 
container.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.className == 'close'){
            e.target.parentElement.style.display = 'none'
        }
        e.preventDefault()
        e.stopPropagation()
    })
});
let card = document.querySelectorAll('container, .card')
console.log(card)
card.forEach((c)=>{
c.addEventListener('click',(c)=>{
    alert("random antara no atau nama:"+c.target.nextSibling.nextSibling.text)
    c.stopPropagation()
})
})