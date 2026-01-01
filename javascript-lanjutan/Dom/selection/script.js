// DOM SELECTION
//GETELEMENBYID -> mengembalika elemen judul
const judul =  document.getElementById('judul')
console.log(judul);
judul.style.color = 'blue'
judul.style.backgroundColor = "red"
judul.innerHTML = "aqil"
//documnte.getELmenetbytagname -> tolong carikan saya element element 
// const p = document.getElementsByTagName('p')
// for(let i = 0; i <= p.length; i++){
//     p[i].style.backgroundColor = "blue";
// }
const p1 = document.getElementsByClassName("aqil")
p1[0].innerHTML = 'red'
//Domselection 2