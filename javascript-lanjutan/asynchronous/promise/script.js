// const getData = (url) => {
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if(xhr.readyState == 4){
//         xhr.status == 200 ? console.log(getNamebook(JSON.parse(xhr.response))) : console.log('fail')

//     }
// }
//         xhr.open("GET",url)
//         xhr.send()
// }
// console.log('mulai')
// let getNamebook = (respone) => respone;

// getData("https://api-alkitab.vercel.app/api/book");

// console.log("selesai")

// Mhas.prototype.getName = function(){ 
//     return this.nama
// }
// function Mhas(nama,kelas){
//     this.nama = nama;
//     this.kelas = kelas
// }

// let mhs1 = new Mhas('test',12);
// console.log(mhs1.getName())
// fetch('https://api-alkitab.vercel.app/api/book')
// .then(response => response.json())
// .then(response => console.log(response))
//promise adalah object yang mempresentasikan keberhasilan/kegagalan dari sebuah event yang asynchronous di masa yang akan datang
//sesuai nama nya promise berfungsi sebgaai janji yang akan dilakukan asynchronous di masa depan
//kondisi = fulfield =berhasil, rejected = gagal, ??
//callback = then untuk fullfield, catch untuk rejected
//contoh paling sederhana
// let data_buku = true;
// let promiseBuku = new Promise((resolve,reject) => {
//     if(data_buku == true){
//         resolve([{
//             name: "aqil",
//         }])
//     }else if(data_buku == false){
//         reject()
//     }
// })
// promiseBuku
// .then(respone => console.log(`respone ok ${respone}`) )
// .catch(respone => console.log(`gagal ${respone}`))

//contoh 2
// let stat = true
// let janji = new Promise((resolve,reject) => {
// if(stat == true){
//     setTimeout(() => {
//     resolve([{
//         name:"aqil",
//         kelas:12
//     }])
//     },2000)
// }else if(stat == false){
//     setTimeout(() => {
//     reject("gagal")
//     },2000)
// }
// })
// // console.log(janji.then(res => console.log(`berhasil ${res}`)))
// janji
// .finally(() => console.log("selesai"))
// .then(res => console.log(`data ditemukan:${res}`))
// .catch(res => console.log("data "+res + " ditemukan"))

//promise all
let film = true;
let buku = true
let promFilm = new Promise((resolve,reject) => {
    if(film == true){
        setTimeout(() => {
            resolve([
                {
                    judul:"spyXfamily",
                },
                {
                    judul:"migitodali",
                }
            ])
        },2000)
    }else{
        reject("gagal")
    }
})
let promBuku = new Promise((resolve,reject) => {
    if(buku == true){
        setTimeout(() => {
            resolve([{
                judul:"job change log",
                author:"iki bermartabak",
            }])
        }, 1000);
    }else{
        reject("gagal")
    }
}) 

Promise.all([promFilm,promBuku])
.then(res => {
    const [films,books] = res;
    console.log(films)
    console,log(books)
})
.catch(res => {
    console.log("gagal " + res)
})