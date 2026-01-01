// // // let obj = {
// // //     name: "aqil"
// // // }
// // // function Maha(nama){
// // // this.nama = nama
// // // }
// // // let aqil = new Maha("aqil")
// // // console.log(aqil.nama)
// // // let Obj = function(nama){
// // // let mhs = {}
// // // mhs.nama = nama
// // // return mhs
// // // }
// // // let test = Obj('nama')
// // // console.log(test.nama)
// // // let Siswa = {
// // //     name: "aqil",
// // //     perkenalan: function(){
// // //         "halo nama saya"
// // //     }
// // // }
// // // function Object(nama){
// // // this.nama = nama
// // // this.hola = function(){
// // //     return "halo "+ this.nama
// // // }
// // // }
// // // let obj = new Object('aqil')

// // // console.log(obj.hola())

// // function Mahasiswa(nama,energy){
// // this.nama = nama
// // this.energy = energy
// // this.kerja = function(jam){
// //     this.energy -= jam
// // console.log(`selamat bekerja ${this.nama}`)
// // console.log(`energi saat ini:${this.energy}`)
// // }
// // this.istirahat = function(jam){
// //     this.energy += jam
// // console.log(`selamat beristirahat ${this.nama}`)
// // console.log(`energi saat ini:${this.energy}`)
// // }
// // }
// // let mahasiswa1 = new Mahasiswa("aqil",10)
// // console.log(mahasiswa1.energy)
// // mahasiswa1.kerja(5)
// // mahasiswa1.istirahat(5)
// let methodMhs = {
//     makan: function(energi){
//         this.energi += energi
//         console.log(`energi saat ini:${this.energi}`)
//     }
// }
// function Mhasiswa(nama,energi){
// let mhs = Object.create(methodMhs) //membuat object dan menghubungkan dengan parent
// mhs.nama = nama
// mhs.energi = energi
// return mhs
// }
// let mhs1 = Mhasiswa('aqil',10)
// console.log(mhs1.nama)
// mhs1.makan(2)
function Mahasiswa(nama,energi,nilai){
this.nama = nama
this.energi = energi
this.nilai = nilai
}
Mahasiswa.prototype.makan = function(makanan){
    this.energi += makanan
    console.log(`energi saat ini ${this.energi}`)
}
Mahasiswa.prototype.rata_rata = function(){
    let rata = 0
    this.nilai.forEach(element => {
        rata += element
    });
    return rata / this.nilai.length
}
let aqil = new Mahasiswa('aqil',5,[90,80,85,90])

console.log(aqil.rata_rata())
aqil.makan(13)