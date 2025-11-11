function tambahPenumpang(nama,variabel){
    var gaada = true
    var index = null
   variabel.map(function(e,i){
    if(e == nama){
        return gaada = false
    } 
    if(e == undefined){
    return index = i+index
    }
   }) 
   if(gaada == true && index == null){
   variabel.push(nama)
   }else if(gaada == false){
    console.log('ada penumpang yang bernama '+nama+" diangkot")
   }else{
    variabel[index] = nama
   }
}
function keluarAngkot(variabel,nama){
var index = 0
var ada = true
if(variabel.length == 0){
    console.log("tidak ada penumpang")
    ada = false
}
variabel.map(function(e,i){
if(e == nama){
    return index = i+index
}else{
    console.log("penumpang yang bernama:"+nama+ " tidak ada")
    return ada = false
}
})
if(ada == true){
variabel[index] = undefined
}else{
    return variabel
}
}
var angkot1 = []
var angkot2 = []
tambahPenumpang('aqil',angkot1)
keluarAngkot(angkot1,"asep")
console.log(angkot2)
console.log(angkot1)

