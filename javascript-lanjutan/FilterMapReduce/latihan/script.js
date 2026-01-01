//ambil semua elemen vidio
let allVid = Array.from(document.querySelectorAll('[data-duration]'))
//pilih vidio javascript dasar
console.log(allVid)
let javascriptVidio = allVid.filter(js => js.textContent.includes("JAVASCRIPT"))
.map(Element => Element.dataset.duration )
.map(Element => {
let parts = Element.split(':').map(part => parseFloat(part))
return (parts[0] * 60) + parts[1]
})
.reduce((total,detik) => total += detik)
// console.log(javascriptVidio)
// document.getElementsByClassName('jumlah-video')[0].appendChild(document.createTextNode(javascriptVidio.length))
// //amambil durasi waktu
// console.log(javascriptVidio)
// let durations = javascriptVidio.map(Element => Element.dataset.duration * 60)
// .reduce((all,curent) => all += curent)
// console.log(durations)
//ubah durasi menjadi int dan ubah menit menjadi detik//jumlahkan semua detik nya
//ubah format nya jadi jam menit detik
let konversiDetik = (totalDetik) => {
let jam = Math.floor(totalDetik / 3600); // 1 jam = 3600 detik
let sisaDetik = totalDetik % 3600;
let menit = Math.floor(sisaDetik / 60); // 1 menit = 60 detik
let detik = sisaDetik % 60;

 const waktuString = `${String(jam).padStart(2, '0')}:${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;
return waktuString;
}
let hasil = konversiDetik(javascriptVidio)
console.log(hasil)
//simpan di document object model
document.getElementsByClassName('total-durasi')[0].appendChild(document.createTextNode(hasil))
let totalVid = allVid.filter(Element => Element.textContent.includes('JAVASCRIPT'))
document.getElementsByClassName('jumlah-video')[0].appendChild(document.createTextNode(totalVid.length))