var jmlh = 10;
var noAngkot = 1;
var angkot_beroprasi = 6;
for(noAngkot; noAngkot <= jmlh; noAngkot++){
    if(noAngkot <= angkot_beroprasi && noAngkot !== 5){
        console.log('angkot ' + noAngkot + ' beroperasi')
    }else if(noAngkot == 8 || noAngkot == 10 || noAngkot == 5)
    {
    console.log('angkot ' + noAngkot + ' lembur')
    }else{
        console.log('angkot ' + noAngkot + ' sedang tidak beroperasi')
    }
}