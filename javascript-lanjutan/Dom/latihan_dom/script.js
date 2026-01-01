function getComp()
{
    let nilai = Math.random()
    if(nilai < 0.34) return 'gajah'
    if(nilai >= 0.34 && nilai <= 0.67 ) return 'orang'
    return 'semut'
}
let getResult = (h,c) => {
if(h == c) return 'seri'
if(h == 'gajah') return c == 'semut' ? 'kalah' : 'menang' 
if(h == 'semut') return c == 'orang' ? 'kalah' : 'menang'
if(h == 'orang') return c == 'gajah' ? 'kalah' : 'menang'
} 
let spin = () => {
const imgC = document.querySelector('img, .img-komputer')
    let i = 0
    const gambar = ['batu','gunting','kertas']
    const waktuMulai = new Date().getTime()
    setInterval(() => {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval
            return
        }
        imgC.setAttribute('src','img/' + gambar[i++] + '.png')
        if(i == gambar.length) i = 0
    }, 100);
}
const gajah = document.getElementsByClassName('gajah')[0]
const orang = document.getElementsByClassName('orang')[0]
const semut = document.getElementsByClassName('semut')[0]
const scoreP = document.getElementsByClassName('score-player')[0].firstChild
const imgC = document.getElementsByTagName('img')[0]
const scoreC = document.getElementsByClassName('score-komputer')[0]
let score = parseInt(scoreP.textContent)
let scoreCe = parseInt(scoreC.textContent)
let array = document.querySelectorAll('li img')
array.forEach(Element => {
Element.addEventListener('click',()=>{
    let comp = getComp()
    let human = Element.className
    let hasil = getResult(human,comp)
    putar()
    setTimeout(()=> {
            if(hasil == 'menang'){
       score += 1
    }else if(hasil == 'kalah'){
        scoreCe += 1
    }
    imgC.setAttribute('src','img/' + comp + '.png')
    scoreP.textContent = score
    scoreC.textContent = scoreCe
    if(hasil == 'menang'){
    Swal.fire({
    title: "selamat!",
    text: "comp memilih " + comp,
    icon: "success"
    });
}else if(hasil == 'kalah'){
       Swal.fire({
    title: "haha cupu!",
    text: "comp memilih " + comp,
    icon: "error"
    }); 
}else{
    Swal.fire({
    title: "seri jir",
    text: "comp memilih " + comp,
    icon: "warning"
    }); 
}
    },1000)

})
})


// orang.addEventListener('click',()=>{
//     let comp = getComp()
//     let human = orang.className
//     let hasil = getResult(human,comp)
//     if(hasil == 'menang'){
//        score += 1
//     }else if(hasil == 'kalah'){
//         scoreCe += 1
//     }
//     imgC.setAttribute('src','img/' + comp + '.png')
//     scoreP.textContent = score
//     scoreC.textContent = scoreCe
//     if(hasil == 'menang'){
//     Swal.fire({
//     title: "selamat!",
//     text: "comp memilih " + comp,
//     icon: "success"
//     });
// }else if(hasil == 'kalah'){
//        Swal.fire({
//     title: "haha cupu!",
//     text: "comp memilih " + comp,
//     icon: "error"
//     }); 
// }else{
//     Swal.fire({
//     title: "seri jir",
//     text: "comp memilih " + comp,
//     icon: "warning"
//     }); 
// }
// })
// semut.addEventListener('click',()=>{
//     let comp = getComp()
//     let human = semut.className
//     let hasil = getResult(human,comp)
//     if(hasil == 'menang'){
//        score += 1
//     }else if(hasil == 'kalah'){
//         scoreCe += 1
//     }
//     imgC.setAttribute('src','img/' + comp + '.png')
//     scoreP.textContent = score
//     scoreC.textContent = scoreCe
//     if(hasil == 'menang'){
//     Swal.fire({
//     title: "selamat!",
//     text: "comp memilih " + comp,
//     icon: "success"
//     });
// }else if(hasil == 'kalah'){
//        Swal.fire({
//     title: "haha cupu!",
//     text: "comp memilih " + comp,
//     icon: "error"
//     }); 
// }else{
//     Swal.fire({
//     title: "seri jir",
//     text: "comp memilih " + comp,
//     icon: "warning"
//     }); 
// }
// })
