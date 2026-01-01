// const h1 = document.createElement('li')
// function changeColor(){
//     document.body.style.backgroundColor = "red"
// }
// h1.appendChild(document.createTextNode('ubah warna'))
// const section = document.getElementById('b')
// const ul = section.querySelector('ul')
// ul.append(h1)
// h1.onclick = changeColor
// h1.addEventListener('dblclick',function(){
// document.body.style = 'white'
// })

// item3.addEventListener('click',function(){
// const newElements = document.createElement('li')
// newElements.appendChild(document.createTextNode('item ke11'))
// section.appendChild(newElements)
// })
const tambahBtn =  document.getElementById('tambah')
const kurangBtn = document.getElementById('kurang')
const createelement = document.createElement('h1')
createelement.appendChild(document.createTextNode(parseInt(1)))
document.body.appendChild(createelement)
console.log(createelement.firstChild.data)
tambahBtn.addEventListener('click',() => {
createelement.firstChild.data = Number(createelement.firstChild.data) + 1
})
kurangBtn.addEventListener('click',() => {
    createelement.firstChild.data = parseInt(createelement.firstChild.data) - 1
})