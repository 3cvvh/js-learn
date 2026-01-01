//tamplate literals megunakan backtik
// const nama = 'aqil'
// const umur = 11

// let perkenalan =   `cao nama saya ${nama} umur saya ${umur}` //lebih sederhana
// console.log(perkenalan)
 
//embed expresionx
// let mhs = {
//     nama: "aqil",
//     kelas: 12
// }
// const div = `<div class="mhs">
//  <h1> ${mhs.nama} kelas: ${mhs.kelas} </h1> 
//  </div>`
//  console.log(div)
//  let element = document.createElement('p').appendChild(document.createTextNode(div))
//  document.body.nextSibling.textContent = div

//html fragments
// function Mahasiswa(nama,nrp,kelas){
// this.nama = nama
// this.nrp = nrp
// this.kelas = kelas
// }
// let aqil = new Mahasiswa('aqil',1020130210,11)
// let el = `<div class="mhs">
// <h1>nama:${aqil.nama} </h1>
// <h1>kelas:${aqil.kelas}<h1>
// <h1>kelas:${aqil.nrp}<h1>
// </div>`

//looping
// function Mahasiswa(nama,nrp,kelas){
// this.nama = nama
// this.nrp = nrp
// this.kelas = kelas
// }
// let mhss = [
//     new Mahasiswa('aqil',222222,11),new Mahasiswa('bagus',21212,11),new Mahasiswa('aqil',10201,11)
// ]
// console.log(mhss)
// let el = `<div class="mhs">
// ${mhss.map(element => `<h1>nama:${element.nama} </h1>
// <h1>kelas:${element.kelas}<h1>
// <h1>kelas:${element.nrp}<h1>`).join('<hr>')}
// </div>`

//kondisi dan nested fragment html
function ulang(arry){

}
let lagu = [{
    nama: "lamp",
    creator: "ayanokouji",
    feat: "vira"
},
{
    nama: "sweat memories",
    creator: 'lilas',
},
{
    nama: "ao no waltz",
    creator: 'eve',
},
]
let cetak = arry => {
  return  `<ol>${arry.map(arr => {
       return `<ul>lagu:${arr.nama}</ul>
        <ul>pencipta:${arr.creator}</ul>
        ${arr.feat ? `<ul>feat:${arr.feat}</ul>` : ``}
        `
    } ).join(`<hr>`)}</ol>`
}
const el = `<h1>${cetak(lagu)}</h1>`
document.body.innerHTML = el