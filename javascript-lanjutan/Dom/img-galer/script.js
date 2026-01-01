// let thumbs = document.querySelectorAll('.thumbnail')
// thumbs.forEach((e)=>{
// e.addEventListener('click',(ele)=>{
// if(ele.target.className == "thumb2"){
//     ele.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.src = ele.target.src
// }
// })
// })
let container = document.querySelector('.container')
container.addEventListener('click',Element=>{
console.log(Element.target)
if(Element.target.className == "thumb2"){
container.firstElementChild.firstElementChild.src = Element.target.src
Element.target.classList.add('fade')
setTimeout(()=>{
Element.target.classList.remove('fade')
},500)
Element.classList.add('active')
}
})