var angkot1 = []
var tambahPenumpang = function(angkot,penumpang){
    //mengecek apakah ada penumpang atau tidak
    var ada = false
    var index = null
    if(angkot.length == 0){
        angkot.push(penumpang) //jika ada akan dimasukan ke paling awal
        return angkot
    }
  
    if(ada == true){
        return "penumpang dengan nama:"+ penumpang + " sudah ada"
    }else if(index != null){
        angkot[index] == penumpang
        return angkot
    }else{
        angkot.push(penumpang)
        return angkot
        
    }
}
console.log(tambahPenumpang("aqil",angkot1))
console.log(angkot1)