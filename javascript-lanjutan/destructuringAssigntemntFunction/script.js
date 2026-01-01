//function return assignment
//array
// let kalkulasi = (a,b) => [a*b,a/b,a+b,]

// let [perkalian,pembagian,pertambahan,pengurangan = 'gaada'] = kalkulasi(1,2)
// console.log(perkalian)
//obj
// let kalkulasi = (a,b) => ({
//     perkalian:a*b,
//     pembagian:a/b,
//     pertambahan:a+b,
//     pengurangan:a-b
// })
// const {pertambahan,pengurangan,pembagian,perkalian} = kalkulasi(1,2)
// console.log(perkalian)
//argument assignment
// function Usertamplate(username,email,password, ...nilai){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//     this.nilai = {
//         indo: nilai[0],
//         english: nilai[1],
//         mtk: nilai[2]
//     }
// }
// const user1 = new Usertamplate('aqil','aqil@gmail.com','password',100,200,300);
// let hola = ({username,nilai: {indo,english,mtk}}) => `halo ${username} dengan nilai bahasa indo:${indo}`
// console.log(hola(user1))


