function jumlah(){
    var hasil = 0;
    for(var i = 0; arguments.length > i; i++){
        hasil += arguments[i]
    }
    return hasil
}
var hasil = jumlah(10,10,10,10)
console.log(hasil)