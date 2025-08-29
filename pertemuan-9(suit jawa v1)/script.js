//tankap input user
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
    if(c == 'gajah'){
        hasil = 'menang'
    }else{
        hasil = 'kalah'
    }
}
alert(hasil + ' karna comp memasukan: ' + c + " \n yang kamu masukan: " + p)
console.log(c)