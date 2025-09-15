function jumlahduakubus(x,y){
return x * x * x + y * y * y
}
var konfirm = true
while(konfirm){
    nilai1 = parseInt(prompt("masukan nilai ke 1"))
    niali2 = parseInt(prompt("masukan nilai ke 2"))
alert(jumlahduakubus(nilai1,niali2))
konfirm = confirm("ingin lagi?")
}
if(!konfirm){
    alert("terimakasih")
}
