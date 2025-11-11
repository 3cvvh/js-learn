function AngkotBlueprint(supir,trayek){
//properti
this.supir = supir
this.trayek = trayek
this.kas = 0
this.penumpang = []
//method
this.naik = function(nama_penumpang){
    var penumpangs = this.penumpang
    var err = false
    var index = null
penumpangs.map(function(e,i){
    if(penumpangs == nama_penumpang){
        return err = true
    }else if(e == undefined){
        return index += i
    }
})
if(err == false && index == null){
   penumpangs.push(nama_penumpang)
   }else if(err == true){
    console.log('ada penumpang yang bernama '+nama_penumpang+" diangkot")
   }else{
    penumpangs[index] = nama_penumpang
   }
}
this.turun = function(nama_penumpang){
    var turun = false
    var obj = this.penumpang
    obj.map(function(e,i){
     if(e == nama_penumpang){
        obj.pop(nama_penumpang)
     }
    })
    if(turun = true){
        this.kas += 2000
    }
}
}
var ankot1 = new AngkotBlueprint('jepri',"jelekong-ciparay")
ankot1.naik("anjay")
ankot1.turun("anjay")
ankot1.naik("aqil")
ankot1.naik("karma")
ankot1.turun("karma")
ankot1.naik("chitoge")
console.log(ankot1.penumpang)
console.log(ankot1.kas)