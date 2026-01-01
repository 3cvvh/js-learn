// let halo = function(nama){
// return `halo ${nama}`
// }

//arrow function bertujuan agar code lebih ringkas dan rapi
// let halo = nama => `halo ${nama}` //sangat ringkas dan hanya menampung 1 argument. 
//arrow func bisa menambahkan return secara otomatis jika { } dihilangkan
// let halo = (nama) => { //bisa menampung lebih dari 1 arguments
//      `halo ${nama}`
// }
// console.log(halo("aqil"))
// let mhs = ['aqil','anjay','satela']
// let nilai = mhs.map(nama => [nama.length])
// console.table(nilai)
// let mhs = ['herta','satela','venom']
// let objM = mhs.map(siswa => ({nama: siswa, panjang: siswa.length}))
// console.table(objM)

//konsep this pada arrwo func

//constructor func
document.getElementsByClassName('box')[0].addEventListener('click',Element => {
    let satu = 'size'
    let dua = 'caption'
    console.log(Element.target.cla)
    if(Element.target.classList.contains(satu)){
        [satu, dua] = [dua, satu]
    }
    Element.target.classList.toggle(satu)
    setTimeout(function(){
        Element.target.classList.toggle(dua)
    },500)
})