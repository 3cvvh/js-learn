//cara membuat object
//1.cara literal
var mhs = {
    nama: "udin",
    nrp: Math.random(),
};
//2.function declaration
var buatObject = function(nama,nrp){
    var mhs = {}
    mhs.nama = nama
    mhs.nrp = nrp
    return mhs
}
var mhs2 = buatObject('aqil',2010200)
//3.constructor funcnewtion $data
function Mahasiswa(nama,nrp){
    //var this = [];
this.nama = nama
this.nrp = nrp
//return this
}
var mhs4 = new Mahasiswa("aqil",'1201020')
function Gundam(model,pilot,ukuran,senjata,){
this.model = model
this.pilot = pilot
this.ukuran = ukuran
this.senjata = senjata
}
var hari;
hari = "senin"
var reiAsuka = new Gundam("cruel angel","rei asuka",210,"idk")
//4.object.create()