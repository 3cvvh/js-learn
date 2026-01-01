//callback adalah sebuah funct yang dikirm sebagai parameter ke function lain
//synchronous callback example:
// function hello(callback){
// let name = prompt('masukan nama');
// callback(name)
// }
// hello(name => alert(`helo ${name}`))
function CetakMhs(nama,email,jurusan,idDosenWali){
this.nama = nama;
this.email = email;
this.jurusan = jurusan;
this.idDosenWali = idDosenWali
}
// let obj = CetakMhs('aqild','dwqdwq','dwqidqw',1)
// let mhs = [
//    new CetakMhs('aqil','aqil@gmail.com','informatika',3),
//    new CetakMhs('aqil2','aqil2@gmail.com','informatika',3),
// ]
// // function getNama({nama}){
// // return 
// // }
// // const getName = (arry) => arry.map(n => n.nama );
// mhs.forEach(obj => {
//     console.log(obj.nama)
// })
// const getStat = (respone) => {
// if(respone == 200) return (respone) => console.log(JSON.parse(respone).nama);
// if(respone == 404) return () => console.log('fail');
// }
function getData(url){
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
        // xhr.status == 200 ? succes(xhr.response) : err()
        let res = xhr.status
        return () => {
            console.log(res)
            if(res == 200){
                console.log(xhr.response)
            }else if(res == 404){
                console.log('gagal')
            }
        }
    }
} 
    xhr.open('get',url);
    xhr.send();
}
// let test = getData('data/mahasiswa.json',(respone,getName) => getName(JSON.parse(respone)),() => console.log('gagal'))
let test = getData('data/mahasiswa.json')
console.log('mulai')

// let getName = (obj) => {
//     console.log(obj.forEach(element => {
//         console.log(element.nama)
//     }))
//     // if(respone == 200)
// }
console.log('selesai')