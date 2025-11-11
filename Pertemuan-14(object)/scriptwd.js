// function anjay(nama,alamat){
// $new = {};
// $new.nama = nama;
// $new.alamat = alamat
// return $new
// }
// $object = anjay("aqil","jelekong");
// console.log($object.nama)

// function blueprint(nama,alamat){
// this.nama = nama
// this.alamat = alamat
// }
// $obj = new blueprint("aqil","alamat")
// console.log($obj)

// $obj = {
//     nama : "aqil",
//     alamat : "jelekong",
// }
// console.log($obj.nama)
// $perkenalan = {
//     //properti
//     nama: "Muhammad aqil fatahilah",
//     kelas: "12 RPL 2",
//     alamat: "jelekong",
//     //method
//     kenalan: function(){
//         console.log("halo nama saya "+this.nama+ " saya kelas "+ this.kelas+ " alamat saya di "+ this.alamat)
//     },
//     anjay: {
//         kenalan2: function(){
//             console.log("baleg moal")
//         }
//     } 
// }
//  perkenalan.anjay.kenalan2()
function contoh(nama,alamat){
this.nama = nama
this.alamat = alamat

//mthod
this.perkenalan = function(){
    return this.nama
}
}
var obj = new contoh("aqil","jelekong")
console.log(obj.perkenalan())
