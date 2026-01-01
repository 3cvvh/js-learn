//rest parameter adalah yang merepsentasikan argumaen dalam function menjadi tidak terbatas

// function jumlah(...values){
//     let hasil = 0
// // for(v of values){
// //     hasil += v
// // }
// // return hasil
// retur
// }
// const jumlah = (...angka) => angka.reduce((all,cur) => all += cur)

// console.log(jumlah(1,2,3,4))

// const pramuka = ['aqil','aqil2','aqil3'];
// const [ketua,wakil,...anggota] = pramuka
// console.log(ketua,wakil,anggota)

const {pm,ketua,...sisa} = {
    pm: "aqil",
    ketua:"aqil2",
    frontend1: 'aqil3',
    backend: "aqil34",
}
console.log(pm,ketua,sisa)


//latihan restparam
//versi saya
// let findType = (type, ...values) => {
// // values.filter(value => {
// //     return typeof value = type
// // })
// // let hasil = values.map(v => {
// //     if(typeof v == type){
// //         return v
// //     }
// // })
// let hasil = values.filter(v => typeof v == type)
// return hasil
// }
// let findType = (tipe,...val) => val.filter(v => typeof v == tipe )
// const [...hasil] = findType('string','nigga',1,2,'aqil')
// console.log(hasil)
//versi pa sandhika
// function findType(tipe,...val){
// return val.filter(v => typeof v === tipe)
// }
// console.log(findType('string',1,2,3,4,'5'))
