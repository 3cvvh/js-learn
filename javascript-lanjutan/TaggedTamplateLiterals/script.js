
//tagged tamplates literals
const nama = 'aqil'
const umur = 18
function cetak(string,...values){
    // for(let i = 0; i < string.length; i++){
    //     rangkai += `${string[i]}${values[i] || ``}`
    // };
    // let rangkai = string.map((e,i) => `${e}${values[i] || ``}` )
    // return `${rangkai[0]}${rangkai[1]}`
    // let rangkai = ``
    // string.forEach((e,i) => {
    //     rangkai += `${e}${values[i] || ``}`
    // });
    return string.reduce((all,current,index) => `${all}${current}${values[index] || ``}`,``)
}
let str = cetak `halo nama saya ${nama} saya berumur ${umur}`
console.log(str)