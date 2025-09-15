var main = confirm('mau main?')
while(main){
var p = prompt('masukan diantara \n gajah, semut, orang ');
var c = Math.random();
var hasil = '';
if(c < 0.34 ){
    c = 'gajah';
}else if(c >= 0.34 && c <= 0.67){
c = 'semut'
}else{
    c = 'orang'
}
//rules
if(p == c){
  hasil = 'seri'
}else if(p == 'gajah'){
   hasil = (c == 'orang') ? 'menang' : 'kalah'
}else if(p == 'orang'){
    hasil = (c == 'gajah') ? 'kalah' : 'menang';
}else{
    hasil = (c == 'orang') ? 'kalah' : 'menang';
}
alert('hasil nya: ' + hasil + ' karna \n comp memilih: ' + c + ' \n dan kamu memilih: ' + p)
main = confirm('mau main lagi');
}
alert('terimakasih sudah bermain')