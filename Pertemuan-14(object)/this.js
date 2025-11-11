// function helo(){
// console.log(this)
// }
// Helo()
//jika megunakan cara obj declaretion this akan merujuk pada global, jadi this == window
function Heloa(){
    Heloa.example = console.log(this)
}
var he = new Heloa()
he.example
//hanya mengembalikan property di object bersangkutan
//pembuatan object literal juga gini