// function nama(name){
//     function tampil(){
//         console.log(name) //jadi closure adalah ketika membuat inner function(function didalam function) dan mengambil varibel dari parent func nya
//     }
//     tampil()
// }
// nama('aqil')

//count study case
// const count = (function(){ //tambahkan () untuk menjalankan function tanpa membuat jadi variabel lagi
//      let i = 0
//      return function(){
//         return i += 1
//      }
// }())

// console.log(count())

let section = document.querySelector('section')
let count = function(operator){
if(operator == 'tambah'){
    return function(angka){
        return angka += 1
    }
}else if(operator == "kurang"){
    return function(angka){
        return angka -= 1
    }
}
}
let tambahAngka = section.firstElementChild.firstElementChild
let angka =  parseInt(tambahAngka.textContent)
section.addEventListener('click',(element)=>{
    let operasi = count(element.target.id)
    if(element.target.id == 'tambah'){
         angka += 1
    // console.log(operasi(angka))
    }else if(element.target.id == "kurang"){
         angka -= 1
    // console.log(operasi(angka))
    }
    tambahAngka.textContent = angka

})