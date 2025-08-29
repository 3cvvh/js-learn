//tankap input user
var lagi = confirm('mau main?');
while(lagi){
if(lagi == true){
var p = prompt('pilih diantara(gajah,semut,orang)');
//computer
var c = Math.random();
if(c < 0.34){
    c = 'gajah'
}else if(c >= 0.34 && c <= 0.67){
    c = 'orang'
}else{
    c = 'semut'
}
//rules
var hasil = '';
if(p == c){
    hasil = 'seri';
}else if(p == 'gajah'){
    if(c == 'orang'){
       hasil = 'menang'
    }else{
        hasil =  'kalah'
    }
}else if(p == 'orang'){
    if(c == 'gajah'){
        hasil = 'kalah'
    }else{
        hasil = 'menang'
    }
}else{
  hasil = (c == 'orang') ? "kalah" : "menang";
}
alert(hasil + ' karna comp memasukan: ' + c + " \n yang kamu masukan: " + p)
}
lagi = confirm('mau main lagi?')
}
alert('terimakasih sudah bermain')
