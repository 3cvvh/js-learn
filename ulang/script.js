alert('selamat datang, mau main tebak nama?')
var x = confirm('ingin main?');
if(x == true){
    while(x == true){
       var name = prompt('masukan nama anda')
       alert('nama anda adalah '+name)
       x = confirm('lanjut main')
    }
}
alert('terimakasih')