var jmlh = 10;
var noAngkot = 1;
var angkot_beroprasi = 6;
while(jmlh > noAngkot){
    console.log('angkot ' + noAngkot + ' angkot beroperasi')
    noAngkot++
}
for(noAngkot = angkot_beroprasi + 1; noAngkot <= jmlh; noAngkot++){
    console.log('angkot ' + noAngkot + ' tidak beroperasi')
}