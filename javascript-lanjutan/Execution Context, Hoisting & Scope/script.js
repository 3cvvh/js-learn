//execution context
//ada 2 fase 1.creation dan 2.executecion
//creation phase
//akan mengidentifikasi varibel atau func yang ada di dalam global(file) dan di isi oleh nilai
//ini disebut hoisting
//contoh:
// console.log(nama,aqil())
// var nama //akan di isi undefined saat creation phase

// console.log(aqil())
// function aqil(){ //func akan masih bisa di eksekusi 
//jikalau perintah eksekusi nya di atas
//     return "hell"
// }
//lalu akan masuk ke execute phase dimana akan me jalankan program dari atas sampai bawah
function tambah(){
    let hasil = 0
    console.log([...arguments])
    let arg = [...arguments]
   arg.map(element => {
    hasil  += element
    })
    return hasil
}
console.log(tambah(1,2,3))