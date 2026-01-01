let angka = [-1,8,9,1,4,-5,-4,3,2,9]
// let angka2 = []
// for (let i = 0; i < angka.length; i++) {
//     if(angka[i] >=3){
//         angka2.unshift(angka[i])
//     }
// }

// console.log(angka2)
// let angka2 = angka.filter(a => a >= 3 )
// let angka2 = angka.filter(function(a){
//     return a >= 3
// })
// let angka2 = angka.map(a => a*2)

// let angka2 = angka.reduce((jumlah,angkaLop) => jumlah += angkaLop,1) //menjumlahkan angka dari array: output = 26
let angka2 = angka.filter(num => num >= 5).map(num => num*2).reduce((hasil,current) => hasil += current)
console.log(angka2)