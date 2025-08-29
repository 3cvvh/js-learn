var makanan = prompt("masukan makanan \n cth(burger, nasi, padang, daging, narkoba)");
switch(makanan){
    case 'burger':
    case 'narkoba':
        alert('gak sehat')
        break;
    case 'daging':
    case 'nasi':
    case 'padang':
        alert('makanan sehat')
        break;
    default:
        alert('yang anda masukan angka lebih dari 2')
}