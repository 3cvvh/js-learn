//higher order function adalah ketika func memiliki argument/parameter sebuah function atau return function
//contoh:
function ulang(u,aksi) //menjadikan aksi sebagai function
{
for(let i = 0; u >= i; i++){
aksi(i) //agar lebih fleksibel dan mudah dibaca
}
}

let aksi = (i) => {
    console.log(`halo sebanyak ${i}`)
}

ulang(9,aksi)