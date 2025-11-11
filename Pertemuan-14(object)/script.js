var mhs = {
    nama: "aqil",//ini properti
    kelas: "12 RPL 2",//ini properti
    rapor: [90,89,87],//ini properti
    alamat: {
        kota: "bendung",
        jalan: "ciwastra",
        aqil: {
          ganteng: "iya"  
        },
    },
    rata_rata: function(){ //method
        var total = 0
        var raport = this.rapor
        for(var i = 0; i < raport.length;i++){
            total += raport[i]
        }
        return total/raport.length
    }
};
console.log(mhs['nama'])
console.log(mhs.kelas)
console.log(mhs.alamat.aqil.ganteng)
//istilah istilah dalam object
//properti