// let fetchd = fetch('kfcMenu.json')
// .then((res) => res.json())
// .then(res => console.log(res))
function Kuda(nama,umur,kelamin){
this.nama = nama;
this.umur = umur;
this.kelamin = kelamin;
}
let objKuda = new Kuda("goldshing",20,"idklmao")
let json = JSON.stringify(objKuda)
console.log(json)